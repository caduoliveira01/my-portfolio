import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";

export const StyledNavLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  const changeLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };

  const currentLanguage = i18n.language;
  const buttonText = currentLanguage === "pt" ? "English" : "Português";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        {/* Mobile View */}
        <StyledMobileToolbar>
          <IconButton
            size="large"
            aria-label="main menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Button
            color="inherit"
            onClick={changeLanguage}
            startIcon={<LanguageIcon />}
            sx={{ textTransform: "none" }}
          >
            {buttonText}
          </Button>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleSmoothScroll("about")}>
              <StyledNavLink>{t("nav.about")}</StyledNavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("skills")}>
              <StyledNavLink>{t("nav.skills")}</StyledNavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("projects")}>
              <StyledNavLink>{t("nav.projects")}</StyledNavLink>
            </MenuItem>
          </Menu>
        </StyledMobileToolbar>

        {/* Desktop View */}
        <StyledDesktopToolbar variant="regular">
          <MenuItem onClick={() => handleSmoothScroll("about")}>
            <StyledNavLink>{t("nav.about")}</StyledNavLink>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("skills")}>
            <StyledNavLink>{t("nav.skills")}</StyledNavLink>
          </MenuItem>
          <MenuItem onClick={() => handleSmoothScroll("projects")}>
            <StyledNavLink>{t("nav.projects")}</StyledNavLink>
          </MenuItem>

          <Button
            color="inherit"
            onClick={changeLanguage}
            startIcon={<LanguageIcon />}
            sx={{ textTransform: "none", ml: 2 }}
          >
            {buttonText}
          </Button>
        </StyledDesktopToolbar>
      </AppBar>
    </Box>
  );
}
