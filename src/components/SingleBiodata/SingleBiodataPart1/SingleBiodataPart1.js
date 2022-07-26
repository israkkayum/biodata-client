import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";

import male from "../../../images/male-removebg.png";
import female from "../../../images/female-removebg.png";

const SingleBiodataPart1 = ({ biodataProfile }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e) => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  return (
    biodataProfile.status == "public" && (
      <div>
        <Card>
          <CardActionArea>
            <CardMedia
              sx={{
                display: "block",
                textAlign: "center",
                padding: "15px",
                backgroundColor: "blue",
                color: "white",
              }}
            >
              <img
                component="img"
                src={
                  biodataProfile.biodataType == "পাত্রের বায়োডাটা"
                    ? male
                    : female
                }
                style={{
                  width: "125px",
                  height: "125px",
                }}
                alt="green iguana"
              />
              <h2>Biodata Number</h2>
              <h2>{biodataProfile.biodataNumber}</h2>
            </CardMedia>

            <CardContent sx={{ fontSize: "16px" }}>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>বায়োডাটার ধরন</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.biodataType}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>বৈবাহিক অবস্থা</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.maritalStatus}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>স্থায়ী ঠিকানা</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.parmanentDistrict}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>বিভাগ</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.parmanentDivision}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>বর্তমান ঠিকানা</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.presentDistrict}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>বিভাগ</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.presentDivision}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>জন্মসন</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.dateOfBirth}</span>
                  </Grid>
                </Grid>
              </Paper>
              {biodataProfile.yourSkinColor && (
                <Paper
                  elevation={1}
                  sx={{
                    pt: 2,
                    mt: 1,
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      p: 2,
                      pt: 0,
                      textAlign: "center",
                    }}
                  >
                    <Grid item xs={6}>
                      <span>গাত্রবর্ণ</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span> {biodataProfile.yourSkinColor}</span>
                    </Grid>
                  </Grid>
                </Paper>
              )}
              {biodataProfile.yourHeight && (
                <Paper
                  elevation={1}
                  sx={{
                    pt: 2,
                    mt: 1,
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      p: 2,
                      pt: 0,
                      textAlign: "center",
                    }}
                  >
                    <Grid item xs={6}>
                      <span>উচ্চতা</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span> {biodataProfile.yourHeight}</span>
                    </Grid>
                  </Grid>
                </Paper>
              )}
              {biodataProfile.yourWeight && (
                <Paper
                  elevation={1}
                  sx={{
                    pt: 2,
                    mt: 1,
                    // backgroundColor: "blue",
                    // color: "white",
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      p: 2,
                      pt: 0,
                      textAlign: "center",
                    }}
                  >
                    <Grid item xs={6}>
                      <span> ওজন</span>
                    </Grid>
                    <Grid item xs={6}>
                      <span> {biodataProfile.yourWeight}</span>
                    </Grid>
                  </Grid>
                </Paper>
              )}

              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>রক্তের গ্রুপ</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.yourBloodGroup}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                elevation={1}
                sx={{
                  pt: 2,
                  mt: 1,
                  // backgroundColor: "blue",
                  // color: "white",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  sx={{
                    p: 2,
                    pt: 0,
                    textAlign: "center",
                  }}
                >
                  <Grid item xs={6}>
                    <span>পেশা</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {biodataProfile.yourProfession}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Button onClick={copyToClipboard} variant="outlined">
                  {copied ? (
                    <span> কপি সম্পন্ন হয়েছে</span>
                  ) : (
                    <span>বায়োডাটার লিংক কপি করুন</span>
                  )}
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  );
};

export default SingleBiodataPart1;

//কপি সম্পন্ন হয়েছে
