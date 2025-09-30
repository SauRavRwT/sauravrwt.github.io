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
  logo_name: "SauravRawat",
  nickname: "Balbheji",
  subTitle:
    "I'm Web Developer and UI/UX Designer from Delhi, India working in web development. My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.",
  resumeLink:
    "https://drive.google.com/file/d/1W_sMhwXlFd8ydlfoEGi3e5SvwpuLXkit/view?usp=sharing",
  portfolio_repository: "https://github.com/SauRavRwT/sauravrwt.github.io",
  githubProfile: "https://github.com/SauRavRwT",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/SauRavRwT",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/SauRavRwT",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@balbheji",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:souravrawat142@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#EA4235",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rawatsensei/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#FF0E48",
  },
];

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Bootstrap and React.",
        "⚡ Developing mobile applications using android apps using Kotlin",
        "⚡ Creating application backend in Node-Express & Firebase",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
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
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon-plain:bootstrap",
          style: {
            color: "#712cf9",
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
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "PostMan",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#ff6c38",
          },
        },
      ],
    },
    {
      title: "Data Analyst",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Analyzing data to find useful insights.",
        "⚡ Creating visualizations using tableau and powerBI.",
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
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        // {
        //   skillName: "R",
        //   fontAwesomeClassname: "simple-icons:r",
        //   style: {
        //     color: "#276DC3",
        //   },
        // },
        // {
        //   skillName: "Tableau",
        //   fontAwesomeClassname: "simple-icons:tableau",
        //   style: {
        //     color: "#E97627",
        //   },
        // },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
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
      descriptions: [
        "I have a solid foundation in software engineering, having studied core subjects such as Data Structures, Algorithms, Database Management Systems (DBMS), Operating Systems (OS), Computer Architecture (CA), and Artificial Intelligence (AI). Additionally, I have enhanced my technical skills by completing specialized courses in Deep Learning, Data Science, Cloud Computing, and Full Stack Development. These experiences have equipped me with a comprehensive understanding of both fundamental concepts and advanced technologies, enabling me to analyze problems effectively and design innovative solutions. My diverse knowledge base bridges the gap between theoretical learning and practical applications, preparing me to excel in dynamic and multidisciplinary environments.",
      ],
      website_link: "http://gtbit.ac.in",
    },
    {
      title: "Ambedkar Institute of technology",
      subtitle: "Diploma in information Technology and enabled services",
      logo_path: "ait_logo.png",
      alt_name: "AIT Delhi",
      duration: "2019 - 2022",
      descriptions: [
        "I hold a Diploma in Information Technology & Enabled Services, which has provided me with a strong technical foundation. During my academic journey, I worked on an E-Shop website as part of my minor project, gaining hands-on experience in web development and e-commerce platforms. For my major project, I developed a Web Collections application, further honing my skills in designing and implementing functional web-based solutions. These projects allowed me to apply my technical knowledge in real-world scenarios, enhancing my problem-solving abilities and strengthening my expertise in web technologies.",
      ],
      website_link: "https://dseu.ac.in/shakarpur-i/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "JAVA",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RCJ3vHJFwqfi_bVeq2Jeo2WBQ9ajrl1o/view?usp=sharing",
      alt_name: "The Complete 2024 Web Development Bootcamp",
      color_code: "",
    },
    {
      title: "Text To Image",
      subtitle: "- ICAISI 2025",
      logo_path: "icaisi.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1471GWkzoGmrHXknMFVaVH3VIKUWBlnxM/view?usp=sharing",
      alt_name: "Xiaomi Ode2Code 3.0",
      color_code: "#fff",
    },
    {
      title: "React Development",
      subtitle: "- DRDO",
      logo_path: "drdo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/10NBghFNsACk5i1oIXYa6mPzQGjMveJsi/view?usp=sharing",
      alt_name: "Xiaomi Ode2Code 3.0",
      color_code: "#fff",
    },
    {
      title: "Python Web Development",
      subtitle: "- ICT Academy",
      logo_path: "ICT_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VDICMEVLgxRsFJhP_88azfWulVTsAWgq/view?usp=sharing",
      alt_name: "Tech Mahindra Foundation",
      color_code: "#fff",
    },
    {
      title: "Web Development",
      subtitle: "- codsoft",
      logo_path: "codsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1F0-fBuRcgky6ZTzSctHipIaaYzCEfkeR/view?usp=sharing",
      alt_name: "Codsoft Internship",
      color_code: "#fff",
    },
    {
      title: "Xiaomi Ode2Code 3.0",
      subtitle: "- Xiaomi",
      logo_path: "xiaomi.png",
      certificate_link:
        "https://drive.google.com/file/d/12Q0O6_-XJmxd20f5U-HzWJId_QzLZdZa/view?usp=sharing",
      alt_name: "Xiaomi Ode2Code 3.0",
      color_code: "#fff",
    },
    {
      title: "Smart India Hackathon",
      subtitle: "- SIH",
      logo_path: "sih_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1A_C9JWzbN_bJ9wPRPZrWUr275210rRWQ/view?usp=sharing",
      alt_name: "SIH",
      color_code: "#fff",
    },
    {
      title: "DSA in Java",
      subtitle: "- geeksforgeeks",
      logo_path: "gfg_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/188eUekF1N11DW4TRwi0brrv0aDk_czyz/view?usp=sharing",
      alt_name: "DSA in Java",
      color_code: "#fff",
    },
    {
      title: "Drone Technology",
      subtitle: "- Elight SPM IIITD",
      logo_path: "elightspm_logo.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1-oMluxxlZTlciML2zrOyzOEHRLbSo2J9/view?usp=sharing",
      alt_name: "Drone Technology IIITD",
      color_code: "#fff",
    },
    {
      title: "Cybersecurity",
      subtitle: "- Cisco",
      logo_path: "cisco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1-pyD1zEo_GXos6oIUdgsL8cvaZs7jUoi/view?usp=sharing",
      alt_name: "Drone Technology IIITD",
      color_code: "#fff",
    },
    {
      title: "Game Deveopment",
      subtitle: "- Sololearn",
      logo_path: "sololearn_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1gQMM_GJ3krUMr4L_IS0xqUWkk_atF25n/view?usp=sharing",
      alt_name: "Codsoft Internship",
      color_code: "#fff",
    },
    {
      title: "Advaced IT",
      subtitle: "- Tech Mahindra Foundation",
      logo_path: "TMF.png",
      certificate_link:
        "https://drive.google.com/file/d/10F1pdCm3MON06taBa9aGwKnMPzvOIr0T/view?usp=sharing",
      alt_name: "Tech Mahindra Foundation",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked in many evolving projects, Designer and Maintainer.I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
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
          duration: "Sept 2025 - Present",
          location: "Noida, India",
          description:
            "Excited to announce that I've started a new chapter in my career with GlobalLogic as a Data Analyst!, Looking forward to contributing to innovative projects and collaborating with a talented team. Here's to new beginnings and exciting challenges ahead!",
          color: "#0071C5",
        },
        {
          title: "Frontend Developer",
          company: "Tradeindia",
          company_url: "https://www.tradeindia.com/",
          logo_path: "tradeindia_logo.png",
          duration: "June 2025- Present",
          location: "Delhi, India",
          description:
            "I had a great experience working at TradeIndia as a Frontend Developer. During my time there, I had the opportunity to work on a variety of projects that not only challenged my skills but also helped me grow professionally. I worked closely with a talented team, contributing to the development of user-friendly and responsive interfaces. It was a rewarding environment where I learned a lot about real-world web development, performance optimization, and collaboration within a fast-paced tech team. Overall, my time at TradeIndia was both productive and enriching, and I’m grateful for the knowledge and experience I gained.",
          color: "#fc1f20",
        },
        {
          title: "Android Developer",
          company: "Freelancer",
          company_url: "https://www.android.com/",
          logo_path: "android_logo.png",
          duration: "Feb 2022- March 2024",
          location: "Delhi, India",
          description:
            "I maintained and optimized a ROM for the Redmi Note 11 Pro+ 5G, ensuring stability and implementing feature enhancements to elevate the user experience. My efforts included performance optimizations and bug resolution, which significantly improved the functionality and reliability of the Android ROM. This experience allowed me to deepen my understanding of mobile operating systems and refine my skills in system-level optimization and debugging.",
          color: "#fc1f20",
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
          location: "Vishwavidyalay",
          description:
            "I have successfully completed a 4-month internship at DRDO, specializing in React Development!. This incredible experience allowed me to dive deep into the world of ReactJS and further refine my skills in creating dynamic, efficient, and user-friendly web applications., I had the opportunity to learn about web security, gaining valuable insights into best practices for building secure and robust web applications. From understanding potential vulnerabilities to implementing effective security measures, this internship has been a game-changer for my development journey.",
          color: "#0071C5",
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
          color: "#ee3c26",
        },
        // {
        //   title: "GeeksforGeeks Course",
        //   company: "geeksforgeeks",
        //   company_url: "https://www.geeksforgeeks.org/",
        //   logo_path: "gfg_logo.png",
        //   duration: "july 2023 - Oct 2023",
        //   location: "Work from home",
        //   description:
        //     "Internship on DSA in Java, I have successfully completed a 3-month internship at GeeksforGeeks, specializing in Data Structures and Algorithms in Java. This incredible experience allowed me to dive deep into the world of Java and further refine my skills in creating dynamic, efficient, and user-friendly web applications. I had the opportunity to learn about web security, gaining valuable insights into best practices for building secure and robust web applications. From understanding potential vulnerabilities to implementing effective security measures, this internship has been a game-changer for my development journey.",
        //   color: "#0071C5",
        // },
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
          duration: "23 May 225",
          location: "Delhi, India",
          description:
            "Presented my research paper on 'Text To Pictures with using Stable Diffusion' at Aavishkar 1.0, an event organized by GTBIT. This event provided a platform for students to showcase their innovative ideas and research work. My paper focused on the application of Stable Diffusion models in generating images from textual descriptions, highlighting the advancements in AI and machine learning.",
          color: "#4285F4",
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
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are a direct reflection of my core passion for coding and my unwavering commitment to continuous learning and improvement. Each one represents not just a technical solution, but a step in my ongoing journey to refine my skills, explore new technologies, and build software that is both effective and elegantly crafted.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "I have worked on and contribute in many projects.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "a1s2d3f4g5h6j7k8l9",
      name: "T2I Generation Using Stable Diffusion",
      createdAt: "2025-06-13",
      description:
        "Published a research paper on T2I Generation Using Stable Diffusion at ICAISI-2025. Developed a Python-based application that leverages advanced Stable Diffusion models to generate high-quality images from textual descriptions.",
      url:
        "https://drive.google.com/file/d/1471GWkzoGmrHXknMFVaVH3VIKUWBlnxM/view?usp=sharing",
    },
  ],
};

