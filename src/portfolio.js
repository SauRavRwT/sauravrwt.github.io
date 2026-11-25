const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "stay curious👋🏻",
  description:
    "Turning creativity into code, imagination into reality, and complexity into simplicity, one line at a time.",
  og: {
    title: "Saurav Rawat",
    type: "website",
    url: "http://sauravrwt.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Saurav Rawat",
  // The paragraph that lights up word by word on the home page.
  about:
    "I'm a Data Analyst at GlobalLogic and a front-end developer who likes both sides of the screen: cleaning messy data into reports people actually use, and building React apps that feel good to click. Along the way I interned at DRDO, maintained a custom Android ROM, published research on Stable Diffusion, and kept writing about tech, travel and life.",
  resumeLink:
    "https://drive.google.com/file/d/1JKv0_minkKZM8ZYHFFfKe8LxfqZuhG2t/view?usp=sharing",
  portfolio_repository: "https://github.com/SauRavRwT/sauravrwt.github.io",
  githubProfile: "https://github.com/SauRavRwT",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/SauRavRwT",
    fontAwesomeIcon: "fa-github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/SauRavRwT",
    fontAwesomeIcon: "fa-linkedin-in",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@balbheji",
    fontAwesomeIcon: "fa-youtube",
  },
  {
    name: "Gmail",
    link: "mailto:souravrawat142@gmail.com",
    fontAwesomeIcon: "fa-google",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rawatsensei/",
    fontAwesomeIcon: "fa-instagram",
  },
];

