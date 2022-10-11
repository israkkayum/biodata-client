import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Contact = () => {
  const [feedback, setFeedback] = useState({});
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  //Get data from user -> handleOnChange

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...feedback };
    newInfo[field] = value;
    setFeedback(newInfo);
  };

  //Sent Data to server

  const handleFeedbackSubmit = (e) => {
    setIsLoading(true);

    // collect data
    const allfeedbackdata = {
      ...feedback,
      date: new Date().toDateString(),
    };

    fetch("https://biodata-server.herokuapp.com/feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allfeedbackdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          setFailure(false);
          setIsLoading(false);
        } else {
          setSuccess(false);
          setFailure(true);
          setIsLoading(false);
        }
      });

    e.target.reset();

    e.preventDefault();
  };

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

          {/* Form  */}
          <form onSubmit={handleFeedbackSubmit}>
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
                {/* Message  success or fail*/}
                <Box>
                  {success && (
                    <Alert severity="success">Successfuly Submitted !!! </Alert>
                  )}
                  {failure && (
                    <Alert severity="error">
                      Sorry, Submit Failure !!! Please try again ...{" "}
                    </Alert>
                  )}
                </Box>

                {/* Name Text Field  */}
                <TextField
                  sx={{ my: 3 }}
                  fullWidth
                  label="নাম"
                  id="name"
                  name="name"
                  type="name"
                  required
                  onChange={handleOnChange}
                />

                {/* Email text field  */}
                <TextField
                  fullWidth
                  label="ইমেইল"
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleOnChange}
                />

                {/* Subject text field  */}
                <TextField
                  sx={{ my: 3 }}
                  fullWidth
                  label="বিষয়"
                  id="subject"
                  name="subject"
                  required
                  onChange={handleOnChange}
                />

                {/* Details text field  */}
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="আপনার বার্তা"
                  id="details"
                  name="details"
                  required
                  onChange={handleOnChange}
                />

                {/* Submit button  */}
                <Box sx={{ textAlign: "center", pb: 3 }}>
                  <Button
                    sx={{ mt: 3, backgroundColor: "blue", width: "100%" }}
                    variant="contained"
                    type="submit"
                    disabled={success ? true : false}
                  >
                    {isLoading ? (
                      <Box sx={{ display: "flex" }}>
                        <CircularProgress />
                      </Box>
                    ) : (
                      <span>Submit</span>
                    )}
                  </Button>
                </Box>
              </Box>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
