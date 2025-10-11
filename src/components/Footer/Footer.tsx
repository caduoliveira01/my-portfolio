import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next"; // IMPORT ADICIONADO

const Footer: React.FC = () => {
  const { t } = useTranslation(); // HOOK ADICIONADO

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
          <Typography textAlign="center">{t("copyright")}</Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