const skills = {
  data: [
    {
      title: "Software Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS.",
        "⚡ Developing mobile applications using Android Studio and Java.",
        "⚡ Creating application backend in Node, Express & Firebase.",
        "⚡ Integration of third party services such as Firebase.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon-plain:bootstrap",
          style: {
            color: "#712cf9",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#217059",
          },
        },
        {
          skillName: "PostMan",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#ff6c38",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            color: "#3DDC84",
          },
        },
      ],
    },
    {
      title: "Data Analyst",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Analyzing data to find useful insights.",
        "⚡ Creating visualizations using pandas and powerBI.",
        "⚡ Building and maintaining dashboards.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#00758F",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "devicon-plain:matplotlib",
          style: {
            color: "#11557C",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Data Studio",
          fontAwesomeClassname: "simple-icons:googleanalytics",
          style: {
            color: "#E37400",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing user interfaces for websites and mobile applications.",
        "⚡ Creating wireframes and prototypes using Figma and Framer.",
        "⚡ Designing user experiences that are intuitive and engaging.",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Framer",
          fontAwesomeClassname: "simple-icons:framer",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "simple-icons:canva",
          style: {
            color: "#00C4CC",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/SauRavRwT/",
    },
    {
      siteName: "GeekforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#339933",
      },
      profileLink: "https://www.geeksforgeeks.org/user/sauravrwt/",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/SauRavRwT/",
    },
    {
      siteName: "Linkedin",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0477b6",
      },
      profileLink: "https://www.linkedin.com/in/sauravrwt/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru tegh Bahadur Institute of Technology",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "gtbit_logo.png",
      alt_name: "GTBIT Delhi",
      duration: "2022 - 2025",
      grade: "CGPA 8.1 / 10",
      descriptions: [
        "I have a strong foundation in core software engineering subjects like DSA, DBMS, OS, CA, and AI, complemented by specialized training in Deep Learning, Data Science, Cloud Computing, and Full Stack Development. This blend of theory and practice enables me to analyze problems effectively and build innovative, real-world solutions.",
      ],
      website_link: "http://gtbit.ac.in",
    },
    {
      title: "Ambedkar Institute of technology",
      subtitle: "Diploma in information Technology and enabled services",
      logo_path: "ait_logo.png",
      alt_name: "AIT Delhi",
      duration: "2019 - 2022",
      grade: "CGPA 8.2 / 10",
      descriptions: [
        "During my Diploma, I built a strong technical foundation. I developed an E-Shop website as my minor project and a Web Collections app as my major project, gaining hands-on experience in web development, e-commerce, and real-world problem-solving.",
      ],
      website_link: "https://dseu.ac.in/shakarpur-i/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "GSI NVIDIA Technologies",
      subtitle: "- GSI NVIDIA",
      logo_path: "NVIDIA.png",
      certificate_link:
        "https://drive.google.com/file/d/1EGFlbZH0GlKNAcsAO2CL2X97Izgtlo7u/view?usp=sharing",
      alt_name: "GSI NVIDIA Technologies",
    },
    {
      title: "Prompt Engineering",
      subtitle: "- LinkedIn Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1nSPl-KckezWxsssItR6l6m_edAOSH-UV/view?usp=sharing",
      alt_name: "Prompt Engineering",
    },
    {
      title: "MySQL",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1cRApMI6wHpX_Yo6szYBI0OFwq4N5Nxey/view?usp=sharing",
      alt_name: "data_science",
    },
    {
      title: "GIT Workflow",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1nSPl-KckezWxsssItR6l6m_edAOSH-UV/view?usp=sharing",
      alt_name: "data_science",
    },
    {
      title: "Data Analysis",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1rTn1vrm1s6OevmOm4hGU7wqa_IHIBB4W/view?usp=sharing",
      alt_name: "data_analysis",
    },
    {
      title: "JAVA",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RCJ3vHJFwqfi_bVeq2Jeo2WBQ9ajrl1o/view?usp=sharing",
      alt_name: "JAVA",
    },
    {
      title: "Text To Image",
      subtitle: "- ICAISI 2025",
      logo_path: "icaisi.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1471GWkzoGmrHXknMFVaVH3VIKUWBlnxM/view?usp=sharing",
      alt_name: "Xiaomi Ode2Code 3.0",
    },
    {
      title: "React Development",
      subtitle: "- DRDO",
      logo_path: "drdo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10NBghFNsACk5i1oIXYa6mPzQGjMveJsi/view?usp=sharing",
      alt_name: "Xiaomi Ode2Code 3.0",
    },
    {
      title: "Python Web Development",
      subtitle: "- ICT Academy",
      logo_path: "ICT_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VDICMEVLgxRsFJhP_88azfWulVTsAWgq/view?usp=sharing",
      alt_name: "Tech Mahindra Foundation",
    },
    {
      title: "Web Development",
      subtitle: "- codsoft",
      logo_path: "codsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1F0-fBuRcgky6ZTzSctHipIaaYzCEfkeR/view?usp=sharing",
      alt_name: "Codsoft Internship",
    },
    {
      title: "Xiaomi Ode2Code 3.0",
      subtitle: "- Xiaomi",
      logo_path: "xiaomi.png",
      certificate_link:
        "https://drive.google.com/file/d/12Q0O6_-XJmxd20f5U-HzWJId_QzLZdZa/view?usp=sharing",
      alt_name: "Xiaomi Ode2Code 3.0",
    },
    {
      title: "Smart India Hackathon",
      subtitle: "- SIH",
      logo_path: "sih_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1A_C9JWzbN_bJ9wPRPZrWUr275210rRWQ/view?usp=sharing",
      alt_name: "SIH",
    },
    {
      title: "Data Structures",
      subtitle: "- geeksforgeeks",
      logo_path: "gfg_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/188eUekF1N11DW4TRwi0brrv0aDk_czyz/view?usp=sharing",
      alt_name: "DSA GeeksforGeeks",
    },
    {
      title: "Drone Technology",
      subtitle: "- Elight SPM IIITD",
      logo_path: "elightspm_logo.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1-oMluxxlZTlciML2zrOyzOEHRLbSo2J9/view?usp=sharing",
      alt_name: "Drone Technology IIITD",
    },
    {
      title: "Cybersecurity",
      subtitle: "- Cisco",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-pyD1zEo_GXos6oIUdgsL8cvaZs7jUoi/view?usp=sharing",
      alt_name: "Drone Technology IIITD",
    },
    {
      title: "Game Deveopment",
      subtitle: "- Sololearn",
      logo_path: "sololearn_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1gQMM_GJ3krUMr4L_IS0xqUWkk_atF25n/view?usp=sharing",
      alt_name: "Codsoft Internship",
    },
    {
      title: "Advaced IT",
      subtitle: "- Tech Mahindra Foundation",
      logo_path: "TMF.png",
      certificate_link:
        "https://drive.google.com/file/d/10F1pdCm3MON06taBa9aGwKnMPzvOIr0T/view?usp=sharing",
      alt_name: "Tech Mahindra Foundation",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I’ve worked on many evolving projects as a Developer, Designer, and Maintainer. I enjoy organizing events, which has led me to actively participate in several open-source communities as a representative.",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Analyst",
          company: "GlobalLogic",
          company_url: "https://www.globallogic.com/in/",
          logo_path: "globallogic_logo.png",
          duration: "Aug 2025 - Present",
          location: "Gurugram, India",
          description:
            "Excited to announce that I've started a new chapter in my career with GlobalLogic as a Data Analyst!, Looking forward to contributing to innovative projects and collaborating with a talented team. Here's to new beginnings and exciting challenges ahead!",
        },
        {
          title: "Custom Android ROM Development",
          company: "Freelancer",
          company_url: "https://www.android.com/",
          logo_path: "android_logo.png",
          duration: "Feb 2022- March 2024",
          location: "work from home",
          proof_link: "https://github.com/SauRavRwT/android_device_xiaomi_veux",
          description:
            "I maintained and optimized a custom ROM for the Redmi Note 11 Pro+ 5G, enhancing stability, performance, and user experience through targeted feature improvements and bug fixes. This project strengthened my understanding of mobile operating systems and honed my skills in system-level optimization and debugging.",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "DRDO Internship",
          company: "DRDO",
          company_url: "https://www.drdo.gov.in/drdo/",
          logo_path: "drdo_logo.png",
          duration: "July 2024 - Nov 2024",
          location: "Vishwavidyalay, India",
          description:
            "Intern at DRDO, specializing in React Development!. This incredible experience allowed me to dive deep into the world of ReactJS and further refine my skills in creating dynamic, efficient, and user-friendly web applications., I had the opportunity to learn about web security, gaining valuable insights into best practices for building secure and robust web applications. From understanding potential vulnerabilities to implementing effective security measures, this internship has been a game-changer for my development journey.",
        },
        {
          title: "CodeSoft Internship",
          company: "codsoft Pvt. Ltd.",
          company_url: "https://www.codsoft.in/",
          logo_path: "codsoft_logo.png",
          duration: "Sept 2023 - Oct 2023",
          location: "Work From Home",
          description:
            "I have worked on various tasks, including building a calculator, creating a static portfolio, and developing a blog page integrated with Firebase, among others. For more projects, you can explore my GitHub repositories. Through these experiences, I have gained a solid understanding of the basics of web development and have become proficient in using tools like VS Code, Git, GitHub, Firebase, and more.",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Aavishkar 1.0",
          company: "GTBIT",
          company_url: "http://gtbit.ac.in/",
          logo_path: "gtbit_logo.png",
          duration: "23 May 2025",
          location: "Delhi, India",
          description:
            "Presented my research paper on 'Text To Pictures with using Stable Diffusion' at Aavishkar 1.0, an event organized by GTBIT. This event provided a platform for students to showcase their innovative ideas and research work. My paper focused on the application of Stable Diffusion models in generating images from textual descriptions, highlighting the advancements in AI and machine learning.",
        },
        {
          title: "SIH 2023",
          company: "Smart india Hackathon",
          company_url: "https://sih.gov.in/",
          logo_path: "sih_logo.png",
          duration: "Aug 2023 - Oct 2023",
          location: "Delhi, India",
          description:
            "We developed a project centered on a pre-trial conference using ReactJS, Bootstrap 5, and Firebase. This initiative was part of a competitive event where our team excelled by clearing the college round and securing a position among the top 10 teams. The experience showcased our technical proficiency and collaborative skills, contributing to the project's success.",
        },
      ],
    },
  ],
};

