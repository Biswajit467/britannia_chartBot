//NOTE: THIS CODE SECTION IS FOR RUNNING THE BOT USING ONLINE API

// import axios from "axios";
// import { findBestMatch } from "./predefined-responses";

// const mistralApiKey = "sqGJriDDssRdi6SErCriuxByKLWWbks6";

// export interface ChatMessage {
//   role: "system" | "user" | "assistant";
//   content: string;
// }

// export interface TroubleshootingResponse {
//   issueType: string | null;
//   response: string;
//   needsEscalation: boolean;
//   confidence: number;
// }

// export async function analyzeTechnicalIssue(
//   message: string,
//   language: string = "en-US"
// ): Promise<TroubleshootingResponse> {
//   const prompt = `You are TECHASOFT's AI Support Assistant for the ML-based ejection system. You have access to specific troubleshooting procedures for camera connectivity, PLC disconnection, and runtime errors The following user is asking a technical support question. Analyze it and determine the issue type and respond helpfully.\n\nUser: ${message} and don't explain them what they are asking just give them the answer and be respectful.`;

//   const predefinedMatch = findBestMatch(message);

//   if (predefinedMatch) {
//     console.log("hii there this replay is from predefinedMatch: ");
//     return {
//       issueType: predefinedMatch.issueType || null,
//       response: predefinedMatch.response,
//       needsEscalation: false,
//       confidence: predefinedMatch.confidence,
//     };
//   } else {
//     try {
//       console.log("hii there this replay is from using ai model: ");

//       const response = await axios.post(
//         "https://api.mistral.ai/v1/chat/completions",
//         {
//           model: "mistral-small",
//           messages: [
//             { role: "system", content: "You are a helpful AI assistant." },
//             { role: "user", content: prompt },
//           ],
//           max_tokens: 200,
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${mistralApiKey}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const aiReply = response.data.choices[0].message.content;

//       return {
//         issueType: extractIssueType(aiReply), // or null
//         response: aiReply,
//         needsEscalation: false,
//         confidence: 0.9,
//       };
//     } catch (error) {
//       console.error(
//         "Mistral API error:",
//         error.response?.data || error.message
//       );
//       throw error;
//     }
//   }
// }

// // Optional: extract issue type from reply
// function extractIssueType(reply: string): string | null {
//   if (reply.toLowerCase().includes("camera")) return "camera";
//   if (reply.toLowerCase().includes("plc")) return "plc";
//   if (reply.toLowerCase().includes("sensor")) return "sensor";
//   return null;
// }

// export async function generateWelcomeMessage(
//   language: string = "en-US"
// ): Promise<string> {
//   const welcomeMessages = {
//     "en-US":
//       "Welcome to TECHASOFT Support! I'm here to help you with camera connectivity, PLC disconnection, runtime errors, and system maintenance. How can I assist you today?",
//     "te-IN":
//       "టెకాసాఫ్ట్ సపోర్ట్‌కు స్వాగతం! కెమెరా కనెక్టివిటీ, PLC డిస్‌కనెక్షన్, రన్‌టైమ్ ఎర్రర్స్ మరియు సిస్టమ్ మెయింటెనెన్స్‌తో మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. ఈ రోజు నేను మీకు ఎలా సహాయం చేయగలను?",
//     "ta-IN":
//       "டெகாசாஃப்ட் ஆதரவுக்கு வரவேற்கிறோம்! கேமரா இணைப்பு, PLC துண்டிப்பு, இயக்க நேர பிழைகள் மற்றும் கணினி பராமரிப்பு ஆகியவற்றில் உங்களுக்கு உதவ நான் இங்கே இருக்கிறேன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
//     "hi-IN":
//       "टेकासॉफ्ट सपोर्ट में आपका स्वागत है! मैं कैमरा कनेक्टिविटी, PLC डिस्कनेक्शन, रनटाइम एरर्स और सिस्टम मेंटेनेंस में आपकी मदद के लिए यहाँ हूँ। आज मैं आपकी कैसे सहायता कर सकता हूँ?",
//     "kn-IN":
//       "ಟೆಕಾಸಾಫ್ಟ್ ಬೆಂಬಲಕ್ಕೆ ಸ್ವಾಗತ! ಕ್ಯಾಮೆರಾ ಸಂಪರ್ಕ, PLC ಸಂಪರ್ಕ ಕಡಿತ, ರನ್‌ಟೈಮ್ ದೋಷಗಳು ಮತ್ತು ಸಿಸ್ಟಮ್ ನಿರ್ವಹಣೆಯಲ್ಲಿ ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾನು ಇಲ್ಲಿದ್ದೇನೆ. ಇಂದು ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
//   };

//   return (
//     welcomeMessages[language as keyof typeof welcomeMessages] ||
//     welcomeMessages["en-US"]
//   );
// }

//NOTE: THIS CODE SECTION IS FOR RUNNING THE BOT OFFLINE AFTER INSTALLING MISTRAL THROUGH OLLAMA

import axios from "axios";
import { findBestMatch } from "./predefined-responses";

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

export async function analyzeTechnicalIssue(
  message: string,
  language: string = "en-US"
): Promise<TroubleshootingResponse> {
  const systemPrompt = `You are TECHASOFT's AI Support Assistant for the ML-based ejection system. You have access to specific troubleshooting procedures for camera connectivity, PLC disconnection, and runtime errors The following user is asking a technical support question. Analyze it and determine the issue type and respond helpfully.\n\nUser: ${message} and don't explain them what they are asking just give them the answer and be respectful.`;

  const predefinedMatch = findBestMatch(message);

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

      const response = await axios.post("http://localhost:11434/api/chat", {
        model: "mistral",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        stream: false,
      });

      //   const aiReply = response.data.choices[0].message.content;
      const aiReply = response.data.message.content;

      return {
        issueType: extractIssueType(aiReply), // or null
        response: aiReply,
        needsEscalation: false,
        confidence: 0.9,
      };
    } catch (error) {
      console.error(
        "Mistral API error:",
        error.response?.data || error.message
      );
      throw error;
    }
  }
}

// Optional: extract issue type from reply
function extractIssueType(reply: string): string | null {
  if (reply.toLowerCase().includes("camera")) return "camera";
  if (reply.toLowerCase().includes("plc")) return "plc";
  if (reply.toLowerCase().includes("sensor")) return "sensor";
  return null;
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
