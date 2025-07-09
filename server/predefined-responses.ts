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
    keywords: ['start machine', 'how to start', 'startup', 'turn on machine', 'how do i start', 'start the machine'],
    response: '**How to start the machine:**\n\n**Step 1:** Open the desktop application\n**Step 2:** Select the product variant\n**Step 3:** Set the RPM as per the product requirement\n**Step 4:** Click the "Start" button\n\nThe system will begin operation with real-time monitoring.',
    issueType: 'operation',
    confidence: 0.95
  },
  {
    keywords: ['stop machine', 'how to stop', 'shutdown', 'turn off', 'how do i stop'],
    response: '**How to stop the machine:**\n\nClick the "Stop" button on the software interface. It will safely halt all operations.\n\n**For extended downtime:**\n• Turn off the control panel power connection\n• Turn off the PC power supply\n\nThis protects the system for long-term usage.',
    issueType: 'operation',
    confidence: 0.95
  },
  {
    keywords: ['change product', 'switch variant', 'different product', 'product type', 'how can i change'],
    response: '**How to change the product type during a shift:**\n\n**Step 1:** Click "Stop"\n**Step 2:** Select a new product variant\n**Step 3:** Set RPM\n**Step 4:** Click "Start"\n\n**Note:** Only one product variant can be selected per session to ensure accuracy.',
    issueType: 'operation',
    confidence: 0.9
  },
  {
    keywords: ['technical knowledge', 'no training', 'user friendly', 'operate without training'],
    response: '**Do I need technical knowledge to use the software?**\n\nNo, the interface is user-friendly and designed for non-technical users. Basic instructions are enough, and the UI is intuitive. A short demo session is recommended.\n\n**Can I operate this system with no training?**\n\nBasic training takes under 30 minutes for operations.',
    issueType: 'operation',
    confidence: 0.9
  },
  {
    keywords: ['correct biscuit type', 'choose biscuit', 'select product'],
    response: '**How do I choose the correct biscuit type?**\n\nSelect the correct product variant from the dropdown menu or product selection panel in the interface.\n\n**Important:** The system supports all trained variants like Bourbon and Pure Magic. Only use trained products for accurate results.',
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
    keywords: ['live feed', 'camera view', 'live camera feed', 'what does the live camera show'],
    response: '**What does the live camera feed show?**\n\nIt shows the production line and biscuits in real time for visual inspection. Defects are highlighted, and counts are displayed on the side panel.',
    issueType: 'monitoring',
    confidence: 0.95
  },
  {
    keywords: ['defect count', 'how often updated', 'defect count updated'],
    response: '**How often is the defect count updated?**\n\nIt updates live as biscuits pass through the detection zone in real-time.',
    issueType: 'monitoring',
    confidence: 0.95
  },
  {
    keywords: ['defect count too high', 'high defect count', 'too many defects'],
    response: '**What if the defect count looks too high?**\n\n**Step 1:** Pause the system\n**Step 2:** Inspect product input quality\n**Step 3:** Check if the correct product variant is selected\n**Step 4:** Contact technical support if needed',
    issueType: 'monitoring',
    confidence: 0.95
  },
  {
    keywords: ['current production status', 'monitor production', 'production status'],
    response: '**Can I monitor the current production status?**\n\nYes, the live monitoring screen shows real-time operations and defect counts. The product name and variant are displayed at the top of the interface once selected.',
    issueType: 'monitoring',
    confidence: 0.9
  },
  {
    keywords: ['view logs', 'access logs', 'logs', 'past runs'],
    response: '**How can I access logs for past runs?**\n\nClick the "Logs" or "Reports" tab in the software to view all past production sessions. The logs show:\n• Start/stop times\n• Product variant\n• Total runtime\n• Defect counts\n• Rejection timestamps\n\nYou can export data in Excel or PDF format and filter by date and shift for analysis.',
    issueType: 'monitoring',
    confidence: 0.95
  },
  {
    keywords: ['system rejecting properly', 'confirm rejection', 'rejection status'],
    response: '**How can I confirm the system is rejecting properly?**\n\nCheck the ejection section physically or view the rejection status on screen. The system shows real-time rejection counts and status indicators.',
    issueType: 'monitoring',
    confidence: 0.9
  },
  {
    keywords: ['calculate efficiency', 'efficiency calculation'],
    response: '**How can I calculate efficiency?**\n\nUse this formula:\n**Efficiency = (Accepted Items / Total Items) × 100**\n\nThe system logs provide the data needed for this calculation.',
    issueType: 'monitoring',
    confidence: 0.95
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
    let totalKeywordLength = 0;

    for (const keyword of response.keywords) {
      if (message.includes(keyword.toLowerCase())) {
        keywordMatches++;
        totalKeywordLength += keyword.length;
        // Give extra weight for longer, more specific keywords
        score += keyword.length * keyword.length;
      }
    }

    // Calculate final score with better weighting
    if (keywordMatches > 0) {
      // Bonus for matching more keywords
      const keywordRatio = keywordMatches / response.keywords.length;
      // Bonus for longer, more specific matches
      const specificityBonus = totalKeywordLength / message.length;
      
      score = score * keywordRatio * response.confidence * (1 + specificityBonus);
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = response;
      }
    }
  }

  // Lower threshold and prioritize more specific matches
  return highestScore > 0.5 ? bestMatch : null;
}