// Projects Page

// Case studies shown as big cards on Home + Projects.
// Details come from the resume (src/assets/docs) and each GitHub repo.
// `image` lives in src/assets/images/work/ (real screenshots of the live demos).
const featuredProjects = [
  {
    name: "DevLens",
    tagline: "AI GitHub portfolio analyzer for recruiters and developers",
    year: "2026",
    stack: ["React 19", "Vite", "Gemini API", "GitHub REST API"],
    highlights: [
      "Fetches any public GitHub profile and computes a portfolio health score from stars, forks, language weights and recent commit activity.",
      "Gemini 1.5 Flash writes a career report: technical strengths, STAR-format resume bullets tied to real repo names, and next skills to learn.",
      "README audit grades documentation A+ to F, with an offline heuristic fallback when no API key is set.",
    ],
    image: "devlens.webp",
    live: "https://sauravrwt.github.io/DevLens/",
    code: "https://github.com/SauRavRwT/DevLens",
  },
  {
    name: "Team Task Manager",
    tagline: "Role-based project and task tracking, in real time",
    year: "2026",
    stack: ["React", "Firebase Auth", "Realtime DB"],
    highlights: [
      "Admins create projects and assign tasks; members can only update their own task status, enforced in both the UI and the database rules.",
      "Fixed a stale-closure bug in Firebase listeners with a useRef pattern, and auth persistence on reload via onAuthStateChanged + a PrivateRoute.",
      "Deployed on GitHub Pages with the 404-redirect trick; RTDB security rules scope reads and writes by role.",
    ],
    image: "teamtaskmanager.webp",
    live: "https://sauravrwt.github.io/TeamTaskManager/",
    code: "https://github.com/SauRavRwT/TeamTaskManager",
  },
  {
    name: "Text-to-Image Generator",
    tagline: "Stable Diffusion pipeline, published at ICAISI 2025",
    year: "2025",
    stack: ["Python", "Stable Diffusion", "Jupyter"],
    highlights: [
      "Generates images from natural-language prompts with Stable Diffusion, optimised to run on both CPU and GPU.",
      "The research behind it was peer-reviewed and published at ICAISI 2025 (Taylor & Francis).",
    ],
    visual: "paper",
    code: "https://github.com/SauRavRwT/text-to-img",
    paper:
      "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003654483-75/t2i-generation-using-stable-diffusion-kritika-verma-savneet-kaur-deepali-virmani-saurav-rawat?context=ubx",
  },
  {
    name: "Sentiment Analyzer",
    tagline: "Product review analysis with NLP",
    year: "2026",
    stack: ["Python", "Streamlit", "NLTK", "VADER"],
    highlights: [
      "Takes reviews from a URL, a CSV upload or pasted text and classifies sentiment with NLTK VADER.",
      "Adds aspect extraction, suspicious-review detection and summary insights across large review sets.",
      "Interactive sentiment charts and word clouds, plus an annotated CSV you can download.",
    ],
    visual: "pipeline",
    pipeline: [
      "URL · CSV · text",
      "VADER scoring",
      "Aspects & flags",
      "Charts & CSV",
    ],
    code: "https://github.com/SauRavRwT/Sentiment-Analysis",
  },
  {
    name: "Canteen Management",
    tagline: "Order food from the campus canteen, end to end",
    year: "2024",
    stack: ["React", "Firebase", "Bootstrap 5"],
    highlights: [
      "Browse products, add to cart and check out, with Firebase handling auth and real-time data.",
      "My most-starred repo on GitHub.",
    ],
    image: "canteen-management.webp",
    live: "https://sauravrwt.github.io/Canteen-Management/",
    code: "https://github.com/SauRavRwT/Canteen-Management",
  },
  {
    name: "chit-chat",
    tagline:
      "A simple chat application built with React and Python, leveraging the power of Transformers for natural language processing.",
    year: "2024",
    stack: [
      "React",
      "Firebase",
      "Transformers",
      "Python",
      "Pytorch",
      "tensorflow",
      "Mt-marian",
    ],
    image: "chitchat.webp",
    live: "https://sauravrwt.github.io/chitchat/",
    code: "https://github.com/SauRavRwT/chitchat",
  },
];

