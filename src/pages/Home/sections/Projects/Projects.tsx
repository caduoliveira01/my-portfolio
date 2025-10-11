import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard, {
  type ProjectCardProps,
} from "../../../../components/ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();

  const StyledExperience = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }));

  const projects = [
    {
      title: t("projects.project1.title"),
      subtitle: t("projects.project1.subtitle"),
      srcImg: "/projects/projeto1.jfif",
      description: t("projects.project1.description"),
      technologies: t("projects.project1.technologies"),
      codeURL: "https://github.com/caduoliveira01/ManagementSystem",
    },
    {
      title: t("projects.project2.title"),
      subtitle: t("projects.project2.subtitle"),
      srcImg: "/projects/projeto2.png",
      description: t("projects.project2.description"),
      technologies: t("projects.project2.technologies"),
      codeURL: "https://github.com/caduoliveira01/Furia-ChatBot",
    },
    {
      title: t("projects.project3.title"),
      subtitle: t("projects.project3.subtitle"),
      srcImg: "/projects/projeto3.png",
      description: t("projects.project3.description"),
      technologies: t("projects.project3.technologies"),
      codeURL: "https://github.com/caduoliveira01/to-do-list",
    },
    {
      title: t("projects.project4.title"),
      subtitle: t("projects.project4.subtitle"),
      srcImg: "/projects/projeto4.jfif",
      description: t("projects.project4.description"),
      technologies: t("projects.project4.technologies"),
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
            {t("projectsTitle")}
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
