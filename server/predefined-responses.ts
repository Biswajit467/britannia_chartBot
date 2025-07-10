// // Predefined responses for common queries and greetings
// export interface PredefinedResponse {
//   keywords: string[];
//   response: string;
//   issueType?: string;
//   confidence: number;
// }

// export const greetings: PredefinedResponse[] = [
//   {
//     keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
//     response: 'Hello! Welcome to TECHASOFT Support. I\'m here to help you with your ML-based ejection system. How can I assist you today?',
//     confidence: 0.95
//   },
//   {
//     keywords: ['help', 'support', 'assistance', 'need help'],
//     response: 'I\'m here to help! I can assist you with:\n• Machine operation and startup\n• Camera and PLC connection issues\n• Product variant selection\n• Defect monitoring and troubleshooting\n• Maintenance procedures\n• System logs and reports\n\nWhat specific issue would you like help with?',
//     confidence: 0.9
//   }
// ];

// export const machineOperationResponses: PredefinedResponse[] = [
//   {
//     keywords: ['start machine', 'how to start', 'startup', 'turn on machine', 'how do i start', 'start the machine'],
//     response: '**How to start the machine:**\n\n**Step 1:** Open the desktop application\n**Step 2:** Select the product variant\n**Step 3:** Set the RPM as per the product requirement\n**Step 4:** Click the "Start" button\n\nThe system will begin operation with real-time monitoring.',
//     issueType: 'operation',
//     confidence: 0.95
//   },
//   {
//     keywords: ['stop machine', 'how to stop', 'shutdown', 'turn off', 'how do i stop'],
//     response: '**How to stop the machine:**\n\nClick the "Stop" button on the software interface. It will safely halt all operations.\n\n**For extended downtime:**\n• Turn off the control panel power connection\n• Turn off the PC power supply\n\nThis protects the system for long-term usage.',
//     issueType: 'operation',
//     confidence: 0.95
//   },
//   {
//     keywords: ['change product', 'switch variant', 'different product', 'product type', 'how can i change'],
//     response: '**How to change the product type during a shift:**\n\n**Step 1:** Click "Stop"\n**Step 2:** Select a new product variant\n**Step 3:** Set RPM\n**Step 4:** Click "Start"\n\n**Note:** Only one product variant can be selected per session to ensure accuracy.',
//     issueType: 'operation',
//     confidence: 0.9
//   },
//   {
//     keywords: ['technical knowledge', 'no training', 'user friendly', 'operate without training'],
//     response: '**Do I need technical knowledge to use the software?**\n\nNo, the interface is user-friendly and designed for non-technical users. Basic instructions are enough, and the UI is intuitive. A short demo session is recommended.\n\n**Can I operate this system with no training?**\n\nBasic training takes under 30 minutes for operations.',
//     issueType: 'operation',
//     confidence: 0.9
//   },
//   {
//     keywords: ['correct biscuit type', 'choose biscuit', 'select product'],
//     response: '**How do I choose the correct biscuit type?**\n\nSelect the correct product variant from the dropdown menu or product selection panel in the interface.\n\n**Important:** The system supports all trained variants like Bourbon and Pure Magic. Only use trained products for accurate results.',
//     issueType: 'operation',
//     confidence: 0.9
//   },
//   {
//     keywords: ['rpm', 'speed', 'conveyor speed', 'set rpm'],
//     response: 'RPM (Revolutions Per Minute) controls the conveyor speed:\n\n• Set RPM in the product selection panel before starting\n• Each product type has recommended RPM settings\n• The system saves the last used RPM per product\n• Adjust based on your production requirements\n\nProper RPM ensures accurate detection and rejection.',
//     issueType: 'operation',
//     confidence: 0.9
//   }
// ];

