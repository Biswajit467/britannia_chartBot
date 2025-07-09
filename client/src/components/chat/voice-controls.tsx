import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mic, MicOff, Volume2, VolumeX, Phone } from 'lucide-react';
import { useSpeech } from '@/hooks/use-speech';

interface VoiceControlsProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  onVoiceInput: (transcript: string) => void;
  onCallSupport: () => void;
}

const languages = [
  { code: 'en-US', name: 'English', native: 'English' },
  { code: 'te-IN', name: 'Telugu', native: 'తెలుగు' },
  { code: 'ta-IN', name: 'Tamil', native: 'தமிழ்' },
  { code: 'hi-IN', name: 'Hindi', native: 'हिंदी' },
  { code: 'kn-IN', name: 'Kannada', native: 'ಕನ್ನಡ' },
];

export function VoiceControls({ 
  selectedLanguage, 
  onLanguageChange, 
  onVoiceInput,
  onCallSupport 
}: VoiceControlsProps) {
  const { 
    isListening, 
    transcript, 
    startListening, 
    stopListening, 
    isSupported,
    isSpeaking 
  } = useSpeech();

  React.useEffect(() => {
    if (transcript) {
      onVoiceInput(transcript);
    }
  }, [transcript, onVoiceInput]);

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening(selectedLanguage);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-dark-card/50 rounded-lg border border-dark-border">
      {/* Language Selector */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">Language:</span>
        <Select value={selectedLanguage} onValueChange={onLanguageChange}>
          <SelectTrigger className="w-40 bg-dark-card border-dark-border text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-dark-card border-dark-border">
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code} className="text-white hover:bg-gray-700">
                {lang.native}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Voice Input Button */}
      {isSupported && (
        <motion.div
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleVoiceToggle}
            variant={isListening ? "destructive" : "outline"}
            className={`flex items-center space-x-2 ${
              isListening 
                ? 'bg-red-600 hover:bg-red-700 text-white border-red-600' 
                : 'bg-dark-card border-dark-border text-white hover:border-neon-pink hover:text-neon-pink'
            }`}
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            <span>{isListening ? 'Stop Recording' : 'Voice Input'}</span>
            {isListening && (
              <motion.div
                className="w-2 h-2 bg-red-300 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
          </Button>
        </motion.div>
      )}

      {/* Speaking Indicator */}
      {isSpeaking && (
        <motion.div 
          className="flex items-center space-x-2 text-neon-cyan"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Volume2 className="h-4 w-4" />
          <span className="text-sm">Speaking...</span>
        </motion.div>
      )}

      {/* Call Support Button */}
      <Button
        onClick={onCallSupport}
        className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white"
      >
        <Phone className="h-4 w-4" />
        <span>Call Support</span>
      </Button>

      {/* Voice Support Status */}
      {!isSupported && (
        <div className="text-sm text-yellow-400 flex items-center space-x-2">
          <VolumeX className="h-4 w-4" />
          <span>Voice input not supported in this browser</span>
        </div>
      )}
    </div>
  );
}
