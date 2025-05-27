import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import CV from "../../../../assets/pdf/carlos_eduardo_oliveira_silva_CV.pdf";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/TypeWriter/TypeWriter";

const HeroSection: React.FC = () => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "50%",
    position: "relative",
  }));

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      display: "block",
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      paddingTop: "100px",
      height: "100vh",
    },
  }));

  const handleDownload = () => {
    console.log("download");
    const link = document.createElement("a");
    link.href = CV;
    link.download = "cv-carlos-oliveira.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailAddress = "caduolivera17@gmail.com";
    const subject = "Subject";
    const body = "Olá! Vi seu portfólio ...";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative" pb={3}>
                <Box width={"150%"} position="absolute" top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                pb={2}
                textAlign="center"
              >
                Carlos Oliveira
              </Typography>
              <Typewriter
                text="Sou um desenvolvedor!"
                delay={120}
                variant="h2"
                color="primary.contrastText"
              />
              <Box mt={3}>
                <Grid
                  container
                  spacing={3}
                  display="flex"
                  justifyContent="center"
                >
                  <Grid size={{ xs: 10, md: 4 }}>
                    <StyledButton onClick={() => handleDownload()}>
                      <DownloadIcon />
                      <Typography>Meu currículo</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid size={{ xs: 10, md: 4 }}>
                    <StyledButton onClick={() => handleEmail()}>
                      <EmailIcon />
                      <Typography>Contate-me</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default HeroSection;