// export const troubleshootingResponses: PredefinedResponse[] = [
//   {
//     keywords: ['camera not connected', 'camera connection', 'camera disconnected', 'camera issue'],
//     response: '**Camera Connection Issue - Step-by-Step Solution:**\n\n**Step 1:** Go to the variant area where camera is installed\n**Step 2:** Check the TECASOFT control panel and open it\n**Step 3:** Locate the Ethernet switch inside the panel\n**Step 4:** Check the lights on Ethernet switch:\n   • All lights blinking fast = proper connectivity\n   • No blinking = disconnection/fault\n**Step 5:** If abnormal blinking, unplug and re-plug Ethernet cables firmly\n**Step 6:** Cross-check all connections are secure\n**Step 7:** Go to AC room and open Client Application\n**Step 8:** Click Refresh button\n**Step 9:** Click Stop, wait, then click Start to restart camera services\n**Step 10:** If issue persists, contact Developer Support',
//     issueType: 'camera',
//     confidence: 0.95
//   },
//   {
//     keywords: ['plc disconnected', 'plc connection', 'plc not connected', 'plc issue'],
//     response: '**PLC Connection Issue - Step-by-Step Solution:**\n\n**Step 1:** Go to the variant area where PLC is installed\n**Step 2:** Check TECASOFT control panel - ensure it\'s ON\n**Step 3:** Locate the Ethernet switch inside the panel\n**Step 4:** Check Ethernet switch lights:\n   • All lights blinking fast = proper connectivity\n   • No blinking = disconnection/fault\n**Step 5:** If abnormal blinking, unplug and re-plug cables securely\n**Step 6:** Cross-check all Ethernet connections\n**Step 7:** Go to AC room and check router Ethernet connections\n**Step 8:** Open Client Application\n**Step 9:** Click Refresh button\n**Step 10:** Click Stop and OK, wait, then Start and OK\n**Step 11:** If issue persists, contact Developer Support',
//     issueType: 'plc',
//     confidence: 0.95
//   },
//   {
//     keywords: ['runtime error', 'tcp error', 'socket error', 'iso error'],
//     response: '**RuntimeError TCP/Socket Issue - Step-by-Step Solution:**\n\n**Step 1:** Go to the variant area where PLC is installed\n**Step 2:** Check TECASOFT control panel - ensure it\'s ON\n**Step 3:** Go to AC room with the main system\n**Step 4:** Open the Client Application\n**Step 5:** Click the Refresh button\n**Step 6:** Click Stop and OK, wait, then Start and OK\n**Step 7:** If error persists, restart the PC completely\n**Step 8:** Run Client Application again after restart\n**Step 9:** If issue continues, contact Developer Support\n\n**Error Code:** ISO TCP Socket error (32)',
//     issueType: 'runtime',
//     confidence: 0.95
//   },
//   {
//     keywords: ['defect count zero', 'no defects detected', 'not detecting'],
//     response: '**Zero Defect Count Troubleshooting:**\n\n**Step 1:** Check if camera is working properly\n**Step 2:** Ensure correct product variant is selected\n**Step 3:** Restart the application\n**Step 4:** Check lighting conditions and product placement\n**Step 5:** Verify biscuits are passing through detection zone\n\n**Note:** The system only detects trained product variants accurately.',
//     issueType: 'detection',
//     confidence: 0.9
//   },
//   {
//     keywords: ['ejection delayed', 'rejection not working', 'air jet issue'],
//     response: '**Ejection/Rejection Issues:**\n\n**Immediate Steps:**\n• Stop the system\n• Check air ejector mechanism\n• Ensure air pressure is active and sufficient\n• Restart the system\n\n**If problem persists:**\n• Check timing sync between detection and air jet\n• Verify air connections are supplying proper air\n• Contact maintenance support\n\n**Daily Check:** Always verify air supply before starting production.',
//     issueType: 'ejection',
//     confidence: 0.9
//   }
// ];

