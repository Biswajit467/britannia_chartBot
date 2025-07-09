import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCard, FloatingIcon, NeonGlow } from '@/components/ui/floating-elements';
import { teamMembersData } from '@/lib/troubleshooting-data';
import { 
  Bus, 
  UserCog, 
  Brain, 
  Phone, 
  Mail, 
  Globe, 
  Award, 
  Target,
  Users,
  Lightbulb,
  Shield,
  Cpu
} from 'lucide-react';

export default function About() {
  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_self');
  };

  const companyStats = [
    { label: 'Detection Accuracy', value: '99%', icon: <Target className="h-6 w-6" /> },
    { label: 'Systems Deployed', value: '500+', icon: <Cpu className="h-6 w-6" /> },
    { label: 'Countries Served', value: '15+', icon: <Globe className="h-6 w-6" /> },
    { label: 'Years Experience', value: '10+', icon: <Award className="h-6 w-6" /> },
  ];

  const roleIcons = {
    'Manager': <Bus className="h-6 w-6" />,
    'Team Lead': <UserCog className="h-6 w-6" />,
    'AI ML Specialist': <Brain className="h-6 w-6" />
  };

  const roleColors = {
    'Manager': 'from-purple-600 to-purple-800',
    'Team Lead': 'from-blue-600 to-blue-800',
    'AI ML Specialist': 'from-green-600 to-green-800'
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcon 
        icon={<Users className="h-10 w-10 text-neon-pink/20" />} 
        className="top-20 left-10" 
        delay={0} 
      />
      <FloatingIcon 
        icon={<Lightbulb className="h-8 w-8 text-neon-cyan/20" />} 
        className="top-40 right-20" 
        delay={2} 
      />
      <FloatingIcon 
        icon={<Shield className="h-8 w-8 text-purple-400/20" />} 
        className="bottom-40 left-20" 
        delay={4} 
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <AnimatedCard className="text-center mb-16">
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">About TECHASOFT</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leading innovation in machine learning-based quality control systems for the food industry
          </motion.p>
        </AnimatedCard>

        {/* Company Stats */}
        <AnimatedCard delay={0.4} className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="glass-effect rounded-2xl p-6 text-center border-dark-border hover:border-neon-cyan/50 transition-all duration-300 group">
                  <div className="text-neon-cyan mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>

        {/* Mission & Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Company Mission */}
          <AnimatedCard delay={0.6} className="lg:col-span-2">
            <Card className="glass-effect rounded-2xl p-8 h-full border-dark-border">
              <NeonGlow>
                <h3 className="text-3xl font-semibold mb-6 gradient-text">Our Mission</h3>
              </NeonGlow>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                At TECHASOFT, we revolutionize quality control in biscuit production by utilizing advanced machine learning algorithms for precise detection and separation of defective products in real-time. Our system guarantees 99% detection accuracy while maintaining high efficiency and reliability.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-neon-pink text-lg mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {[
                      '99% Detection Accuracy',
                      'Real-time Processing',
                      'Automated Air Ejection',
                      'User-friendly Interface'
                    ].map((feature) => (
                      <li key={feature} className="text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-neon-pink rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-neon-cyan text-lg mb-3 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Reduced Manual Labor',
                      'Enhanced Product Quality',
                      'Cost-effective Solution',
                      '24/7 Operation'
                    ].map((benefit) => (
                      <li key={benefit} className="text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </AnimatedCard>

          {/* Performance Metrics */}
          <AnimatedCard delay={0.8}>
            <Card className="glass-effect rounded-2xl p-8 h-full border-dark-border">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">System Performance</h3>
              <div className="space-y-6">
                {[
                  { label: 'Bourbon Detection', value: 99, color: 'neon-pink' },
                  { label: 'Pure Magic Detection', value: 99, color: 'neon-cyan' },
                  { label: 'System Uptime', value: 99.9, color: 'green-400' },
                  { label: 'Response Time', value: 95, color: 'yellow-400' }
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-white">{metric.label}</span>
                      <span className={`text-sm text-${metric.color}`}>{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className={`h-2 rounded-full bg-${metric.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedCard>
        </div>

        {/* Support Team Section */}
        <AnimatedCard delay={1.0}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold gradient-text mb-4">Our Support Team</h3>
            <p className="text-xl text-gray-300">Expert technical support available 24/7</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembersData.map((member, index) => (
              <motion.div
                key={member.phone}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <Card className="glass-effect rounded-2xl p-6 border-dark-border hover:border-neon-pink/50 transition-all duration-300 group h-full">
                  {/* Avatar with Role Icon */}
                  <div className="text-center mb-4">
                    <div className={`w-20 h-20 bg-gradient-to-r ${roleColors[member.role as keyof typeof roleColors]} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-xl">
                        {roleIcons[member.role as keyof typeof roleIcons]}
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg text-white mb-1">{member.name}</h4>
                    <Badge 
                      variant="outline" 
                      className="text-neon-cyan border-neon-cyan/50 mb-2"
                    >
                      {member.role}
                    </Badge>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-4">
                    <p className="text-gray-400 text-sm text-center">{member.description}</p>
                    
                    {/* Languages */}
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs border-purple-400/50 text-purple-300">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleCall(member.phone)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-2"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    {member.email && (
                      <Button
                        onClick={() => handleEmail(member.email)}
                        variant="outline"
                        className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg text-sm py-2"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                    )}
                  </div>

                  {/* Phone Number Display */}
                  <div className="mt-3 text-xs text-gray-500 text-center">
                    {member.phone}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedCard>

        {/* Company Contact */}
        <AnimatedCard delay={1.5} className="mt-16">
          <Card className="glass-effect rounded-2xl p-8 border-dark-border text-center">
            <h3 className="text-2xl font-semibold gradient-text mb-4">Contact TECHASOFT</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Globe className="h-8 w-8 text-neon-cyan mx-auto mb-2" />
                <p className="text-white font-medium">Website</p>
                <a 
                  href="https://www.techasoft.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-pink transition-colors"
                >
                  www.techasoft.com
                </a>
              </div>
              <div>
                <Mail className="h-8 w-8 text-neon-pink mx-auto mb-2" />
                <p className="text-white font-medium">General Inquiries</p>
                <a 
                  href="mailto:aijaz@techasoft.com"
                  className="text-neon-pink hover:text-neon-cyan transition-colors"
                >
                  aijaz@techasoft.com
                </a>
              </div>
              <div>
                <Phone className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-medium">Support Hotline</p>
                <a 
                  href="tel:+919916039396"
                  className="text-green-400 hover:text-neon-cyan transition-colors"
                >
                  +91 99160 39396
                </a>
              </div>
            </div>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
}
