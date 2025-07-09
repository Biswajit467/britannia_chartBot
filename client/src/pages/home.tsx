import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AiChat } from '@/components/chat/ai-chat';
import { AnimatedCard, FloatingIcon, NeonGlow } from '@/components/ui/floating-elements';
import { Activity, Cpu, Clock, Headphones, TrendingUp, Zap, Camera, Cog } from 'lucide-react';

interface SystemStatus {
  detectionAccuracy: number;
  systemStatus: string;
  responseTime: string;
  support: string;
  lineEfficiency: number;
  lastUpdated: string;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: systemStatus, isLoading } = useQuery<SystemStatus>({
    queryKey: ['/api/status'],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon 
        icon={<Camera className="h-8 w-8 text-neon-pink/20" />} 
        className="top-20 left-10" 
        delay={0} 
      />
      <FloatingIcon 
        icon={<Cpu className="h-10 w-10 text-neon-cyan/20" />} 
        className="top-40 right-20" 
        delay={2} 
      />
      <FloatingIcon 
        icon={<Cog className="h-6 w-6 text-purple-400/20" />} 
        className="bottom-40 left-20" 
        delay={4} 
      />
      <FloatingIcon 
        icon={<Zap className="h-8 w-8 text-yellow-400/20" />} 
        className="bottom-20 right-10" 
        delay={6} 
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Hero Content */}
          <AnimatedCard className="space-y-8">
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">ML Based</span><br />
              <span className="text-white">Ejection System</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Leveraging advanced machine learning models to identify and segregate defective biscuits with 99% detection accuracy in real-time production environments.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('support-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Support Chat
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300"
              >
                View Documentation
              </Button>
            </motion.div>
          </AnimatedCard>

          {/* System Status Dashboard */}
          <AnimatedCard 
            className="glass-effect rounded-2xl p-8 space-y-6"
            delay={0.5}
          >
            <NeonGlow>
              <h3 className="text-2xl font-semibold gradient-text mb-6">System Status</h3>
            </NeonGlow>
            
            {isLoading ? (
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-center animate-pulse">
                    <div className="h-8 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-green-400 flex items-center justify-center space-x-2">
                    <TrendingUp className="h-6 w-6" />
                    <span>{systemStatus?.detectionAccuracy || 99.2}%</span>
                  </div>
                  <div className="text-sm text-gray-400">Detection Accuracy</div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-neon-cyan flex items-center justify-center space-x-2">
                    <Activity className="h-6 w-6" />
                    <span>{systemStatus?.systemStatus || 'Online'}</span>
                  </div>
                  <div className="text-sm text-gray-400">System Status</div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-yellow-400 flex items-center justify-center space-x-2">
                    <Clock className="h-6 w-6" />
                    <span>{systemStatus?.responseTime || '1.2ms'}</span>
                  </div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl font-bold text-neon-pink flex items-center justify-center space-x-2">
                    <Headphones className="h-6 w-6" />
                    <span>{systemStatus?.support || '24/7'}</span>
                  </div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </motion.div>
              </div>
            )}
            
            <div className="mt-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Production Line Efficiency</span>
                <span>{systemStatus?.lineEfficiency || 94}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div 
                  className="h-3 rounded-full bg-gradient-to-r from-neon-pink to-neon-cyan"
                  initial={{ width: 0 }}
                  animate={{ width: `${systemStatus?.lineEfficiency || 94}%` }}
                  transition={{ duration: 1.5, delay: 1 }}
                />
              </div>
            </div>

            {systemStatus?.lastUpdated && (
              <div className="text-xs text-gray-500 text-center">
                Last updated: {new Date(systemStatus.lastUpdated).toLocaleTimeString()}
              </div>
            )}
          </AnimatedCard>
        </div>

        {/* Key Features Section */}
        <AnimatedCard delay={0.8} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Key Features</h2>
            <p className="text-xl text-gray-300">Advanced capabilities that set our system apart</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "99% Accuracy",
                description: "Exceptional detection precision for bourbon and pure magic scenarios",
                color: "text-green-400"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Real-time Processing",
                description: "Instant defect detection and automated air ejection system",
                color: "text-yellow-400"
              },
              {
                icon: <Cog className="h-8 w-8" />,
                title: "User-friendly Interface",
                description: "Single desktop application for complete machine operations",
                color: "text-neon-cyan"
              },
              {
                icon: <Headphones className="h-8 w-8" />,
                title: "24/7 Support",
                description: "Comprehensive technical support and maintenance guidance",
                color: "text-neon-pink"
              }
            ].map((feature, index) => (
              <AnimatedCard key={feature.title} delay={0.8 + index * 0.1}>
                <Card className="glass-effect rounded-2xl p-6 h-full border-dark-border hover:border-neon-pink/50 transition-all duration-300 group">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedCard>

        {/* AI Support Chat Section */}
        <section id="support-section">
          <AiChat />
        </section>
      </div>
    </div>
  );
}
