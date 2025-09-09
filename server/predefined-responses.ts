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
        console.log(
          "this is the response var in predefined_response.ts: ",
          response
        );
      }
    }
  }

  return highestScore > 0.5 ? bestMatch : null;
}

// export interface PredefinedResponse {
//   keywords: string[];
//   response: string;
//   issueType?: string;
// }

// export const maintenanceResponses: PredefinedResponse[] = [
//   {
//     keywords: [
//       "power off",
//       "production stop",
//       "shutdown",
//       "turn off system",
//       "stop production",
//       "power down",
//       "system shutdown",
//       "how to turn off",
//       "shutdown procedure",
//       "stop machine",
//       "power off machine",
//       "production halt",
//       "system power off",
//       "long time shutdown",
//       "extended shutdown",
//     ],
//     response:
//       "Power Off Procedure for Production Stop:\n\nStep 1: Turn off the control panel power connection\nStep 2: Turn off the PC power supply as well\n\n⚠️  Important : This helps in smooth operation and protects the system for long-term usage.",
//     issueType: "maintenance",
//   },
//   {
//     keywords: [
//       "rejection belt",
//       "replace belt",
//       "belt replacement",
//       "changing belt",
//       "belt change",
//       "new belt",
//       "belt maintenance",
//       "how to replace belt",
//       "belt installation",
//       "ms frame",
//       "frame clamps",
//       "belt alignment",
//     ],
//     response:
//       "Rejection Belt Replacement:\n\nStep 1: Remove the MS frame clamps using an Allen key\nStep 2: Change the belt\nStep 3: Place the frame back in the same marked position as before to maintain alignment\n\n⚠️  Important : If the same belt is being used for two or more variants, you must create a proper rejection gap as per the training given. If the gap is not set correctly, biscuits may not be rejected properly or may fall freely without control.",
//     issueType: "maintenance",
//   },
//   {
//     keywords: [
//       "monthly maintenance",
//       "quarterly maintenance",
//       "monthly check",
//       "routine maintenance",
//       "periodic maintenance",
//       "regular maintenance",
//       "nozzles check",
//       "loose nozzles",
//       "camera cleaning",
//       "lens cleaning",
//       "dust cleaning",
//       "frame cleaning",
//       "air spray",
//     ],
//     response:
//       "Monthly / Quarterly Maintenance:\n\n•  Every month or every 3 months : Check whether the nozzles are becoming loose\n•  During line breaks : Clean the camera lens properly\n•  Frame maintenance : Clean dust or oil from the top of the frame using air spray across the entire frame",
//     issueType: "maintenance",
//   },
//   {
//     keywords: [
//       "daily check",
//       "air supply",
//       "air connection",
//       "air pressure",
//       "daily maintenance",
//       "air system",
//       "pneumatic check",
//       "air supply check",
//       "daily inspection",
//       "air flow",
//     ],
//     response:
//       "Daily Check - Air Supply:\n\n•  Every day : Check if the air connections are supplying proper air to the rejection system\n\nThis ensures optimal rejection performance and prevents system failures.",
//     issueType: "maintenance",
//   },
//   {
//     keywords: [
//       "bulk biscuits",
//       "stuck biscuits",
//       "biscuit jam",
//       "rejection nozzle",
//       "adjustable nozzle",
//       "nozzle adjustment",
//       "allen key",
//       "6mm allen key",
//       "biscuit flow",
//       "smooth flow",
//       "clogged biscuits",
//       "biscuit blocking",
//     ],
//     response:
//       "Handling Bulk or Stuck Biscuits:\n\n• In rare cases when biscuits come in bulk or get stuck, use the  easy adjustable rejection nozzle system \n• Adjust it using a  6mm Allen key  for smooth biscuit flow and proper rejection\n\nThis helps maintain consistent product flow and prevents system blockages.",
//     issueType: "maintenance",
//   },
// ];

