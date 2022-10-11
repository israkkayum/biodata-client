import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "./styles.css";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";

const Tutorial = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ my: 5 }}>
        {/* কিভাবে বিবাহ মোবারক ওয়েবসাইটে বায়োডাটা আপলোড করবেন  */}

        <Paper
          elevation={3}
          sx={{
            p: 1,
            mb: 2,
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          <h3> কিভাবে বিবাহ মোবারক ওয়েবসাইটে বায়োডাটা আপলোড করবেন </h3>
        </Paper>
        <Paper elevation={3} sx={{ p: 2, mb: 10 }}>
          <YoutubeEmbed embedId="ErYIDgjabMk" />
        </Paper>

        {/* কিভাবে প্রপোজাল পাঠাবেন  */}

        <Paper
          elevation={3}
          sx={{
            p: 1,
            mb: 2,
            textAlign: "center",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          <h3> কিভাবে প্রপোজাল পাঠাবেন </h3>
        </Paper>
        <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
          <YoutubeEmbed embedId="fbYryS5IUkI" />
        </Paper>
      </Container>
    </div>
  );
};

export default Tutorial;
