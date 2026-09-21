export type InternshipProject = {
  number: string;
  slug: string;
  title: string;
  track: string;
  summary: string;
  technologies: readonly string[];
  work: readonly string[];
  outputs: readonly string[];
};

export const internshipProjects:
  readonly InternshipProject[] = [
    {
      number:
        "01",

      slug:
        "ai-security-training-labs",

      title:
        "AI Security Training Labs",

      track:
        "AI Security",

      summary:
        "A collection of local educational labs designed to explore how modern AI applications can fail under adversarial input and unsafe trust assumptions.",

      technologies: [
        "Python",
        "Ollama",
        "Streamlit",
        "FastAPI / Flask",
        "Docker",
        "ChromaDB",
        "LangChain",
        "SQLite"
      ],

      work: [
        "Prompt-injection scenarios",
        "Multi-level jailbreak challenges",
        "Poisoned knowledge-base experiments",
        "Model-cloning simulation",
        "Agent-compromise lab",
        "Malicious-plugin simulation",
        "AI attack-path analysis",
        "Full AI attack-chain simulation"
      ],

      outputs: [
        "Reproducible local labs",
        "Student exercises",
        "Setup and reset workflows",
        "Threat-model diagrams",
        "Assessment evidence",
        "Technical documentation"
      ]
    },

    {
      number:
        "02",

      slug:
        "purple-team-cyber-range",

      title:
        "Purple Team Cyber Range",

      track:
        "Purple Team / Detection",

      summary:
        "An isolated enterprise-style security lab combining vulnerability validation, attack-path analysis, detection engineering, risk scoring and remediation verification.",

      technologies: [
        "Docker",
        "Docker Compose",
        "FastAPI",
        "PostgreSQL",
        "Python",
        "Nmap",
        "OWASP ZAP",
        "MITRE ATT&CK"
      ],

      work: [
        "Application and network discovery",
        "Safe vulnerability validation",
        "Attack-path simulation",
        "Structured security logging",
        "Detection-rule development",
        "MITRE ATT&CK mapping",
        "Risk scoring",
        "Remediation and retesting"
      ],

      outputs: [
        "Dockerized cyber range",
        "Validation scripts",
        "Normalized findings",
        "Attack-path evidence",
        "Detection rules and alerts",
        "Before/after remediation evidence"
      ]
    },

    {
      number:
        "03",

      slug:
        "reportops",

      title:
        "No Breach ReportOps",

      track:
        "Vulnerability Management",

      summary:
        "A reporting workflow for turning scanner and manual-assessment evidence into normalized findings, remediation guidance and structured security reports.",

      technologies: [
        "Python",
        "Nmap XML",
        "OWASP ZAP",
        "JSON",
        "YAML",
        "SQLite",
        "Docker",
        "Git"
      ],

      work: [
        "Import scanner findings",
        "Record manual findings",
        "Normalize heterogeneous evidence",
        "Classify severity and priority",
        "Enrich findings with remediation guidance",
        "Track remediation state",
        "Generate delivery-ready reports"
      ],

      outputs: [
        "Unified finding schema",
        "Recommendation library",
        "Finding lifecycle workflow",
        "Executive summary",
        "Technical report",
        "Reusable assessment workspace"
      ]
    },

    {
      number:
        "04",

      slug:
        "ot-iot-sentinel",

      title:
        "OT / IoT Sentinel",

      track:
        "OT & IoT Security",

      summary:
        "A software-only monitoring lab for understanding industrial and IoT network traffic, protocol behavior and lightweight anomaly detection.",

      technologies: [
        "Node-RED",
        "Modbus TCP",
        "Python",
        "tcpdump",
        "TShark",
        "Wireshark",
        "Docker"
      ],

      work: [
        "Simulate Modbus TCP traffic",
        "Capture network telemetry",
        "Parse protocol behavior",
        "Create detection logic",
        "Identify anomalous traffic patterns",
        "Generate monitoring evidence"
      ],

      outputs: [
        "Local OT/IoT simulation",
        "Traffic captures",
        "Python parser",
        "Detection rules",
        "Monitoring views",
        "Technical report"
      ]
    },

    {
      number:
        "05",

      slug:
        "cloud-native-security",

      title:
        "Cloud-Native Security Playbook",

      track:
        "DevSecOps / Cloud",

      summary:
        "Hands-on CI/CD and container-security work focused on understanding insecure pipelines, Docker configuration, secret exposure and remediation controls.",

      technologies: [
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "Trivy",
        "Gitleaks",
        "Semgrep",
        "Git",
        "Python"
      ],

      work: [
        "CI/CD Goat exercises",
        "Historical dummy-secret discovery",
        "Workflow permission review",
        "Dockerfile security review",
        "Compose configuration analysis",
        "Container-image scanning",
        "Remediation validation"
      ],

      outputs: [
        "Reproducible CI/CD labs",
        "Pipeline findings",
        "Container findings",
        "Secret-history evidence",
        "Remediation changes",
        "Validation documentation"
      ]
    },

    {
      number:
        "06",

      slug:
        "appsec-rulesmith",

      title:
        "AppSec Rulesmith",

      track:
        "Application Security",

      summary:
        "A custom application-security rules project combining vulnerable demo behavior, structured rules, control cases and machine-readable evidence.",

      technologies: [
        "Python",
        "Flask",
        "JSON",
        "Automated tests",
        "Security rules",
        "Git"
      ],

      work: [
        "Design a security-rule schema",
        "Build vulnerable demonstration routes",
        "Create positive vulnerability cases",
        "Create negative control cases",
        "Automate validation",
        "Capture structured evidence"
      ],

      outputs: [
        "Rule definitions",
        "Vulnerable Flask application",
        "Control tests",
        "Automated validation script",
        "Structured security events",
        "Evidence dataset"
      ]
    },

    {
      number:
        "07",

      slug:
        "securebank-java-analysis",

      title:
        "SecureBank Java Security Analysis",

      track:
        "Reverse Engineering / AppSec",

      summary:
        "A Java application-analysis exercise focused on tracing authentication and authorization behavior through compiled application logic and runtime validation.",

      technologies: [
        "Java",
        "Spring",
        "JAR analysis",
        "HTTP",
        "Authentication flows",
        "Authorization testing"
      ],

      work: [
        "Review application structure",
        "Trace authentication filters",
        "Inspect authorization decisions",
        "Identify security-control gaps",
        "Validate findings in an isolated environment",
        "Document remediation guidance"
      ],

      outputs: [
        "Application map",
        "Security findings",
        "Runtime evidence",
        "Control-flow analysis",
        "Remediation recommendations"
      ]
    },

    {
      number:
        "08",

      slug:
        "webstrike",

      title:
        "No Breach WebStrike",

      track:
        "Web Penetration Testing",

      summary:
        "An isolated web-security assessment lab that takes interns through application mapping, manual validation, evidence collection, remediation and retesting.",

      technologies: [
        "Docker",
        "OWASP Juice Shop",
        "Burp Suite",
        "curl",
        "Postman / Bruno",
        "Nmap",
        "Python",
        "Git"
      ],

      work: [
        "HTTP and browser-security fundamentals",
        "Application attack-surface mapping",
        "Authentication and session testing",
        "Authorization and IDOR/BOLA analysis",
        "Injection testing",
        "API-security analysis",
        "Configuration review",
        "Safe automation and retesting"
      ],

      outputs: [
        "Dockerized lab",
        "Endpoint inventory",
        "API matrix",
        "Evidence repository",
        "Structured findings",
        "Automated checker",
        "Pentest report",
        "Retest evidence"
      ]
    }
  ];

