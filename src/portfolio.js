const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Saurav's Portfolio",
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
    "https://drive.google.com/file/d/1nHA9ku9WT2xBZrooC7JAWCkIKmYkifQ6/view?usp=sharing",
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
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rawatsensei/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Bootstrap and React.",
        "⚡ Developing mobile applications using React Native and solo android apps using Kotlin",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
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
        color: "#F79F1B",
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
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Done 2 months DSA in java summer training from Geeksforgeeks.",
        "⚡Done 1 month internship from CodSoft.",
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
        "⚡ Done my Diploma in Information Technology & Enabled Services. Worked in E-Shop Website in minor project.",
        "⚡	Worked in Web Collections (Web App) in Major Project.",
      ],
      website_link: "https://dseu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "DRDO",
      subtitle: "- DRDO",
      logo_path: "drdo.png",
      certificate_link:
        "https://drive.google.com/file/d/10NBghFNsACk5i1oIXYa6mPzQGjMveJsi/view?usp=sharing",
      alt_name: "Xiaomi Ode2Code 3.0",
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
        "https://drive.google.com/file/d/1F0-fBuRcgky6ZTzSctHipIaaYzCEfkeR/view?usp=sharing",
      alt_name: "SIH",
      color_code: "#fff",
    },
    {
      title: "DSA in Java",
      subtitle: "- geeksforgeeks",
      logo_path: "gfg_logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/188eUekF1N11DW4TRwi0brrv0aDk_czyz/view?usp=sharing",
      alt_name: "DSA in Java",
      color_code: "#000",
    },
    {
      title: "Drone Technology IIITD",
      subtitle: "- Elight SPM",
      logo_path: "elightspm_logo.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1-oMluxxlZTlciML2zrOyzOEHRLbSo2J9/view?usp=sharing",
      alt_name: "Drone Technology IIITD",
      color_code: "#fff",
    },
    {
      title: "CISCO Networking",
      subtitle: "- Cisco",
      logo_path: "cisco.png",
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
      title: "Tech Mahindra Foundation",
      subtitle: "- Tech Mahindra",
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
          title: "Android Developer",
          company: "coursera",
          company_url: "https://www.linkedin.com/company/coursera/about/",
          logo_path: "coursera_logo.png",
          duration: "Nov 2020",
          location: "Delhi, India",
          description:
            "Coursera is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "DRDO",
          company: "geeksforgeeks.org",
          company_url: "https://www.drdo.gov.in/drdo/",
          logo_path: "drdo.png",
          duration: "july 2024 - Nov 2024",
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
            "I have worked on task: (1) To build a calculator. (2) A static portfolio. (3) A blog page with firebase and many more check github repo for more. I have learnt the basics of web development and how to use the tools like VS Code, Git, Github, Firebase, etc",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "SIH 2023",
          company: "Smart india Hackathon",
          company_url: "https://sih.gov.in/",
          logo_path: "sih_logo.png",
          duration: "Aug 2023 - Oct 2023",
          location: "delhi, India",
          description:
            "We worked an a project on pre trail conference and we cleared the college round in the event.We were in top 10 teams in the college.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
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
      name: "Nothing",
      createdAt: "NoOneKnows",
      description: "Nothing to show",
      url: "#",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web, IT, React, Android development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://sauravrwt.github.io/blog.io/",
    avatar_image_path: "blogs_image.svg",
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
    title: "",
    subtitle: "",
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
};