// export const cameraConnectionResponses: PredefinedResponse[] = [
//   {
//     keywords: [
//       "camera not connected",
//       "camera connection",
//       "camera disconnected",
//       "establish camera connection",
//       "camera issue",
//       "camera problem",
//       "camera connectivity",
//       "camera setup",
//       "camera fault",
//       "camera error",
//       "cameras not working",
//       "camera malfunction",
//       "camera not responding",
//     ],
//     response:
//       "Camera Connection Troubleshooting:\n\n Step 1 : Go to the specific line (location) in the variant area where the camera setup is installed\n Step 2 : Check the TECASOFT control panel and open it\n Step 3 : Inside the control panel, locate the Ethernet switch\n Step 4 : Observe the lights on the Ethernet switch:\n  • If all lights are blinking fast = proper connectivity ✅\n  • If lights are not blinking properly = disconnection or fault ❌\n Step 5 : If abnormal blinking, unplug and re-plug Ethernet cables firmly\n Step 6 : Cross-check each Ethernet connection for secure connections\n Step 7 : Go to the AC room where the system is located\n Step 8 : Open the Client Application\n Step 9 : Click the Refresh button\n Step 10 : Click Stop, wait, then click Start to restart camera services\n Step 11 : If issue persists, contact Developer Support",
//     issueType: "camera",
//   },
// ];

// export const plcConnectionResponses: PredefinedResponse[] = [
//   {
//     keywords: [
//       "plc disconnected",
//       "plc connection",
//       "establish plc connection",
//       "plc issue",
//       "plc problem",
//       "plc connectivity",
//       "plc fault",
//       "plc error",
//       "plc not connected",
//       "plc malfunction",
//       "plc not responding",
//       "programmable logic controller",
//     ],
//     response:
//       "PLC Connection Troubleshooting:\n\n Step 1 : Go to the specific line (location) in the variant area where the PLC setup is installed\n Step 2 : Check the TECASOFT control panel - confirm if it's ON or OFF. If OFF, turn ON the control panel\n Step 3 : Inside the control panel, locate the Ethernet switch\n Step 4 : Observe the lights on the Ethernet switch:\n  • If all lights are blinking fast = proper connectivity ✅\n  • If lights are not blinking properly = disconnection or fault ❌\n Step 5 : If abnormal blinking, unplug and re-plug Ethernet cables securely\n Step 6 : Cross-check all Ethernet connections for proper and secure connections\n Step 7 : Go to AC room - cross-check router's Ethernet wire connections\n Step 8 : Open the Client Application\n Step 9 : Click the Refresh button\n Step 10 : Click Stop and OK, wait, then click Start and OK to reinitialize PLC connection\n Step 11 : If issue persists, contact Developer Support",
//     issueType: "plc",
//   },
// ];

// export const systemErrorResponses: PredefinedResponse[] = [
//   {
//     keywords: [
//       "runtimeerror",
//       "tcp error",
//       "socket error",
//       "iso error",
//       "tcp socket",
//       "socket error 32",
//       "runtime error",
//       "connection error",
//       "network error",
//       "communication error",
//       "tcp connection",
//       "socket communication",
//     ],
//     response:
//       "TCP Socket Error Resolution:\n\n Error : RuntimeError at / b' ISO: An error occurred during send TCP: Other Socket error (32)'\n\n Solution Steps :\n Step 1 : Go to the specific line (location) in the variant area where the PLC setup is installed\n Step 2 : Check the TECASOFT control panel - confirm if it's ON or OFF. If OFF, turn ON the control panel\n Step 3 : Go to the AC room where the main system is located\n Step 4 : Open the Client Application\n Step 5 : Click the Refresh button\n Step 6 : Click Stop and OK, wait, then click Start and OK to restart the application\n Step 7 : If error still appears, restart the PC and run the Client Application again\n Step 8 : If issue persists after all steps, contact Developer Support",
//     issueType: "system_error",
//   },
// ];

