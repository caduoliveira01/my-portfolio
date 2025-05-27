import {
  Box,
  Card,
  Container,
  Grid,
  Typography,
  styled,
  Tooltip,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const AboutSection: React.FC = () => {
  const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  const skillsSet = [
    {
      name: "Java",
      icon: <img src="/icons/java.png" alt="Java" width={40} height={40} />,
    },

    { name: "JavaScript", icon: <SiJavascript size={40} color="#f7df1e" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178c6" /> },
    { name: "React", icon: <SiReact size={40} color="#61DBFB" /> },
    { name: "Node.js", icon: <SiNodedotjs size={40} color="#3c873a" /> },
    { name: "Git", icon: <SiGit size={40} color="#f1502f" /> },
    { name: "HTML", icon: <SiHtml5 size={40} color="#e34c26" /> },
    { name: "CSS", icon: <SiCss3 size={40} color="#264de4" /> },
    { name: "Docker", icon: <SiDocker size={40} color="#0db7ed" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#00758f" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47a248" /> },
  ];

  return (
    <Container maxWidth="lg">
      <Box id="about" pt={5} mb={3}>
        <Typography variant="h2" textAlign="center">
          Sobre mim
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center" pb={3}>
        <Grid size={{ xs: 9, md: 3 }}>
          <AnimationComponent moveDirection="right">
            <StyledCard variant="outlined">
              <WorkspacePremiumIcon />
              <Typography textAlign="center" fontWeight={600}>
                Experiência Acadêmica
              </Typography>
              <Typography textAlign="center">3 Anos</Typography>
              <Typography textAlign="center">
                Desenvolvedor Fullstack
              </Typography>
              <Typography textAlign="center">Analista de dados</Typography>
            </StyledCard>
          </AnimationComponent>
        </Grid>
        <Grid size={{ xs: 9, md: 3 }}>
          <AnimationComponent moveDirection="left">
            <StyledCard variant="outlined">
              <SchoolIcon />
              <Typography textAlign="center" fontWeight={600}>
                Formação
              </Typography>
              <Typography textAlign="center">
                Técnico Mecânico - ETEC Alfredo de Barros Santos
              </Typography>
              <Typography textAlign="center">
                Análise e Desenvolvimento de Sistemas - FATEC Guaratinguetá
              </Typography>
            </StyledCard>
          </AnimationComponent>
        </Grid>
      </Grid>

      <Box pb={1}>
        <Typography textAlign="center">
          Tenho 22 anos e sou apaixonado por tecnologia desde a infância.
          Atualmente, estou concluindo minha graduação em Análise e
          Desenvolvimento de Sistemas pela FATEC Guaratinguetá. Ao longo da
          minha formação, tive contato com diferentes tecnologias e participei
          de projetos que reforçaram minha curiosidade, capacidade de
          aprendizado e foco em entregar soluções funcionais.
          <br />
          <br />
          Estou sempre buscando novos desafios e oportunidades para crescer
          profissionalmente. Acredito que a tecnologia tem o poder de
          transformar realidades, e meu objetivo é contribuir ativamente para
          isso, desenvolvendo aplicações modernas, eficientes e com propósito.
        </Typography>
      </Box>

      <hr />

      <Box id="skills" pt={3} mb={3}>
        <Typography variant="h3" textAlign="center" fontWeight={300}>
          Habilidades
        </Typography>
      </Box>
      <Box mb={5}>
        <Grid container spacing={3} justifyContent="center">
          {skillsSet.map((skill, index) => (
            <Grid key={index} size={{ xs: 4, sm: 3, md: 2 }}>
              <StyledCard variant="outlined">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Tooltip title={skill.name}>{skill.icon}</Tooltip>
                  <Typography variant="body2" mt={1}>
                    {skill.name}
                  </Typography>
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutSection;
