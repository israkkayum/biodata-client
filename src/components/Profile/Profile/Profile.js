import { Container, textAlign } from "@mui/system";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import male from "../../../images/male.png";
import female from "../../../images/female.png";
import { Avatar, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../hooks/useAuth";
import MyProfile from "../MyProfile/MyProfile";
import EditBiodata from "../EditBiodata/EditBiodata";
import { Outlet } from "react-router";
import MyBiodata from "../MyBiodata/MyBiodata";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const { logout, user } = useAuth();
  const [value, setValue] = React.useState(0);
  const [profile, setProfile] = useState({});
  const [biodataProfile, setbiodataProfile] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(`https://biodata-server.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [user.email]);

  useEffect(() => {
    fetch(`https://biodata-server.herokuapp.com/biodatas/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setbiodataProfile(data);
      });
  }, [user.email]);

  return (
    <div>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Paper elevation={3}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      biodataProfile &&
                      biodataProfile.biodataType == "পাত্রীর বায়োডাটা"
                        ? female
                        : male
                    }
                    sx={{
                      width: 125,
                      height: 125,
                      p: 3,
                      align: "center",
                    }}
                  />
                </div>

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    padding: "25px",
                    textAlign: "left",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    orientation="vertical"
                    sx={{
                      width: "100%",
                    }}
                    // TabIndicatorProps={{
                    //   style: {
                    //     // display: "none",
                    //     // width: "100%",
                    //     backgroundColor: "blue",
                    //     borderRadius: "10px",
                    //   },
                    // }}
                  >
                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        marginTop: "-5px",
                        marginBottom: "-5px",
                      }}
                      {...a11yProps(0)}
                      iconPosition="start"
                      icon={<PersonIcon sx={{ pr: 5 }} />}
                      label=" Profile"
                    />

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        marginTop: "-5px",
                        marginBottom: "-5px",
                      }}
                      icon={<FingerprintIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label="My Biodata"
                      {...a11yProps(1)}
                    />

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        marginTop: "-5px",
                        marginBottom: "-5px",
                      }}
                      icon={<EditIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label={
                        biodataProfile == null
                          ? " Create Biodata"
                          : "Edit Biodata"
                      }
                      {...a11yProps(2)}
                    />
                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        marginTop: "-5px",
                        marginBottom: "-5px",
                        lineHeight: "2",
                      }}
                      icon={<DeleteIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label=" Delete / Hide Biodata"
                      {...a11yProps(3)}
                    />
                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        marginTop: "-5px",
                        marginBottom: "-5px",
                      }}
                      icon={<LogoutIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label=" Logout"
                      {...a11yProps(4)}
                      onClick={logout}
                    />
                  </Tabs>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Paper elevation={3}>
                <TabPanel value={value} index={0}>
                  <MyProfile
                    key={Profile.email}
                    profile={profile}
                    biodataProfile={biodataProfile}
                  ></MyProfile>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  {biodataProfile ? (
                    <MyBiodata
                      key={biodataProfile.email}
                      biodataProfile={biodataProfile}
                      handleChange={handleChange}
                    ></MyBiodata>
                  ) : (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Tabs onChange={() => handleChange(2, 2)}>
                        <Tab
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center",
                            backgroundColor: "blue",
                            borderRadius: "5px",
                          }}
                          {...a11yProps(2)}
                          label="Create Biodata"
                        />
                      </Tabs>
                    </Box>
                  )}
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <EditBiodata
                    key={Profile.email}
                    biodataProfile={biodataProfile}
                    profile={profile}
                  ></EditBiodata>
                </TabPanel>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
