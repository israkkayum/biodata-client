import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

import male from "../../../images/male.png";
import female from "../../../images/female.png";
import loginAvator from "../../../images/login-avator.webp";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const MyProfile = ({ profile, biodataProfile }) => {
  const { admin } = useAuth();

  const { displayName, email, biodataNumber } = profile;

  return (
    <div>
      {email ? (
        <div>
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={
                  biodataProfile
                    ? biodataProfile.biodataType == "পাত্রীর বায়োডাটা"
                      ? female
                      : male
                    : loginAvator
                }
                width="100%"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography style={{ color: "gray", marginBottom: "10px" }}>
                Full Name
              </Typography>
              <Typography style={{ fontWeight: "bold", marginBottom: "15px" }}>
                {displayName}
              </Typography>
              <Typography style={{ color: "gray", marginBottom: "10px" }}>
                Email
              </Typography>
              <Typography style={{ fontWeight: "bold", marginBottom: "15px" }}>
                {email}
              </Typography>
              <Typography style={{ color: "gray", marginBottom: "10px" }}>
                Biodata Number
              </Typography>
              <Typography style={{ fontWeight: "bold", marginBottom: "15px" }}>
                {biodataNumber}
              </Typography>
              {admin && (
                <div>
                  <Typography style={{ color: "gray", marginBottom: "10px" }}>
                    Role
                  </Typography>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      marginBottom: "15px",
                      color: "green",
                    }}
                  >
                    Admin
                  </Typography>
                </div>
              )}
            </Grid>
          </Grid>
          {admin && (
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ backgroundColor: "blue", fontWeight: "bold" }}
                  variant="contained"
                >
                  Admin Panel
                </Button>
              </Link>
            </Box>
          )}
        </div>
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              "& > :not(style)": {
                m: 1,
                my: 5,
                width: 128,
                height: 128,
              },
            }}
          >
            <Paper
              elevation={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Paper>
          </Box>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