// export const maintenanceResponses: PredefinedResponse[] = [
//   {
//     keywords: ['maintenance', 'daily check', 'cleaning', 'belt replacement'],
//     response: '**Maintenance Guide:**\n\n**Daily Checks:**\n• Check air supply connections\n• Clean camera lens during line breaks\n• Verify system status before production\n\n**Power Management:**\n• Turn off control panel during extended stops\n• Turn off PC power supply for long downtime\n\n**Monthly/Quarterly:**\n• Check if nozzles are becoming loose\n• Clean dust/oil from frame with air spray\n• Inspect all connections\n\n**Belt Replacement:**\n• Remove MS frame clamps with Allen key\n• Replace belt and restore frame to marked position\n\n**Bulk Biscuit Handling:**\n• Use adjustable rejection nozzle (6mm Allen key)\n• Ensure proper rejection gap for variants',
//     issueType: 'maintenance',
//     confidence: 0.9
//   }
// ];

// export const monitoringResponses: PredefinedResponse[] = [
//   {
//     keywords: ['live feed', 'camera view', 'live camera feed', 'what does the live camera show'],
//     response: '**What does the live camera feed show?**\n\nIt shows the production line and biscuits in real time for visual inspection. Defects are highlighted, and counts are displayed on the side panel.',
//     issueType: 'monitoring',
//     confidence: 0.95
//   },
//   {
//     keywords: ['defect count', 'how often updated', 'defect count updated'],
//     response: '**How often is the defect count updated?**\n\nIt updates live as biscuits pass through the detection zone in real-time.',
//     issueType: 'monitoring',
//     confidence: 0.95
//   },
//   {
//     keywords: ['defect count too high', 'high defect count', 'too many defects'],
//     response: '**What if the defect count looks too high?**\n\n**Step 1:** Pause the system\n**Step 2:** Inspect product input quality\n**Step 3:** Check if the correct product variant is selected\n**Step 4:** Contact technical support if needed',
//     issueType: 'monitoring',
//     confidence: 0.95
//   },
//   {
//     keywords: ['current production status', 'monitor production', 'production status'],
//     response: '**Can I monitor the current production status?**\n\nYes, the live monitoring screen shows real-time operations and defect counts. The product name and variant are displayed at the top of the interface once selected.',
//     issueType: 'monitoring',
//     confidence: 0.9
//   },
//   {
//     keywords: ['view logs', 'access logs', 'logs', 'past runs'],
//     response: '**How can I access logs for past runs?**\n\nClick the "Logs" or "Reports" tab in the software to view all past production sessions. The logs show:\n• Start/stop times\n• Product variant\n• Total runtime\n• Defect counts\n• Rejection timestamps\n\nYou can export data in Excel or PDF format and filter by date and shift for analysis.',
//     issueType: 'monitoring',
//     confidence: 0.95
//   },
//   {
//     keywords: ['system rejecting properly', 'confirm rejection', 'rejection status'],
//     response: '**How can I confirm the system is rejecting properly?**\n\nCheck the ejection section physically or view the rejection status on screen. The system shows real-time rejection counts and status indicators.',
//     issueType: 'monitoring',
//     confidence: 0.9
//   },
//   {
//     keywords: ['calculate efficiency', 'efficiency calculation'],
//     response: '**How can I calculate efficiency?**\n\nUse this formula:\n**Efficiency = (Accepted Items / Total Items) × 100**\n\nThe system logs provide the data needed for this calculation.',
//     issueType: 'monitoring',
//     confidence: 0.95
//   }
// ];

// export const allPredefinedResponses = [
//   ...greetings,
//   ...machineOperationResponses,
//   ...troubleshootingResponses,
//   ...maintenanceResponses,
//   ...monitoringResponses
// ];

// export function findBestMatch(userMessage: string): PredefinedResponse | null {
//   const message = userMessage.toLowerCase();
//   let bestMatch: PredefinedResponse | null = null;
//   let highestScore = 0;

//   for (const response of allPredefinedResponses) {
//     let score = 0;
//     let keywordMatches = 0;
//     let totalKeywordLength = 0;

//     for (const keyword of response.keywords) {
//       if (message.includes(keyword.toLowerCase())) {
//         keywordMatches++;
//         totalKeywordLength += keyword.length;
//         // Give extra weight for longer, more specific keywords
//         score += keyword.length * keyword.length;
//       }
//     }

