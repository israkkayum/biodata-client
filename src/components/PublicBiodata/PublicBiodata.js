import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

import male from "../../images/male-removebg.png";
import female from "../../images/female-removebg.png";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const PublicBiodata = ({ publicBiodata }) => {
  return (
    publicBiodata.status == "public" && (
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
                  publicBiodata.biodataType == "পাত্রের বায়োডাটা"
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
              <h2>{publicBiodata.biodataNumber}</h2>
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
                    <span>বৈবাহিক অবস্থা</span>
                  </Grid>
                  <Grid item xs={6}>
                    <span> {publicBiodata.maritalStatus}</span>
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
                    <span> {publicBiodata.dateOfBirth}</span>
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
                    <span> {publicBiodata.yourProfession}</span>
                  </Grid>
                </Grid>
              </Paper>
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`${publicBiodata._id}`}
                >
                  <Button variant="outlined">সম্পূর্ণ বায়োডাটা</Button>
                </NavLink>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    )
  );
};

export default PublicBiodata;
