import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageNotFound from "../../PageNotFound/PageNotFound";
import Skeletons from "../../Share/Skeletons/Skeletons";
import SingleBiodataPart1 from "../SingleBiodataPart1/SingleBiodataPart1";
import SingleBiodataPart2 from "../SingleBiodataPart2/SingleBiodataPart2";

const SingleBiodata = () => {
  const { biodatasId } = useParams();

  const [biodataProfile, setBiodataProfile] = useState({});

  useEffect(() => {
    fetch(`https://biodata-server.vercel.app/biodatas/biodata/${biodatasId}`)
      .then((res) => res.json())
      .then((data) => {
        setBiodataProfile(data);
      });
  }, []);

  return (
    <div>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        {biodataProfile._id ? (
          <div>
            {biodataProfile.status == "public" &&
            biodataProfile.adminStatus == "Accepted" ? (
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={4}>
                  <SingleBiodataPart1
                    biodataProfile={biodataProfile}
                  ></SingleBiodataPart1>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <SingleBiodataPart2
                    biodataProfile={biodataProfile}
                  ></SingleBiodataPart2>
                </Grid>
              </Grid>
            ) : (
              <PageNotFound></PageNotFound>
            )}
          </div>
        ) : (
          <Skeletons></Skeletons>
        )}
      </Container>
    </div>
  );
};

export default SingleBiodata;