//     // Calculate final score with better weighting
//     if (keywordMatches > 0) {
//       // Bonus for matching more keywords
//       const keywordRatio = keywordMatches / response.keywords.length;
//       // Bonus for longer, more specific matches
//       const specificityBonus = totalKeywordLength / message.length;

//       score = score * keywordRatio * response.confidence * (1 + specificityBonus);

//       if (score > highestScore) {
//         highestScore = score;
//         bestMatch = response;
//       }
//     }
//   }

//   // Lower threshold and prioritize more specific matches
//   return highestScore > 0.5 ? bestMatch : null;
// }

// Predefined responses for common queries and greetings
export interface PredefinedResponse {
  keywords: string[];
  response: string;
  issueType?: string;
}

export const greetings: PredefinedResponse[] = [
  {
    keywords: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "greetings",
      "salutations",
      "what's up",
      "howdy",
      "welcome",
      "what can I do for you",
      "how can I help",
      "nice to meet you",
      "pleased to meet you",
      "how are you",
      "what's going on",
      "what brings you here",
      "how can I assist you",
      "good day",
    ],
    response:
      "Hello! Welcome to TECHASOFT Support. I'm here to help you with your ML-based ejection system. How can I assist you today?",
  },
  {
    keywords: [
      "help",
      "support",
      "assistance",
      "need help",
      "can you help me",
      "I need assistance",
      "I need support",
      "help me",
      "support needed",
      "looking for help",
      "can you assist",
      "I require help",
      "I need guidance",
      "I need advice",
      "help required",
      "support request",
      "assistance needed",
      "help with",
      "need assistance with",
      "help with issue",
    ],
    response:
      "I'm here to help! I can assist you with:\n• Machine operation and startup\n• Camera and PLC connection issues\n• Product variant selection\n• Defect monitoring and troubleshooting\n• Maintenance procedures\n• System logs and reports\n\nWhat specific issue would you like help with?",
  },
];

