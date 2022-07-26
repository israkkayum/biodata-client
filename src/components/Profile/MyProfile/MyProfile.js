import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

import male from "../../../images/male.png";
import female from "../../../images/female.png";

const MyProfile = ({ profile, biodataProfile }) => {
  const { displayName, email, biodataNumber } = profile;

  return (
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
              biodataProfile && biodataProfile.biodataType == "পাত্রীর বায়োডাটা"
                ? female
                : male
            }
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
        </Grid>
      </Grid>
    </div>
  );
};

export default MyProfile;