// export const quickReferenceResponses: PredefinedResponse[] = [
//   {
//     keywords: [
//       "checklist",
//       "before contacting support",
//       "troubleshooting checklist",
//       "quick reference",
//       "pre-support check",
//       "support checklist",
//       "system check",
//       "basic checks",
//       "preliminary check",
//     ],
//     response:
//       " Before Contacting Support - Quick Checklist :\n\n✅ Control panel power is ON\n✅ All Ethernet cables are properly connected\n✅ Ethernet switch lights are blinking properly\n✅ Client application has been refreshed\n✅ System has been stopped and restarted\n✅ PC has been restarted (for TCP errors)\n\n📞  Emergency Contacts : Developer Support (Contact when all troubleshooting steps fail)\n\n⚠️  Safety : Always follow safety protocols when working with electrical components.",
//     issueType: "reference",
//   },
//   {
//     keywords: [
//       "emergency contact",
//       "developer support",
//       "contact support",
//       "technical support",
//       "help contact",
//       "support phone",
//       "escalation",
//       "advanced support",
//     ],
//     response:
//       " Emergency Contacts :\n\n🔧  Developer Support : Contact when all troubleshooting steps fail\n\nThis guide covers the most common system issues and maintenance procedures. Always follow safety protocols when working with electrical components.",
//     issueType: "support",
//   },
// ];

// export const updatedHelpResponse: PredefinedResponse[] = [
//   {
//     keywords: [
//       "help",
//       "support",
//       "assistance",
//       "need help",
//       "can you help me",
//       "I need assistance",
//       "I need support",
//       "help me",
//       "support needed",
//       "looking for help",
//       "can you assist",
//       "I require help",
//       "I need guidance",
//       "I need advice",
//       "help required",
//       "support request",
//       "assistance needed",
//       "help with",
//       "need assistance with",
//       "help with issue",
//     ],
//     response:
//       "I'm here to help! I can assist you with:\n•  Camera and PLC connection issues \n•  System troubleshooting and error resolution \n•  Daily, monthly, and quarterly maintenance procedures \n•  Rejection belt replacement and alignment \n•  Air supply and nozzle adjustments \n•  TCP socket errors and network issues \n•  Emergency support and quick reference guides \n\nWhat specific issue would you like help with?",
//   },
// ];