export const machineOperationResponses: PredefinedResponse[] = [
  {
    keywords: [
      "start machine",
      "how to start",
      "startup",
      "turn on machine",
      "how do I start",
      "start the machine",
      "initiate machine",
      "power on machine",
      "begin operation",
      "machine startup",
      "machine initiation",
      "activate machine",
      "machine on",
      "machine power up",
      "machine start",
      "how to turn on",
      "how to initiate",
      "how to activate",
      "how to begin",
      "how to power on",
    ],
    response:
      'How to start the machine:\n\nStep 1: Open the desktop application\nStep 2: Select the product variant\nStep 3: Set the RPM as per the product requirement\nStep 4: Click the "Start" button\n\nThe system will begin operation with real-time monitoring.',
    issueType: "operation",
  },
  {
    keywords: [
      "stop machine",
      "how to stop",
      "shutdown",
      "turn off",
      "how do I stop",
      "stop the machine",
      "halt machine",
      "cease operation",
      "machine shutdown",
      "machine stop",
      "how to turn off",
      "how to halt",
      "how to cease",
      "how to shutdown",
      "machine power down",
      "machine off",
      "stop operation",
      "end operation",
      "terminate machine",
      "machine termination",
    ],
    response:
      'How to stop the machine:\n\nClick the "Stop" button on the software interface. It will safely halt all operations.\n\nFor extended downtime:\n• Turn off the control panel power connection\n• Turn off the PC power supply\n\nThis protects the system for long-term usage.',
    issueType: "operation",
  },
  {
    keywords: [
      "change product",
      "switch variant",
      "different product",
      "product type",
      "how can I change",
      "alter product",
      "modify product",
      "select new product",
      "change variant",
      "switch product",
      "product change",
      "variant change",
      "how to switch",
      "how to alter",
      "how to modify",
      "how to select new",
      "how to change type",
      "how to change variant",
      "how to select variant",
      "how to choose product",
      "how to choose variant",
    ],
    response:
      'How to change the product type during a shift:\n\nStep 1: Click "Stop"\nStep 2: Select a new product variant\nStep 3: Set RPM\nStep 4: Click "Start"\n\nNote: Only one product variant can be selected per session to ensure accuracy.',
    issueType: "operation",
  },
  {
    keywords: [
      "technical knowledge",
      "no training",
      "user friendly",
      "operate without training",
      "do I need training",
      "is training required",
      "technical skills needed",
      "do I need technical skills",
      "can I use without training",
      "user-friendly interface",
      "easy to use",
      "no technical knowledge",
      "no experience needed",
      "no prior knowledge",
      "can I operate without skills",
      "can I operate without knowledge",
      "is it easy to operate",
      "is it user-friendly",
      "is training necessary",
      "is training mandatory",
    ],
    response:
      "Do I need technical knowledge to use the software?\n\nNo, the interface is user-friendly and designed for non-technical users. Basic instructions are enough, and the UI is intuitive. A short demo session is recommended.\n\nCan I operate this system with no training?\n\nBasic training takes under 30 minutes for operations.",
    issueType: "operation",
  },
  {
    keywords: [
      "correct biscuit type",
      "choose biscuit",
      "select product",
      "biscuit selection",
      "how to choose biscuit",
      "how to select product",
      "biscuit type selection",
      "selecting biscuit type",
      "choosing biscuit type",
      "how to pick biscuit",
      "how to select biscuit",
      "biscuit type choice",
      "biscuit variant selection",
      "product selection",
      "product type selection",
      "how to choose product type",
      "how to choose biscuit variant",
      "how to select biscuit type",
      "how to pick product",
      "how to pick variant",
    ],
    response:
      "How do I choose the correct biscuit type?\n\nSelect the correct product variant from the dropdown menu or product selection panel in the interface.\n\nImportant: The system supports all trained variants like Bourbon and Pure Magic. Only use trained products for accurate results.",
    issueType: "operation",
  },
  {
    keywords: [
      "rpm",
      "speed",
      "conveyor speed",
      "set rpm",
      "how to set rpm",
      "adjust rpm",
      "rpm settings",
      "rpm control",
      "how to control speed",
      "how to adjust speed",
      "how to set speed",
      "set conveyor speed",
      "conveyor speed settings",
      "conveyor speed control",
      "how to set conveyor speed",
      "how to adjust conveyor speed",
      "how to control conveyor speed",
      "rpm adjustment",
      "rpm configuration",
      "rpm setup",
      "speed settings",
    ],
    response:
      "RPM (Revolutions Per Minute) controls the conveyor speed:\n\n• Set RPM in the product selection panel before starting\n• Each product type has recommended RPM settings\n• The system saves the last used RPM per product\n• Adjust based on your production requirements\n\nProper RPM ensures accurate detection and rejection.",
    issueType: "operation",
  },
];

