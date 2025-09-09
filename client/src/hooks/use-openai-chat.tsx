import { useState, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ChatMessage {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  issueType?: string;
}

interface ChatResponse {
  issueType: string | null;
  response: string;
  needsEscalation: boolean;
  confidence: number;
}

interface UseOpenaiChatReturn {
  messages: ChatMessage[];
  sendMessage: (message: string, language?: string) => void;
  isLoading: boolean;
  error: string | null;
  clearMessages: () => void;
  addWelcomeMessage: (language?: string) => void;
}

export function useOpenaiChat(): UseOpenaiChatReturn {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasInitialized, setHasInitialized] = useState(false);

  const chatMutation = useMutation({
    mutationFn: async ({
      message,
      language,
    }: {
      message: string;
      language?: string;
    }) => {
      try {
        const response = await apiRequest("POST", "/api/chat", {
          message,
          language,
        });
        return response.json() as Promise<ChatResponse>;
      } catch (error) {
        console.error("Chat API error:", error);
        throw error;
      }
    },
    onSuccess: (data, variables) => {
      console.log(
        "hii from use-openai-chat.tsx it runs successfully and this is the data object,  ",
        data
      );
      // Add AI response
      const aiMessage: ChatMessage = {
        id: Date.now().toString() + "_ai",
        content: data.response,
        isUser: false,
        timestamp: new Date(),
        issueType: data.issueType || undefined,
      };

      setMessages((prev) => [...prev, aiMessage]);
    },
    onError: (error) => {
      console.error("Chat mutation error:", error);
      // Add error message
      const errorMessage: ChatMessage = {
        id: Date.now().toString() + "_error",
        content:
          "I apologize for the technical difficulty. Please try again or contact Developer Support at +1 991 603 9396 for immediate assistance.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    },
  });

  const loadWelcomeMessage = async (language: string = "en-US") => {
    if (hasInitialized) return;

    try {
      setHasInitialized(true);
      const response = await apiRequest(
        "GET",
        `/api/chat/welcome?language=${language}`
      );
      const data = (await response.json()) as { message: string };

      const welcomeMessage: ChatMessage = {
        id: "welcome_" + Date.now(),
        content: data.message,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages([welcomeMessage]);
    } catch (error) {
      console.error("Welcome API error:", error);
      const fallbackMessage: ChatMessage = {
        id: "welcome_fallback",
        content: "Welcome to TECHASOFT Support! How can I help you today?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([fallbackMessage]);
    }
  };

  const sendMessage = useCallback(
    (message: string, language: string = "en-US") => {
      // Add user message immediately
      const userMessage: ChatMessage = {
        id: Date.now().toString() + "_user",
        content: message,
        isUser: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);

      // Send to API
      chatMutation.mutate({ message, language });
    },
    []
  );

  const addWelcomeMessage = useCallback((language: string = "en-US") => {
    loadWelcomeMessage(language);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    sendMessage,
    isLoading: chatMutation.isPending,
    error: chatMutation.error?.message || null,
    clearMessages,
    addWelcomeMessage,
  };
}
