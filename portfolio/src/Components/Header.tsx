"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const sections = [
  "home",
  "about",
  "skills",
  "education",
  "experience",
  "projects",
  "contact",
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // <=600px

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close drawer after clicking
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo / Title */}
        <Image src="/harshal_logo.png" alt="Logo" width={100} height={100} />

        {/* Desktop Nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => handleScroll(section)}
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: 500,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#00E0FF",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={open}
              onClose={() => setOpen(false)}
              PaperProps={{
                sx: { backgroundColor: "black", color: "white", width: 200 },
              }}
            >
              <List>
                {sections.map((section) => (
                  <ListItem key={section} disablePadding>
                    <ListItemButton onClick={() => handleScroll(section)}>
                      <ListItemText
                        primary={
                          section.charAt(0).toUpperCase() + section.slice(1)
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
