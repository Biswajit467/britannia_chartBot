// Predefined responses for common queries and greetings
export interface PredefinedResponse {
  keywords: string[];
  response: string;
  issueType?: string;
  confidence: number;
}

export const greetings: PredefinedResponse[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: 'Hello! Welcome to TECHASOFT Support. I\'m here to help you with your ML-based ejection system. How can I assist you today?',
    confidence: 0.95
  },
  {
    keywords: ['help', 'support', 'assistance', 'need help'],
    response: 'I\'m here to help! I can assist you with:\n• Machine operation and startup\n• Camera and PLC connection issues\n• Product variant selection\n• Defect monitoring and troubleshooting\n• Maintenance procedures\n• System logs and reports\n\nWhat specific issue would you like help with?',
    confidence: 0.9
  }
];

export const machineOperationResponses: PredefinedResponse[] = [
  {
    keywords: ['start machine', 'how to start', 'startup', 'turn on machine'],
    response: 'To start the machine:\n\n**Step 1:** Open the desktop application\n**Step 2:** Select the product variant (Bourbon, Pure Magic, etc.)\n**Step 3:** Set the RPM as per the product requirement\n**Step 4:** Click the "Start" button\n\nThe system will begin operation with real-time monitoring.',
    issueType: 'operation',
    confidence: 0.95
  },
  {
    keywords: ['stop machine', 'how to stop', 'shutdown', 'turn off'],
    response: 'To stop the machine:\n\nClick the "Stop" button on the software interface. It will safely halt all operations.\n\n**Important:** For extended downtime, also:\n• Turn off the control panel power connection\n• Turn off the PC power supply\n\nThis protects the system for long-term usage.',
    issueType: 'operation',
    confidence: 0.95
  },
  {
    keywords: ['change product', 'switch variant', 'different product', 'product type'],
    response: 'To change the product type during operation:\n\n**Step 1:** Click "Stop" to halt current operation\n**Step 2:** Select the new product variant from the dropdown\n**Step 3:** Set the appropriate RPM for the new product\n**Step 4:** Click "Start" to begin with the new variant\n\n**Note:** Only one product variant can run per session for accuracy.',
    issueType: 'operation',
    confidence: 0.9
  },
  {
    keywords: ['rpm', 'speed', 'conveyor speed', 'set rpm'],
    response: 'RPM (Revolutions Per Minute) controls the conveyor speed:\n\n• Set RPM in the product selection panel before starting\n• Each product type has recommended RPM settings\n• The system saves the last used RPM per product\n• Adjust based on your production requirements\n\nProper RPM ensures accurate detection and rejection.',
    issueType: 'operation',
    confidence: 0.9
  }
];