const blogDesp = {
  title: "Blogs",
  description:
    "A space dedicated to sharing insights, in-depth tutorials, and personal reflections on the ever-evolving landscapes of web development and artificial intelligence. Here, I document my journey of continuous learning and invite you to join me in the discovery of new technologies and ideas.",
};

// Blog
const blog = {
  blogPosts: [
    {
      id: 0,
      title: "New journey with GlobalLogic",
      emoji: "🎉",
      excerpt:
        "Excited to announce that I've started a new chapter in my career with GlobalLogic as a Data Analyst!, Looking forward to contributing to innovative projects and collaborating with a talented team. Here's to new beginnings and exciting challenges ahead!",
      category: "Programming",
      tags: ["JavaScript", "Web Development", "Programming"],
      date: "2025-09-01",
      readTime: "10 min read",
      featured: true,
    },
    {
      id: 1,
      title: "Understanding React Hooks",
      emoji: "⚛️",
      excerpt:
        "React Hooks have revolutionized the way we build components in React. In this blog post, we'll explore the most commonly used hooks like useState, useEffect, and useContext, along with practical examples to help you get started.",
      category: "Web Development",
      tags: ["React", "JavaScript", "Web Development"],
      date: "2025-08-20",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title: "10 Tips to Boost Your Productivity Every Day",
      emoji: "🚀",
      excerpt:
        "Struggling to stay productive? Here are 10 science-backed tips to help you get more done in less time. From time management hacks to mindset shifts, these strategies will transform your daily routine!",
      category: "Productivity",
      tags: ["Productivity", "Time Management", "Self Improvement"],
      date: "2025-08-10",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 3,
      title: "The Science of Happiness: What Really Works?",
      emoji: "😃",
      excerpt:
        "Discover the latest research on happiness, including surprising habits and mindsets that can boost your well-being. Learn practical tips you can start using today!",
      category: "Lifestyle",
      tags: ["Happiness", "Science", "Well-being"],
      date: "2025-08-01",
      readTime: "7 min read",
      featured: true,
    },
    {
      id: 4,
      title: "How to Learn Anything Fast: Secrets from Memory Champions",
      emoji: "🧠",
      excerpt:
        "Uncover the memory techniques used by world champions to learn faster and remember more. From visualization to spaced repetition, supercharge your learning!",
      category: "Self Improvement",
      tags: ["Learning", "Memory", "Productivity"],
      date: "2025-07-20",
      readTime: "9 min read",
      featured: true,
    },
    {
      id: 5,
      title: "The Most Bizarre Facts About Space You Never Knew",
      emoji: "🪐",
      excerpt:
        "Space is full of mysteries! Explore mind-blowing facts about black holes, time dilation, and the weirdest objects in our universe.",
      category: "Science",
      tags: ["Space", "Astronomy", "Fun Facts"],
      date: "2025-06-15",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 6,
      title: "Why Do We Dream? Theories and Discoveries",
      emoji: "�",
      excerpt:
        "Dreams have fascinated humans for centuries. Dive into the latest theories and scientific discoveries about why we dream and what our dreams mean.",
      category: "Psychology",
      tags: ["Dreams", "Sleep", "Mind"],
      date: "2025-05-10",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 7,
      title: "A Beginner's Guide to Meditation: Finding Inner Peace",
      emoji: "🧘‍♂️",
      excerpt:
        "Meditation can transform your life. Learn the basics of meditation, different techniques, and how to get started on your journey to inner peace.",
      category: "Wellness",
      tags: ["Meditation", "Mindfulness", "Self Care"],
      date: "2025-04-05",
      readTime: "10 min read",
      featured: false,
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web, IT, React, Android development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "InderPuri, Delhi, India - 12",
    locality: "Budh Nagar, 110012",
    country: "IN",
    region: "Delhi",
    postalCode: "110012",
    streetAddress: "Budh Nagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Gvxywyv1yFEFWzn88",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 0123456789",
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
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  blog,
  blogDesp,
};