// export const techaSoftGreetings: PredefinedResponse[] = [
//   {
//     keywords: [
//       "hello",
//       "hi",
//       "hiii",
//       "hii",
//       "Hii",
//       "hey",
//       "good morning",
//       "good afternoon",
//       "good evening",
//       "greetings",
//       "salutations",
//       "what's up",
//       "howdy",
//       "welcome",
//       "what can I do for you",
//       "how can I help",
//       "nice to meet you",
//       "pleased to meet you",
//       "how are you",
//       "what's going on",
//       "what brings you here",
//       "how can I assist you",
//       "good day",
//       "namaste",
//       "bonjour",
//       "hola",
//       "guten tag",
//     ],
//     response:
//       "👋 Hello! Welcome to  TECHASOFT AI Support ! I'm your intelligent assistant here to help you with your ML-based rejection system and manufacturing solutions.\n\n🚀 I'm ready to assist you with technical troubleshooting, maintenance guidance, and system optimization. How can I help you today?",
//   },
//   {
//     keywords: [
//       "who are you",
//       "what are you",
//       "introduce yourself",
//       "tell me about yourself",
//       "your name",
//       "what's your name",
//       "are you ai",
//       "are you a bot",
//       "are you human",
//       "what do you do",
//       "your purpose",
//       "about you",
//       "techasoft ai",
//       "chatbot",
//       "assistant",
//     ],
//     response:
//       "🤖 I'm  TECHASOFT AI Assistant  - your intelligent support companion!\n\n✨  What I am: \n• Advanced AI-powered chatbot specialized in industrial automation\n• Expert in ML-based rejection systems and manufacturing solutions\n• Your 24/7 technical support partner\n\n🎯  My expertise includes: \n• Camera & PLC troubleshooting\n• System maintenance procedures\n• Error diagnosis and resolution\n• Performance optimization guidance\n\nI'm here to make your technical experience seamless and efficient! 🚀",
//   },
//   {
//     keywords: [
//       "help",
//       "support",
//       "assistance",
//       "need help",
//       "can you help me",
//       "I need assistance",
//       "I need support",
//       "help me",
//       "support needed",
//       "looking for help",
//       "can you assist",
//       "I require help",
//       "I need guidance",
//       "I need advice",
//       "help required",
//       "support request",
//       "assistance needed",
//       "help with",
//       "need assistance with",
//       "help with issue",
//       "what can you help with",
//     ],
//     response:
//       "🛠️  I'm here to provide comprehensive support! \n\n📋  My specialized assistance areas: \n• 📷  Camera & PLC Connection Issues  - Diagnostics and resolution\n• ⚙️  System Troubleshooting  - Error analysis and step-by-step fixes\n• 🔧  Maintenance Procedures  - Daily, monthly, and quarterly guidelines\n• 🔄  Rejection Belt Operations  - Replacement and alignment procedures\n• 💨  Air Supply & Nozzle Systems  - Adjustments and optimization\n• 🌐  Network & TCP Errors  - Connectivity troubleshooting\n• 📞  Emergency Support  - Quick reference and escalation guides\n• 📊  System Performance  - Monitoring and optimization tips\n\n💡  Just describe your issue and I'll provide instant, expert guidance! \n\nWhat specific challenge can I help you solve today? 🚀",
//   },
//   {
//     keywords: [
//       "thank you",
//       "thanks",
//       "appreciate it",
//       "grateful",
//       "much appreciated",
//       "thank you so much",
//       "thanks a lot",
//       "very helpful",
//       "great help",
//       "excellent",
//       "perfect",
//       "awesome",
//       "fantastic",
//       "wonderful",
//       "brilliant",
//       "outstanding",
//       "amazing",
//     ],
//     response:
//       "🌟  You're absolutely welcome!  I'm delighted I could assist you!\n\n😊  It's my pleasure to help with your TECHASOFT systems.  Your success is my priority!\n\n🚀  Remember, I'm available 24/7 for any future technical support needs: \n• System troubleshooting\n• Maintenance guidance  \n• Performance optimization\n• Emergency assistance\n\n💡  Feel free to reach out anytime - I'm always here to ensure your operations run smoothly! \n\nHave a productive day! ⭐",
//   },
//   {
//     keywords: [
//       "goodbye",
//       "bye",
//       "see you later",
//       "farewell",
//       "catch you later",
//       "talk to you later",
//       "until next time",
//       "have a good day",
//       "have a great day",
//       "take care",
//       "see you soon",
//       "signing off",
//       "logging off",
//       "end conversation",
//       "exit",
//       "quit",
//     ],
//     response:
//       "👋  Goodbye and thank you for choosing TECHASOFT AI Support! \n\n🎯  Quick Recap:  I hope I was able to resolve your technical queries and provide valuable assistance today.\n\n🚀  Remember: \n• I'm available  24/7  for any future support needs\n• Keep your systems maintained with our guidelines\n• Don't hesitate to reach out for any technical challenges\n\n⭐  Wishing you smooth operations and optimal performance with your TECHASOFT systems! \n\nTake care and have a fantastic day! 🌟",
//   },
//   {
//     keywords: [
//       "problem solved",
//       "issue resolved",
//       "fixed",
//       "working now",
//       "it works",
//       "problem fixed",
//       "issue fixed",
//       "resolved",
//       "sorted",
//       "all good",
//       "everything works",
//       "system working",
//       "back online",
//       "functioning",
//       "operational",
//     ],
//     response:
//       "🎉  Excellent! I'm thrilled that your issue has been resolved! \n\n✅  Success achieved!  Your TECHASOFT system is back to optimal performance.\n\n🔧  For future reference: \n• Keep this solution handy for similar issues\n• Follow regular maintenance schedules to prevent problems\n• Monitor system performance indicators regularly\n\n💡  Continuous Support:  Remember, I'm always here if you need:\n• Preventive maintenance guidance\n• Performance optimization tips\n• Quick troubleshooting assistance\n\n🚀  Keep up the excellent work with your manufacturing operations!  ⭐",
//   },
// ];

