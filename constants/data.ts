export const personalData = {
  name: "Samuel Simiyu",
  title: "Full-Stack Developer",
  location: "Nairobi, Kenya",
  email: "samuelsimiyu@example.com",
  phone: "+254 700 000 000",
  bio: "Passionate full-stack developer with 5+ years of experience building scalable web and mobile applications. Worldskills Gold Medalist with expertise in React, Laravel, and React Native. I help businesses transform their ideas into powerful digital solutions.",
  profileImage: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  social: {
    github: "https://github.com/samuelsimiyu",
    linkedin: "https://linkedin.com/in/samuelsimiyu",
    email: "mailto:samuelsimiyu@example.com",
  }
};

export const titles = [
  "Full-Stack Developer",
  "Digital Creator", 
  "React Wrangler",
  "Laravel Tamer",
  "Worldskills Champion"
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "48+" },
  { label: "Global Clients", value: "25+" },
  { label: "Countries Served", value: "12+" }
];

export const experience = [
  {
    id: 1,
    title: "Systems Support & Developer",
    company: "ICORE INFORMATION SYSTEMS",
    location: "Nairobi, Kenya",
    period: "2023 - Present",
    type: "Full-time",
    description: "Leading development of enterprise software solutions and providing technical support for mission-critical systems. Developed multiple web applications serving thousands of users.",
    technologies: ["Laravel", "React", "MySQL", "AWS", "Docker"],
    achievements: [
      "Reduced system downtime by 40% through proactive monitoring",
      "Developed automated deployment pipeline saving 15 hours/week",
      "Led team of 4 developers on major ERP implementation"
    ]
  },
  {
    id: 2,
    title: "Software Developer",
    company: "TechSolutions Kenya",
    location: "Nairobi, Kenya", 
    period: "2021 - 2023",
    type: "Full-time",
    description: "Developed custom web applications and mobile solutions for various clients across different industries including healthcare, finance, and e-commerce.",
    technologies: ["React", "Node.js", "React Native", "PostgreSQL", "MongoDB"],
    achievements: [
      "Built healthcare management system serving 10,000+ patients",
      "Delivered 12 mobile apps with 4.8+ app store ratings",
      "Increased client satisfaction scores by 35%"
    ]
  },
  {
    id: 3,
    title: "Web Master",
    company: "Digital Marketing Agency",
    location: "Nairobi, Kenya",
    period: "2020 - 2021", 
    type: "Full-time",
    description: "Managed web development projects and led digital transformation initiatives for SME clients. Specialized in SEO optimization and performance enhancement.",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "SEO Tools"],
    achievements: [
      "Improved average site speed by 60%",
      "Increased organic traffic by 150% for client websites",
      "Managed 25+ client websites simultaneously"
    ]
  },
  {
    id: 4,
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2019 - Present",
    type: "Freelance",
    description: "Providing end-to-end development services for international clients. Specializing in modern web technologies and mobile app development.",
    technologies: ["React", "Vue.js", "Laravel", "React Native", "Firebase"],
    achievements: [
      "Completed 30+ projects for global clients",
      "Maintained 5-star rating on freelance platforms",
      "Generated $50K+ in freelance revenue"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    title: "WorldSkills Gold Medal",
    organization: "WorldSkills International",
    year: "2022",
    description: "Gold medalist in Web Development competition representing Kenya"
  },
  {
    id: 2,
    title: "AWS Certified Developer",
    organization: "Amazon Web Services",
    year: "2023",
    description: "Associate level certification for AWS development"
  }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Vue.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML5/CSS3", level: 95 }
  ],
  backend: [
    { name: "Laravel/PHP", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python/Django", level: 75 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 70 },
    { name: "Express.js", level: 80 }
  ],
  database: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Redis", level: 75 },
    { name: "Firebase", level: 85 },
    { name: "Database Design", level: 90 }
  ],
  mobile: [
    { name: "React Native", level: 85 },
    { name: "Mobile UI/UX", level: 80 },
    { name: "App Store Deploy", level: 85 },
    { name: "Mobile APIs", level: 80 },
    { name: "Push Notifications", level: 75 },
    { name: "Mobile Testing", level: 80 }
  ],
  devops: [
    { name: "AWS", level: 75 },
    { name: "Docker", level: 80 },
    { name: "Git/GitHub", level: 95 },
    { name: "CI/CD", level: 75 },
    { name: "Linux/Ubuntu", level: 85 },
    { name: "Server Management", level: 80 }
  ],
  tools: [
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 90 },
    { name: "Figma", level: 75 },
    { name: "SEO Optimization", level: 85 },
    { name: "Performance Opt.", level: 85 },
    { name: "Testing", level: 80 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "AfyaBora Healthcare System",
    category: "Healthcare",
    description: "Comprehensive healthcare management platform connecting patients, doctors, and healthcare facilities across Kenya. Features include appointment booking, medical records, telemedicine, and USSD integration for feature phone users.",
    technologies: ["Laravel", "React Native", "PostgreSQL", "USSD Gateway", "M-Pesa API"],
    features: [
      "Multi-platform patient management",
      "Telemedicine consultations",
      "USSD integration for rural areas",
      "M-Pesa payment integration",
      "Real-time notifications"
    ],
    platforms: ["iOS", "Android", "Web"],
    status: "Live",
    github: "https://github.com/samuelsimiyu/afyabora",
    demo: "https://afyabora.com",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: "AI Prompt Studio",
    category: "AI/SaaS",
    description: "Advanced AI content creation platform helping businesses generate high-quality content using GPT models. Features prompt templates, content optimization, and collaborative workspace.",
    technologies: ["React 18", "TypeScript", "OpenAI API", "Node.js", "MongoDB"],
    features: [
      "Advanced prompt engineering",
      "Content optimization tools",
      "Team collaboration features",
      "Template marketplace",
      "Usage analytics"
    ],
    platforms: ["Web"],
    status: "Live",
    github: "https://github.com/samuelsimiyu/ai-prompt-studio",
    demo: "https://aiprompt.studio",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: "OpenSalary Platform",
    category: "Data/Analytics",
    description: "Salary transparency platform allowing professionals to anonymously share and compare compensation data across different industries and experience levels in Kenya and globally.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js", "Tailwind CSS"],
    features: [
      "Anonymous salary sharing",
      "Industry benchmarking",
      "Experience-based analytics",
      "Location-based comparisons",
      "Career progression insights"
    ],
    platforms: ["Web"],
    status: "Live",
    github: "https://github.com/samuelsimiyu/opensalary",
    demo: "https://opensalary.co.ke",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: "ShwariPay Gateway",
    category: "Fintech",
    description: "M-Pesa payment gateway integration for e-commerce platforms, enabling seamless mobile money transactions for online businesses across East Africa.",
    technologies: ["PHP", "PrestaShop", "M-Pesa API", "MySQL", "JavaScript"],
    features: [
      "Seamless M-Pesa integration",
      "Real-time payment processing",
      "Transaction monitoring",
      "Merchant dashboard",
      "Multi-currency support"
    ],
    platforms: ["Web", "API"],
    status: "Live",
    github: "https://github.com/samuelsimiyu/shwaripay",
    demo: "https://shwaripay.com",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    title: "ZKTeco Attendance Logger",
    category: "HR/Enterprise",
    description: "Biometric attendance management system integrating with ZKTeco devices to automate employee time tracking and generate comprehensive HR reports.",
    technologies: ["Python", "ZKTime SDK", "MySQL", "Django", "Bootstrap"],
    features: [
      "Biometric device integration",
      "Automated attendance tracking",
      "Comprehensive reporting",
      "Employee self-service portal",
      "HR analytics dashboard"
    ],
    platforms: ["Web", "Desktop"],
    status: "Live",
    github: "https://github.com/samuelsimiyu/zkteco-logger",
    demo: "https://demo.zkattendance.com",
    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Vue.js, and Laravel. From simple websites to complex enterprise solutions.",
    icon: "Code",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions", 
      "API Development",
      "Database Design",
      "SEO Optimization"
    ],
    startingPrice: "$500"
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps using React Native. Complete app store deployment and maintenance included.",
    icon: "Smartphone",
    features: [
      "iOS & Android Apps",
      "Cross-platform Development",
      "App Store Deployment",
      "Push Notifications",
      "Offline Functionality"
    ],
    startingPrice: "$1,500"
  },
  {
    id: 3,
    title: "Digital Products",
    description: "End-to-end digital product development from concept to launch. Includes UI/UX design, development, and marketing strategy.",
    icon: "Rocket",
    features: [
      "Product Strategy",
      "UI/UX Design",
      "MVP Development",
      "User Testing",
      "Go-to-Market Strategy"
    ],
    startingPrice: "$2,500"
  },
  {
    id: 4,
    title: "Technical Consulting",
    description: "Expert technical guidance for your projects. Architecture review, technology selection, and development best practices.",
    icon: "Users",
    features: [
      "Architecture Review",
      "Technology Selection",
      "Code Auditing",
      "Performance Optimization",
      "Team Mentoring"
    ],
    startingPrice: "$100/hour"
  }
];

export const gameQuestions = [
  {
    id: 1,
    difficulty: "Easy",
    question: "What is the correct way to create a component in React?",
    options: [
      "function MyComponent() { return <div>Hello</div>; }",
      "const MyComponent = <div>Hello</div>;",
      "class MyComponent extends Component { render() { return 'Hello'; } }",
      "MyComponent = () => { return 'Hello'; }"
    ],
    correct: 0,
    explanation: "React components are functions or classes that return JSX elements."
  },
  {
    id: 2,
    difficulty: "Medium", 
    question: "Which HTTP method is idempotent?",
    options: ["POST", "PUT", "DELETE", "All of the above"],
    correct: 1,
    explanation: "PUT is idempotent - making the same request multiple times has the same effect."
  },
  {
    id: 3,
    difficulty: "Hard",
    question: "What is the time complexity of finding an element in a balanced binary search tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 1,
    explanation: "In a balanced BST, we can eliminate half the nodes at each level, giving O(log n) complexity."
  }
];