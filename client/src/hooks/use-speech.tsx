import { useState, useCallback, useRef, useEffect } from 'react';

interface UseSpeechReturn {
  isListening: boolean;
  transcript: string;
  error: string | null;
  startListening: (language?: string) => void;
  stopListening: () => void;
  speak: (text: string, language?: string) => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

const languageCodes = {
  'en-US': 'en-US',
  'te-IN': 'te-IN',
  'ta-IN': 'ta-IN',
  'hi-IN': 'hi-IN',
  'kn-IN': 'kn-IN'
};

export function useSpeech(): UseSpeechReturn {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);

  const isSupported = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;

  useEffect(() => {
    if (isSupported) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscript(transcript);
      };
      
      recognitionRef.current.onerror = (event) => {
        setError(`Speech recognition error: ${event.error}`);
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    if ('speechSynthesis' in window) {
      synthesisRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
      }
    };
  }, [isSupported]);

  const startListening = useCallback((language: string = 'en-US') => {
    if (!recognitionRef.current || isListening) return;
    
    setError(null);
    setTranscript('');
    recognitionRef.current.lang = languageCodes[language as keyof typeof languageCodes] || 'en-US';
    
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch (err) {
      setError('Failed to start speech recognition');
    }
  }, [isListening]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, [isListening]);

  const speak = useCallback((text: string, language: string = 'en-US') => {
    if (!synthesisRef.current) return;
    
    // Cancel any ongoing speech
    synthesisRef.current.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCodes[language as keyof typeof languageCodes] || 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthesisRef.current.speak(utterance);
  }, []);

  return {
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    speak,
    isSpeaking,
    isSupported
  };
}
