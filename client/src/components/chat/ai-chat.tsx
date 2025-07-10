import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { VoiceControls } from "./voice-controls";
import { useOpenaiChat } from "@/hooks/use-openai-chat";
import { useSpeech } from "@/hooks/use-speech";
import { teamMembersData } from "@/lib/troubleshooting-data";
import { Send, Bot, User, Phone, MessageSquare, Loader2 } from "lucide-react";

export function AiChat() {
  const [inputMessage, setInputMessage] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, isLoading, addWelcomeMessage } =
    useOpenaiChat();
  const { speak } = useSpeech();

  // Initialize with welcome message only once
  useEffect(() => {
    if (messages.length === 0) {
      addWelcomeMessage(selectedLanguage);
    }
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Speak AI responses
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && !lastMessage.isUser) {
      // Extract text from HTML content for speech
      const textContent = lastMessage.content
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ");
      speak(textContent, selectedLanguage);
    }
  }, [messages, speak, selectedLanguage]);

  const handleSendMessage = () => {
    if (inputMessage.trim() && !isLoading) {
      sendMessage(inputMessage.trim(), selectedLanguage);
      setInputMessage("");
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceInput = (transcript: string) => {
    setInputMessage(transcript);
    setTimeout(() => {
      handleSendMessage();
    }, 500);
  };

  const handleCallMember = (phone: string) => {
    window.open(`tel:${phone}`, "_self");
    setIsCallDialogOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chat Header */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold gradient-text mb-4">
          AI Support Assistant
        </h2>
        <p className="text-xl text-gray-300">
          Get instant help with camera connectivity, PLC issues, and system
          troubleshooting
        </p>
      </motion.div>

      {/* Voice Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <VoiceControls
          selectedLanguage={selectedLanguage}
          onLanguageChange={setSelectedLanguage}
          onVoiceInput={handleVoiceInput}
          onCallSupport={() => setIsCallDialogOpen(true)}
        />
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="glass-effect border-dark-border overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-neon-pink to-neon-cyan p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  TECHASOFT AI Assistant
                </h3>
                <p className="text-white/80">
                  Ready to help with your ML Ejection System
                </p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="h-96 p-6" ref={scrollRef}>
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start space-x-3 ${
                      message.isUser ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isUser
                          ? "bg-neon-pink"
                          : "bg-gradient-to-r from-neon-pink to-neon-cyan"
                      }`}
                    >
                      {message.isUser ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>

                    {/* Message Content */}
                    <div
                      className={`max-w-md lg:max-w-lg ${
                        message.isUser ? "ml-auto" : ""
                      }`}
                    >
                      <div
                        className={`rounded-lg p-4 ${
                          message.isUser
                            ? "bg-neon-pink/20 border border-neon-pink/30"
                            : "bg-dark-card border border-dark-border"
                        }`}
                      >
                        <div
                          className="text-white"
                          dangerouslySetInnerHTML={{ __html: message.content }}
                        />
                      </div>

                      {/* Issue Type Badge */}
                      {message.issueType && (
                        <div className="mt-2">
                          <Badge
                            variant="outline"
                            className="text-xs border-neon-cyan text-neon-cyan"
                          >
                            {message.issueType.toUpperCase()} Issue
                          </Badge>
                        </div>
                      )}

                      {/* Timestamp */}
                      <div className="mt-1 text-xs text-gray-500">
                        {message.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-dark-card rounded-lg p-4 border border-dark-border">
                    <div className="flex items-center space-x-2 text-white">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Analyzing your issue...</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-6 border-t border-dark-border">
            <div className="flex space-x-4">
              <Input
                ref={inputRef}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your issue (e.g., 'camera not working', 'PLC disconnected')..."
                className="flex-1 bg-dark-card border-dark-border text-white focus:border-neon-pink"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="px-6 bg-gradient-to-r from-neon-pink to-neon-cyan hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-400 flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-green-400" />
                <span>Secure AI Support</span>
              </div>
              <div className="text-xs text-gray-500">
                Press Enter to send • Shift+Enter for new line
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Call Support Dialog */}
      <Dialog open={isCallDialogOpen} onOpenChange={setIsCallDialogOpen}>
        <DialogContent className="bg-dark-bg border-dark-border text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="gradient-text">
              Call Support Team
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {teamMembersData.map((member) => (
              <Card
                key={member.phone}
                className="p-4 bg-dark-card border-dark-border hover:border-neon-pink/50 transition-colors cursor-pointer"
                onClick={() => handleCallMember(member.phone)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-white">{member.name}</div>
                    <div className="text-sm text-neon-cyan">{member.role}</div>
                    <div className="text-xs text-gray-400">{member.phone}</div>
                    <div className="text-xs text-gray-500">
                      {member.description}
                    </div>
                  </div>
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