export const troubleshootingResponses: PredefinedResponse[] = [
  {
    keywords: ['camera not connected', 'camera connection', 'camera disconnected', 'camera issue'],
    response: '**Camera Connection Issue - Step-by-Step Solution:**\n\n**Step 1:** Go to the variant area where camera is installed\n**Step 2:** Check the TECASOFT control panel and open it\n**Step 3:** Locate the Ethernet switch inside the panel\n**Step 4:** Check the lights on Ethernet switch:\n   • All lights blinking fast = proper connectivity\n   • No blinking = disconnection/fault\n**Step 5:** If abnormal blinking, unplug and re-plug Ethernet cables firmly\n**Step 6:** Cross-check all connections are secure\n**Step 7:** Go to AC room and open Client Application\n**Step 8:** Click Refresh button\n**Step 9:** Click Stop, wait, then click Start to restart camera services\n**Step 10:** If issue persists, contact Developer Support',
    issueType: 'camera',
    confidence: 0.95
  },
  {
    keywords: ['plc disconnected', 'plc connection', 'plc not connected', 'plc issue'],
    response: '**PLC Connection Issue - Step-by-Step Solution:**\n\n**Step 1:** Go to the variant area where PLC is installed\n**Step 2:** Check TECASOFT control panel - ensure it\'s ON\n**Step 3:** Locate the Ethernet switch inside the panel\n**Step 4:** Check Ethernet switch lights:\n   • All lights blinking fast = proper connectivity\n   • No blinking = disconnection/fault\n**Step 5:** If abnormal blinking, unplug and re-plug cables securely\n**Step 6:** Cross-check all Ethernet connections\n**Step 7:** Go to AC room and check router Ethernet connections\n**Step 8:** Open Client Application\n**Step 9:** Click Refresh button\n**Step 10:** Click Stop and OK, wait, then Start and OK\n**Step 11:** If issue persists, contact Developer Support',
    issueType: 'plc',
    confidence: 0.95
  },
  {
    keywords: ['runtime error', 'tcp error', 'socket error', 'iso error'],
    response: '**RuntimeError TCP/Socket Issue - Step-by-Step Solution:**\n\n**Step 1:** Go to the variant area where PLC is installed\n**Step 2:** Check TECASOFT control panel - ensure it\'s ON\n**Step 3:** Go to AC room with the main system\n**Step 4:** Open the Client Application\n**Step 5:** Click the Refresh button\n**Step 6:** Click Stop and OK, wait, then Start and OK\n**Step 7:** If error persists, restart the PC completely\n**Step 8:** Run Client Application again after restart\n**Step 9:** If issue continues, contact Developer Support\n\n**Error Code:** ISO TCP Socket error (32)',
    issueType: 'runtime',
    confidence: 0.95
  },
  {
    keywords: ['defect count zero', 'no defects detected', 'not detecting'],
    response: '**Zero Defect Count Troubleshooting:**\n\n**Step 1:** Check if camera is working properly\n**Step 2:** Ensure correct product variant is selected\n**Step 3:** Restart the application\n**Step 4:** Check lighting conditions and product placement\n**Step 5:** Verify biscuits are passing through detection zone\n\n**Note:** The system only detects trained product variants accurately.',
    issueType: 'detection',
    confidence: 0.9
  },
  {
    keywords: ['ejection delayed', 'rejection not working', 'air jet issue'],
    response: '**Ejection/Rejection Issues:**\n\n**Immediate Steps:**\n• Stop the system\n• Check air ejector mechanism\n• Ensure air pressure is active and sufficient\n• Restart the system\n\n**If problem persists:**\n• Check timing sync between detection and air jet\n• Verify air connections are supplying proper air\n• Contact maintenance support\n\n**Daily Check:** Always verify air supply before starting production.',
    issueType: 'ejection',
    confidence: 0.9
  }
];

export const maintenanceResponses: PredefinedResponse[] = [
  {
    keywords: ['maintenance', 'daily check', 'cleaning', 'belt replacement'],
    response: '**Maintenance Guide:**\n\n**Daily Checks:**\n• Check air supply connections\n• Clean camera lens during line breaks\n• Verify system status before production\n\n**Power Management:**\n• Turn off control panel during extended stops\n• Turn off PC power supply for long downtime\n\n**Monthly/Quarterly:**\n• Check if nozzles are becoming loose\n• Clean dust/oil from frame with air spray\n• Inspect all connections\n\n**Belt Replacement:**\n• Remove MS frame clamps with Allen key\n• Replace belt and restore frame to marked position\n\n**Bulk Biscuit Handling:**\n• Use adjustable rejection nozzle (6mm Allen key)\n• Ensure proper rejection gap for variants',
    issueType: 'maintenance',
    confidence: 0.9
  }
];

export const monitoringResponses: PredefinedResponse[] = [
  {
    keywords: ['live feed', 'camera view', 'monitoring', 'production status'],
    response: '**Real-Time Monitoring Features:**\n\n**Live Camera Feed:**\n• Shows production line in real-time\n• Highlights detected defects\n• Updates defect counts continuously\n\n**Production Status:**\n• Current product variant displayed at top\n• Real-time defect counting\n• System status indicators\n\n**Alerts:**\n• High defect count warnings\n• Hardware issue notifications\n• Detection system alerts\n\n**Logs Access:**\n• Click "Logs" or "Reports" tab\n• View past production sessions\n• Export data in Excel/PDF format',
    issueType: 'monitoring',
    confidence: 0.9
  }
];

export const allPredefinedResponses = [
  ...greetings,
  ...machineOperationResponses,
  ...troubleshootingResponses,
  ...maintenanceResponses,
  ...monitoringResponses
];

export function findBestMatch(userMessage: string): PredefinedResponse | null {
  const message = userMessage.toLowerCase();
  let bestMatch: PredefinedResponse | null = null;
  let highestScore = 0;

  for (const response of allPredefinedResponses) {
    let score = 0;
    let keywordMatches = 0;

    for (const keyword of response.keywords) {
      if (message.includes(keyword.toLowerCase())) {
        keywordMatches++;
        score += keyword.length; // Longer keywords get higher weight
      }
    }

    // Calculate final score based on keyword matches and confidence
    if (keywordMatches > 0) {
      score = (keywordMatches / response.keywords.length) * response.confidence * score;
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = response;
      }
    }
  }

  // Only return if confidence is high enough
  return highestScore > 1 ? bestMatch : null;
}