export const internshipMethod = [
  {
    number:
      "01",

    title:
      "Build",

    description:
      "Interns create or reproduce a controlled technical environment rather than working only from theoretical exercises."
  },
  {
    number:
      "02",

    title:
      "Understand",

    description:
      "The project requires mapping system behavior, architecture, data flows, controls and expected security boundaries."
  },
  {
    number:
      "03",

    title:
      "Validate",

    description:
      "Security hypotheses are tested safely inside authorized local or isolated lab environments."
  },
  {
    number:
      "04",

    title:
      "Detect",

    description:
      "Where relevant, interns work with telemetry, detection rules, logs, indicators and validation evidence."
  },
  {
    number:
      "05",

    title:
      "Fix",

    description:
      "Projects go beyond finding weaknesses by considering remediation, hardening and security-control improvements."
  },
  {
    number:
      "06",

    title:
      "Document",

    description:
      "Each technical project emphasizes reproducibility, evidence, reporting and communication of the work performed."
  }
] as const;

export const internshipPublicNote =
  "The projects shown here describe educational and internal laboratory work. Security testing is performed only in authorized, isolated environments using synthetic or deliberately vulnerable systems. No confidential client systems, credentials or private assessment data are published.";

export const internshipContributorNote =
  "Contributor names are intentionally omitted from this public showcase unless publication permission has been provided. The focus of this page is the technical work, learning process and project outputs.";
