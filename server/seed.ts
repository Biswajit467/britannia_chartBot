// import { db } from "./db";
// import { troubleshootingIssues, maintenanceSchedules, teamMembers } from "@shared/schema";
// import { eq } from "drizzle-orm";

// const troubleshootingData = [
//   {
//     type: 'camera',
//     title: 'Camera Connection Issue',
//     description: 'Steps to resolve camera connectivity problems in the ML ejection system',
//     steps: [
//       'Go to the specific line (location) in the variant area where the camera setup is installed.',
//       'Check the TECASOFT control panel and open it.',
//       'Inside the control panel, locate the Ethernet switch.',
//       'Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, this may signal a disconnection or fault.',
//       'If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them firmly.',
//       'Cross-check each Ethernet connection to ensure every wire is properly and securely connected.',
//       'Go to the AC room where the system is located.',
//       'Open the Client Application on the system.',
//       'Click the Refresh button inside the application.',
//       'Click the Stop button, wait for a moment, and then click the Start button again to restart the camera services.',
//       'If the issue still persists after restarting, please contact Developer Support for further assistance.'
//     ],
//     keywords: ['camera', 'connectivity', 'connection', 'not working', 'ethernet', 'switch']
//   },
//   {
//     type: 'plc',
//     title: 'PLC Disconnection Issue',
//     description: 'Steps to resolve PLC connectivity and disconnection problems',
//     steps: [
//       'Go to the specific line (location) in the variant area where the PLC setup is installed.',
//       'Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.',
//       'Inside the control panel, locate the Ethernet switch.',
//       'Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, it may signal a disconnection or fault.',
//       'If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them securely.',
//       'Cross-check all Ethernet connections to ensure every wire is properly and securely connected.',
//       'Go to the AC room where the main system is located. Cross-check whether the router\'s Ethernet wires are connected properly.',
//       'Open the Client Application on the system.',
//       'Click the Refresh button in the application.',
//       'Click the Stop and OK button, wait for a moment, then click the Start and OK button to reinitialize the PLC connection.',
//       'If the issue still persists after these steps, please contact Developer Support for further assistance.'
//     ],
//     keywords: ['plc', 'disconnected', 'disconnect', 'connection', 'control panel']
//   },
//   {
//     type: 'runtime',
//     title: 'Runtime Error / TCP Socket Issue',
//     description: 'Steps to resolve runtime errors and TCP socket connection problems',
//     steps: [
//       'Go to the specific line (location) in the variant area where the PLC setup is installed.',
//       'Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.',
//       'Go to the AC room where the main system is located.',
//       'Open the Client Application on the system.',
//       'Click the Refresh button in the application.',
//       'Click the Stop and OK button, wait for a moment, then click the Start and OK button to restart the application.',
//       'If the error still appears, restart the PC and then run the Client Application again.',
//       'If the issue still persists after all the above steps, please contact Developer Support for further assistance.'
//     ],
//     keywords: ['runtime', 'error', 'tcp', 'socket', 'iso', 'send tcp']
//   }
// ];

