import OpenAI from "openai";
import { findBestMatch } from "./predefined-responses";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY ||
    process.env.OPENAI_API_KEY_ENV_VAR ||
    "default_key",
});

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface TroubleshootingResponse {
  issueType: string | null;
  response: string;
  needsEscalation: boolean;
  confidence: number;
}

const SYSTEM_PROMPT = `You are TECHASOFT's AI Support Assistant for the ML-based ejection system. You have access to specific troubleshooting procedures for camera connectivity, PLC disconnection, and runtime errors.

IMPORTANT: You must only provide the exact troubleshooting steps from your knowledge base. Do not improvise or create new solutions.

Available issue types and their exact solutions:

CAMERA CONNECTIVITY ISSUES:
1. Go to the specific line (location) in the variant area where the camera setup is installed.
2. Check the TECASOFT control panel and open it.
3. Inside the control panel, locate the Ethernet switch.
4. Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, this may signal a disconnection or fault.
5. If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them firmly.
6. Cross-check each Ethernet connection to ensure every wire is properly and securely connected.
7. Go to the AC room where the system is located.
8. Open the Client Application on the system.
9. Click the Refresh button inside the application.
10. Click the Stop button, wait for a moment, and then click the Start button again to restart the camera services.
11. If the issue still persists after restarting, please contact Developer Support for further assistance.

PLC DISCONNECTION ISSUES:
1. Go to the specific line (location) in the variant area where the PLC setup is installed.
2. Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.
3. Inside the control panel, locate the Ethernet switch.
4. Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, it may signal a disconnection or fault.
5. If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them securely.
6. Cross-check all Ethernet connections to ensure every wire is properly and securely connected.
7. Go to the AC room where the main system is located. Cross-check whether the router's Ethernet wires are connected properly.
8. Open the Client Application on the system.
9. Click the Refresh button in the application.
10. Click the Stop and OK button, wait for a moment, then click the Start and OK button to reinitialize the PLC connection.
11. If the issue still persists after these steps, please contact Developer Support for further assistance.

RUNTIME/TCP SOCKET ERROR ISSUES:
1. Go to the specific line (location) in the variant area where the PLC setup is installed.
2. Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.
3. Go to the AC room where the main system is located.
4. Open the Client Application on the system.
5. Click the Refresh button in the application.
6. Click the Stop and OK button, wait for a moment, then click the Start and OK button to restart the application.
7. If the error still appears, restart the PC and then run the Client Application again.
8. If the issue still persists after all the above steps, please contact Developer Support for further assistance.

If an issue cannot be resolved with these steps, escalate to Developer Support at +1 991 603 9396.

Respond in JSON format with: issueType (camera/plc/runtime/null), response (HTML formatted), needsEscalation (boolean), confidence (0-1).`;