// Smaller things I've shipped — all live on GitHub Pages.
const moreWork = [
  {
    name: "LinkedOut",
    description:
      "An anonymous space to share the real stories behind leaving a job or being let go.",
    stack: ["React", "Firebase"],
    image: "linkedout.webp",
    live: "https://sauravrwt.github.io/linkedout/",
    code: "https://github.com/SauRavRwT/linkedout",
  },
  {
    name: "Art Gallery",
    description:
      "A wallpaper gallery in React with a masonry grid, powered by the Pexels API.",
    stack: ["React", "Pexels API"],
    image: "wallpaper-app.webp",
    live: "https://sauravrwt.github.io/Wallpaper-App/",
    code: "https://github.com/SauRavRwT/Wallpaper-App",
  },
  {
    name: "VisData",
    description: "Drop in an Excel, CSV or JSON file and visualise it.",
    stack: ["JavaScript"],
    image: "visdata.webp",
    live: "https://sauravrwt.github.io/visdata/",
    code: "https://github.com/SauRavRwT/visdata",
  },
  {
    name: "GenAiChatbot",
    description:
      "A intelligent chatbot designed to provide mental health support, analyze medical reports, and connect users with professional help.",
    stack: ["Python", "LLAMA 3.3", "LangChain", "Groq"],
    image: "genaichatbot.webp",
    live: "https://sauravrwt.github.io/GenAiChatBot/",
    code: "https://github.com/SauRavRwT/GenAiChatBot",
  },
  {
    name: "Songeet",
    description: "A simple, elegant online music player.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "songeet.webp",
    live: "https://sauravrwt.github.io/Songeet/",
    code: "https://github.com/SauRavRwT/Songeet",
  },
];