// const maintenanceData = [
//   {
//     title: 'Daily Air Supply Check',
//     frequency: 'daily',
//     priority: 'high',
//     description: 'Verify proper air connections and supply to rejection system',
//     estimatedDuration: 5,
//     steps: [
//       'Check if the air connections are supplying proper air to the rejection system',
//       'Verify air pressure levels are within specified range',
//       'Inspect air lines for any visible damage or leaks',
//       'Document any abnormalities in the maintenance log'
//     ]
//   },
//   {
//     title: 'Camera Lens Cleaning',
//     frequency: 'daily',
//     priority: 'medium',
//     description: 'Clean camera lens during line breaks for optimal vision',
//     estimatedDuration: 10,
//     steps: [
//       'Wait for a line break or production pause',
//       'Power down the camera system safely',
//       'Use appropriate lens cleaning solution and microfiber cloth',
//       'Clean lens gently in circular motions',
//       'Inspect for scratches or damage',
//       'Power up and test camera functionality'
//     ]
//   },
//   {
//     title: 'Nozzle Inspection',
//     frequency: 'monthly',
//     priority: 'medium',
//     description: 'Check for loose nozzles every month/quarter',
//     estimatedDuration: 30,
//     steps: [
//       'Inspect all rejection nozzles for looseness',
//       'Tighten any loose connections using appropriate tools',
//       'Check nozzle alignment and positioning',
//       'Test air flow through each nozzle',
//       'Replace any damaged or worn nozzles',
//       'Document inspection results'
//     ]
//   },
//   {
//     title: 'Frame Cleaning',
//     frequency: 'monthly',
//     priority: 'medium',
//     description: 'Clean dust/oil from frame using air spray',
//     estimatedDuration: 45,
//     steps: [
//       'Power down the system for safety',
//       'Use compressed air spray across the entire frame',
//       'Clean dust and oil accumulation from all surfaces',
//       'Inspect frame structure for any damage',
//       'Ensure all components are securely mounted',
//       'Power up and verify system operation'
//     ]
//   },
//   {
//     title: 'Power Management',
//     frequency: 'daily',
//     priority: 'high',
//     description: 'Proper shutdown procedures for extended downtime',
//     estimatedDuration: 15,
//     steps: [
//       'When production stops for extended periods, turn off control panel power connection',
//       'Turn off PC power supply as well',
//       'Ensure proper shutdown sequence is followed',
//       'Document shutdown time and reason',
//       'This helps in smooth operation and protects the system for long-term usage'
//     ]
//   },
//   {
//     title: 'Belt Replacement',
//     frequency: 'quarterly',
//     priority: 'high',
//     description: 'Rejection belt maintenance procedure',
//     estimatedDuration: 120,
//     steps: [
//       'Remove MS frame clamps using Allen key',
//       'Carefully remove old rejection belt',
//       'Inspect belt area for wear or damage',
//       'Install new belt ensuring proper alignment',
//       'Replace frame back in the same marked position as before to maintain alignment',
//       'Test system operation with new belt',
//       'Create proper rejection gap as per training requirements'
//     ]
//   }
// ];

// const teamData = [
//   {
//     name: 'Aizaz Ahmad',
//     role: 'Manager',
//     phone: '+91 99160 39396',
//     email: 'aizaz@techasoft.com',
//     languages: ['English', 'Hindi'],
//     specialties: ['System oversight', 'Escalation support'],
//     isActive: true
//   },
//   {
//     name: 'Anil Kumar',
//     role: 'Team Lead',
//     phone: '+91 96763 75455',
//     email: 'anil@techasoft.com',
//     languages: ['English', 'Hindi', 'Telugu'],
//     specialties: ['Technical support', 'Multi-language support'],
//     isActive: true
//   },
//   {
//     name: 'Siva Sankar',
//     role: 'AI ML Specialist',
//     phone: '+91 63051 28148',
//     email: 'siva@techasoft.com',
//     languages: ['English', 'Telugu'],
//     specialties: ['Machine Learning', 'AI Development'],
//     isActive: true
//   },
//   {
//     name: 'Raghu Vamsi',
//     role: 'AI ML Specialist',
//     phone: '+91 79936 62188',
//     email: 'raghu@techasoft.com',
//     languages: ['English', 'Telugu'],
//     specialties: ['Machine Learning', 'Computer Vision'],
//     isActive: true
//   },
//   {
//     name: 'Palani',
//     role: 'AI ML Specialist',
//     phone: '+91 88388 41878',
//     email: 'palani@techasoft.com',
//     languages: ['English', 'Tamil'],
//     specialties: ['Machine Learning', 'Data Analysis'],
//     isActive: true
//   },
//   {
//     name: 'Suhas',
//     role: 'AI ML Specialist',
//     phone: '+91 63618 92343',
//     email: 'suhas@techasoft.com',
//     languages: ['English', 'Hindi'],
//     specialties: ['Machine Learning', 'System Integration'],
//     isActive: true
//   },
//   {
//     name: 'Biswajit',
//     role: 'AI ML Specialist',
//     phone: '+91 79788 31898',
//     email: 'biswajit@techasoft.com',
//     languages: ['English', 'Hindi'],
//     specialties: ['Machine Learning', 'Backend Development'],
//     isActive: true
//   }
// ];

// export async function seedDatabase() {
//   try {
//     console.log('🌱 Starting database seeding...');

//     // Check if data already exists
//     const existingTroubleshooting = await db.select().from(troubleshootingIssues).limit(1);
//     const existingMaintenance = await db.select().from(maintenanceSchedules).limit(1);
//     const existingTeam = await db.select().from(teamMembers).limit(1);

//     if (existingTroubleshooting.length === 0) {
//       console.log('📝 Seeding troubleshooting issues...');
//       for (const issue of troubleshootingData) {
//         await db.insert(troubleshootingIssues).values(issue);
//       }
//       console.log('✅ Troubleshooting issues seeded');
//     }

