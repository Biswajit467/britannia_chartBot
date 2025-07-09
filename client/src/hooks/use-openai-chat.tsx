import { useState, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

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

  const chatMutation = useMutation({
    mutationFn: async ({ message, language }: { message: string; language?: string }) => {
      const response = await apiRequest('POST', '/api/chat', { message, language });
      return response.json() as Promise<ChatResponse>;
    },
    onSuccess: (data, variables) => {
      // Add AI response
      const aiMessage: ChatMessage = {
        id: Date.now().toString() + '_ai',
        content: data.response,
        isUser: false,
        timestamp: new Date(),
        issueType: data.issueType || undefined
      };
      
      setMessages(prev => [...prev, aiMessage]);
    },
    onError: (error) => {
      // Add error message
      const errorMessage: ChatMessage = {
        id: Date.now().toString() + '_error',
        content: 'I apologize for the technical difficulty. Please try again or contact Developer Support at +1 991 603 9396 for immediate assistance.',
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const welcomeMutation = useMutation({
    mutationFn: async (language: string = 'en-US') => {
      const response = await apiRequest('GET', `/api/chat/welcome?language=${language}`);
      return response.json() as Promise<{ message: string }>;
    },
    onSuccess: (data) => {
      const welcomeMessage: ChatMessage = {
        id: 'welcome_' + Date.now(),
        content: data.message,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages([welcomeMessage]);
    }
  });

  const sendMessage = useCallback((message: string, language: string = 'en-US') => {
    // Add user message immediately
    const userMessage: ChatMessage = {
      id: Date.now().toString() + '_user',
      content: message,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Send to API
    chatMutation.mutate({ message, language });
  }, [chatMutation]);

  const addWelcomeMessage = useCallback((language: string = 'en-US') => {
    welcomeMutation.mutate(language);
  }, [welcomeMutation]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    sendMessage,
    isLoading: chatMutation.isPending || welcomeMutation.isPending,
    error: chatMutation.error?.message || welcomeMutation.error?.message || null,
    clearMessages,
    addWelcomeMessage
  };
}
