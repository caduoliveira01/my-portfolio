import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard, {
  type ProjectCardProps,
} from "../../../../components/ProjectCard/ProjectCard";

const ProjectsSection: React.FC = () => {
  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: "Sistema de gestão de projetos",
      subtitle: "Abril-2025",
      srcImg: "/projects/projeto1.jfif",
      description:
        "Desenvolvi esse projeto com o objetivo de demonstrar um pouco dos meus conhecimentos e me aprimorar utilizando ferramentas que ainda não havia usado. O projeto consiste em um Gerenciador de Projetos, onde você pode criar seu usuário, gerenciar projetos e adicionar tarefas dentro deles.",
      technologies: "Tecnologias: Java,Spring Boot, React, MySQL",
      codeURL: "https://github.com/caduoliveira01/ManagementSystem",
    },
    {
      title: "ChatBot Furia",
      subtitle: "Maio-2025",
      srcImg: "/projects/projeto2.png",
      description:
        "Este é um chatbot especializado em responder perguntas sobre o FURIA Esports (CS:GO/CS2). A aplicação utiliza tecnologias modernas para fornecer respostas rápidas e precisas em tempo real, seja através de respostas pré-definidas ou por meio de uma API de inteligência artificial para perguntas não registradas.",
      technologies:
        "Tecnologias: Node.js, React, MongoDB, Docker, API de IA: Hugging Face",
      codeURL: "https://github.com/caduoliveira01/Furia-ChatBot",
    },
    {
      title: "To-do List",
      subtitle: "Janeiro-2025",
      srcImg: "/projects/projeto3.png",
      description:
        "Este projeto é um To-do List para demonstra conhecimento fullstack, feito para criação, edição e exclusão de tarefas, além de um filtro por Id.",
      technologies: "Tecnologias: Java, Spring Boot, React, MySQL",
      codeURL: "https://github.com/caduoliveira01/to-do-list",
    },
    {
      title: "Transação Bancária",
      subtitle: "Abril-2025",
      srcImg: "/projects/projeto4.jfif",
      description:
        "Desenvolvi esse projeto para simular uma transferência bancária e mostrar um pouco dos meus conhecimentos.",
      technologies: "Tecnologias: Java, Spring boot, PostGreeSQL, Docker",
      codeURL: "https://github.com/caduoliveira01/SimularTransacao",
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography
            variant="h2"
            textAlign="center"
            color="primary.contrastText"
          >
            Projetos
          </Typography>
        </Box>
        <Grid container spacing={5} pb={3}>
          {projects.map((project: ProjectCardProps, index: number) => (
            <Grid size={{ md: 6 }} key={index}>
              <AnimationComponent
                moveDirection={index % 2 == 0 ? "right" : "left"}
              >
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  srcImg={project.srcImg}
                  description={project.description}
                  technologies={project.technologies}
                  codeURL={project.codeURL}
                />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