//     if (existingMaintenance.length === 0) {
//       console.log('🔧 Seeding maintenance schedules...');
//       for (const schedule of maintenanceData) {
//         await db.insert(maintenanceSchedules).values(schedule);
//       }
//       console.log('✅ Maintenance schedules seeded');
//     }

//     if (existingTeam.length === 0) {
//       console.log('👥 Seeding team members...');
//       for (const member of teamData) {
//         await db.insert(teamMembers).values(member);
//       }
//       console.log('✅ Team members seeded');
//     }

//     console.log('🎉 Database seeding completed successfully!');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     throw error;
//   }
// }

import { db } from "./db";
import {
  troubleshootingIssues,
  maintenanceSchedules,
  teamMembers,
} from "@shared/schema";

export async function seedDatabase() {
  try {
    console.log("🌱 Starting database seeding...");

    const existingTroubleshooting = await db
      .select()
      .from(troubleshootingIssues)
      .limit(1);

    const existingMaintenance = await db
      .select()
      .from(maintenanceSchedules)
      .limit(1);

    const existingTeam = await db.select().from(teamMembers).limit(1);

    if (existingTroubleshooting.length === 0) {
      console.log("📝 Seeding troubleshooting issues...");
      await db.insert(troubleshootingIssues).values([
        {
          type: "camera",
          title: "Camera Connection Issue",
          description:
            "Steps to resolve camera connectivity problems in the ML ejection system",
          steps: [
            "Go to the specific line (location) in the variant area where the camera setup is installed.",
            "Check the TECASOFT control panel and open it.",
            "Inside the control panel, locate the Ethernet switch.",
            "Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, this may signal a disconnection or fault.",
            "If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them firmly.",
            "Cross-check each Ethernet connection to ensure every wire is properly and securely connected.",
            "Go to the AC room where the system is located.",
            "Open the Client Application on the system.",
            "Click the Refresh button inside the application.",
            "Click the Stop button, wait for a moment, and then click the Start button again to restart the camera services.",
            "If the issue still persists after restarting, please contact Developer Support for further assistance.",
          ],
          keywords: [
            "camera",
            "connectivity",
            "connection",
            "not working",
            "ethernet",
            "switch",
          ],
        },
        {
          type: "plc",
          title: "PLC Disconnection Issue",
          description:
            "Steps to resolve PLC connectivity and disconnection problems",
          steps: [
            "Go to the specific line (location) in the variant area where the PLC setup is installed.",
            "Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.",
            "Inside the control panel, locate the Ethernet switch.",
            "Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, it may signal a disconnection or fault.",
            "If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them securely.",
            "Cross-check all Ethernet connections to ensure every wire is properly and securely connected.",
            "Go to the AC room where the main system is located. Cross-check whether the router's Ethernet wires are connected properly.",
            "Open the Client Application on the system.",
            "Click the Refresh button in the application.",
            "Click the Stop and OK button, wait for a moment, then click the Start and OK button to reinitialize the PLC connection.",
            "If the issue still persists after these steps, please contact Developer Support for further assistance.",
          ],
          keywords: [
            "plc",
            "disconnected",
            "disconnect",
            "connection",
            "control panel",
          ],
        },
        {
          type: "runtime",
          title: "Runtime Error / TCP Socket Issue",
          description:
            "Steps to resolve runtime errors and TCP socket connection problems",
          steps: [
            "Go to the specific line (location) in the variant area where the PLC setup is installed.",
            "Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.",
            "Go to the AC room where the main system is located.",
            "Open the Client Application on the system.",
            "Click the Refresh button in the application.",
            "Click the Stop and OK button, wait for a moment, then click the Start and OK button to restart the application.",
            "If the error still appears, restart the PC and then run the Client Application again.",
            "If the issue still persists after all the above steps, please contact Developer Support for further assistance.",
          ],
          keywords: ["runtime", "error", "tcp", "socket", "iso", "send tcp"],
        },
      ]);
      console.log("✅ Troubleshooting issues seeded");
    }

    if (existingMaintenance.length === 0) {
      console.log("🔧 Seeding maintenance schedules...");
      await db.insert(maintenanceSchedules).values([
        {
          title: "Daily Air Supply Check",
          frequency: "daily",
          priority: "high",
          description:
            "Verify proper air connections and supply to rejection system",
          estimatedDuration: 5,
          steps: [
            "Check if the air connections are supplying proper air to the rejection system",
            "Verify air pressure levels are within specified range",
            "Inspect air lines for any visible damage or leaks",
            "Document any abnormalities in the maintenance log",
          ],
        },
        {
          title: "Camera Lens Cleaning",
          frequency: "daily",
          priority: "medium",
          description:
            "Clean camera lens during line breaks for optimal vision",
          estimatedDuration: 10,
          steps: [
            "Wait for a line break or production pause",
            "Power down the camera system safely",
            "Use appropriate lens cleaning solution and microfiber cloth",
            "Clean lens gently in circular motions",
            "Inspect for scratches or damage",
            "Power up and test camera functionality",
          ],
        },
        {
          title: "Nozzle Inspection",
          frequency: "monthly",
          priority: "medium",
          description: "Check for loose nozzles every month/quarter",
          estimatedDuration: 30,
          steps: [
            "Inspect all rejection nozzles for looseness",
            "Tighten any loose connections using appropriate tools",
            "Check nozzle alignment and positioning",
            "Test air flow through each nozzle",
            "Replace any damaged or worn nozzles",
            "Document inspection results",
          ],
        },
        {
          title: "Frame Cleaning",
          frequency: "monthly",
          priority: "medium",
          description: "Clean dust/oil from frame using air spray",
          estimatedDuration: 45,
          steps: [
            "Power down the system for safety",
            "Use compressed air spray across the entire frame",
            "Clean dust and oil accumulation from all surfaces",
            "Inspect frame structure for any damage",
            "Ensure all components are securely mounted",
            "Power up and verify system operation",
          ],
        },
        {
          title: "Power Management",
          frequency: "daily",
          priority: "high",
          description: "Proper shutdown procedures for extended downtime",
          estimatedDuration: 15,
          steps: [
            "When production stops for extended periods, turn off control panel power connection",
            "Turn off PC power supply as well",
            "Ensure proper shutdown sequence is followed",
            "Document shutdown time and reason",
            "This helps in smooth operation and protects the system for long-term usage",
          ],
        },
        {
          title: "Belt Replacement",
          frequency: "quarterly",
          priority: "high",
          description: "Rejection belt maintenance procedure",
          estimatedDuration: 120,
          steps: [
            "Remove MS frame clamps using Allen key",
            "Carefully remove old rejection belt",
            "Inspect belt area for wear or damage",
            "Install new belt ensuring proper alignment",
            "Replace frame back in the same marked position as before to maintain alignment",
            "Test system operation with new belt",
            "Create proper rejection gap as per training requirements",
          ],
        },
      ]);
      console.log("✅ Maintenance schedules seeded");
    }

    if (existingTeam.length === 0) {
      console.log("👥 Seeding team members...");
      await db.insert(teamMembers).values([
        {
          name: "Aizaz Ahmad",
          role: "Manager",
          phone: "+91 99160 39396",
          email: "aizaz@techasoft.com",
          languages: ["English", "Hindi"],
          specialties: ["System oversight", "Escalation support"],
          isActive: true,
        },
        {
          name: "Anil Kumar",
          role: "Team Lead",
          phone: "+91 96763 75455",
          email: "anil@techasoft.com",
          languages: ["English", "Hindi", "Telugu"],
          specialties: ["Technical support", "Multi-language support"],
          isActive: true,
        },
        {
          name: "Siva Sankar",
          role: "AI ML Specialist",
          phone: "+91 63051 28148",
          email: "siva@techasoft.com",
          languages: ["English", "Telugu"],
          specialties: ["Machine Learning", "AI Development"],
          isActive: true,
        },
        {
          name: "Raghu Vamsi",
          role: "AI ML Specialist",
          phone: "+91 79936 62188",
          email: "raghu@techasoft.com",
          languages: ["English", "Telugu"],
          specialties: ["Machine Learning", "Computer Vision"],
          isActive: true,
        },

        {
          name: "Palani",
          role: "AI ML Specialist",
          phone: "+91 88388 41878",
          email: "palani@techasoft.com",
          languages: ["English", "Tamil"],
          specialties: ["Machine Learning", "Data Analysis"],
          isActive: true,
        },
        {
          name: "Suhas",
          role: "AI ML Specialist",
          phone: "+91 63618 92343",
          email: "suhas@techasoft.com",
          languages: ["English", "Hindi"],
          specialties: ["Machine Learning", "System Integration"],
          isActive: true,
        },
        {
          name: "Biswajit",
          role: "AI ML Specialist",
          phone: "+91 79788 31898",
          email: "biswajit@techasoft.com",
          languages: ["English", "Hindi"],
          specialties: ["Machine Learning", "Backend Development"],
          isActive: true,
        },
      ]);
      console.log("✅ Team members seeded");
    }

    console.log("🎉 Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}