// export const techaSoftSpecializedGreetings: PredefinedResponse[] = [
//   {
//     keywords: [
//       "new user",
//       "first time",
//       "getting started",
//       "beginner",
//       "just installed",
//       "new installation",
//       "setup help",
//       "initial setup",
//       "onboarding",
//       "new to techasoft",
//       "fresh installation",
//     ],
//     response:
//       "🌟  Welcome to TECHASOFT family!  Great to have you aboard!\n\n🚀  New User Quick Start Guide: \n• 📋  Step 1:  Familiarize yourself with the control panel layout\n• 🔌  Step 2:  Verify all connections (Camera, PLC, Ethernet)\n• ⚙️  Step 3:  Complete initial system calibration\n• 🎯  Step 4:  Test with sample products\n\n💡  I'm here to guide you through every step of your TECHASOFT journey! \n\nWhat would you like to start with? Setup assistance or system overview? 🛠️",
//   },
//   {
//     keywords: [
//       "emergency",
//       "urgent",
//       "critical",
//       "production down",
//       "system down",
//       "immediate help",
//       "asap",
//       "priority",
//       "crisis",
//       "breakdown",
//       "production stopped",
//       "not working",
//       "completely down",
//     ],
//     response:
//       "🚨  EMERGENCY SUPPORT ACTIVATED! \n\n⚡  I understand this is urgent - let's get your system back online quickly! \n\n🔧  Immediate Action Protocol: \n• Describe the exact issue you're experiencing\n• Current system status (lights, displays, error messages)\n• When did the problem start?\n• Any recent changes to the system?\n\n📞  Escalation Ready:  If needed, I'll guide you to emergency developer support\n\n💥  Let's resolve this NOW! Please provide details of the critical issue.  ⚡",
//   },
//   {
//     keywords: [
//       "maintenance time",
//       "scheduled maintenance",
//       "routine check",
//       "inspection",
//       "preventive maintenance",
//       "regular service",
//       "system checkup",
//       "periodic maintenance",
//       "maintenance schedule",
//     ],
//     response:
//       "🔧  Maintenance Mode Activated!  Excellent proactive approach!\n\n📅  TECHASOFT Maintenance Excellence: \n•  Daily:  Air supply verification\n•  Weekly:  Visual inspection checklist\n•  Monthly:  Nozzle tightness check & camera lens cleaning\n•  Quarterly:  Comprehensive system evaluation\n\n✅  Smart Maintenance Benefits: \n• Prevents unexpected downtime\n• Extends equipment lifespan\n• Maintains optimal performance\n• Reduces emergency repairs\n\n🎯  Which maintenance activity would you like guidance on today?  🛠️",
//   },
// ];

// export const allPredefinedResponses = [
//   // ...greetings,
//   // ...machineOperationResponses,
//   // ...troubleshootingResponses,
//   // ...maintenanceResponses,
//   // ...monitoringResponses,
//   // ...techaSoftSpecializedGreetings,

//   ...maintenanceResponses,
//   ...cameraConnectionResponses,
//   ...plcConnectionResponses,
//   ...systemErrorResponses,
//   ...quickReferenceResponses,
//   ...updatedHelpResponse,
//   ...techaSoftGreetings,
//   ...techaSoftSpecializedGreetings,
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
//         score += keyword.length * keyword.length;
//       }
//     }

//     if (keywordMatches > 0) {
//       const keywordRatio = keywordMatches / response.keywords.length;
//       const specificityBonus = totalKeywordLength / message.length;

//       score = score * keywordRatio * (1 + specificityBonus);

//       if (score > highestScore) {
//         highestScore = score;
//         bestMatch = response;
//         console.log(
//           "this is the response var in predefined_response.ts: ",
//           response
//         );
//       }
//     }
//   }

//   return highestScore > 0.5 ? bestMatch : null;
// }
