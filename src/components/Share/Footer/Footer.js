import { Divider, Link } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Container maxWidth="lg">
        <Divider sx={{ pt: 5, pb: 5 }} />
        <Box
          sx={{
            color: "white",
            display: { xs: "inline", md: "flex" },
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <div>
            <h4>© 2021 - 2022 bibahomubarok.com.</h4>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              target="_blank"
              sx={{
                textDecoration: "none",
                color: "white",
              }}
              href="https://www.facebook.com/Bibahomubarokcom-106952855464210"
            >
              <h4 style={{ marginRight: "30px" }}>Our Facebook Page</h4>
            </Link>
            <Link
              target="_blank"
              sx={{
                textDecoration: "none",
                color: "white",
              }}
              href="https://www.facebook.com/groups/2244714759001183"
            >
              <h4>Join Facebook Group</h4>
            </Link>
          </div>
        </Box>
        <div
          style={{
            color: "white",
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "5px",
          }}
        >
          <p style={{ marginRight: "15px" }}>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div
          style={{
            color: "white",
            marginTop: "1px",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "30px",
          }}
        >
          <small>
            <Link target="_blank" href="https://israk-portfolio.netlify.app/">
              Developed by israk kayum
            </Link>
          </small>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