export const troubleshootingResponses: PredefinedResponse[] = [
  {
    keywords: [
      "camera not connected",
      "camera connection",
      "camera disconnected",
      "camera issue",
      "camera problems",
      "camera malfunction",
      "camera not working",
      "camera failure",
      "camera error",
      "camera setup issue",
      "camera troubleshooting",
      "camera connectivity",
      "camera not responding",
      "camera not detected",
      "camera not found",
      "camera signal issue",
      "camera link issue",
      "camera setup problems",
      "camera setup failure",
      "camera setup error",
    ],
    response:
      "Camera Connection Issue - Step-by-Step Solution:\n\nStep 1: Go to the variant area where camera is installed\nStep 2: Check the TECASOFT control panel and open it\nStep 3: Locate the Ethernet switch inside the panel\nStep 4: Check the lights on Ethernet switch:\n   • All lights blinking fast = proper connectivity\n   • No blinking = disconnection/fault\nStep 5: If abnormal blinking, unplug and re-plug Ethernet cables firmly\nStep 6: Cross-check all connections are secure\nStep 7: Go to AC room and open Client Application\nStep 8: Click Refresh button\nStep 9: Click Stop, wait, then click Start to restart camera services\nStep 10: If issue persists, contact Developer Support",
    issueType: "camera",
  },
  {
    keywords: [
      "plc disconnected",
      "plc connection",
      "plc not connected",
      "plc issue",
      "plc problems",
      "plc malfunction",
      "plc not working",
      "plc failure",
      "plc error",
      "plc setup issue",
      "plc troubleshooting",
      "plc connectivity",
      "plc not responding",
      "plc not detected",
      "plc not found",
      "plc signal issue",
      "plc link issue",
      "plc setup problems",
      "plc setup failure",
      "plc setup error",
    ],
    response:
      "PLC Connection Issue - Step-by-Step Solution:\n\nStep 1: Go to the variant area where PLC is installed\nStep 2: Check TECASOFT control panel - ensure it's ON\nStep 3: Locate the Ethernet switch inside the panel\nStep 4: Check Ethernet switch lights:\n   • All lights blinking fast = proper connectivity\n   • No blinking = disconnection/fault\nStep 5: If abnormal blinking, unplug and re-plug cables securely\nStep 6: Cross-check all Ethernet connections\nStep 7: Go to AC room and check router Ethernet connections\nStep 8: Open Client Application\nStep 9: Click Refresh button\nStep 10: Click Stop and OK, wait, then Start and OK\nStep 11: If issue persists, contact Developer Support",
    issueType: "plc",
  },
  {
    keywords: [
      "runtime error",
      "tcp error",
      "socket error",
      "iso error",
      "runtime issues",
      "tcp connection error",
      "socket connection error",
      "iso connection error",
      "runtime problems",
      "tcp issues",
      "socket issues",
      "iso issues",
      "runtime failure",
      "tcp failure",
      "socket failure",
      "iso failure",
      "runtime troubleshooting",
      "tcp troubleshooting",
      "socket troubleshooting",
      "iso troubleshooting",
      "runtime connectivity issue",
    ],
    response:
      "RuntimeError TCP/Socket Issue - Step-by-Step Solution:\n\nStep 1: Go to the variant area where PLC is installed\nStep 2: Check TECASOFT control panel - ensure it's ON\nStep 3: Go to AC room with the main system\nStep 4: Open the Client Application\nStep 5: Click the Refresh button\nStep 6: Click Stop and OK, wait, then Start and OK\nStep 7: If error persists, restart the PC completely\nStep 8: Run Client Application again after restart\nStep 9: If issue continues, contact Developer Support\n\nError Code: ISO TCP Socket error (32)",
    issueType: "runtime",
  },
  {
    keywords: [
      "defect count zero",
      "no defects detected",
      "not detecting",
      "zero defects",
      "no defects",
      "defect detection issue",
      "defect count issue",
      "defect monitoring issue",
      "defect detection failure",
      "defect count problems",
      "defect count troubleshooting",
      "defect detection troubleshooting",
      "defect count not updating",
      "defect count not showing",
      "defect count not working",
      "defect count not detected",
      "defect count not found",
      "defect count not visible",
      "defect count not accurate",
      "defect count not correct",
    ],
    response:
      "Zero Defect Count Troubleshooting:\n\nStep 1: Check if camera is working properly\nStep 2: Ensure correct product variant is selected\nStep 3: Restart the application\nStep 4: Check lighting conditions and product placement\nStep 5: Verify biscuits are passing through detection zone\n\nNote: The system only detects trained product variants accurately.",
    issueType: "detection",
  },
  {
    keywords: [
      "ejection delayed",
      "rejection not working",
      "air jet issue",
      "ejection problems",
      "ejection failure",
      "rejection failure",
      "ejection malfunction",
      "rejection malfunction",
      "ejection troubleshooting",
      "rejection troubleshooting",
      "ejection not functioning",
      "rejection not functioning",
      "ejection not operating",
      "rejection not operating",
      "ejection not working properly",
      "rejection not working properly",
      "ejection timing issue",
      "rejection timing problems",
      "ejection timing failure",
      "ejection timing troubleshooting",
    ],
    response:
      "Ejection/Rejection Issues:\n\nImmediate Steps:\n• Stop the system\n• Check air ejector mechanism\n• Ensure air pressure is active and sufficient\n• Restart the system\n\nIf problem persists:\n• Check timing sync between detection and air jet\n• Verify air connections are supplying proper air\n• Contact maintenance support\n\nDaily Check: Always verify air supply before starting production.",
    issueType: "ejection",
  },
];

