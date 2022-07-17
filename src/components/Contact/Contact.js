import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Box
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: "blue",
          marginBottom: "50px",
          color: "white",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <h1>যে কোন তথ্য জানতে</h1>
      </Box>
      <Container maxWidth="lg">
        <div style={{ paddingBottom: "50px" }}>
          <p
            style={{
              color: "gray",
              textAlign: "center",
              paddingBottom: "30px",
            }}
          >
            আপনার যে কোন জিজ্ঞাসা নিম্নোক্ত ফর্মে পূরণ করে আমাদের কাছে পাঠিয়ে
            দিন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করবো ইন শা আল্লাহ।
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField sx={{ my: 3 }} fullWidth label="নাম" id="name" />
              <TextField fullWidth label="ইমেইল" id="email" />
              <TextField sx={{ my: 3 }} fullWidth label="বিষয়" id="subject" />
              <TextField
                fullWidth
                multiline
                rows={6}
                label="আপনার বার্তা"
                id="details"
              />
              <Button sx={{ my: 3 }} variant="contained">
                পাঠান
              </Button>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
