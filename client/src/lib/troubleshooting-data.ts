export interface TroubleshootingStep {
  id: number;
  description: string;
}

export interface TroubleshootingIssue {
  type: "camera" | "plc" | "runtime";
  title: string;
  description: string;
  steps: TroubleshootingStep[];
  keywords: string[];
}

export const troubleshootingData: TroubleshootingIssue[] = [
  {
    type: "camera",
    title: "Camera Connection Issue",
    description:
      "Steps to resolve camera connectivity problems in the ML ejection system",
    steps: [
      {
        id: 1,
        description:
          "Go to the specific line (location) in the variant area where the camera setup is installed.",
      },
      { id: 2, description: "Check the TECASOFT control panel and open it." },
      {
        id: 3,
        description: "Inside the control panel, locate the Ethernet switch.",
      },
      {
        id: 4,
        description:
          "Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, this may signal a disconnection or fault.",
      },
      {
        id: 5,
        description:
          "If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them firmly.",
      },
      {
        id: 6,
        description:
          "Cross-check each Ethernet connection to ensure every wire is properly and securely connected.",
      },
      { id: 7, description: "Go to the AC room where the system is located." },
      { id: 8, description: "Open the Client Application on the system." },
      {
        id: 9,
        description: "Click the Refresh button inside the application.",
      },
      {
        id: 10,
        description:
          "Click the Stop button, wait for a moment, and then click the Start button again to restart the camera services.",
      },
      {
        id: 11,
        description:
          "If the issue still persists after restarting, please contact Developer Support for further assistance.",
      },
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
    description: "Steps to resolve PLC connectivity and disconnection problems",
    steps: [
      {
        id: 1,
        description:
          "Go to the specific line (location) in the variant area where the PLC setup is installed.",
      },
      {
        id: 2,
        description:
          "Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.",
      },
      {
        id: 3,
        description: "Inside the control panel, locate the Ethernet switch.",
      },
      {
        id: 4,
        description:
          "Observe the lights on the Ethernet switch: If all lights are blinking fast, it indicates proper connectivity. If lights are not blinking properly, it may signal a disconnection or fault.",
      },
      {
        id: 5,
        description:
          "If abnormal blinking is noticed, unplug the Ethernet cables and re-plug them securely.",
      },
      {
        id: 6,
        description:
          "Cross-check all Ethernet connections to ensure every wire is properly and securely connected.",
      },
      {
        id: 7,
        description:
          "Go to the AC room where the main system is located. Cross-check whether the router's Ethernet wires are connected properly.",
      },
      { id: 8, description: "Open the Client Application on the system." },
      { id: 9, description: "Click the Refresh button in the application." },
      {
        id: 10,
        description:
          "Click the Stop and OK button, wait for a moment, then click the Start and OK button to reinitialize the PLC connection.",
      },
      {
        id: 11,
        description:
          "If the issue still persists after these steps, please contact Developer Support for further assistance.",
      },
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
      {
        id: 1,
        description:
          "Go to the specific line (location) in the variant area where the PLC setup is installed.",
      },
      {
        id: 2,
        description:
          "Check the TECASOFT control panel and open it. Confirm whether the control panel is ON or OFF. If it is OFF, turn ON the control panel.",
      },
      {
        id: 3,
        description: "Go to the AC room where the main system is located.",
      },
      { id: 4, description: "Open the Client Application on the system." },
      { id: 5, description: "Click the Refresh button in the application." },
      {
        id: 6,
        description:
          "Click the Stop and OK button, wait for a moment, then click the Start and OK button to restart the application.",
      },
      {
        id: 7,
        description:
          "If the error still appears, restart the PC and then run the Client Application again.",
      },
      {
        id: 8,
        description:
          "If the issue still persists after all the above steps, please contact Developer Support for further assistance.",
      },
    ],
    keywords: ["runtime", "error", "tcp", "socket", "iso", "send tcp"],
  },
];

export const teamMembersData = [
  {
    name: "Aijaz Ahmad",
    role: "Manager",
    phone: "+91 99160 39396",
    email: "aijaz@techasoft.com",
    languages: ["English", "Hindi"],
    specialties: ["System oversight", "Escalation support"],
    description: "System oversight and escalation support",
  },
  {
    name: "Anil Kumar",
    role: "Team Lead",
    phone: "+91 96763 75455",
    email: "anil@techasoft.com",
    languages: ["English", "Hindi", "Telugu"],
    specialties: ["Technical support", "Multi-language support"],
    description: "English/Hindi/Telugu Support",
  },
  {
    name: "Siva Sankar",
    role: "AI ML Specialist",
    phone: "+91 63051 28148",
    email: "siva@techasoft.com",
    languages: ["English", "Telugu"],
    specialties: ["Machine Learning", "AI Development"],
    description: "AI/ML technical specialist",
  },
  {
    name: "Raghu Vamsi",
    role: "AI ML Specialist",
    phone: "+91 79936 62188",
    email: "raghu@techasoft.com",
    languages: ["English", "Telugu"],
    specialties: ["Machine Learning", "Computer Vision"],
    description: "AI/ML technical specialist",
  },
  {
    name: "Palani",
    role: "AI ML Specialist",
    phone: "+91 88388 41878",
    email: "palani@techasoft.com",
    languages: ["English", "Tamil"],
    specialties: ["Machine Learning", "Data Analysis"],
    description: "AI/ML technical specialist",
  },
  {
    name: "Suhas",
    role: "AI ML Specialist",
    phone: "+91 63618 92343",
    email: "suhas@techasoft.com",
    languages: ["English", "Hindi"],
    specialties: ["Machine Learning", "System Integration"],
    description: "AI/ML technical specialist",
  },
  {
    name: "Biswajit",
    role: "AI ML Specialist",
    phone: "+91 79788 31898",
    email: "biswajit@techasoft.com",
    languages: ["English", "Hindi"],
    specialties: ["Machine Learning", "Backend Development"],
    description: "AI/ML technical specialist",
  },
];

export const maintenanceData = [
  {
    title: "Daily Air Supply Check",
    frequency: "daily",
    priority: "high",
    description: "Verify proper air connections and supply to rejection system",
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
    description: "Clean camera lens during line breaks for optimal vision",
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
  {
    title: "Bulk Biscuit Handling Adjustment",
    frequency: "weekly",
    priority: "medium",
    description: "Adjust rejection nozzle system for optimal performance",
    estimatedDuration: 20,
    steps: [
      "Monitor for biscuits coming in bulk or getting stuck",
      "Use the easy adjustable rejection nozzle system",
      "Adjust using 6mm Allen key for smooth biscuit flow",
      "Test rejection accuracy after adjustment",
      "Document adjustment settings for future reference",
    ],
  },
];
