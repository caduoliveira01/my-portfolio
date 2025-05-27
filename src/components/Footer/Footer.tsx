import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => {
  return (
    <>
      <Box pt={2} pb={2}>
        <Container maxWidth="sm">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-around"
            pb={1}
          >
            <IconButton
              onClick={() => window.open("https://github.com/caduoliveira01")}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/carlos-oliveira-338a04233/"
                )
              }
            >
              <LinkedInIcon />
            </IconButton>
            <a
              href="mailto:caduolivera17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <EmailIcon />
              </IconButton>
            </a>
          </Box>
          <Typography textAlign="center">
            © 2024 Carlos Oliveira - Todos os direitos reservados
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