export const maintenanceResponses: PredefinedResponse[] = [
  {
    keywords: [
      "maintenance",
      "daily check",
      "cleaning",
      "belt replacement",
      "maintenance procedures",
      "maintenance tasks",
      "maintenance schedule",
      "maintenance guidelines",
      "maintenance checklist",
      "daily maintenance",
      "weekly maintenance",
      "monthly maintenance",
      "quarterly maintenance",
      "maintenance routine",
      "maintenance requirements",
      "maintenance best practices",
      "maintenance tips",
      "maintenance advice",
      "maintenance recommendations",
      "maintenance protocols",
      "maintenance operations",
    ],
    response:
      "Maintenance Guide:\n\nDaily Checks:\n• Check air supply connections\n• Clean camera lens during line breaks\n• Verify system status before production\n\nPower Management:\n• Turn off control panel during extended stops\n• Turn off PC power supply for long downtime\n\nMonthly/Quarterly:\n• Check if nozzles are becoming loose\n• Clean dust/oil from frame with air spray\n• Inspect all connections\n\nBelt Replacement:\n• Remove MS frame clamps with Allen key\n• Replace belt and restore frame to marked position\n\nBulk Biscuit Handling:\n• Use adjustable rejection nozzle (6mm Allen key)\n• Ensure proper rejection gap for variants",
    issueType: "maintenance",
  },
];

