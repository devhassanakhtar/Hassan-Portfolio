import React from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../Components/Context/ProjectContext";

import ProjectSection from "../Components/ProjectSection/Project";
import MainCard from "../Components/MainCard/MainCard";

// Images
import Project1 from "../assets/ProjectImage1.webp";
import Project2 from "../assets/ProjectImage2.webp";
import Project3 from "../assets/ProjectImage3.webp";
import Project4 from "../assets/ProjectImage4.webp";
import Project5 from "../assets/ProjectImage5.webp";
import Project6 from "../assets/Project6.webp";
import Project7 from "../assets/Project7.webp";
import Project8 from "../assets/Project8.webp";
import Project9 from "../assets/Project9.webp";
import Project10 from "../assets/Project10.webp";
import Project11 from "../assets/Project11.webp";
import Project12 from "../assets/Project12.webp";
import Project13 from "../assets/Project13.webp";

const ProjectList = [
  {
    id: 1,
    ProjectName: "Wizard Landing Page",
    ProjectImage: Project1,
    ProjectDescription:
      "Modern landing page designed for marketing and conversions.",
    Link: "https://wizard-z-react-landing-page.vercel.app/",
    Language1: "React",
    Language2: "Tailwind CSS",
    Language3: "",
    Language4: "",
    Language5: "",
  },
  {
    id: 2,
    ProjectName: "Edusity Landing Page",
    ProjectImage: Project2,
    ProjectDescription:
      "Edusity is a modern and responsive education website designed for universities, colleges, and online learning platforms. The goal of this project is to provide users with a clean, engaging, and informative experience where they can explore programs, view campus life, and get in touch. The website features a minimal and user-friendly interface, including an attractive hero section, program showcase, campus gallery, student testimonials, and a contact form. The layout is carefully structured to ensure that both students and parents can easily understand and navigate the content. This project highlights strong front-end development skills, focusing on responsive design, reusable components, and modern UI practices.",
    Link: "https://educity-eight.vercel.app/",
    Language1: "React",
    Language2: "Tailwind CSS",
    Language3: "",
    Language4: "",
    Language5: "",
  },
  {
    id: 3,
    ProjectName: "Tilia Wedding Page",
    ProjectImage: Project3,
    ProjectDescription:
      "Tilia is a modern and visually appealing photography website designed for wedding and portrait studios. This project focuses on creating an emotional and engaging user experience where visitors can explore beautiful moments captured through photography. The website highlights storytelling through visuals, featuring a full-width hero section, service categories, a gallery of selected work, and a contact section for client inquiries. The layout is designed to showcase photography in the best possible way while maintaining a clean and elegant user interface. This project demonstrates strong front-end skills with a focus on layout design, responsiveness, and visual hierarchy.",
    Link: "https://tilia-weddings.vercel.app/",
    Language1: "React",
    Language2: "Tailwind CSS",
    Language3: "",
    Language4: "",
    Language5: "",
  },
  {
    id: 4,
    ProjectName: "Xian Gallers Portfolio",
    ProjectImage: Project4,
    ProjectDescription:
      "This is a modern and responsive personal portfolio website designed to showcase a developer’s skills, projects, and services in a visually engaging way. The layout focuses on clean UI, smooth user experience, and structured content presentation. The website includes sections like featured projects, services offered, work experience, and a contact form, making it easy for visitors or potential clients to understand the developer’s capabilities and get in touch. The design follows a dark theme with strong visual hierarchy, modern card layouts, and interactive elements to enhance user engagement.",
    Link: "",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 5,
    ProjectName: "Add To Cart",
    ProjectImage: Project5,
    ProjectDescription:
      "MyShop is a modern and responsive e-commerce web application designed to provide a smooth online shopping experience. This project allows users to browse a variety of products, view details such as price and ratings, and add items to their cart. The interface is designed with simplicity and usability in mind, featuring a clean product grid layout and intuitive navigation. The application focuses on delivering a fast and user-friendly experience across all devices. This project demonstrates strong front-end development skills, including dynamic rendering, state management, and reusable component design.",
    Link: "https://addtocart-weld.vercel.app/",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 6,
    ProjectName: "Add To Cart",
    ProjectImage: Project6,
    ProjectDescription:
      "This is a simple and interactive Age Calculator built to help users quickly find their exact age based on their date of birth. By selecting a date, the tool instantly calculates the age in years (and can be extended to show months and days as well). The interface is designed to be clean and easy to use, allowing anyone to input their birth date and get results without confusion. It’s a great example of how basic logic and modern frontend tools can be combined to create a useful everyday utility.",
    Link: "https://age-calculator-three-flax.vercel.app/",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 7,
    ProjectName: "To Do List",
    ProjectImage: Project7,
    ProjectDescription:
      "This is a simple and efficient To-Do List Application that helps users manage their daily tasks. Users can add tasks, view them in a list, and delete tasks once completed. The goal of this project is to provide a clean and user-friendly interface where users can stay organized and keep track of their work or personal activities. It demonstrates how dynamic data handling and interactive UI can be built using modern frontend technologies.",
    Link: "",
    Language1: "React",
    Language2: "Tailwind CSS",
    Language3: "",
    Language4: "",
    Language5: "",
  },
  {
    id: 8,
    ProjectName: "Simple Calculator",
    ProjectImage: Project8,
    ProjectDescription:
      "This is a simple and responsive Calculator Application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. The project focuses on creating a user-friendly interface that mimics a real calculator. Users can easily input numbers, perform calculations, clear the screen, and delete individual digits. It demonstrates how logic and UI can work together to build a functional and interactive tool.",
    Link: "",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 9,
    ProjectName: "Currency Converter",
    ProjectImage: Project9,
    ProjectDescription:
      "This project is a simple and user-friendly Currency Converter web application that allows users to convert amounts between different currencies in real time. Users can enter an amount, select the source and target currencies, and instantly view the exchange rate and converted value. The interface is designed to be intuitive and responsive, making it easy for anyone to perform quick currency conversions. It also includes features like currency swapping and live exchange rate fetching, enhancing usability and accuracy. This project demonstrates how modern frontend technologies can be used to build interactive, API-driven applications with clean UI and smooth user experience.",
    Link: "",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 10,
    ProjectName: "Login & Registration Form",
    ProjectImage: Project10,
    ProjectDescription:
      "This project is a modern and visually appealing Login Page UI designed to provide a smooth and secure user authentication experience. The interface features a glassmorphism-style login card placed over a scenic background, creating an elegant and engaging look. Users can enter their email and password, choose the “Remember Me” option for convenience, and access password recovery if needed. The design focuses on clarity, accessibility, and responsiveness, ensuring it works well across different devices and screen sizes. This project highlights how creative UI design combined with modern frontend technologies can enhance user experience while maintaining simplicity and functionality.",
    Link: "",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 11,
    ProjectName: "Random Password Generator",
    ProjectImage: Project11,
    ProjectDescription:
      "This project is a simple and efficient Random Password Generator web application designed to help users create strong and secure passwords instantly. With just a single click, users can generate a random password that can be used for securing online accounts. The interface is clean and minimal, focusing on usability and speed. It also includes a copy-to-clipboard feature, allowing users to quickly copy the generated password and use it wherever needed. This project demonstrates the importance of security-focused tools and how they can be implemented with modern frontend technologies.",
    Link: "",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 12,
    ProjectName: "Rock Paper Scissor",
    ProjectImage: Project12,
    ProjectDescription:
      "This project is a simple and interactive Rock Paper Scissors web application designed to provide users with a fun and engaging way to play the classic game against the computer. The interface is clean and user-friendly, allowing players to choose between rock, paper, or scissors and instantly see the result along with a live score update. It demonstrates how basic game logic, user interaction, and dynamic UI updates can be combined to create an enjoyable browser-based experience. The project also highlights responsive design and smooth user experience, making it accessible across different devices.",
    Link: "",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  },
  {
    id: 13,
    ProjectName: "Tic Tac Toe",
    ProjectImage: Project13,
    ProjectDescription:
      "This project is an interactive Tic Tac Toe web application that allows two players to play the classic strategy game in a simple and visually appealing interface. Users can take turns placing their marks (X and O) on a 3x3 grid, with the system automatically detecting winning combinations or a draw. The game includes a reset option to quickly start a new round, making it convenient for continuous play. It showcases how game logic, state management, and user interaction can be effectively handled to create a smooth and responsive gaming experience in the browser.",
    Link: "",
    Language1: "HTML",
    Language2: "CSS",
    Language3: "JavaScript",
    Language4: "",
    Language5: "",
  }
];

const Project = () => {
  const { id } = useParams();

  const project = ProjectList.find((item) => item.id === Number(id));

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <ProjectContext.Provider value={project}>
      <div className="md:flex md:flex-row flex-col md:justify-between flex-wrap">
        <MainCard />
        <ProjectSection />
      </div>
    </ProjectContext.Provider>
  );
};

export default Project;
