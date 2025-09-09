// import cohere from "cohere-ai";
import { findBestMatch } from "./predefined-responses";

// cohere.init(process.env.COHERE_API_KEY || "default_key");

import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY || "default_key",
});

export interface TroubleshootingResponse {
  issueType: string | null;
  response: string;
  needsEscalation: boolean;
  confidence: number;
}

const SYSTEM_CONTEXT = `
You are TECHASOFT's AI Support Assistant for the ML-based ejection system. Use only the exact procedures below for camera connectivity, PLC disconnection, and runtime errors.
(Do not create new solutions.)
Return JSON with issueType (camera/plc/runtime/null), response (plain text), needsEscalation (boolean), confidence (0-1).
`;

export async function analyzeTechnicalIssue(
  userMessage: string,
  language: string = "en-US"
): Promise<TroubleshootingResponse> {
  const predefinedMatch = findBestMatch(userMessage);

  if (predefinedMatch) {
    return {
      issueType: predefinedMatch.issueType || null,
      response: predefinedMatch.response,
      needsEscalation: false,
      confidence: predefinedMatch.confidence,
    };
  }

  try {
    const prompt = `
SYSTEM: ${SYSTEM_CONTEXT}

User message: "${userMessage}". Language: ${language}.
`;

    const response = await cohere.chat({
      message: prompt,
      model: "command-r",
      temperature: 0.1,
      chatHistory: [],
    });

    // const content = response.text;
    // const parsed = JSON.parse(content);

    const cleaned = output.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return {
      issueType: parsed.issueType || null,
      response: parsed.response || "Please describe your issue more clearly.",
      needsEscalation: parsed.needsEscalation ?? false,
      confidence: Math.max(0, Math.min(1, parsed.confidence || 0.5)),
    };
  } catch (error) {
    console.error("Cohere API error:", error);

    const message = userMessage.toLowerCase();
    let fallbackResponse =
      "We are currently unable to process your request via AI.";
    let issueType = null;

    if (message.includes("camera")) {
      issueType = "camera";
      fallbackResponse =
        "Please check the Ethernet switch, re-plug cables, and restart the Client Application. Contact Developer Support if the issue persists.";
    } else if (message.includes("plc")) {
      issueType = "plc";
      fallbackResponse =
        "Ensure control panel is ON, verify Ethernet, and restart the application. Contact support if not resolved.";
    } else if (message.includes("runtime")) {
      issueType = "runtime";
      fallbackResponse =
        "Restart the Client Application and the PC. If issue persists, contact support.";
    }

    return {
      issueType,
      response: fallbackResponse,
      needsEscalation: true,
      confidence: 0.3,
    };
  }
}

export async function generateWelcomeMessage(
  language: string = "en-US"
): Promise<string> {
  const welcomeMessages = {
    "en-US":
      "Welcome to TECHASOFT Support! I'm here to help with connectivity or error issues. How can I assist you?",
    // Add more language mappings as needed
  };
  return (
    welcomeMessages[language as keyof typeof welcomeMessages] ||
    welcomeMessages["en-US"]
  );
}
