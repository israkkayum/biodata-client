import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PreviewIcon from "@mui/icons-material/Preview";

import {
  Alert,
  CircularProgress,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { ConstructionOutlined } from "@mui/icons-material";

const EditBiodata = ({ biodataProfile, localBioData, profile }) => {
  const { user } = useAuth();

  const [bioData, setBioData] = useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [publishFail, setPublishFail] = useState(false);
  const [isLoding, setIsLoding] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bioData };
    newInfo[field] = value;
    setBioData(newInfo);
  };

  const handleTimeChange = (newValue, fieldName) => {
    const field = fieldName;
    const value = newValue.toString().slice(4, 15);
    const newInfo = { ...bioData };
    newInfo[field] = value;
    setBioData(newInfo);
  };

  const handleBiodataSubmit = (e) => {
    setIsLoding(true);

    // collect data
    const allbiodata = {
      ...bioData,
      email: user.email,
      biodataNumber: profile.biodataNumber,
      status: "public",
      adminStatus: "Pending",
      date: new Date().toDateString(),
    };
    // send to the server

    if (biodataProfile == null) {
      fetch("https://biodata-server.herokuapp.com/biodatas", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allbiodata),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setPublishSuccess(true);
            setPublishFail(false);
            setIsLoding(false);
          } else {
            setPublishSuccess(false);
            setPublishFail(true);
            setIsLoding(false);
          }
        });
    } else {
      fetch("https://biodata-server.herokuapp.com/biodatas", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(allbiodata),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setPublishSuccess(true);
            setPublishFail(false);
            setIsLoding(false);
          } else {
            setPublishSuccess(false);
            setPublishFail(true);
            setIsLoding(false);
          }
        });
    }

    e.preventDefault();
  };

  const handleNext = (e) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const localDataAll = {
      ...localBioData,
      ...bioData,
    };

    setBioData(localDataAll);

    localStorage.setItem("localData", JSON.stringify(localDataAll));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <form onSubmit={handleBiodataSubmit}>
        <Box sx={{ maxWidth: "100%", p: { xs: 2, md: 3, lg: 3 } }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            স্টার (*) চিহ্নিত ঘর অবশ্যই পূরণ করতে হবে !
          </Alert>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>নাম</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    সম্পূর্ণ নাম *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                      mb: 2,
                    }}
                  >
                    <TextField
                      name="yourName"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.yourName
                          : localBioData?.yourName
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="name"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার
                    নাম পাবলিকলি প্রকাশ করা হবে না।
                  </h5>
                </fieldset>

                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>সাধারণ তথ্য</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বায়োডাটার ধরন *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="biodataType"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.biodataType
                            : localBioData?.biodataType
                        }
                        onChange={handleOnBlur}
                        required
                      >
                        <MenuItem value="পাত্রের বায়োডাটা">
                          পাত্রের বায়োডাটা
                        </MenuItem>
                        <MenuItem value="পাত্রীর বায়োডাটা">
                          পাত্রীর বায়োডাটা
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বৈবাহিক অবস্থা *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="maritalStatus"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.maritalStatus
                            : localBioData?.maritalStatus
                        }
                        onBlur={handleOnBlur}
                        required
                      >
                        <MenuItem value="অবিবাহিত">অবিবাহিত</MenuItem>
                        <MenuItem value="বিবাহিত">বিবাহিত</MenuItem>
                        <MenuItem value="ডিভোর্সড">ডিভোর্সড</MenuItem>
                        <MenuItem value="বিধবা">বিধবা</MenuItem>
                        <MenuItem value="বিপত্নীক">বিপত্নীক</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                {/* <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    স্থায়ী ঠিকানা (বিভাগ) *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="parmanentDivision"
                        defaultValue={
                          biodataProfile ? biodataProfile.parmanentDivision : ""
                        }
                        onBlur={handleOnBlur}
                        required
                      >
                        <MenuItem value="চট্টগ্রাম">চট্টগ্রাম</MenuItem>
                        <MenuItem value="ময়মনসিংহ">ময়মনসিংহ</MenuItem>
                        <MenuItem value="রাজশাহী">রাজশাহী</MenuItem>
                        <MenuItem value="খুলনা">খুলনা</MenuItem>
                        <MenuItem value="বরিশাল">বরিশাল</MenuItem>
                        <MenuItem value="সিলেট">সিলেট</MenuItem>
                        <MenuItem value="রংপুর">রংপুর</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset> */}
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    স্থায়ী ঠিকানা *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="parmanentDistrict"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.parmanentDistrict
                            : localBioData?.parmanentDistrict
                        }
                        onChange={handleOnBlur}
                        required
                      >
                        <MenuItem value="চট্টগ্রাম">চট্টগ্রাম</MenuItem>
                        <MenuItem value="কুমিল্লা">কুমিল্লা</MenuItem>
                        <MenuItem value="কক্সবাজার">কক্সবাজার</MenuItem>
                        <MenuItem value="কুষ্টিয়া">কুষ্টিয়া</MenuItem>
                        <MenuItem value="কিশোরগঞ্জ">কিশোরগঞ্জ</MenuItem>
                        <MenuItem value="কুড়িগ্রাম">কুড়িগ্রাম</MenuItem>
                        <MenuItem value="খাগড়াছড়ি">খাগড়াছড়ি</MenuItem>
                        <MenuItem value="খুলনা">খুলনা</MenuItem>
                        <MenuItem value="গাজীপুর">গাজীপুর</MenuItem>
                        <MenuItem value="গোপালগঞ্জ">গোপালগঞ্জ</MenuItem>
                        <MenuItem value="গাইবান্ধা">গাইবান্ধা</MenuItem>
                        <MenuItem value="হবিগঞ্জ">হবিগঞ্জ</MenuItem>
                        <MenuItem value="চাঁদপুর">চাঁদপুর</MenuItem>
                        <MenuItem value="চাঁপাইনবাবগঞ্জ">
                          চাঁপাইনবাবগঞ্জ
                        </MenuItem>
                        <MenuItem value="চুয়াডাঙ্গা">চুয়াডাঙ্গা</MenuItem>
                        <MenuItem value="জয়পুরহাট">জয়পুরহাট</MenuItem>
                        <MenuItem value="জামালপুর">জামালপুর</MenuItem>
                        <MenuItem value="ঝিনাইদহ">ঝিনাইদহ</MenuItem>
                        <MenuItem value="ঝালকাঠি">ঝালকাঠি</MenuItem>
                        <MenuItem value="যশোর">যশোর</MenuItem>
                        <MenuItem value="শরীয়তপুর">শরীয়তপুর</MenuItem>
                        <MenuItem value="শেরপুর">শেরপুর</MenuItem>
                        <MenuItem value="টাঙ্গাইল">টাঙ্গাইল</MenuItem>
                        <MenuItem value="ঠাকুরগাঁও">ঠাকুরগাঁও</MenuItem>
                        <MenuItem value="ঢাকা">ঢাকা</MenuItem>
                        <MenuItem value="রাঙ্গামাটি">রাঙ্গামাটি</MenuItem>
                        <MenuItem value="রাজশাহী">রাজশাহী</MenuItem>
                        <MenuItem value="রাজবাড়ী">রাজবাড়ী</MenuItem>
                        <MenuItem value="রংপুর">রংপুর</MenuItem>
                        <MenuItem value="দিনাজপুর">দিনাজপুর</MenuItem>
                        <MenuItem value="নোয়াখালী">নোয়াখালী</MenuItem>
                        <MenuItem value="নাটোর">নাটোর</MenuItem>
                        <MenuItem value="নওগাঁ">নওগাঁ</MenuItem>
                        <MenuItem value="নড়াইল">নড়াইল</MenuItem>
                        <MenuItem value="নরসিংদী">নরসিংদী</MenuItem>
                        <MenuItem value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</MenuItem>
                        <MenuItem value="নীলফামারী">নীলফামারী</MenuItem>
                        <MenuItem value="নেত্রকোণা">নেত্রকোণা</MenuItem>
                        <MenuItem value="লক্ষ্মীপুর">লক্ষ্মীপুর</MenuItem>
                        <MenuItem value="লালমনিরহাট">লালমনিরহাট</MenuItem>
                        <MenuItem value="সিরাজগঞ্জ">সিরাজগঞ্জ</MenuItem>
                        <MenuItem value="সাতক্ষীরা">সাতক্ষীরা</MenuItem>
                        <MenuItem value="সিলেট">সিলেট</MenuItem>
                        <MenuItem value="সুনামগঞ্জ">সুনামগঞ্জ</MenuItem>
                        <MenuItem value="পাবনা">পাবনা</MenuItem>
                        <MenuItem value="পটুয়াখালী">পটুয়াখালী</MenuItem>
                        <MenuItem value="পিরোজপুর">পিরোজপুর</MenuItem>
                        <MenuItem value="পঞ্চগড়">পঞ্চগড়</MenuItem>
                        <MenuItem value="ফেনী">ফেনী</MenuItem>
                        <MenuItem value="ফরিদপুর">ফরিদপুর</MenuItem>
                        <MenuItem value="ব্রাহ্মণবাড়িয়া">
                          ব্রাহ্মণবাড়িয়া
                        </MenuItem>
                        <MenuItem value="বান্দরবান">বান্দরবান</MenuItem>
                        <MenuItem value="বগুড়া">বগুড়া</MenuItem>
                        <MenuItem value="বাগেরহাট">বাগেরহাট</MenuItem>
                        <MenuItem value="বরিশাল">বরিশাল</MenuItem>
                        <MenuItem value="বরগুনা">বরগুনা</MenuItem>
                        <MenuItem value="ভোলা">ভোলা</MenuItem>
                        <MenuItem value="ময়মনসিংহ">ময়মনসিংহ</MenuItem>
                        <MenuItem value="মেহেরপুর">মেহেরপুর</MenuItem>
                        <MenuItem value="মাগুরা">মাগুরা</MenuItem>
                        <MenuItem value="মৌলভীবাজার">মৌলভীবাজার</MenuItem>
                        <MenuItem value="মানিকগঞ্জ">মানিকগঞ্জ</MenuItem>
                        <MenuItem value="মুন্সিগঞ্জ">মুন্সিগঞ্জ</MenuItem>
                        <MenuItem value="মাদারীপুর">মাদারীপুর</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>

                {bioData.parmanentDistrict == "চট্টগ্রাম" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      উপজেলা *
                    </legend>
                    <Box sx={{ width: "100%" }}>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="parmanentSubDistrict"
                          defaultValue={
                            biodataProfile
                              ? biodataProfile.parmanentSubDistrict
                              : localBioData?.parmanentSubDistrict
                          }
                          onBlur={handleOnBlur}
                          required
                        >
                          <MenuItem value="ফটিকছড়ি">ফটিকছড়ি</MenuItem>
                          <MenuItem value="হাটহাজারী ">হাটহাজারী</MenuItem>
                          <MenuItem value="রাউজান">রাউজান</MenuItem>
                          <MenuItem value="চট্টগ্রাম সদর(শহর)">
                            চট্টগ্রাম সদর(শহর)
                          </MenuItem>
                          <MenuItem value="রাঙ্গুনিয়া">রাঙ্গুনিয়া</MenuItem>
                          <MenuItem value="পটিয়া">পটিয়া</MenuItem>
                          <MenuItem value="চন্দানাইশ">চন্দানাইশ</MenuItem>
                          <MenuItem value="সীতাকুণ্ড">সীতাকুণ্ড</MenuItem>
                          <MenuItem value="কর্ণফুলী">কর্ণফুলী</MenuItem>
                          <MenuItem value="লোহাগড়া">লোহাগড়া</MenuItem>
                          <MenuItem value="বোয়ালখালি">বোয়ালখালি</MenuItem>
                          <MenuItem value="বাঁশখালি">বাঁশখালি</MenuItem>
                          <MenuItem value="আনোয়ারা">আনোয়ারা</MenuItem>
                          <MenuItem value="সন্দ্বীপ">সন্দ্বীপ</MenuItem>
                          <MenuItem value="মীরসরাই">মীরসরাই</MenuItem>
                          <MenuItem value="সাতকানিয়া">সাতকানিয়া</MenuItem>
                        </Select>
                      </FormControl>
                      <h5 style={{ color: "gray" }}>
                        স্থায়ী ঠিকানা কোন উপজেলায়।
                      </h5>
                    </Box>
                  </fieldset>
                )}
                {/* <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বর্তমান ঠিকানা (বিভাগ)*
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="presentDivision"
                        defaultValue={
                          biodataProfile ? biodataProfile.presentDivision : ""
                        }
                        onBlur={handleOnBlur}
                        required
                      >
                        <MenuItem value="চট্টগ্রাম">চট্টগ্রাম</MenuItem>
                        <MenuItem value="ঢাকা">ঢাকা</MenuItem>
                        <MenuItem value="ময়মনসিংহ">ময়মনসিংহ</MenuItem>
                        <MenuItem value="রাজশাহী">রাজশাহী</MenuItem>
                        <MenuItem value="খুলনা">খুলনা</MenuItem>
                        <MenuItem value="বরিশাল">বরিশাল</MenuItem>
                        <MenuItem value="সিলেট">সিলেট</MenuItem>
                        <MenuItem value="রংপুর">রংপুর</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset> */}
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বর্তমান ঠিকানা *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="presentDistrict"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.presentDistrict
                            : localBioData?.presentDistrict
                        }
                        onChange={handleOnBlur}
                        required
                      >
                        <MenuItem value="চট্টগ্রাম">চট্টগ্রাম</MenuItem>
                        <MenuItem value="কুমিল্লা">কুমিল্লা</MenuItem>
                        <MenuItem value="কক্সবাজার">কক্সবাজার</MenuItem>
                        <MenuItem value="কুষ্টিয়া">কুষ্টিয়া</MenuItem>
                        <MenuItem value="কিশোরগঞ্জ">কিশোরগঞ্জ</MenuItem>
                        <MenuItem value="কুড়িগ্রাম">কুড়িগ্রাম</MenuItem>
                        <MenuItem value="খাগড়াছড়ি">খাগড়াছড়ি</MenuItem>
                        <MenuItem value="খুলনা">খুলনা</MenuItem>
                        <MenuItem value="গাজীপুর">গাজীপুর</MenuItem>
                        <MenuItem value="গোপালগঞ্জ">গোপালগঞ্জ</MenuItem>
                        <MenuItem value="গাইবান্ধা">গাইবান্ধা</MenuItem>
                        <MenuItem value="হবিগঞ্জ">হবিগঞ্জ</MenuItem>
                        <MenuItem value="চাঁদপুর">চাঁদপুর</MenuItem>
                        <MenuItem value="চাঁপাইনবাবগঞ্জ">
                          চাঁপাইনবাবগঞ্জ
                        </MenuItem>
                        <MenuItem value="চুয়াডাঙ্গা">চুয়াডাঙ্গা</MenuItem>
                        <MenuItem value="জয়পুরহাট">জয়পুরহাট</MenuItem>
                        <MenuItem value="জামালপুর">জামালপুর</MenuItem>
                        <MenuItem value="ঝিনাইদহ">ঝিনাইদহ</MenuItem>
                        <MenuItem value="ঝালকাঠি">ঝালকাঠি</MenuItem>
                        <MenuItem value="যশোর">যশোর</MenuItem>
                        <MenuItem value="শরীয়তপুর">শরীয়তপুর</MenuItem>
                        <MenuItem value="শেরপুর">শেরপুর</MenuItem>
                        <MenuItem value="টাঙ্গাইল">টাঙ্গাইল</MenuItem>
                        <MenuItem value="ঠাকুরগাঁও">ঠাকুরগাঁও</MenuItem>
                        <MenuItem value="ঢাকা">ঢাকা</MenuItem>
                        <MenuItem value="রাঙ্গামাটি">রাঙ্গামাটি</MenuItem>
                        <MenuItem value="রাজশাহী">রাজশাহী</MenuItem>
                        <MenuItem value="রাজবাড়ী">রাজবাড়ী</MenuItem>
                        <MenuItem value="রংপুর">রংপুর</MenuItem>
                        <MenuItem value="দিনাজপুর">দিনাজপুর</MenuItem>
                        <MenuItem value="নোয়াখালী">নোয়াখালী</MenuItem>
                        <MenuItem value="নাটোর">নাটোর</MenuItem>
                        <MenuItem value="নওগাঁ">নওগাঁ</MenuItem>
                        <MenuItem value="নড়াইল">নড়াইল</MenuItem>
                        <MenuItem value="নরসিংদী">নরসিংদী</MenuItem>
                        <MenuItem value="নারায়ণগঞ্জ">নারায়ণগঞ্জ</MenuItem>
                        <MenuItem value="নীলফামারী">নীলফামারী</MenuItem>
                        <MenuItem value="নেত্রকোণা">নেত্রকোণা</MenuItem>
                        <MenuItem value="লক্ষ্মীপুর">লক্ষ্মীপুর</MenuItem>
                        <MenuItem value="লালমনিরহাট">লালমনিরহাট</MenuItem>
                        <MenuItem value="সিরাজগঞ্জ">সিরাজগঞ্জ</MenuItem>
                        <MenuItem value="সাতক্ষীরা">সাতক্ষীরা</MenuItem>
                        <MenuItem value="সিলেট">সিলেট</MenuItem>
                        <MenuItem value="সুনামগঞ্জ">সুনামগঞ্জ</MenuItem>
                        <MenuItem value="পাবনা">পাবনা</MenuItem>
                        <MenuItem value="পটুয়াখালী">পটুয়াখালী</MenuItem>
                        <MenuItem value="পিরোজপুর">পিরোজপুর</MenuItem>
                        <MenuItem value="পঞ্চগড়">পঞ্চগড়</MenuItem>
                        <MenuItem value="ফেনী">ফেনী</MenuItem>
                        <MenuItem value="ফরিদপুর">ফরিদপুর</MenuItem>
                        <MenuItem value="ব্রাহ্মণবাড়িয়া">
                          ব্রাহ্মণবাড়িয়া
                        </MenuItem>
                        <MenuItem value="বান্দরবান">বান্দরবান</MenuItem>
                        <MenuItem value="বগুড়া">বগুড়া</MenuItem>
                        <MenuItem value="বাগেরহাট">বাগেরহাট</MenuItem>
                        <MenuItem value="বরিশাল">বরিশাল</MenuItem>
                        <MenuItem value="বরগুনা">বরগুনা</MenuItem>
                        <MenuItem value="ভোলা">ভোলা</MenuItem>
                        <MenuItem value="ময়মনসিংহ">ময়মনসিংহ</MenuItem>
                        <MenuItem value="মেহেরপুর">মেহেরপুর</MenuItem>
                        <MenuItem value="মাগুরা">মাগুরা</MenuItem>
                        <MenuItem value="মৌলভীবাজার">মৌলভীবাজার</MenuItem>
                        <MenuItem value="মানিকগঞ্জ">মানিকগঞ্জ</MenuItem>
                        <MenuItem value="মুন্সিগঞ্জ">মুন্সিগঞ্জ</MenuItem>
                        <MenuItem value="মাদারীপুর">মাদারীপুর</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                {bioData.presentDistrict == "চট্টগ্রাম" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বর্তমান ঠিকানা *
                    </legend>
                    <Box sx={{ width: "100%" }}>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="presentSubDistrict"
                          defaultValue={
                            biodataProfile
                              ? biodataProfile.presentSubDistrict
                              : localBioData?.presentSubDistrict
                          }
                          onBlur={handleOnBlur}
                          required
                        >
                          <MenuItem value="ফটিকছড়ি">ফটিকছড়ি</MenuItem>
                          <MenuItem value="হাটহাজারী ">হাটহাজারী</MenuItem>
                          <MenuItem value="রাউজান">রাউজান</MenuItem>
                          <MenuItem value="চট্টগ্রাম সদর(শহর)">
                            চট্টগ্রাম সদর(শহর)
                          </MenuItem>
                          <MenuItem value="রাঙ্গুনিয়া">রাঙ্গুনিয়া</MenuItem>
                          <MenuItem value="পটিয়া">পটিয়া</MenuItem>
                          <MenuItem value="চন্দানাইশ">চন্দানাইশ</MenuItem>
                          <MenuItem value="সীতাকুণ্ড">সীতাকুণ্ড</MenuItem>
                          <MenuItem value="কর্ণফুলী">কর্ণফুলী</MenuItem>
                          <MenuItem value="লোহাগড়া">লোহাগড়া</MenuItem>
                          <MenuItem value="বোয়ালখালি">বোয়ালখালি</MenuItem>
                          <MenuItem value="বাঁশখালি">বাঁশখালি</MenuItem>
                          <MenuItem value="আনোয়ারা">আনোয়ারা</MenuItem>
                          <MenuItem value="সন্দ্বীপ">সন্দ্বীপ</MenuItem>
                          <MenuItem value="মীরসরাই">মীরসরাই</MenuItem>
                          <MenuItem value="সাতকানিয়া">সাতকানিয়া</MenuItem>
                        </Select>
                      </FormControl>
                      <h5 style={{ color: "gray" }}>
                        বর্তমান ঠিকানা কোন উপজেলায়।
                      </h5>
                    </Box>
                  </fieldset>
                )}
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    জন্মসন (আসল) *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <Stack spacing={3}>
                        <DesktopDatePicker
                          inputFormat="MM/dd/yyyy"
                          defaultValue={
                            biodataProfile
                              ? biodataProfile.dateOfBirth
                              : localBioData?.dateOfBirth
                          }
                          value={bioData.dateOfBirth}
                          onChange={(newValue) =>
                            handleTimeChange(newValue, "dateOfBirth")
                          }
                          required
                          name="dateOfBirth"
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </Stack>
                    </LocalizationProvider>
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    অবশ্যই সত্যটা দিবেন। সার্টিফিকেটের নয়।
                  </h5>
                </fieldset>

                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    গাত্রবর্ণ
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="yourSkinColor"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.yourSkinColor
                            : localBioData?.yourSkinColor
                        }
                        onBlur={handleOnBlur}
                      >
                        <MenuItem value="---">---</MenuItem>
                        <MenuItem value="কালো">কালো</MenuItem>
                        <MenuItem value="শ্যামলা">শ্যামলা</MenuItem>
                        <MenuItem value="উজ্জ্বল শ্যামলা">
                          উজ্জ্বল শ্যামলা
                        </MenuItem>
                        <MenuItem value="ফর্সা">ফর্সা</MenuItem>
                        <MenuItem value="উজ্জ্বল ফর্সা">উজ্জ্বল ফর্সা</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    উচ্চতা
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="yourHeight"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.yourHeight
                            : localBioData?.yourHeight
                        }
                        onBlur={handleOnBlur}
                      >
                        <MenuItem value="৪'১''">৪'১''</MenuItem>
                        <MenuItem value="৪'২''">৪'২''</MenuItem>
                        <MenuItem value="৪'৩''">৪'৩''</MenuItem>
                        <MenuItem value="৪'৪''">৪'৪''</MenuItem>
                        <MenuItem value="৪'৫''">৪'৫''</MenuItem>
                        <MenuItem value="৪'৬''">৪'৬''</MenuItem>
                        <MenuItem value="৪'৭''">৪'৭''</MenuItem>
                        <MenuItem value="৪'৮''">৪'৮''</MenuItem>
                        <MenuItem value="৪'৯''">৪'৯''</MenuItem>
                        <MenuItem value="৪'১০''">৪'১০''</MenuItem>
                        <MenuItem value="৪'১১''">৪'১১''</MenuItem>
                        <MenuItem value="৪'১২''">৪'১২''</MenuItem>
                        <MenuItem value="৫'০''">৫'০''</MenuItem>
                        <MenuItem value="৫'১''">৫'১''</MenuItem>
                        <MenuItem value="৫'২''">৫'২''</MenuItem>
                        <MenuItem value="৫'৩''">৫'৩''</MenuItem>
                        <MenuItem value="৫'৪''">৫'৪''</MenuItem>
                        <MenuItem value="৫'৫''">৫'৫''</MenuItem>
                        <MenuItem value="৫'৬''">৫'৬''</MenuItem>
                        <MenuItem value="৫'৭''">৫'৭''</MenuItem>
                        <MenuItem value="৫'৮''">৫'৮''</MenuItem>
                        <MenuItem value="৫'৯''">৫'৯''</MenuItem>
                        <MenuItem value="৫'১০''">৫'১০''</MenuItem>
                        <MenuItem value="৫'১১''">৫'১১''</MenuItem>
                        <MenuItem value="৫'১২''">৫'১২''</MenuItem>
                        <MenuItem value="৬'০''">৬'০''</MenuItem>
                        <MenuItem value="৬'১''">৬'১''</MenuItem>
                        <MenuItem value="৬'২''">৬'২''</MenuItem>
                        <MenuItem value="৬'৩''">৬'৩''</MenuItem>
                        <MenuItem value="৬'৪''">৬'৪''</MenuItem>
                        <MenuItem value="৬'৫''">৬'৫''</MenuItem>
                        <MenuItem value="৬'৬''">৬'৬''</MenuItem>
                        <MenuItem value="৬'৭''">৬'৭''</MenuItem>
                        <MenuItem value="৬'৮''">৬'৮''</MenuItem>
                        <MenuItem value="৬'৯''">৬'৯''</MenuItem>
                        <MenuItem value="৬'১০''">৬'১০''</MenuItem>
                        <MenuItem value="৬'১১''">৬'১১''</MenuItem>
                        <MenuItem value="৬'১২''">৬'১২''</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    ওজন
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="yourWeight"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.yourWeight
                            : localBioData?.yourWeight
                        }
                        onBlur={handleOnBlur}
                      >
                        <MenuItem value="---">---</MenuItem>
                        <MenuItem value="৩০ - ৩৫ কেজি">৩০ - ৩৫ কেজি</MenuItem>
                        <MenuItem value="৩৬ - ৪০ কেজি">৩৬ - ৪০ কেজি</MenuItem>
                        <MenuItem value="৪১ - ৪৫ কেজি">৪১ - ৪৫ কেজি</MenuItem>
                        <MenuItem value="৪৬ - ৫০ কেজি">৪৬ - ৫০ কেজি</MenuItem>
                        <MenuItem value="৫১ - ৬০ কেজি">৫১ - ৬০ কেজি</MenuItem>
                        <MenuItem value="৬১ - ৬৫ কেজি">৬১ - ৬৫ কেজি</MenuItem>
                        <MenuItem value="৬৬ - ৭০ কেজি">৬৬ - ৭০ কেজি</MenuItem>
                        <MenuItem value="৭১ - ৭৫ কেজি">৭১ - ৭৫ কেজি</MenuItem>
                        <MenuItem value="৭৬ - ৮০ কেজি">৭৬ - ৮০ কেজি</MenuItem>
                        <MenuItem value="৮১ - ৮৫ কেজি">৮১ - ৮৫ কেজি</MenuItem>
                        <MenuItem value="৮৬ - ৯০ কেজি">৮৬ - ৯০ কেজি</MenuItem>
                        <MenuItem value="৯১ - ৯৫ কেজি">৯১ - ৯৫ কেজি</MenuItem>
                        <MenuItem value="৯৬ - ১০০ কেজি">৯৬ - ১০০ কেজি</MenuItem>
                        <MenuItem value="১০১ - ১০৫ কেজি">
                          ১০১ - ১০৫ কেজি
                        </MenuItem>
                        <MenuItem value="১০৬ - ১১০ কেজি">
                          ১০৬ - ১১০ কেজি
                        </MenuItem>
                        <MenuItem value="১১১ - ১১৫ কেজি">
                          ১১১ - ১১৫ কেজি
                        </MenuItem>
                        <MenuItem value="১১৬ - ১২০ কেজি">
                          ১১৬ - ১২০ কেজি
                        </MenuItem>
                        <MenuItem value="১২১ - ১২৫ কেজি">
                          ১২১ - ১২৫ কেজি
                        </MenuItem>
                        <MenuItem value="১২৬ - ১৩০ কেজি">
                          ১২৬ - ১৩০ কেজি
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>

                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    রক্তের গ্রুপ
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="yourBloodGroup"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.yourBloodGroup
                            : localBioData?.yourBloodGroup
                        }
                        onBlur={handleOnBlur}
                      >
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                        <MenuItem value="জানা নেই">জানা নেই</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>

                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    পেশা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="yourProfession"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.yourProfession
                          : localBioData?.yourProfession
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    সর্বোচ্চ ৩ শব্দে শুধু পদবী লিখবেন। পেশা সম্পর্কে বিস্তারিত
                    লিখার জন্য সামনে প্রশ্ন আছে।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    মাসিক আয়
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="yourMonthIncome"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.yourMonthIncome
                          : localBioData?.yourMonthIncome
                      }
                      onBlur={handleOnBlur}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন। জানাতে চাইলে এভাবে
                    লিখবেনঃ ৩০ হাজার
                  </h5>
                </fieldset>

                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>ঠিকানা</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    স্থায়ী ঠিকানা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="parmanentAddress"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.parmanentAddress
                          : localBioData?.parmanentAddress
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ দৌলতপুর,
                    ফটিকছড়ি।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বর্তমান ঠিকানা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="presentAddress"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.presentAddress
                          : localBioData?.presentAddress
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ দৌলতপুর,
                    ফটিকছড়ি।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    কোথায় বড় হয়েছেন? *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="growingUpLife"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.growingUpLife
                          : localBioData?.growingUpLife
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>

                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>শিক্ষাগত যোগ্যতা</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    কোন মাধ্যমে পড়াশোনা করেছেন? *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="studyMedium"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.studyMedium
                            : localBioData?.studyMedium
                        }
                        onChange={handleOnBlur}
                        required
                        displayEmpty
                      >
                        <MenuItem value="">
                          <em>---</em>
                        </MenuItem>
                        <MenuItem value="মাদ্রাসা">মাদ্রাসা</MenuItem>
                        <MenuItem value="জেনারেল">জেনারেল</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    আলিয়া / মাধ্যমিক / কারিগরি / ইংরেজি মাধ্যমে শিক্ষিতরা
                    "জেনারেল" অপশন সিলেক্ট করুন।
                  </h5>
                </fieldset>

                {bioData.studyMedium == "মাদ্রাসা" && (
                  <div>
                    <fieldset
                      style={{
                        width: "100%",
                        border: "2px solid lightGray",
                        padding: "15px",
                        borderRadius: "5px",
                        marginBottom: "30px",
                      }}
                    >
                      <legend style={{ fontWeight: "bold", color: "gray" }}>
                        আপনি কি হাফেজ?
                      </legend>
                      <Box sx={{ width: "100%" }}>
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="areYouHafez"
                            defaultValue={
                              biodataProfile
                                ? biodataProfile.areYouHafez
                                : localBioData?.areYouHafez
                            }
                            onBlur={handleOnBlur}
                          >
                            <MenuItem value="---">---</MenuItem>
                            <MenuItem value="হ্যাঁ">হ্যাঁ</MenuItem>
                            <MenuItem value="না">না</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </fieldset>
                    <fieldset
                      style={{
                        width: "100%",
                        border: "2px solid lightGray",
                        padding: "15px",
                        borderRadius: "5px",
                        marginBottom: "30px",
                      }}
                    >
                      <legend style={{ fontWeight: "bold", color: "gray" }}>
                        দাওরায়ে হাদীস পাশ করেছেন?
                      </legend>
                      <Box sx={{ width: "100%" }}>
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="areYouPassDawora"
                            defaultValue={
                              biodataProfile
                                ? biodataProfile.areYouPassDawora
                                : localBioData?.areYouPassDawora
                            }
                            onChange={handleOnBlur}
                          >
                            <MenuItem value="---">---</MenuItem>
                            <MenuItem value="হ্যাঁ">হ্যাঁ</MenuItem>
                            <MenuItem value="না">না</MenuItem>
                            <MenuItem value="না, এখনো পড়ছি">
                              না, এখনো পড়ছি
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </fieldset>

                    {bioData.areYouPassDawora == "হ্যাঁ" && (
                      <div>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            দাওরায়ে হাদীস পাসের সন
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Stack spacing={3}>
                                <DesktopDatePicker
                                  inputFormat="yyyy"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.dateofPassDawora
                                      : localBioData?.dateofPassDawora
                                  }
                                  value={bioData.dateofPassDawora}
                                  onChange={(newValue) =>
                                    handleTimeChange(
                                      newValue,
                                      "dateofPassDawora"
                                    )
                                  }
                                  name="dateofPassDawora"
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </Stack>
                            </LocalizationProvider>
                          </Box>
                        </fieldset>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            দাওরায়ে হাদীসের নতিজা কি?
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <FormControl fullWidth>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="natizaOfDawora"
                                defaultValue={
                                  biodataProfile
                                    ? biodataProfile.natizaOfDawora
                                    : localBioData?.natizaOfDawora
                                }
                                onBlur={handleOnBlur}
                              >
                                <MenuItem value="---">---</MenuItem>
                                <MenuItem value="মুমতায">মুমতায</MenuItem>
                                <MenuItem value="জায়্যিদ জিদ্দান">
                                  জায়্যিদ জিদ্দান
                                </MenuItem>
                                <MenuItem value="জায়্যিদ">জায়্যিদ</MenuItem>
                                <MenuItem value="মকবূল">মকবূল</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </fieldset>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            আপনি কি তাখাস্সুস পড়েছেন?
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <FormControl fullWidth>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="areYouStudyTakasshos"
                                defaultValue={
                                  biodataProfile
                                    ? biodataProfile.areYouStudyTakasshos
                                    : localBioData?.areYouStudyTakasshos
                                }
                                onChange={handleOnBlur}
                              >
                                <MenuItem value="---">---</MenuItem>
                                <MenuItem value="হ্যাঁ">হ্যাঁ</MenuItem>
                                <MenuItem value="না">না</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </fieldset>
                        {bioData.areYouStudyTakasshos == "হ্যাঁ" && (
                          <div>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                কোন বিষয়ে তাখাস্সুস পড়েছেন?
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="takasshosStudySub"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.takasshosStudySub
                                      : localBioData?.takasshosStudySub
                                  }
                                  onBlur={handleOnBlur}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                তাখাস্সুস পাসের সন
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="takasshosStudyDate"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.takasshosStudyDate
                                      : localBioData?.takasshosStudyDate
                                  }
                                  onBlur={handleOnBlur}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                              <h5 style={{ color: "gray" }}>
                                ছাত্র হলে লিখবেন ছাত্র
                              </h5>
                            </fieldset>
                          </div>
                        )}
                      </div>
                    )}

                    {bioData.areYouPassDawora == "না, এখনো পড়ছি" && (
                      <div>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            দাওরায়ে হাদীস কোন বর্ষে পড়ছেন?
                          </legend>
                          <Box
                            sx={{
                              width: "100%",
                            }}
                          >
                            <TextField
                              name="studyingYearDawora"
                              defaultValue={
                                biodataProfile
                                  ? biodataProfile.studyingYearDawora
                                  : localBioData?.studyingYearDawora
                              }
                              onBlur={handleOnBlur}
                              fullWidth
                              id="fullWidth"
                            />
                          </Box>
                        </fieldset>
                      </div>
                    )}

                    <fieldset
                      style={{
                        width: "100%",
                        border: "2px solid lightGray",
                        padding: "15px",
                        borderRadius: "5px",
                        marginBottom: "30px",
                      }}
                    >
                      <legend style={{ fontWeight: "bold", color: "gray" }}>
                        সর্বোচ্চ শিক্ষাগত যোগ্যতা
                      </legend>
                      <Box
                        sx={{
                          width: "100%",
                        }}
                      >
                        <TextField
                          name="maxStudyQualification"
                          defaultValue={
                            biodataProfile
                              ? biodataProfile.maxStudyQualification
                              : localBioData?.maxStudyQualification
                          }
                          onBlur={handleOnBlur}
                          multiline
                          rows={4}
                          fullWidth
                          id="fullWidth"
                        />
                      </Box>
                      <h5 style={{ color: "gray" }}>
                        শিক্ষার বিষয়, প্রতিষ্ঠানের নাম, পাসের সন ইত্যাদি
                        বিস্তারিত লিখবেন।
                      </h5>
                    </fieldset>
                  </div>
                )}

                {bioData.studyMedium == "জেনারেল" && (
                  <div>
                    <fieldset
                      style={{
                        width: "100%",
                        border: "2px solid lightGray",
                        padding: "15px",
                        borderRadius: "5px",
                        marginBottom: "30px",
                      }}
                    >
                      <legend style={{ fontWeight: "bold", color: "gray" }}>
                        মাধ্যমিক (SSC) / সমমান পাশ করেছেন?
                      </legend>
                      <Box sx={{ width: "100%" }}>
                        <FormControl fullWidth>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="areYouSscPass"
                            defaultValue={
                              biodataProfile
                                ? biodataProfile.areYouSscPass
                                : localBioData?.areYouSscPass
                            }
                            onChange={handleOnBlur}
                          >
                            <MenuItem value="---">---</MenuItem>
                            <MenuItem value="হ্যাঁ">হ্যাঁ</MenuItem>
                            <MenuItem value="না">না</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </fieldset>

                    {bioData.areYouSscPass == "হ্যাঁ" && (
                      <div>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            মাধ্যমিক (SSC) / সমমান ফলাফল
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <FormControl fullWidth>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="sscResult"
                                defaultValue={
                                  biodataProfile
                                    ? biodataProfile.sscResult
                                    : localBioData?.sscResult
                                }
                                onBlur={handleOnBlur}
                              >
                                <MenuItem value="---">---</MenuItem>
                                <MenuItem value="Golden A+">Golden A+</MenuItem>
                                <MenuItem value="A+">A+</MenuItem>
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="A-">A-</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="B-">B-</MenuItem>
                                <MenuItem value="C">C</MenuItem>
                                <MenuItem value="C-">C-</MenuItem>
                                <MenuItem value="D">D</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </fieldset>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            মাধ্যমিক (SSC) / সমমান বিভাগ
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <FormControl fullWidth>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="sscGroup"
                                defaultValue={
                                  biodataProfile
                                    ? biodataProfile.sscGroup
                                    : localBioData?.sscGroup
                                }
                                onBlur={handleOnBlur}
                              >
                                <MenuItem value="---">---</MenuItem>
                                <MenuItem value="বিজ্ঞান বিভাগ">
                                  বিজ্ঞান বিভাগ
                                </MenuItem>
                                <MenuItem value="মানবিক বিভাগ">
                                  মানবিক বিভাগ
                                </MenuItem>
                                <MenuItem value="ব্যবসা বিভাগ">
                                  ব্যবসা বিভাগ
                                </MenuItem>
                                <MenuItem value="কারিগরি / ভোকেশনাল">
                                  কারিগরি / ভোকেশনাল
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </fieldset>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            মাধ্যমিক (SSC) / সমমান পাসের সন
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <Stack spacing={3}>
                                <DesktopDatePicker
                                  inputFormat="yyyy"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.dateofPassSsc
                                      : localBioData?.dateofPassSsc
                                  }
                                  value={bioData.dateofPassSsc}
                                  onChange={(newValue) =>
                                    handleTimeChange(newValue, "dateofPassSsc")
                                  }
                                  name="dateofPassSsc"
                                  renderInput={(params) => (
                                    <TextField {...params} />
                                  )}
                                />
                              </Stack>
                            </LocalizationProvider>
                          </Box>
                        </fieldset>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            উচ্চ মাধ্যমিক (HSC) / সমমান পাশ করেছেন?
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <FormControl fullWidth>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="areYouHscPass"
                                defaultValue={
                                  biodataProfile
                                    ? biodataProfile.areYouHscPass
                                    : localBioData?.areYouHscPass
                                }
                                onChange={handleOnBlur}
                              >
                                <MenuItem value="---">---</MenuItem>
                                <MenuItem value="হ্যাঁ">হ্যাঁ</MenuItem>
                                <MenuItem value="না">না</MenuItem>
                                <MenuItem value="ডিপ্লোমা পড়েছি">
                                  ডিপ্লোমা পড়েছি
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </fieldset>

                        {bioData.areYouHscPass == "হ্যাঁ" && (
                          <div>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                উচ্চ মাধ্যমিক (HSC) / সমমান ফলাফল
                              </legend>
                              <Box sx={{ width: "100%" }}>
                                <FormControl fullWidth>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="hscResult"
                                    defaultValue={
                                      biodataProfile
                                        ? biodataProfile.hscResult
                                        : localBioData?.hscResult
                                    }
                                    onBlur={handleOnBlur}
                                  >
                                    <MenuItem value="---">---</MenuItem>
                                    <MenuItem value="Golden A+">
                                      Golden A+
                                    </MenuItem>
                                    <MenuItem value="A+">A+</MenuItem>
                                    <MenuItem value="A">A</MenuItem>
                                    <MenuItem value="A-">A-</MenuItem>
                                    <MenuItem value="B">B</MenuItem>
                                    <MenuItem value="B-">B-</MenuItem>
                                    <MenuItem value="C">C</MenuItem>
                                    <MenuItem value="C-">C-</MenuItem>
                                    <MenuItem value="D">D</MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                উচ্চ মাধ্যমিক (HSC) / সমমানের বিভাগ
                              </legend>
                              <Box sx={{ width: "100%" }}>
                                <FormControl fullWidth>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="hscGroup"
                                    defaultValue={
                                      biodataProfile
                                        ? biodataProfile.hscGroup
                                        : localBioData?.hscGroup
                                    }
                                    onBlur={handleOnBlur}
                                  >
                                    <MenuItem value="---">---</MenuItem>
                                    <MenuItem value="বিজ্ঞান বিভাগ">
                                      বিজ্ঞান বিভাগ
                                    </MenuItem>
                                    <MenuItem value="মানবিক বিভাগ">
                                      মানবিক বিভাগ
                                    </MenuItem>
                                    <MenuItem value="ব্যবসা বিভাগ">
                                      ব্যবসা বিভাগ
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                উচ্চ মাধ্যমিক (HSC) / সমমান পাসের সন
                              </legend>
                              <Box sx={{ width: "100%" }}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDateFns}
                                >
                                  <Stack spacing={3}>
                                    <DesktopDatePicker
                                      inputFormat="yyyy"
                                      defaultValue={
                                        biodataProfile
                                          ? biodataProfile.dateofPassHsc
                                          : localBioData?.dateofPassHsc
                                      }
                                      value={bioData.dateofPassHsc}
                                      onChange={(newValue) =>
                                        handleTimeChange(
                                          newValue,
                                          "dateofPassHsc"
                                        )
                                      }
                                      name="dateofPassHsc"
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />
                                  </Stack>
                                </LocalizationProvider>
                              </Box>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                স্নাতক / স্নাতক (সম্মান) / সমমান শিক্ষাগত
                                যোগ্যতা
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="hounrsQualification"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.hounrsQualification
                                      : localBioData?.hounrsQualification
                                  }
                                  onBlur={handleOnBlur}
                                  multiline
                                  rows={4}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                              <h5 style={{ color: "gray" }}>
                                উত্তরটা এভাবে দিতে পারেনঃ Bachelor of Science
                                (B.Sc) in Electrical And Electronics Engineering
                                (EEE)
                              </h5>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                শিক্ষাপ্রতিষ্ঠানের নাম
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="hounrsInstituteName"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.hounrsInstituteName
                                      : localBioData?.hounrsInstituteName
                                  }
                                  onBlur={handleOnBlur}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                              <h5 style={{ color: "gray" }}>
                                যে প্রতিষ্ঠান থেকে স্নাতক করেছেন ।
                              </h5>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                পাসের সন
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="hounrsPassDate"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.hounrsPassDate
                                      : localBioData?.hounrsPassDate
                                  }
                                  onBlur={handleOnBlur}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                              <h5 style={{ color: "gray" }}>
                                ছাত্র হলে শিক্ষাবর্ষ লিখবেন।যেমনঃ তৃতীয় বর্ষ
                              </h5>
                            </fieldset>
                          </div>
                        )}

                        {bioData.areYouHscPass == "না" && (
                          <div>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                উচ্চ মাধ্যমিক (HSC) / সমমান কোন বর্ষে পড়ছেন ?
                              </legend>
                              <Box sx={{ width: "100%" }}>
                                <FormControl fullWidth>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="msxHscStuding"
                                    defaultValue={
                                      biodataProfile
                                        ? biodataProfile.msxHscStuding
                                        : localBioData?.msxHscStuding
                                    }
                                    onBlur={handleOnBlur}
                                  >
                                    <MenuItem value="---">---</MenuItem>
                                    <MenuItem value="HSC দ্বিতীয় বর্ষ">
                                      HSC দ্বিতীয় বর্ষ
                                    </MenuItem>
                                    <MenuItem value="HSC প্রথম বর্ষ">
                                      HSC প্রথম বর্ষ
                                    </MenuItem>
                                    <MenuItem value="HSC রেজাল্ট দেয় নি এখনো">
                                      HSC রেজাল্ট দেয় নি এখনো
                                    </MenuItem>
                                    <MenuItem value="SSC এর পর আর পড়াশোনা করা হয় নি">
                                      SSC এর পর আর পড়াশোনা করা হয় নি
                                    </MenuItem>
                                    <MenuItem value=" HSC পরীক্ষা দিয়ে পাশ করতে পারি নি।">
                                      HSC পরীক্ষা দিয়ে পাশ করতে পারি নি।
                                    </MenuItem>
                                  </Select>
                                </FormControl>
                              </Box>
                            </fieldset>
                          </div>
                        )}

                        {bioData.areYouHscPass == "ডিপ্লোমা পড়েছি" && (
                          <div>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                ডিপ্লোমা কোন বিষয়ে পড়েছেন?
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="diplomaStudySub"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.diplomaStudySub
                                      : localBioData?.diplomaStudySub
                                  }
                                  onBlur={handleOnBlur}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                              <h5 style={{ color: "gray" }}>
                                এভাবে উত্তর দিতে পারেনঃ Diploma in Textile
                                Engineering
                              </h5>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                শিক্ষাপ্রতিষ্ঠানের নাম
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="diplomaInstituteName"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.diplomaInstituteName
                                      : localBioData?.diplomaInstituteName
                                  }
                                  onBlur={handleOnBlur}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                              <h5 style={{ color: "gray" }}>
                                যে প্রতিষ্ঠান থেকে ডিপ্লোমা পড়েছেন
                              </h5>
                            </fieldset>
                            <fieldset
                              style={{
                                width: "100%",
                                border: "2px solid lightGray",
                                padding: "15px",
                                borderRadius: "5px",
                                marginBottom: "30px",
                              }}
                            >
                              <legend
                                style={{ fontWeight: "bold", color: "gray" }}
                              >
                                পাসের সন
                              </legend>
                              <Box
                                sx={{
                                  width: "100%",
                                }}
                              >
                                <TextField
                                  name="diplomaPassDate"
                                  defaultValue={
                                    biodataProfile
                                      ? biodataProfile.diplomaPassDate
                                      : localBioData?.diplomaPassDate
                                  }
                                  onBlur={handleOnBlur}
                                  fullWidth
                                  id="fullWidth"
                                />
                              </Box>
                              <h5 style={{ color: "gray" }}>
                                ছাত্র হলে বর্ষ লিখবেন। যেমনঃ ৩য় বর্ষ
                              </h5>
                            </fieldset>
                          </div>
                        )}
                      </div>
                    )}

                    {bioData.areYouSscPass == "না" && (
                      <div>
                        <fieldset
                          style={{
                            width: "100%",
                            border: "2px solid lightGray",
                            padding: "15px",
                            borderRadius: "5px",
                            marginBottom: "30px",
                          }}
                        >
                          <legend style={{ fontWeight: "bold", color: "gray" }}>
                            কোন ক্লাস পর্যন্ত পড়েছেন?
                          </legend>
                          <Box sx={{ width: "100%" }}>
                            <FormControl fullWidth>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="minClassStudy"
                                defaultValue={
                                  biodataProfile
                                    ? biodataProfile.minClassStudy
                                    : localBioData?.minClassStudy
                                }
                                onBlur={handleOnBlur}
                              >
                                <MenuItem value="---">---</MenuItem>
                                <MenuItem value="১oম">১oম</MenuItem>
                                <MenuItem value="৯ম">৯ম</MenuItem>
                                <MenuItem value="৮ম">৮ম</MenuItem>
                                <MenuItem value="৭ম">৭ম</MenuItem>
                                <MenuItem value="৬ষ্ঠ">৬ষ্ঠ</MenuItem>
                                <MenuItem value="৫ম">৫ম</MenuItem>
                                <MenuItem value="৪র্থ">৪র্থ</MenuItem>
                                <MenuItem value="৩য়">৩য়</MenuItem>
                                <MenuItem value="২য়">২য়</MenuItem>
                                <MenuItem value="১ম">১ম</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                        </fieldset>
                      </div>
                    )}
                  </div>
                )}

                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    অন্যান্য শিক্ষাগত যোগ্যতা
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="otherEducationalQua"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.otherEducationalQua
                          : localBioData?.otherEducationalQua
                      }
                      onBlur={handleOnBlur}
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    শিক্ষার বিষয়, প্রতিষ্ঠানের নাম, পাসের সন ইত্যাদি বিস্তারিত
                    লিখবেন। কিছু না থাকলে ঘরটি ফাঁকা রাখবেন।
                  </h5>
                </fieldset>

                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>পারিবারিক তথ্য</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    পিতার নাম (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে
                    না) *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="yourFatherName"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.yourFatherName
                          : localBioData?.yourFatherName
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    পিতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র
                    ভেরিফিকেশনের জন্য। আপনার পিতার নাম বায়োডাটা পাবলিশ করার সময়
                    প্রকাশ করা হবে না। অর্থাৎ আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ
                    এই নাম দেখতে পাবে না।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    মাতার নাম (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে
                    না) *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="yourMotherName"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.yourMotherName
                          : localBioData?.yourMotherName
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    মাতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র
                    ভেরিফিকেশনের জন্য। আপনার মাতার নাম বায়োডাটা পাবলিশ করার সময়
                    প্রকাশ করা হবে না। অর্থাৎ আপনি এবং ওয়েবসাইট কতৃপক্ষ বাদে কেউ
                    এই নাম দেখতে পাবে না।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    পিতার পেশা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="YourFatherProfession"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.YourFatherProfession
                          : localBioData?.YourFatherProfession
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত)
                    ব্যবসায়ী ছিলেন।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    মাতার পেশা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="YourMotherProfession"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.YourMotherProfession
                          : localBioData?.YourMotherProfession
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত)
                    গৃহিনী ছিলেন।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বোন কয়জন? *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="numberOfSister"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.numberOfSister
                            : localBioData?.numberOfSister
                        }
                        onBlur={handleOnBlur}
                        required
                      >
                        <MenuItem value="---">---</MenuItem>
                        <MenuItem value="বোন নেই">বোন নেই</MenuItem>
                        <MenuItem value="৯">৯</MenuItem>
                        <MenuItem value="৮">৮</MenuItem>
                        <MenuItem value="৭">৭</MenuItem>
                        <MenuItem value="৬">৬</MenuItem>
                        <MenuItem value="৫">৫</MenuItem>
                        <MenuItem value="৪">৪</MenuItem>
                        <MenuItem value="৩">৩</MenuItem>
                        <MenuItem value="২">২</MenuItem>
                        <MenuItem value="১">১</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    ভাই কয়জন? *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="numberOfBrother"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.numberOfBrother
                            : localBioData?.numberOfBrother
                        }
                        onBlur={handleOnBlur}
                        required
                      >
                        <MenuItem value="---">---</MenuItem>
                        <MenuItem value="ভাই নেই">ভাই নেই</MenuItem>
                        <MenuItem value="৯">৯</MenuItem>
                        <MenuItem value="৮">৮</MenuItem>
                        <MenuItem value="৭">৭</MenuItem>
                        <MenuItem value="৬">৬</MenuItem>
                        <MenuItem value="৫">৫</MenuItem>
                        <MenuItem value="৪">৪</MenuItem>
                        <MenuItem value="৩">৩</MenuItem>
                        <MenuItem value="২">২</MenuItem>
                        <MenuItem value="১">১</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    চাচা মামাদের পেশা
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="professionOfOtherRelated"
                      ddefaultValue={
                        biodataProfile
                          ? biodataProfile.professionOfOtherRelated
                          : localBioData?.professionOfOtherRelated
                      }
                      onBlur={handleOnBlur}
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="economicSocialPosition"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.economicSocialPosition
                          : localBioData?.economicSocialPosition
                      }
                      onBlur={handleOnBlur}
                      required
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}># সংক্ষেপে বর্ণনা করুন।</h5>
                </fieldset>

                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>ব্যক্তিগত তথ্য</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    আপনার মাঝহাব বা আকীদা কী?
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="whichMazhabFollow"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.whichMazhabFollow
                          : localBioData?.whichMazhabFollow
                      }
                      onBlur={handleOnBlur}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    হানাফী-সুন্নী বা অন্য আকীদা হলে সেটি উল্লেখ করবেন |
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    নিয়মিত প্রার্থনা করেন তো?
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="areYouPrayerRegu"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.areYouPrayerRegu
                          : localBioData?.areYouPrayerRegu
                      }
                      onBlur={handleOnBlur}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    আপনার ধর্মীয় দৃষ্টিভঙ্গী উল্লেখ করুন
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="religiousIdo"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.religiousIdo
                          : localBioData?.religiousIdo
                      }
                      onBlur={handleOnBlur}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  {bioData.biodataType == "পাত্রের বায়োডাটা" && (
                    <h5 style={{ color: "gray" }}>
                      যারা দ্বীনদার তারা টাখনুর উপর কাপড় পরিধান করেন কিনা,
                      সুন্নতি দাড়ি আছে কিনা,নাটক/সিনেমা/গান দেখেন বা শোনেন কিনা
                      সেসব উল্লেখ করবেন। আর অন্যেরা চাইলে এটা ফাঁকা রাখুন |
                    </h5>
                  )}
                  {bioData.biodataType == "পাত্রীর বায়োডাটা" && (
                    <h5 style={{ color: "gray" }}>
                      যারা দ্বীনদার তারা পর্দা করেন কিনা,মাহরাম-নন মাহরাম মেনে
                      চলেন কিনা, নাটক/সিনেমা/গান দেখেন বা শোনেন কিনা সেসব উল্লেখ
                      করবেন। আর অন্যেরা চাইলে এটা ফাঁকা রাখুন |
                    </h5>
                  )}
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    কোনো রাজনৈতিক দর্শন থাকলে লিখুন
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="anyPoliticalIdology"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.anyPoliticalIdology
                          : localBioData?.anyPoliticalIdology
                      }
                      onBlur={handleOnBlur}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    মানসিক বা শারীরিক কোনো রোগ আছে কি? *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="haveAnyDiseases"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.haveAnyDiseases
                          : localBioData?.haveAnyDiseases
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    আপনার প্রিয় শখ কী? *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="yourFavoriteHobby"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.yourFavoriteHobby
                          : localBioData?.yourFavoriteHobby
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>

                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    আপনার পছন্দের তিনজন আদর্শ মানুষের নাম লিখুন *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="favoriteMan"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.favoriteMan
                          : localBioData?.favoriteMan
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>

                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা (যদি থাকে)
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="anyExtraQua"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.anyExtraQua
                          : localBioData?.anyExtraQua
                      }
                      onBlur={handleOnBlur}
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    নিজের সম্পর্কে কিছু লিখুন *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="aboutYourSelf"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.aboutYourSelf
                          : localBioData?.aboutYourSelf
                      }
                      onBlur={handleOnBlur}
                      required
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    নিজের পছন্দ-অপছন্দ, শখ-ইচ্ছা, দ্বীনী-দুনিয়াবী ইত্যাদি বিষয়
                    বিস্তারিত লিখতে হবে। কারণ এই লেখা পড়ে পাঠক আপনার সম্পর্কে
                    সাধারণ ধারণা লাভ করবে।
                  </h5>
                </fieldset>

                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>বিয়ে সংক্রান্ত তথ্য</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    অভিভাবক আপনার বিয়েতে রাজি কি না? *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="agreeGuardian"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.agreeGuardian
                          : localBioData?.agreeGuardian
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি? *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="idologyOfMarit"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.idologyOfMarit
                          : localBioData?.idologyOfMarit
                      }
                      onBlur={handleOnBlur}
                      required
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>সংক্ষেপে বর্ণনা করুন।</h5>
                </fieldset>
                {bioData.biodataType == "পাত্রের বায়োডাটা" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বিয়ের পর স্ত্রীর পর্দার ব্যবস্থা রাখতে পারবেন?
                    </legend>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="afterwWifeWear"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.afterwWifeWear
                            : localBioData?.afterwWifeWear
                        }
                        onBlur={handleOnBlur}
                        fullWidth
                        id="fullWidth"
                      />
                    </Box>
                  </fieldset>
                )}
                {bioData.biodataType == "পাত্রের বায়োডাটা" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিতে চান?
                    </legend>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="afterwWifeStudy"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.afterwWifeStudy
                            : localBioData?.afterwWifeStudy
                        }
                        onBlur={handleOnBlur}
                        fullWidth
                        id="fullWidth"
                      />
                    </Box>
                  </fieldset>
                )}
                {bioData.biodataType == "পাত্রের বায়োডাটা" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বিয়ের পর স্ত্রীকে চাকরী করতে দিতে চান?
                    </legend>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="afterwWifeWork"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.afterwWifeWork
                            : localBioData?.afterwWifeWork
                        }
                        onBlur={handleOnBlur}
                        fullWidth
                        id="fullWidth"
                      />
                    </Box>
                  </fieldset>
                )}
                {bioData.biodataType == "পাত্রের বায়োডাটা" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বিয়ের পর স্ত্রীকে কোথায় নিয়ে থাকবেন?
                    </legend>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="afterwWifeHome"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.afterwWifeHome
                            : localBioData?.afterwWifeHome
                        }
                        onBlur={handleOnBlur}
                        fullWidth
                        id="fullWidth"
                      />
                    </Box>
                  </fieldset>
                )}
                {bioData.biodataType == "পাত্রের বায়োডাটা" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বিয়ে উপলক্ষে আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে যৌতুক
                      বা উপহার বা অর্থ আশা করবেন কি না?
                    </legend>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="afterwWifeDower"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.afterwWifeDower
                            : localBioData?.afterwWifeDower
                        }
                        onBlur={handleOnBlur}
                        fullWidth
                        id="fullWidth"
                      />
                    </Box>
                  </fieldset>
                )}
                {bioData.biodataType == "পাত্রীর বায়োডাটা" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বিয়ের পর পড়াশোনা চালিয়ে যেতে চান? (ছাত্রী হলে)
                    </legend>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="afterYourStudy"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.afterYourStudy
                            : localBioData?.afterYourStudy
                        }
                        onBlur={handleOnBlur}
                        fullWidth
                        id="fullWidth"
                      />
                    </Box>
                  </fieldset>
                )}
                {bioData.biodataType == "পাত্রীর বায়োডাটা" && (
                  <fieldset
                    style={{
                      width: "100%",
                      border: "2px solid lightGray",
                      padding: "15px",
                      borderRadius: "5px",
                      marginBottom: "30px",
                    }}
                  >
                    <legend style={{ fontWeight: "bold", color: "gray" }}>
                      বিয়ের পর চাকরি চালিয়ে যেতে চান? (চাকরিজীবী হলে)
                    </legend>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <TextField
                        name="afterYourJob"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.afterYourJob
                            : localBioData?.afterYourJob
                        }
                        onBlur={handleOnBlur}
                        fullWidth
                        id="fullWidth"
                      />
                    </Box>
                  </fieldset>
                )}
                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>অন্যান্য তথ্য</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বিশেষ কিছু যদি জানাতে চান
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="anyQuary"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.anyQuary
                          : localBioData?.anyQuary
                      }
                      onBlur={handleOnBlur}
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    আপনার কোনো শর্ত বা উপরে লিখার সুযোগ হয় নি এমন কিছু জানানোর
                    থাকলে এই ঘরে লিখতে পারেন। যেমনঃ ছাত্র অবস্থায় বিয়ে করলে
                    কিভাবে ভরণপোষণ করবেন বা সংসার চালাবেন, পারিবারিক বা
                    ব্যক্তিগত কোনো সুবিধা বা অসুবিধা ইত্যাদি যে কোনো বিষয়ে যত
                    ইচ্ছা লিখতে পারবেন। । যদি কিছুই না লিখতে চান, তাহলে ঘরটি
                    ফাঁকা রাখবেন।
                  </h5>
                </fieldset>
                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>যেমন জীবনসঙ্গী আশা করেন</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বয়স *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="ageOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.ageOfLifePartner
                          : localBioData?.ageOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    গাত্রবর্ণ *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="skinColorOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.skinColorOfLifePartner
                          : localBioData?.skinColorOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    নূন্যতম উচ্চতা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="minHeightOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.minHeightOfLifePartner
                          : localBioData?.minHeightOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    নূন্যতম শিক্ষাগত যোগ্যতা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="minEduQuaOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.minEduQuaOfLifePartner
                          : localBioData?.minEduQuaOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    জেলা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="districtOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.districtOfLifePartner
                          : localBioData?.districtOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বৈবাহিক অবস্থা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="maritalStatusOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.maritalStatusOfLifePartner
                          : localBioData?.maritalStatusOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    পেশা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="professionOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.professionOfLifePartner
                          : localBioData?.professionOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    অর্থনৈতিক অবস্থা *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="economicOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.economicOfLifePartner
                          : localBioData?.economicOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    পারিবারিক অবস্থা
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="FamilyStatusOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.FamilyStatusOfLifePartner
                          : localBioData?.FamilyStatusOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="characteristicsOfLifePartner"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.characteristicsOfLifePartner
                          : localBioData?.characteristicsOfLifePartner
                      }
                      onBlur={handleOnBlur}
                      required
                      multiline
                      rows={4}
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    এই পয়েন্ট অনেক গুরুত্বপূর্ণ। সময় নিয়ে বিস্তারিত লিখুন। কোন
                    বিশেষ শর্ত থাকলে তা-ও লিখতে পারেন।
                  </h5>
                </fieldset>
                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>কর্তৃপক্ষের জিজ্ঞাসা</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    bibahomubarok.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক
                    জানেন? *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="agreeYourGurdean"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.agreeYourGurdean
                            : localBioData?.agreeYourGurdean
                        }
                        onBlur={handleOnBlur}
                        required
                      >
                        <MenuItem value="---">---</MenuItem>
                        <MenuItem value="হ্যাঁ">হ্যাঁ</MenuItem>
                        <MenuItem value="না">না</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>

                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার
                    ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি? *
                  </legend>
                  <Box sx={{ width: "100%" }}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="ourNoLiability"
                        defaultValue={
                          biodataProfile
                            ? biodataProfile.ourNoLiability
                            : localBioData?.ourNoLiability
                        }
                        onBlur={handleOnBlur}
                        required
                      >
                        <MenuItem value="---">---</MenuItem>
                        <MenuItem value="হ্যাঁ">হ্যাঁ</MenuItem>
                        <MenuItem value="না">না</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </fieldset>
                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            <Step>
              <StepLabel>
                <h3 style={{ marginLeft: "10px" }}>যোগাযোগ</h3>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    অভিভাবকের নাম্বার *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="GurdianPhoneNumber"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.GurdianPhoneNumber
                          : localBioData?.GurdianPhoneNumber
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    অবশ্যই ইংরেজীতে নাম্বার লিখবেন এভাবে 01700-000000। বিঃদ্রঃ
                    নিজের নাম্বার দিলে ভেরিফিকেশনে এপ্রুভ হবে না। এই ব্যাপারে
                    আমরা সর্বোচ্চ কঠোর। সব সময় খোলা থাকবে এমন নাম্বার লিখবেন।
                    নাম্বার বন্ধ থাকার আশংকা থাকলে দুইটি নাম্বার লিখতে পারেন।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    যার নাম্বার লিখেছেন *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="phoneNumberRelated"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.phoneNumberRelated
                          : localBioData?.phoneNumberRelated
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="fullWidth"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    যে অভিভাবকের নাম্বার দিয়েছেন তার সাথে আপনার সম্পর্ক। এভাবে
                    লিখবেনঃ বাবা
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    বায়োডাটা গ্রহণের ই-মেইল এড্রেস *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      autoComplete="email"
                      autoFocus
                      type="email"
                      name="contactEmail"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.contactEmail
                          : localBioData?.contactEmail
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="email"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    এই ই-মেইলে অপরপক্ষ বায়োডাটার লিংক পাঠাতে পারে। তাই
                    নির্ভুলভাবে লিখুন।
                  </h5>
                </fieldset>
                <fieldset
                  style={{
                    width: "100%",
                    border: "2px solid lightGray",
                    padding: "15px",
                    borderRadius: "5px",
                    marginBottom: "30px",
                  }}
                >
                  <legend style={{ fontWeight: "bold", color: "gray" }}>
                    আপনার নাম্বার (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে
                    পাচ্ছে না) *
                  </legend>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <TextField
                      name="yourPhoneNumber"
                      defaultValue={
                        biodataProfile
                          ? biodataProfile.yourPhoneNumber
                          : localBioData?.yourPhoneNumber
                      }
                      onBlur={handleOnBlur}
                      required
                      fullWidth
                      id="email"
                    />
                  </Box>
                  <h5 style={{ color: "gray" }}>
                    ভেরিফিকেশন বা অন্য যে কোনো প্রয়োজনে ওয়েবসাইট কতৃপক্ষ থেকে
                    আপনাকে কল দেয়ার প্রয়োজন হতে পারে। তাই আপনার নাম্বার আমাদের
                    কাছে রাখা হচ্ছে। এই নাম্বার বায়োডাটাতে প্রকাশ করা হবে না।
                    অর্থাৎ আপনি এবং কতৃপক্ষ বাদে অন্য কেউ দেখতে পাবে না।
                  </h5>
                </fieldset>
                <Box sx={{ my: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                    <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
            {activeStep == 11 && (
              <Box sx={{ my: 2 }}>
                <div>
                  <Button
                    startIcon={<PreviewIcon />}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Review
                  </Button>
                </div>
              </Box>
            )}
          </Stepper>
        </Box>

        {publishFail && (
          <Alert sx={{ my: 2, fontSize: 18 }} severity="info">
            Please fill all required Filed.... Click 'Review' option for back.
          </Alert>
        )}
        {publishSuccess && (
          <Alert sx={{ my: 2, fontSize: 18 }} severity="success">
            Your Biodata successfully submited.
          </Alert>
        )}

        {activeStep == 11 && (
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Button
              style={{
                backgroundColor: "blue",
                borderRadius: "10px",
                color: "white",
                width: "100%",
                padding: "10px",
                fontWeight: "bold",
                fontSize: "17px",
              }}
              onClick={() => setPublishFail(true)}
              disabled={publishSuccess ? true : false}
              type="submit"
            >
              {isLoding ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              ) : (
                <div>
                  {biodataProfile == null ? (
                    <span> Publish</span>
                  ) : (
                    <span>Update</span>
                  )}
                </div>
              )}
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditBiodata;