export const monitoringResponses: PredefinedResponse[] = [
  {
    keywords: [
      "live feed",
      "camera view",
      "live camera feed",
      "what does the live camera show",
      "live monitoring",
      "real-time camera feed",
      "camera live view",
      "live production feed",
      "live production view",
      "live inspection feed",
      "live inspection view",
      "live video feed",
      "live video stream",
      "live footage",
      "live footage view",
      "live footage feed",
      "live footage monitoring",
      "live footage inspection",
      "live footage analysis",
      "live footage display",
    ],
    response:
      "What does the live camera feed show?\n\nIt shows the production line and biscuits in real time for visual inspection. Defects are highlighted, and counts are displayed on the side panel.",
    issueType: "monitoring",
  },
  {
    keywords: [
      "defect count",
      "how often updated",
      "defect count updated",
      "defect count frequency",
      "defect count timing",
      "defect count intervals",
      "defect count updates",
      "defect count refresh rate",
      "defect count monitoring",
      "defect count tracking",
      "defect count reporting",
      "defect count display",
      "defect count visibility",
      "defect count accuracy",
      "defect count reliability",
      "defect count consistency",
      "defect count status",
      "defect count information",
      "defect count data",
      "defect count analysis",
    ],
    response:
      "How often is the defect count updated?\n\nIt updates live as biscuits pass through the detection zone in real-time.",
    issueType: "monitoring",
  },
  {
    keywords: [
      "defect count too high",
      "high defect count",
      "too many defects",
      "excessive defect count",
      "defect count alert",
      "defect count warning",
      "defect count issue",
      "defect count problems",
      "defect count troubleshooting",
      "defect count analysis",
      "defect count evaluation",
      "defect count inspection",
      "defect count review",
      "defect count assessment",
      "defect count monitoring",
      "defect count tracking",
      "defect count reporting",
      "defect count visibility",
      "defect count accuracy",
      "defect count reliability",
    ],
    response:
      "What if the defect count looks too high?\n\nStep 1: Pause the system\nStep 2: Inspect product input quality\nStep 3: Check if the correct product variant is selected\nStep 4: Contact technical support if needed",
    issueType: "monitoring",
  },
  {
    keywords: [
      "current production status",
      "monitor production",
      "production status",
      "production monitoring",
      "production overview",
      "production tracking",
      "production report",
      "production analysis",
      "production evaluation",
      "production inspection",
      "production review",
      "production assessment",
      "production visibility",
      "production data",
      "production information",
      "production updates",
      "production feedback",
      "production performance",
      "production efficiency",
      "production quality",
    ],
    response:
      "Can I monitor the current production status?\n\nYes, the live monitoring screen shows real-time operations and defect counts. The product name and variant are displayed at the top of the interface once selected.",
    issueType: "monitoring",
  },
  {
    keywords: [
      "view logs",
      "access logs",
      "logs",
      "past runs",
      "log files",
      "log data",
      "log history",
      "log analysis",
      "log inspection",
      "log review",
      "log tracking",
      "log reporting",
      "log visibility",
      "log updates",
      "log information",
      "log performance",
      "log evaluation",
      "log feedback",
      "log summary",
      "log details",
      "log records",
    ],
    response:
      'How can I access logs for past runs?\n\nClick the "Logs" or "Reports" tab in the software to view all past production sessions. The logs show:\n• Start/stop times\n• Product variant\n• Total runtime\n• Defect counts\n• Rejection timestamps\n\nYou can export data in Excel or PDF format and filter by date and shift for analysis.',
    issueType: "monitoring",
  },
  {
    keywords: [
      "system rejecting properly",
      "confirm rejection",
      "rejection status",
      "rejection confirmation",
      "rejection verification",
      "rejection monitoring",
      "rejection tracking",
      "rejection reporting",
      "rejection analysis",
      "rejection inspection",
      "rejection review",
      "rejection assessment",
      "rejection visibility",
      "rejection data",
      "rejection information",
      "rejection feedback",
      "rejection performance",
      "rejection efficiency",
      "rejection quality",
      "rejection accuracy",
    ],
    response:
      "How can I confirm the system is rejecting properly?\n\nCheck the ejection section physically or view the rejection status on screen. The system shows real-time rejection counts and status indicators.",
    issueType: "monitoring",
  },
  {
    keywords: [
      "calculate efficiency",
      "efficiency calculation",
      "efficiency metrics",
      "efficiency analysis",
      "efficiency evaluation",
      "efficiency tracking",
      "efficiency reporting",
      "efficiency monitoring",
      "efficiency assessment",
      "efficiency visibility",
      "efficiency data",
      "efficiency information",
      "efficiency feedback",
      "efficiency performance",
      "efficiency quality",
      "efficiency standards",
      "efficiency benchmarks",
      "efficiency ratios",
      "efficiency measures",
      "efficiency indicators",
    ],
    response:
      "How can I calculate efficiency?\n\nUse this formula:\nEfficiency = (Accepted Items / Total Items) × 100\n\nThe system logs provide the data needed for this calculation.",
    issueType: "monitoring",
  },
];

export const allPredefinedResponses = [
  ...greetings,
  ...machineOperationResponses,
  ...troubleshootingResponses,
  ...maintenanceResponses,
  ...monitoringResponses,
];

export function findBestMatch(userMessage: string): PredefinedResponse | null {
  const message = userMessage.toLowerCase();
  let bestMatch: PredefinedResponse | null = null;
  let highestScore = 0;

  for (const response of allPredefinedResponses) {
    let score = 0;
    let keywordMatches = 0;
    let totalKeywordLength = 0;

    for (const keyword of response.keywords) {
      if (message.includes(keyword.toLowerCase())) {
        keywordMatches++;
        totalKeywordLength += keyword.length;
        score += keyword.length * keyword.length;
      }
    }

    if (keywordMatches > 0) {
      const keywordRatio = keywordMatches / response.keywords.length;
      const specificityBonus = totalKeywordLength / message.length;

      score = score * keywordRatio * (1 + specificityBonus);

      if (score > highestScore) {
        highestScore = score;
        bestMatch = response;
      }
    }
  }

  return highestScore > 0.5 ? bestMatch : null;
}
