import * as React from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormHelperText,
  InputBase,
  NativeSelect,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";

import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import bkash from "../../images/bkash.webp";
import rocket from "../../images/rocket.webp";
import nagad from "../../images/nagad.webp";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "blue",
    color: "white",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      backgroundColor: "blue",
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 15,
    fontWeight: "bold",
    borderTop: "3px solid blue",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // fontWeight: "bold",
    lineHeight: 1.8,
    color: "white",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  //   flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(0deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const ContactRequest = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [request, setRequest] = React.useState({});
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  let totalBlance = "০";

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...request };
    newInfo[field] = value;
    setRequest(newInfo);
  };

  const handleDataChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    if (value == "১") {
      totalBlance = "১০০ টাকা";
    } else if (value == "২") {
      totalBlance = "১৮০ টাকা";
    } else if (value == "৩") {
      totalBlance = "২৩০ টাকা";
    } else if (value == "৪") {
      totalBlance = "২৭০ টাকা";
    } else if (value == "৫") {
      totalBlance = "৩০০ টাকা";
    } else {
      totalBlance = "০০ টাকা";
    }

    const newInfo = { ...request, totalBlance: totalBlance };
    newInfo[field] = value;
    setRequest(newInfo);
  };

  const handleRequestSubmit = (e) => {
    setIsLoading(true);

    // collect data
    const allrequestdata = {
      ...request,
    };

    fetch("https://biodata-server.herokuapp.com/contactRequest", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allrequestdata),
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
    setExpanded("");

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
        <h1>যোগাযোগ তথ্যের আবেদন</h1>
      </Box>
      <Container maxWidth="md" sx={{ pb: 10 }}>
        <Paper elevation={1} sx={{ p: 2 }}>
          <div style={{ textAlign: "center", lineHeight: "2" }}>
            <span>
              বায়োডাটার অভিভাবকের মোবাইল নাম্বার পেতে নির্ধারিত টাকা পরিশোধ করতে
              হবে। অনুগ্রহ পূর্বক ফর্মটি পূরণের মাধ্যমে আপনার আবেদন সম্পন্ন
              করুন। আবেদন সম্পন্ন হলে সর্বোচ্চ ২ কর্ম দিবসের মধ্যে যোগাযোগ তথ্য
              আপনার প্রদত্ত <b>মোবাইল নাম্বারে SMS এর মাধ্যমে</b> পাঠিয়ে দেয়া
              হবে ইন শা আল্লাহ।
            </span>
          </div>
          <form onSubmit={handleRequestSubmit}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: 400,
                  maxWidth: "100%",
                  my: 5,
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <TableContainer component={Paper} sx={{ mb: 3 }}>
                  <Table
                    aria-label="customized table"
                    sx={{ borderRadius: "10px" }}
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell align="center" colSpan={2}>
                          বায়োডাটার সংখ্যা
                        </StyledTableCell>
                        <StyledTableCell align="center" colSpan={2}>
                          সর্বমোট মূল্য
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow>
                        <StyledTableCell align="center" colSpan={2}>
                          <FormControl sx={{ m: 1 }} variant="standard">
                            <NativeSelect
                              input={<BootstrapInput />}
                              onChange={handleDataChange}
                              name="totalBiodata"
                            >
                              <option value="০">০</option>
                              <option value="১">১</option>
                              <option value="২">২</option>
                              <option value="৩">৩</option>
                              <option value="৪">৪</option>
                              <option value="৫">৫</option>
                            </NativeSelect>
                          </FormControl>
                        </StyledTableCell>
                        <StyledTableCell align="center" colSpan={2}>
                          <span
                            style={{
                              backgroundColor: "blue",
                              padding: "10px 20px 10px 20px",
                              borderRadius: "5px",
                            }}
                          >
                            {request.totalBlance || "০০ টাকা"}
                          </span>
                        </StyledTableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

                <TextField
                  fullWidth
                  sx={{ mb: 3 }}
                  label="আপনার নাম"
                  required
                  id="fullWidth"
                  name="name"
                  type="name"
                  onChange={handleOnChange}
                />
                <TextField
                  sx={{ mb: 3 }}
                  fullWidth
                  label="আপনার ই-মেইল"
                  required
                  id="fullWidth"
                  name="email"
                  type="email"
                  onChange={handleOnChange}
                />
                <TextField
                  sx={{ mb: 3 }}
                  fullWidth
                  label="মোবাইল নাম্বার"
                  required
                  id="fullWidth"
                  name="phoneNumber"
                  onChange={handleOnChange}
                />
                <TextField
                  sx={{ mb: 1 }}
                  fullWidth
                  label="Biodata No"
                  required
                  id="fullWidth"
                  name="biodataNumber"
                  onChange={handleOnChange}
                />
                <FormHelperText sx={{ mb: 3 }}>
                  যার সাথে যোগাযোগ করতে চাচ্ছেন। একাধিক হলে কমা দিয়ে লিখুন।
                </FormHelperText>

                <div>
                  <Accordion sx={{ mb: 2 }}>
                    <AccordionSummary
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography align="center" alignContent="center">
                        যেকোন একটি মাধ্যমে পেমেন্ট করুন
                      </Typography>
                    </AccordionSummary>
                  </Accordion>

                  <Accordion
                    sx={{ mb: 2 }}
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                  >
                    <AccordionSummary
                      expandIcon={
                        <img
                          src={bkash}
                          style={{ height: "30px", width: "55px" }}
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>BKash</Typography>
                    </AccordionSummary>
                    <Divider />
                    {expanded == "panel1" && (
                      <AccordionDetails sx={{ pt: 1 }}>
                        <h4 style={{ lineHeight: "2", fontWeight: "inherit" }}>
                          নিম্ন উল্লিখিত BKash (Personal) নাম্বারে{" "}
                          <mark>
                            {" "}
                            {request.totalBlance || "০০ টাকা"} Send Money
                          </mark>{" "}
                          করুন।
                        </h4>
                        <h4 sx={{ pt: 1, pb: 3, fontWeight: "inherit" }}>
                          BKash Personal Number : <mark>01993627****</mark>
                        </h4>
                        <TextField
                          fullWidth
                          label="Your Bkash Number"
                          required
                          id="fullWidth"
                          sx={{ mb: 3 }}
                          name="bkashPhoneNumber"
                          onChange={handleOnChange}
                        />
                        <TextField
                          fullWidth
                          label="Transaction ID"
                          required
                          id="fullWidth"
                          sx={{ mb: 3 }}
                          name="bkashTransactionNumber"
                          onChange={handleOnChange}
                        />
                      </AccordionDetails>
                    )}
                  </Accordion>

                  <Accordion
                    sx={{ mb: 2 }}
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={
                        <img
                          src={rocket}
                          style={{ height: "30px", width: "55px" }}
                        />
                      }
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Rocket</Typography>
                    </AccordionSummary>
                    {expanded == "panel2" && (
                      <AccordionDetails sx={{ pt: 1 }}>
                        <h4 style={{ lineHeight: "2", fontWeight: "inherit" }}>
                          নিম্ন উল্লিখিত Rocket (Personal) নাম্বারে{" "}
                          <mark>
                            {" "}
                            {request.totalBlance || "০০ টাকা"} Send Money
                          </mark>{" "}
                          করুন।
                        </h4>
                        <h4 sx={{ pt: 1, pb: 3, fontWeight: "inherit" }}>
                          Rocket Personal Number : <mark>01993627****</mark>
                        </h4>
                        <TextField
                          fullWidth
                          label="Your Rocket Number"
                          required
                          id="fullWidth"
                          sx={{ mb: 3 }}
                          name="rocketPhoneNumber"
                          onChange={handleOnChange}
                        />
                        <TextField
                          fullWidth
                          label="Transaction ID"
                          required
                          id="fullWidth"
                          sx={{ mb: 3 }}
                          name="rocketTransactionNumber"
                          onChange={handleOnChange}
                        />
                      </AccordionDetails>
                    )}
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={
                        <img
                          src={nagad}
                          style={{ height: "30px", width: "55px" }}
                        />
                      }
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Nagad</Typography>
                    </AccordionSummary>
                    {expanded == "panel3" && (
                      <AccordionDetails sx={{ pt: 1 }}>
                        <h4 style={{ lineHeight: "2", fontWeight: "inherit" }}>
                          নিম্ন উল্লিখিত Nagad (Personal) নাম্বারে{" "}
                          <mark>
                            {" "}
                            {request.totalBlance || "০০ টাকা"} Send Money
                          </mark>{" "}
                          করুন।
                        </h4>
                        <h4 sx={{ pt: 1, pb: 3, fontWeight: "inherit" }}>
                          Nagad Personal Number : <mark>01993627****</mark>
                        </h4>
                        <TextField
                          fullWidth
                          label="Your Nagad Number"
                          required
                          id="fullWidth"
                          sx={{ mb: 3 }}
                          name="nagadPhoneNumber"
                          onChange={handleOnChange}
                        />
                        <TextField
                          fullWidth
                          label="Transaction ID"
                          required
                          id="fullWidth"
                          sx={{ mb: 3 }}
                          name="nagadTransactionNumber"
                          onChange={handleOnChange}
                        />
                      </AccordionDetails>
                    )}
                  </Accordion>
                </div>
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
                {success && (
                  <Alert severity="success">Successfuly Submitted !!! </Alert>
                )}
                {failure && (
                  <Alert severity="error">
                    Sorry, Submit Failure !!! Please try again ...{" "}
                  </Alert>
                )}
              </Box>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default ContactRequest;
