import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    pimage,
    jobit,
    tripguide,
    threejs,
    freelance,
    anuta,
    iitp,
    saraportrait,
    prakharportrait,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Angular Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Professional Freelancer",
      company_name: "Various Clients",
      icon:freelance,
      iconBg: "#383E56",
      date: "April 2022 - Present",
      points: [
        "My core expertise lies in developing and maintaining web applications using Angular, React.js, and other related technologies.",
        " I take pride in collaborating closely with cross-functional teams that include designers, product managers, and other developers to create high-quality products that meet the needs of users.",
        "As a web developer, I also prioritize implementing responsive design and ensuring cross-browser compatibility, to ensure that users have a seamless experience across all devices and platforms.",
        " I actively participate in code reviews, providing constructive feedback to other developers, and always looking for opportunities to enhance the quality of the codebase. Overall, my focus is on delivering scalable and user-friendly solutions that exceed expectations and drive business value.",
      ],
    },
    {
      title: "Angular Developer",
      company_name: "Anuta Networks",
      icon: anuta,
      iconBg: "#E6DEDD",
      date: "June 2021 - March 2022",
      points: [
        "UI Developer-Designed and implemented user interfaces using HTML, CSS, and JavaScript framework Angular.",
        "Collaborated with UX designers, back-end developers to understand and implement product requirements.",
        "Lead the development of individual components and ensure their quality and reliability.",
        "Wrote and maintained end-to-end tests using testing framework Protractor."
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "IIT Patna",
      icon: iitp,
      iconBg: "#383E56",
      date: "June 2019 - June 2020",
      points: [
        "As a lecturer at IIT Patna, I had the opportunity to teach advanced C++ to undergraduate students.",
        "I not only gave them challenging assignments to improve their skills but also evaluated their work based on correctness and efficiency.",
        "In addition to assignments, I conducted end-semester lab examinations to gauge their understanding and ability to apply the concepts they had learned.",
        "It was a fulfilling experience to work with such bright and motivated students, and I enjoyed helping them develop their C++ programming skills."
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "At first, I was skeptical that we could create a website that would do justice to the beauty of our product. However, Saad's outstanding web development skills proved me wrong.",
      name: "Sara Fatima",
      designation: "Assistant Researcher",
      company: "University of Limerick",
      image: saraportrait,
    },
    {
      testimonial:
        "I had the pleasure of working with him at Anuta Networks, and I can attest to his exceptional skills. Together, we collaborated on various components of ATOM, and his expertise in web development was truly impressive.",
      name: "Prakhar Khare",
      designation: "Staff Engineer",
      company: "Nagarro",
      image: prakharportrait,
    },
    
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "I wanted to showcase my skills and experience in an interactive and engaging way. That's why I created my own 3D portfolio using React and Three.js.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pimage,
      source_code_link: "https://github.com/mohdsaad17/3D-Portfolio",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };