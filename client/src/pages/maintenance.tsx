import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatedCard, FloatingIcon, NeonGlow } from '@/components/ui/floating-elements';
import { maintenanceData } from '@/lib/troubleshooting-data';
import { 
  Calendar,
  CalendarDays,
  CalendarCheck,
  Clock,
  AlertTriangle,
  CheckCircle,
  Power,
  Settings,
  Wrench,
  AlertCircle,
  Wind,
  Camera,
  Cpu,
  RotateCcw,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface MaintenanceSchedule {
  id: number;
  title: string;
  description: string;
  frequency: string;
  priority: string;
  steps: string[];
  estimatedDuration: number;
  createdAt: string;
}

export default function Maintenance() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [selectedFrequency, setSelectedFrequency] = useState('all');

  const { data: maintenanceSchedules, isLoading } = useQuery<MaintenanceSchedule[]>({
    queryKey: ['/api/maintenance', selectedFrequency !== 'all' ? selectedFrequency : ''],
  });

  // Use local data as fallback
  const displayData = maintenanceSchedules || maintenanceData;

  const frequencyIcons = {
    daily: <Calendar className="h-5 w-5" />,
    weekly: <CalendarDays className="h-5 w-5" />,
    monthly: <CalendarCheck className="h-5 w-5" />,
    quarterly: <CalendarCheck className="h-5 w-5" />
  };

  const priorityColors = {
    low: 'bg-blue-600',
    medium: 'bg-yellow-600',
    high: 'bg-orange-600',
    critical: 'bg-red-600'
  };

  const procedureIcons = {
    'Daily Air Supply Check': <Wind className="h-6 w-6" />,
    'Camera Lens Cleaning': <Camera className="h-6 w-6" />,
    'Nozzle Inspection': <Settings className="h-6 w-6" />,
    'Frame Cleaning': <RotateCcw className="h-6 w-6" />,
    'Power Management': <Power className="h-6 w-6" />,
    'Belt Replacement': <Wrench className="h-6 w-6" />,
    'Bulk Biscuit Handling Adjustment': <Cpu className="h-6 w-6" />
  };

  const filteredData = selectedFrequency === 'all' 
    ? displayData 
    : displayData.filter(item => item.frequency === selectedFrequency);

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon 
        icon={<Wrench className="h-10 w-10 text-neon-pink/20" />} 
        className="top-20 left-10" 
        delay={0} 
      />
      <FloatingIcon 
        icon={<Settings className="h-8 w-8 text-neon-cyan/20" />} 
        className="top-40 right-20" 
        delay={2} 
      />
      <FloatingIcon 
        icon={<Cpu className="h-8 w-8 text-purple-400/20" />} 
        className="bottom-40 left-20" 
        delay={4} 
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <AnimatedCard className="text-center mb-16">
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">Maintenance Guide</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Step-by-step procedures for optimal system performance and longevity
          </motion.p>
        </AnimatedCard>

        {/* Frequency Tabs */}
        <AnimatedCard delay={0.4} className="mb-8">
          <Tabs value={selectedFrequency} onValueChange={setSelectedFrequency}>
            <TabsList className="grid w-full grid-cols-5 bg-dark-card border border-dark-border">
              <TabsTrigger value="all" className="data-[state=active]:bg-neon-pink data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="daily" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Daily
              </TabsTrigger>
              <TabsTrigger value="weekly" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Weekly
              </TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="quarterly" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Quarterly
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </AnimatedCard>

        {/* Maintenance Procedures Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredData.map((procedure, index) => (
              <motion.div
                key={procedure.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-effect rounded-2xl border-dark-border hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden group">
                  {/* Card Header */}
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleCard(procedure.title)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 ${priorityColors[procedure.priority as keyof typeof priorityColors]} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <div className="text-white">
                              {procedureIcons[procedure.title as keyof typeof procedureIcons] || <Settings className="h-6 w-6" />}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-white group-hover:text-neon-cyan transition-colors">
                              {procedure.title}
                            </h3>
                            <Badge 
                              variant="outline" 
                              className={`text-xs border-current ${
                                procedure.priority === 'critical' ? 'text-red-400' :
                                procedure.priority === 'high' ? 'text-orange-400' :
                                procedure.priority === 'medium' ? 'text-yellow-400' :
                                'text-blue-400'
                              }`}
                            >
                              {procedure.priority.toUpperCase()}
                            </Badge>
                          </div>
                          
                          <p className="text-gray-400 text-sm mb-3">{procedure.description}</p>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-neon-cyan">
                              {frequencyIcons[procedure.frequency as keyof typeof frequencyIcons]}
                              <span className="capitalize">{procedure.frequency}</span>
                            </div>
                            
                            <div className="flex items-center space-x-1 text-gray-400">
                              <Clock className="h-4 w-4" />
                              <span>{procedure.estimatedDuration} min</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expand Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="ml-2 p-2"
                      >
                        <motion.div
                          animate={{ rotate: expandedCard === procedure.title ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="h-5 w-5" />
                        </motion.div>
                      </Button>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {expandedCard === procedure.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-dark-border">
                          <div className="pt-6">
                            <h4 className="font-semibold text-neon-pink mb-4 flex items-center">
                              <CheckCircle className="h-5 w-5 mr-2" />
                              Step-by-Step Procedure
                            </h4>
                            
                            <div className="space-y-3">
                              {procedure.steps.map((step, stepIndex) => (
                                <motion.div
                                  key={stepIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: stepIndex * 0.1 }}
                                  className="flex items-start space-x-3 p-3 bg-dark-card/50 rounded-lg border border-dark-border/50"
                                >
                                  <div className="flex-shrink-0 w-6 h-6 bg-neon-pink rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {stepIndex + 1}
                                  </div>
                                  <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
                                </motion.div>
                              ))}
                            </div>

                            {/* Safety Warning for Critical Procedures */}
                            {procedure.priority === 'critical' && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="mt-4 p-4 bg-red-900/20 border border-red-600/30 rounded-lg"
                              >
                                <div className="flex items-start space-x-3">
                                  <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h5 className="font-medium text-red-400 mb-1">Critical Procedure</h5>
                                    <p className="text-red-300 text-sm">
                                      This procedure is critical for system operation. Follow all steps carefully and contact support if you encounter any issues.
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}

                            {/* Important Notes for Power Management */}
                            {procedure.title === 'Power Management' && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="mt-4 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg"
                              >
                                <div className="flex items-start space-x-3">
                                  <AlertCircle className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h5 className="font-medium text-orange-400 mb-1">Important Note</h5>
                                    <p className="text-orange-300 text-sm">
                                      Proper shutdown procedures help ensure smooth operation and protect the system for long-term usage. Always follow the recommended sequence.
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Emergency Contact */}
        <AnimatedCard delay={0.8} className="mt-16">
          <Card className="glass-effect rounded-2xl p-8 border-dark-border text-center">
            <NeonGlow>
              <h3 className="text-2xl font-semibold gradient-text mb-4">Need Help?</h3>
            </NeonGlow>
            <p className="text-gray-300 mb-6">
              If you encounter any issues during maintenance procedures, our support team is available 24/7
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => window.open('tel:+919916039396', '_self')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                Emergency Support: +91 99160 39396
              </Button>
              <Button
                onClick={() => window.open('tel:+919676375455', '_self')}
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg px-6 py-3"
              >
                Technical Support: +91 96763 75455
              </Button>
            </div>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
}
