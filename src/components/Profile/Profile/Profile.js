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
import loginAvator from "../../../images/login-avator.webp";
import { Avatar, Button, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../hooks/useAuth";
import MyProfile from "../MyProfile/MyProfile";
import EditBiodata from "../EditBiodata/EditBiodata";
import MyBiodata from "../MyBiodata/MyBiodata";
import HideDeleteData from "../HideDeleteData/HideDeleteData";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MyProposal from "../MyProposal/MyProposal";
import { NavLink } from "react-router-dom";

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
  const [localBioData, setlocalBioData] = useState({});
  const [proposal, setProposal] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (profile == null) {
    window.location.reload();
  }

  useEffect(() => {
    fetch(`https://biodata-server.vercel.app/proposal/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProposal(data);
      });
  }, [user.email]);

  useEffect(() => {
    fetch(`https://biodata-server.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [user.email]);

  useEffect(() => {
    fetch(`https://biodata-server.vercel.app/biodatas/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setbiodataProfile(data);
      });
  }, [user.email]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("localData"));
    setlocalBioData(localStorageData);
  }, [user.email]);

  const handlePrivateStatus = (id) => {
    const status = { status: "private" };

    fetch(`https://biodata-server.vercel.app/biodatas/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  };

  const handlePublicStatus = (id) => {
    const status = { status: "public" };

    fetch(`https://biodata-server.vercel.app/biodatas/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  };

  const handleRemoveBiodata = (id) => {
    fetch(`https://biodata-server.vercel.app/biodatas/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  };

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
                    alt="Avator"
                    src={
                      biodataProfile
                        ? biodataProfile.biodataType == "পাত্রীর বায়োডাটা"
                          ? female
                          : male
                        : loginAvator
                    }
                    sx={{
                      width: 125,
                      height: 125,
                      p: 3,
                      mt: 1,
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
                    {/* My profile  */}

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        // marginTop: "-5px",
                        // marginBottom: "-5px",
                      }}
                      {...a11yProps(0)}
                      iconPosition="start"
                      icon={<PersonIcon sx={{ pr: 5 }} />}
                      label=" Profile"
                    />

                    {/* My Biodata */}

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        // marginTop: "-5px",
                        // marginBottom: "-5px",
                      }}
                      icon={<FingerprintIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label="My Biodata"
                      {...a11yProps(1)}
                    />

                    {/* Create / edit  */}

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        // marginTop: "-5px",
                        // marginBottom: "-5px",
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

                    {/* Hide / Delete  */}

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        // marginTop: "-5px",
                        // marginBottom: "-5px",
                        lineHeight: "2",
                      }}
                      icon={<DeleteIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label=" Delete / Hide Biodata"
                      {...a11yProps(3)}
                    />

                    {/* My Proposal  */}

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        // marginTop: "-5px",
                        // marginBottom: "-5px",
                        lineHeight: "2",
                      }}
                      icon={<PermPhoneMsgIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label="My Proposal"
                      {...a11yProps(5)}
                    />

                    {/* Logout  */}

                    <Tab
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        display: "flow",
                        justifyContent: "left",
                        textAlign: "left",
                        // marginTop: "-5px",
                        // marginBottom: "-5px",
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
                {/* My Profile */}

                <TabPanel value={value} index={0}>
                  <MyProfile
                    key={Profile.email}
                    biodataProfile={biodataProfile}
                    profile={profile}
                  ></MyProfile>
                </TabPanel>

                {/* My Biodata */}

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

                {/* Edit Biodata */}

                <TabPanel value={value} index={2}>
                  <EditBiodata
                    key={Profile.email}
                    biodataProfile={biodataProfile}
                    localBioData={localBioData}
                    profile={profile}
                  ></EditBiodata>
                </TabPanel>

                {/* Hide / Delete Biodata */}

                <TabPanel value={value} index={3}>
                  {biodataProfile ? (
                    <HideDeleteData
                      disabled={disabled}
                      setDisabled={setDisabled}
                      handlePrivateStatus={handlePrivateStatus}
                      handlePublicStatus={handlePublicStatus}
                      handleRemoveBiodata={handleRemoveBiodata}
                      biodataProfile={biodataProfile}
                    ></HideDeleteData>
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

                {/* My Proposal */}

                <TabPanel value={value} index={4}>
                  {proposal.length != 0 ? (
                    <MyProposal
                      proposal={proposal}
                      key={proposal.email}
                    ></MyProposal>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <NavLink
                        to="/biodatas"
                        style={{ textDecoration: "none" }}
                      >
                        <Button>Send Contact Request</Button>
                      </NavLink>
                    </Box>
                  )}
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
