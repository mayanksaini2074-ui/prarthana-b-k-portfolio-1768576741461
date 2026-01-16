import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Prarthana B K",
    "title": "Backend Developer",
    "email": "prarthana25305@gmail.com",
    "phone": "+91 9844327203",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "location": "Bengaluru",
    "summary": "Enthusiastic Backend Developer with experience in building robust microservices and optimizing AI models. Skilled in FastAPI, MongoDB, and React, with a strong foundation in data structures and algorithms. Recognized for excellence in academic and professional achievements, and committed to continual learning and development in technology."
  },
  "experience": [
    {
      "title": "Backend Intern",
      "company": "Yahweh Software Solutions",
      "dates": "Oct 2025 - Present",
      "description": "Architected and streamlined a multi-tenant admission management microservice using FastAPI.",
      "highlights": [
        "Supported 8-stage application workflows and 10+ REST API endpoints.",
        "Reduced processing time by 70% and enabled batch handling of 100+ applications per request."
      ]
    },
    {
      "title": "AI Intern",
      "company": "Infosys Springboard",
      "dates": "Sept 2025 - Nov 2025",
      "description": "Developed a web vulnerability scanner and optimized AI models for security.",
      "highlights": [
        "Built a web vulnerability scanner with real-time dashboards and <100 ms API latency.",
        "Achieved 97.37% accuracy and 95.45% F1 score in optimizing a Random Forest classifier."
      ]
    },
    {
      "title": "Research Intern",
      "company": "DSCE",
      "dates": "Aug 2025 - Present",
      "description": "Conducting research on explainable AI for fetal anomaly detection.",
      "highlights": [
        "Annotated 100+ still frames for gestational age estimation."
      ]
    }
  ],
  "education": [
    {
      "degree": "B.E. [Computer Science]",
      "institution": "Ramaiah Institute of Technology",
      "years": "Oct 2023 – Present",
      "gpa": "9.33"
    },
    {
      "degree": "Code Without Barriers Mentee",
      "institution": "Microsoft",
      "years": "",
      "gpa": ""
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "SkyRide",
      "description": "Crafted a ride booking system using hand gestures with simulated Stripe payment.",
      "technologies": [
        "React",
        "MediaPipe",
        "Node.js",
        "Supabase"
      ],
      "link": "",
      "github": "GitHub"
    },
    {
      "name": "EquiFund",
      "description": "Created a financial app for women's education, with AI for investment recommendations and more.",
      "technologies": [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Chart.js",
        "Flask",
        "Socket.io",
        "YouTube API",
        "yfinance"
      ],
      "link": "",
      "github": "GitHub"
    },
    {
      "name": "EnterpriseOps",
      "description": "Business Intelligence Multi-Agent Platform using AI agents for automated querying.",
      "technologies": [
        "Python",
        "ADK",
        "REST APIs"
      ],
      "link": "",
      "github": "GitHub"
    },
    {
      "name": "Multiagent-Agency",
      "description": "Established dashboards and a chatbot with a multi-agent system for KPI analysis.",
      "technologies": [
        "TypeScript",
        "Next.js",
        "Google ADK",
        "FastAPI"
      ],
      "link": "",
      "github": "GitHub"
    },
    {
      "name": "Employee Salary Predictor",
      "description": "Integrated an ML web app with Python and Streamlit for predicting employee salaries.",
      "technologies": [
        "Python",
        "Streamlit",
        "PostgreSQL",
        "Docker"
      ],
      "link": "",
      "github": "GitHub"
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