const publications = {
  data: [
    {
      id: "9781003654483-75",
      name: "T2I Generation Using Stable Diffusion",
      createdAt: "2025-06-13",
      description:
        "Published a research paper on T2I Generation Using Stable Diffusion at ICAISI-2025. Developed a Python-based application that leverages advanced Stable Diffusion models to generate high-quality images from textual descriptions.",
      url:
        "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003654483-75/t2i-generation-using-stable-diffusion-kritika-verma-savneet-kaur-deepali-virmani-saurav-rawat?context=ubx",
    },
  ],
};

const blogDesp = {
  title: "Blogs",
  description:
    "A place where I share my thoughts, tutorials, and experiences in web development and artificial intelligence. It’s my space to learn, explore, and grow-while sharing that journey with others.",
};

// Blog
const blog = {
  blogPosts: [
    {
      id: 0,
      title: "New Journey with GlobalLogic",
      emoji: "🎉",
      excerpt:
        "I'm excited to begin a new chapter in my career with GlobalLogic as a Data Analyst! I look forward to contributing to innovative projects, collaborating with talented professionals, and taking on new challenges as I continue to grow.",
      category: "Data Analysis",
      tags: ["PowerBi", "MySQL", "Python", "Excel"],
      date: "2025-09-01",
      readTime: "10 min read",
      featured: true,
      content: [
        "I'm excited to begin a new chapter in my career with GlobalLogic as a Data Analyst. This opportunity marks an important milestone in my professional journey, and I'm looking forward to learning, growing, and contributing to meaningful projects.",
        "In this role, I aim to use my skills in data analysis, visualization, and interpretation to uncover insights and support data-driven decision-making. I'm eager to apply tools such as Power BI, MySQL, Python, and Excel to analyze datasets and turn raw information into actionable insights.",
        "I'm also looking forward to collaborating with experienced professionals, learning from different perspectives, and contributing to the team's success. This is an exciting step forward, and I'm committed to making the most of every opportunity to learn and grow.",
      ],
    },
    {
      id: 1,
      title: "Understanding React Hooks",
      emoji: "⚛️",
      excerpt:
        "React Hooks make it easier to manage state and side effects in functional components. Explore essential hooks such as useState, useEffect, and useContext, with practical examples to understand how they work.",
      category: "Web Development",
      tags: ["React", "JavaScript", "Web Development"],
      date: "2025-08-20",
      readTime: "8 min read",
      featured: true,
      content: [
        "React Hooks changed the way developers build functional components by allowing them to use state and other React features without writing class components. In this post, we'll explore three commonly used hooks: useState, useEffect, and useContext.",
        "The useState hook allows functional components to manage state. It returns an array containing the current state value and a function to update it. For example, const [count, setCount] = useState(0) initializes a state variable named count with an initial value of 0.",
        "The useEffect hook handles side effects, such as fetching data, updating the document title, or subscribing to events. It runs after rendering, and its dependency array determines when the effect should run again. A cleanup function can also help prevent unwanted behavior when subscriptions or other effects need to be removed.",
        "The useContext hook allows components to access shared values without passing props through every level of the component tree. It is particularly useful for managing shared information such as themes, authentication details, or application settings.",
        "Understanding these hooks makes React development more organized and efficient. Start with simple examples, experiment with their behavior, and gradually combine them to build more interactive applications.",
      ],
    },
    {
      id: 2,
      title: "10 Tips to Boost Your Productivity Every Day",
      emoji: "🚀",
      excerpt:
        "Want to make better use of your time? These 10 practical strategies can help you prioritize tasks, improve focus, reduce distractions, and build a more productive daily routine.",
      category: "Productivity",
      tags: ["Productivity", "Time Management", "Self Improvement"],
      date: "2025-08-10",
      readTime: "5 min read",
      featured: true,
      content: [
        "Productivity isn't about staying busy all day; it's about making meaningful progress on what matters most. A few consistent habits can help you manage your time, maintain focus, and create a healthier balance between work and personal life.",
        "1. Prioritize tasks using the Eisenhower Matrix to distinguish between urgent and important work.",
        "2. Use the Pomodoro Technique to work in focused intervals followed by short breaks.",
        "3. Minimize distractions by silencing unnecessary notifications and creating a dedicated workspace.",
        "4. Set clear, achievable goals each day and track your progress.",
        "5. Take regular breaks to refresh your mind and maintain concentration.",
        "6. Practice mindfulness or meditation to improve focus and manage stress.",
        "7. Delegate tasks when appropriate so you can concentrate on higher-priority responsibilities.",
        "8. Use productivity tools to organize tasks, manage deadlines, and streamline your workflow.",
        "9. Maintain a healthy work-life balance to reduce stress and prevent burnout.",
        "10. Review your accomplishments at the end of the day and identify opportunities to improve.",
        "Remember, productivity is built through consistency rather than perfection. Start with a few habits, understand what works best for you, and improve your routine gradually.",
      ],
    },
    {
      id: 3,
      title: "How to Learn Anything Fast: Secrets from Memory Champions",
      emoji: "🧠",
      excerpt:
        "Discover practical techniques for learning more effectively and remembering information longer. From visualization to spaced repetition, these strategies can help you strengthen your memory and improve your learning process.",
      category: "Self Improvement",
      tags: ["Learning", "Memory", "Productivity"],
      date: "2025-07-20",
      readTime: "9 min read",
      featured: true,
      content: [
        "Learning something new doesn't always require more hours of study. Often, the difference lies in how you approach the material. Techniques such as active recall, spaced repetition, and visualization can make learning more effective and help you retain information for longer.",
        "1. Visualization: Create vivid mental images that connect new information with familiar concepts.",
        "2. Spaced Repetition: Review information at gradually increasing intervals to strengthen long-term retention.",
        "3. Chunking: Break complex information into smaller, manageable groups that are easier to understand and remember.",
        "4. Mnemonics: Use acronyms, rhymes, or meaningful associations to make information easier to recall.",
        "5. Mind Mapping: Organize ideas visually to understand the relationships between different concepts.",
        "6. Active Recall: Test yourself without looking at your notes to strengthen your ability to retrieve information.",
        "7. Teach Others: Explain a concept in your own words to identify gaps in your understanding and reinforce what you've learned.",
        "8. Sleep and Exercise: Maintain healthy sleep habits and regular physical activity to support memory and cognitive performance.",
        "The key is to combine these techniques with consistent practice. Instead of simply rereading information, challenge yourself to recall it, apply it, and explain it in your own words.",
      ],
    },
    {
      id: 4,
      title: "Why Do We Dream? Theories and Discoveries",
      emoji: "💭",
      excerpt:
        "Dreams have fascinated people for centuries. Explore scientific theories about why we dream, how dreams may relate to memory and emotions, and what researchers are still trying to understand.",
      category: "Psychology",
      tags: ["Dreams", "Sleep", "Mind"],
      date: "2025-05-10",
      readTime: "8 min read",
      featured: false,
      content: [
        "Dreams are among the most fascinating experiences of the human mind. They can feel vivid, emotional, and sometimes completely disconnected from reality. Although researchers have proposed several explanations for dreaming, there is still no single theory that explains every aspect of the experience.",
        "1. The Activation-Synthesis Theory: This theory suggests that the brain attempts to make sense of neural activity during sleep, creating the stories and experiences we perceive as dreams.",
        "2. The Problem-Solving Theory: Some researchers suggest that dreams may help us explore ideas, process experiences, or approach problems from different perspectives.",
        "3. The Emotional Regulation Theory: Dreams may play a role in processing emotional experiences and integrating them with existing memories.",
        "Dreaming remains an active area of scientific research. While some explanations focus on memory and emotions, others emphasize the brain's activity during sleep. Understanding dreams requires recognizing both what research has established and what remains uncertain.",
      ],
    },
    {
      id: 5,
      title: "Building My Own Writing Space: Where Thoughts Find a Home",
      emoji: "✍️",
      excerpt:
        "Words often express what thoughts struggle to explain. This is my space to share shayari, poetry, and reflections inspired by everyday experiences, emotions, and moments of life.",
      category: "Writing",
      tags: ["Shayari", "Poems", "Creative Writing"],
      date: "2025-11-14",
      readTime: "4 min read",
      featured: true,
      content: [
        "Writing has always been a way to give shape to thoughts and emotions that are sometimes difficult to express. Through shayari and poetry, I explore the little moments, unspoken feelings, and experiences that make life meaningful.",
        "This space is a collection of my words, reflections, and creative expressions. Some pieces may come from personal experiences, while others may emerge from simple observations of everyday life.",
        "Whether it's a couplet about love, a verse about heartbreak, or a reflection on life, every piece carries a feeling worth expressing. I hope these words resonate with readers and offer them a moment to pause, reflect, and connect with their own emotions.",
      ],
    },
    {
      id: 6,
      title: "Nainital Diaries",
      emoji: "🏔️",
      excerpt:
        "I'd heard countless stories about Nainital's natural beauty, but I'd never experienced it myself. So, I decided to visit this beautiful hill town and discover its lakes, mountains, and peaceful surroundings firsthand.",
      category: "Travel",
      tags: ["Nainital", "Uttarakhand", "Travel"],
      date: "2026-07-19",
      readTime: "8 min read",
      featured: true,
      content: [
        "I'd never visited Nainital before. I'd only heard stories from friends and family about its beautiful lake, scenic mountains, and peaceful atmosphere. Curious to experience it for myself, I finally decided to visit this charming hill town.",
        "Nainital welcomed me with breathtaking views and a refreshing atmosphere. The lake was beautiful, the surrounding mountains looked majestic, and the scenery offered plenty of opportunities to slow down and appreciate nature.",
        "I spent time exploring the town, enjoying the views, and taking in the atmosphere. What made the experience special wasn't just the destination itself, but also the feeling of discovering a place I'd heard so much about.",
        "Travel reminds us that some experiences are best understood firsthand. Nainital was more than a place to visit; it was an opportunity to step away from routine, appreciate nature, and create memories worth revisiting.",
      ],
    },
    {
      id: 7,
      title: "Learning AI: My Journey, Challenges, and Discoveries",
      emoji: "🧠",
      excerpt:
        "Learning artificial intelligence is a journey filled with new concepts, practical experiments, and unexpected challenges. In this blog, I share what I'm learning, the obstacles I encounter, and the discoveries that shape my understanding of AI.",
      category: "AI",
      tags: ["AI", "Machine Learning", "Deep Learning"],
      date: "2026-10-26",
      readTime: "8 min read",
      featured: true,
      content: [
        "Artificial intelligence can seem overwhelming when you're just getting started. There are countless concepts, tools, and technologies to explore. I've found it helpful to approach AI step by step, starting with the fundamentals and gradually building toward more complex ideas.",
        "One of the first things to understand is the relationship between artificial intelligence, machine learning, and deep learning. AI is the broader field of building systems that perform tasks associated with intelligence. Machine learning enables systems to identify patterns in data, while deep learning uses multilayered neural networks to learn more complex representations.",
        "Building a strong foundation is essential. Basic Python programming, data handling, statistics, and linear algebra provide the tools needed to understand many AI concepts. Rather than waiting until I know everything, I prefer learning the theory alongside small practical experiments.",
        "A useful starting project is to work with a small dataset, explore its patterns, and train a simple machine learning model to make predictions. Comparing those predictions with actual outcomes helps explain the complete workflow, from preparing data and selecting a model to evaluating its performance.",
        "One of the biggest challenges in AI is understanding that a model can produce impressive results without being genuinely reliable. Data quality, overfitting, biased samples, and inappropriate evaluation metrics can all affect performance. Using separate training and test datasets and examining errors carefully are important steps toward building more trustworthy models.",
        "Every experiment offers an opportunity to learn. Trying different models, comparing results, investigating mistakes, and documenting observations gradually builds a deeper understanding of how AI systems work and where their limitations lie.",
        "This blog marks the beginning of my AI learning journey. As I explore more concepts and build practical projects, I'll continue sharing my progress, challenges, and discoveries. The goal isn't to learn every tool at once, but to develop the skills and understanding needed to solve real-world problems with AI.",
      ],
    },
  ],
};

const writer = {
  title: "writerfromhill",
  subtitle:
    "I share shayari and poems inspired by everyday thoughts. Visit my page to read short pieces and couplets that reflect life and mood.",
  link: "https://writerfromhill.vercel.app/",
};

// Contact Page
const contactPageData = {
  contactSection: {
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web, IT, React, Android development.",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  publications,
  featuredProjects,
  moreWork,
  blog,
  blogDesp,
  writer,
  contactPageData,
};