export async function analyzeTechnicalIssue(
  userMessage: string,
  language: string = "en-US"
): Promise<TroubleshootingResponse> {
  // First check predefined responses
  const predefinedMatch = findBestMatch(userMessage);

  if (predefinedMatch) {
    console.log("hii there this replay is from predefinedMatch: ");
    return {
      issueType: predefinedMatch.issueType || null,
      response: predefinedMatch.response,
      needsEscalation: false,
      confidence: predefinedMatch.confidence,
    };
  } else {
    try {
      console.log("hii there this replay is from using ai model: ");

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `User message: "${userMessage}". Language preference: ${language}. Please identify the issue type and provide the exact troubleshooting steps.`,
          },
        ],
        response_format: { type: "json_object" },
        temperature: 0.1, // Low temperature for consistent responses
      });

      const result = JSON.parse(response.choices[0].message.content || "{}");

      return {
        issueType: result.issueType || null,
        response:
          result.response ||
          "I understand you're having an issue. Please describe if it's related to camera connectivity, PLC disconnection, or runtime errors so I can provide the appropriate troubleshooting steps.",
        needsEscalation: result.needsEscalation || false,
        confidence: Math.max(0, Math.min(1, result.confidence || 0.5)),
      };
    } catch (error) {
      console.error("OpenAI API error:", error);

      // Provide more specific fallback based on keywords in user message
      const message = userMessage.toLowerCase();
      let fallbackResponse =
        "I'm currently experiencing technical difficulties with AI processing.";
      let issueType = null;

      if (message.includes("camera") || message.includes("connection")) {
        issueType = "camera";
        fallbackResponse =
          "For camera connection issues:\n\n1. Check TECASOFT control panel\n2. Verify Ethernet switch lights are blinking\n3. Re-plug cables if needed\n4. Restart Client Application\n\nIf problem persists, contact Developer Support at +1 991 603 9396";
      } else if (message.includes("plc") || message.includes("disconnected")) {
        issueType = "plc";
        fallbackResponse =
          "For PLC connection issues:\n\n1. Ensure control panel is ON\n2. Check Ethernet connections\n3. Restart Client Application (Stop → Start)\n4. Restart PC if needed\n\nIf problem persists, contact Developer Support at +1 991 603 9396";
      } else if (message.includes("error") || message.includes("runtime")) {
        issueType = "runtime";
        fallbackResponse =
          "For runtime errors:\n\n1. Restart Client Application\n2. Restart PC if error persists\n3. Check all connections\n\nIf problem continues, contact Developer Support at +1 991 603 9396";
      } else {
        fallbackResponse =
          "I can help with:\n• Machine startup/shutdown\n• Camera connectivity issues\n• PLC disconnection problems\n• Runtime error troubleshooting\n• Maintenance procedures\n\nPlease specify your issue or contact Developer Support at +1 991 603 9396";
      }

      return {
        issueType,
        response: fallbackResponse,
        needsEscalation: true,
        confidence: 0.3,
      };
    }
  }
}

export async function generateWelcomeMessage(
  language: string = "en-US"
): Promise<string> {
  const welcomeMessages = {
    "en-US":
      "Welcome to TECHASOFT Support! I'm here to help you with camera connectivity, PLC disconnection, runtime errors, and system maintenance. How can I assist you today?",
    "te-IN":
      "టెకాసాఫ్ట్ సపోర్ట్‌కు స్వాగతం! కెమెరా కనెక్టివిటీ, PLC డిస్‌కనెక్షన్, రన్‌టైమ్ ఎర్రర్స్ మరియు సిస్టమ్ మెయింటెనెన్స్‌తో మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
    "ta-IN":
      "டெகாசாஃப்ட் ஆதரவுக்கு வரவேற்கிறோம்! கேமரா இணைப்பு, PLC துண்டிப்பு, இயக்க நேர பிழைகள் மற்றும் கணினி பராமரிப்பு ஆகியவற்றில் உங்களுக்கு உதவ நான் இங்கே இருக்கிறேன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    "hi-IN":
      "टेकासॉफ्ट सपोर्ट में आपका स्वागत है! मैं कैमरा कनेक्टिविटी, PLC डिस्कनेक्शन, रनटाइम एरर्स और सिस्टम मेंटेनेंस में आपकी मदद के लिए यहाँ हूँ। आज मैं आपकी कैसे सहायता कर सकता हूँ?",
    "kn-IN":
      "ಟೆಕಾಸಾಫ್ಟ್ ಬೆಂಬಲಕ್ಕೆ ಸ್ವಾಗತ! ಕ್ಯಾಮೆರಾ ಸಂಪರ್ಕ, PLC ಸಂಪರ್ಕ ಕಡಿತ, ರನ್‌ಟೈಮ್ ದೋಷಗಳು ಮತ್ತು ಸಿಸ್ಟಮ್ ನಿರ್ವಹಣೆಯಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
  };

  return (
    welcomeMessages[language as keyof typeof welcomeMessages] ||
    welcomeMessages["en-US"]
  );
}
