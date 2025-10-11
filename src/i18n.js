import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      // NAVEGAÇÃO - NOVAS CHAVES SEPARADAS
      nav: {
        about: "Sobre mim",
        skills: "Habilidades",
        projects: "Projetos",
      },

      // HERO SECTION
      name: "Carlos Oliveira",
      title: "Sou um desenvolvedor!",
      resume: "Meu currículo",
      contact: "Contate-me",

      // ABOUT SECTION
      aboutTitle: "Sobre mim",
      academicExperience: "Experiência Acadêmica",
      years: "3 Anos",
      fullstack: "Desenvolvedor Fullstack",
      dataAnalyst: "Analista de dados",
      education: "Formação",
      education1: "Técnico Mecânico - ETEC Alfredo de Barros Santos",
      education2: "Análise e Desenvolvimento de Sistemas - FATEC Guaratinguetá",
      professionalExperience: "Experiência",
      intern: "Estagiario Full-Stack",
      developer: "Desenvolvedor de sistemas em Laravel e React desde 06/25",
      aboutText:
        "Tenho 22 anos e sou apaixonado por tecnologia desde a infância. Atualmente, estou concluindo minha graduação em Análise e Desenvolvimento de Sistemas pela FATEC Guaratinguetá. Ao longo da minha formação, tive contato com diferentes tecnologias e participei de projetos que reforçaram minha curiosidade, capacidade de aprendizado e foco em entregar soluções funcionais.",
      aboutText2:
        "Estou sempre buscando novos desafios e oportunidades para crescer profissionalmente. Acredito que a tecnologia tem o poder de transformar realidades, e meu objetivo é contribuir ativamente para isso, desenvolvendo aplicações modernas, eficientes e com propósito.",
      skillsTitle: "Habilidades",

      // PROJECTS SECTION
      projectsTitle: "Projetos",
      accessCode: "Acesse o código.",

      // Projetos individuais
      projects: {
        project1: {
          title: "Sistema de gestão de projetos",
          subtitle: "Abril-2025",
          description:
            "Desenvolvi esse projeto com o objetivo de demonstrar um pouco dos meus conhecimentos e me aprimorar utilizando ferramentas que ainda não havia usado. O projeto consiste em um Gerenciador de Projetos, onde você pode criar seu usuário, gerenciar projetos e adicionar tarefas dentro deles.",
          technologies: "Tecnologias: Java, Spring Boot, React, MySQL",
        },
        project2: {
          title: "ChatBot Furia",
          subtitle: "Maio-2025",
          description:
            "Este é um chatbot especializado em responder perguntas sobre o FURIA Esports (CS:GO/CS2). A aplicação utiliza tecnologias modernas para fornecer respostas rápidas e precisas em tempo real, seja através de respostas pré-definidas ou por meio de uma API de inteligência artificial para perguntas não registradas.",
          technologies:
            "Tecnologias: Node.js, React, MongoDB, Docker, API de IA: Hugging Face",
        },
        project3: {
          title: "To-do List",
          subtitle: "Janeiro-2025",
          description:
            "Este projeto é um To-do List para demonstra conhecimento fullstack, feito para criação, edição e exclusão de tarefas, além de um filtro por Id.",
          technologies: "Tecnologias: Java, Spring Boot, React, MySQL",
        },
        project4: {
          title: "Transação Bancária",
          subtitle: "Abril-2025",
          description:
            "Desenvolvi esse projeto para simular uma transferência bancária e mostrar um pouco dos meus conhecimentos.",
          technologies: "Tecnologias: Java, Spring boot, PostGreeSQL, Docker",
        },
      },

      // FOOTER
      copyright: "© 2024 Carlos Oliveira - Todos os direitos reservados",
    },
  },
  en: {
    translation: {
      // NAVIGATION - NEW SEPARATE KEYS
      nav: {
        about: "About me",
        skills: "Skills",
        projects: "Projects",
      },

      // HERO SECTION
      name: "Carlos Oliveira",
      title: "I'm a developer!",
      resume: "My resume",
      contact: "Contact me",

      // ABOUT SECTION
      aboutTitle: "About me",
      academicExperience: "Academic Experience",
      years: "3 Years",
      fullstack: "Fullstack Developer",
      dataAnalyst: "Data Analyst",
      education: "Education",
      education1: "Mechanical Technician - ETEC Alfredo de Barros Santos",
      education2: "Systems Analysis and Development - FATEC Guaratinguetá",
      professionalExperience: "Experience",
      intern: "Full-Stack Intern",
      developer: "Laravel and React systems developer since 06/25",
      aboutText:
        "I'm 22 years old and passionate about technology since childhood. I'm currently completing my degree in Systems Analysis and Development at FATEC Guaratinguetá. Throughout my education, I've worked with different technologies and participated in projects that strengthened my curiosity, learning ability, and focus on delivering functional solutions.",
      aboutText2:
        "I'm always seeking new challenges and opportunities to grow professionally. I believe technology has the power to transform realities, and my goal is to actively contribute to this by developing modern, efficient, and purposeful applications.",
      skillsTitle: "Skills",

      // PROJECTS SECTION
      projectsTitle: "Projects",
      accessCode: "Access code.",

      // Individual projects
      projects: {
        project1: {
          title: "Project Management System",
          subtitle: "April-2025",
          description:
            "I developed this project to demonstrate some of my knowledge and improve myself using tools I hadn't used before. The project consists of a Project Manager where you can create your user, manage projects, and add tasks within them.",
          technologies: "Technologies: Java, Spring Boot, React, MySQL",
        },
        project2: {
          title: "Furia ChatBot",
          subtitle: "May-2025",
          description:
            "This is a chatbot specialized in answering questions about FURIA Esports (CS:GO/CS2). The application uses modern technologies to provide fast and accurate real-time responses, either through predefined answers or via an AI API for unregistered questions.",
          technologies:
            "Technologies: Node.js, React, MongoDB, Docker, AI API: Hugging Face",
        },
        project3: {
          title: "To-do List",
          subtitle: "January-2025",
          description:
            "This project is a To-do List to demonstrate fullstack knowledge, built for creating, editing, and deleting tasks, plus filtering by ID.",
          technologies: "Technologies: Java, Spring Boot, React, MySQL",
        },
        project4: {
          title: "Bank Transaction",
          subtitle: "April-2025",
          description:
            "I developed this project to simulate a bank transfer and showcase some of my knowledge.",
          technologies: "Technologies: Java, Spring boot, PostgreSQL, Docker",
        },
      },

      // FOOTER
      copyright: "© 2024 Carlos Oliveira - All rights reserved",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
