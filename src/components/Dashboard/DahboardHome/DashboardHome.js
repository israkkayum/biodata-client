import { Container, textAlign } from "@mui/system";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { Avatar, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AllBiodatas from "../AllBiodatas/AllBiodatas";

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

const DashboardHome = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={3.5}>
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
                    background: "blue",
                    color: "white",
                    borderRadius: "5px 5px 0px 0px",
                  }}
                >
                  <h1>Admin Panel</h1>
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
                  >
                    {/* All biodatas  */}

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
                      label="All Biodatas"
                    />

                    {/* Manage Biodata */}

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
                      icon={<ManageAccountsIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label="Manage Biodatas"
                      {...a11yProps(1)}
                    />

                    {/* Make Admin */}

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
                      icon={<AdminPanelSettingsIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label="Make Admin"
                      {...a11yProps(2)}
                    />

                    {/* Contact Request  */}

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
                      icon={<RingVolumeIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label="Contact Request"
                      {...a11yProps(3)}
                    />

                    {/* Feedback  */}

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
                      icon={<FeedbackIcon sx={{ pr: 5 }} />}
                      iconPosition="start"
                      label="Feedback"
                      {...a11yProps(4)}
                    />
                  </Tabs>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={8.5}>
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
                {/* All biodatas */}

                <TabPanel value={value} index={0}>
                  <AllBiodatas></AllBiodatas>
                </TabPanel>

                {/* My Biodata */}

                <TabPanel value={value} index={1}></TabPanel>

                {/* Edit Biodata */}

                <TabPanel value={value} index={2}></TabPanel>

                {/* Hide / Delete Biodata */}

                <TabPanel value={value} index={3}></TabPanel>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashboardHome;
