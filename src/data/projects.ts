import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "DyTRec",
    overview:
      "A Dynamic Testing Recommendation tool for Unity-based Virtual Reality software.",
    fullDescription:
      "DyTRec is a comprehensive dynamic testing recommendation framework designed specifically for Unity-based Virtual Reality applications. The tool analyzes VR software characteristics and provides tailored testing strategy recommendations to help developers choose the most appropriate testing approaches for their specific VR projects. By leveraging machine learning and empirical analysis, DyTRec significantly improves testing efficiency and effectiveness in VR development.",
    status: "Disseminated",
    keywords: ["VR Testing", "Unity", "Software Engineering"],
    image:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop",
    publications: [
      {
        id: "p1-1",
        type: "paper",
        title: "Utilizing Generative AI for VR Exploration Testing: A Case Study",
        authors: "Xue Qin, Jane Smith, John Doe",
        venue: "VARSE'24 Workshop at ASE 2024",
        year: 2024,
        url: "#",
        date: "2024-10",
      },
      {
        id: "p1-2",
        type: "tool",
        name: "DyTRec Tool",
        description:
          "Open-source implementation of the DyTRec framework with documentation and examples.",
        demoLink: "#",
        linkType: "github",
        date: "2024-08",
      },
    ],
  },
  {
    id: 2,
    title: "VR Accessibility Analyzer",
    overview:
      "Automated tool for analyzing accessibility issues in Virtual Reality applications.",
    fullDescription:
      "The VR Accessibility Analyzer is an innovative tool that automatically detects and reports accessibility issues in Virtual Reality applications. It focuses on critical aspects such as motion sickness triggers, user comfort metrics, and inclusive design violations. The analyzer provides actionable recommendations to help developers create more accessible VR experiences for users with diverse abilities and needs.",
    status: "Evaluation & Validation",
    keywords: ["Accessibility", "VR", "Inclusive Design"],
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=600&fit=crop",
    publications: [
      {
        id: "p2-1",
        type: "paper",
        title: "Accessibility Challenges in Modern VR Applications",
        authors: "Xue Qin, Alice Johnson",
        venue: "CHI 2024",
        year: 2024,
        url: "#",
        date: "2024-05",
      },
    ],
  },
  {
    id: 3,
    title: "AI-Powered Test Generator",
    overview:
      "Leverages Large Language Models to automatically generate comprehensive test cases.",
    fullDescription:
      "This project explores the application of Large Language Models (LLMs) in automated test case generation. By analyzing code structure, documentation, and existing test patterns, the AI-powered system generates comprehensive test suites that cover edge cases and potential vulnerabilities. The tool integrates seamlessly with existing CI/CD pipelines and supports multiple programming languages.",
    status: "Active Development",
    keywords: ["AI/ML", "Testing", "LLM"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    publications: [],
  },
  {
    id: 4,
    title: "Web Accessibility Scanner",
    overview:
      "Chrome extension that scans web pages for accessibility violations.",
    fullDescription:
      "The Web Accessibility Scanner is a powerful Chrome extension that performs real-time accessibility audits of web pages. It identifies WCAG violations, provides severity ratings, and offers actionable recommendations for remediation. The tool is designed for both developers and content creators, featuring an intuitive interface and detailed reporting capabilities.",
    status: "Disseminated",
    keywords: ["Accessibility", "Web", "WCAG"],
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
    publications: [
      {
        id: "p4-1",
        type: "tool",
        name: "Web A11y Scanner Extension",
        description: "Chrome extension for automated web accessibility testing.",
        demoLink: "#",
        linkType: "website",
        date: "2023-11",
      },
      {
        id: "p4-2",
        type: "paper",
        title: "Automated Web Accessibility Testing at Scale",
        authors: "Xue Qin, Robert Brown, Sarah Lee",
        venue: "ASSETS 2023",
        year: 2023,
        url: "#",
        date: "2023-09",
      },
    ],
  },
  {
    id: 5,
    title: "Mobile App Testing Framework",
    overview:
      "Cross-platform testing framework for automated UI testing of mobile applications.",
    fullDescription:
      "This framework provides a unified approach to automated testing for both iOS and Android applications. It includes built-in accessibility checks, performance monitoring, and visual regression testing capabilities. The framework supports continuous integration and provides detailed test reports with screenshots and performance metrics.",
    status: "Active Development",
    keywords: ["Mobile", "Testing", "Cross-platform"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    publications: [
      {
        id: "p5-1",
        type: "tool",
        name: "MobileTest Framework",
        description:
          "Open-source cross-platform mobile testing framework with accessibility features.",
        demoLink: "#",
        linkType: "github",
        date: "2024-03",
      },
    ],
  },
  {
    id: 6,
    title: "Code Smell Detector",
    overview:
      "Machine learning-based tool that identifies code smells and suggests refactoring.",
    fullDescription:
      "The Code Smell Detector uses advanced machine learning algorithms trained on thousands of open-source repositories to identify code quality issues and anti-patterns. It provides context-aware refactoring suggestions and integrates with popular IDEs. The tool helps development teams maintain code quality and reduce technical debt over time.",
    status: "Disseminated",
    keywords: ["AI/ML", "Code Quality", "Refactoring"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    publications: [
      {
        id: "p6-1",
        type: "paper",
        title: "Machine Learning Approaches to Code Smell Detection",
        authors: "Xue Qin, Michael Chen, Emily Davis",
        venue: "ICSE 2023",
        year: 2023,
        url: "#",
        date: "2023-07",
      },
      {
        id: "p6-2",
        type: "tool",
        name: "CodeSmell AI",
        description:
          "IDE plugin for intelligent code smell detection and refactoring suggestions.",
        demoLink: "#",
        linkType: "github",
        date: "2023-06",
      },
    ],
  },
];
