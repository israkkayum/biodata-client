import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DateFnsUtils from "@date-io/date-fns";

import {
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const EditBiodata = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState(new Date());

  const [age, setAge] = React.useState("");
  const [study, setStudy] = React.useState("");
  const [hadith, setHadith] = React.useState("");
  const [takashos, setTakashos] = React.useState("");
  const [ssc, setSsc] = React.useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleStudyChange = (event) => {
    setStudy(event.target.value);
  };
  const handleHadithChange = (event) => {
    setHadith(event.target.value);
  };
  const handleTakashosChange = (event) => {
    setTakashos(event.target.value);
  };
  const handleSscChange = (event) => {
    setSsc(event.target.value);
  };

  const handleTimeChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ maxWidth: "100%", p: { xs: 1, md: 3, lg: 3 } }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>
              <h3 style={{ marginLeft: "10px" }}>নাম</h3>
            </StepLabel>
            <StepContent>
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # নাম নেয়া হচ্ছে ভেরিফিকেশনের জন্য, পূর্ণ নাম লিখবেন। আপনার
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
            <StepContent>
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
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>সকল বায়োডাটা</MenuItem>
                      <MenuItem value={20}>পাত্রের বায়োডাটা</MenuItem>
                      <MenuItem value={30}>পাত্রীর বায়োডাটা</MenuItem>
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
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>সকল</MenuItem>
                      <MenuItem value={20}>অবিবাহিত</MenuItem>
                      <MenuItem value={30}>বিবাহিত</MenuItem>
                      <MenuItem value={40}>ডিভোর্সড</MenuItem>
                      <MenuItem value={50}>বিধবা</MenuItem>
                      <MenuItem value={60}>বিপত্নীক</MenuItem>
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
                  স্থায়ী ঠিকানা *
                </legend>
                <Box sx={{ width: "100%" }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>সকল জেলা</MenuItem>
                      <MenuItem value={20}>কুমিল্লা</MenuItem>
                      <MenuItem value={30}>কক্সবাজার</MenuItem>
                      <MenuItem value={40}>কুষ্টিয়া</MenuItem>
                      <MenuItem value={50}>কিশোরগঞ্জ</MenuItem>
                      <MenuItem value={60}>কুড়িগ্রাম</MenuItem>
                      <MenuItem value={70}>খাগড়াছড়ি</MenuItem>
                      <MenuItem value={80}>খুলনা</MenuItem>
                      <MenuItem value={90}>গাজীপুর</MenuItem>
                      <MenuItem value={100}>গোপালগঞ্জ</MenuItem>
                      <MenuItem value={110}>গাইবান্ধা</MenuItem>
                      <MenuItem value={120}>হবিগঞ্জ</MenuItem>
                      <MenuItem value={130}>চাঁদপুর</MenuItem>
                      <MenuItem value={140}>চট্টগ্রাম</MenuItem>
                      <MenuItem value={150}>চাঁপাইনবাবগঞ্জ</MenuItem>
                      <MenuItem value={160}>চুয়াডাঙ্গা</MenuItem>
                      <MenuItem value={170}>জয়পুরহাট</MenuItem>
                      <MenuItem value={180}>জামালপুর</MenuItem>
                      <MenuItem value={190}>ঝিনাইদহ</MenuItem>
                      <MenuItem value={200}>ঝালকাঠি</MenuItem>
                      <MenuItem value={210}>যশোর</MenuItem>
                      <MenuItem value={220}>শরীয়তপুর</MenuItem>
                      <MenuItem value={230}>শেরপুর</MenuItem>
                      <MenuItem value={240}>টাঙ্গাইল</MenuItem>
                      <MenuItem value={250}>ঠাকুরগাঁও</MenuItem>
                      <MenuItem value={260}>ঢাকা</MenuItem>
                      <MenuItem value={270}>রাঙ্গামাটি</MenuItem>
                      <MenuItem value={280}>রাজশাহী</MenuItem>
                      <MenuItem value={290}>রাজবাড়ী</MenuItem>
                      <MenuItem value={300}>রংপুর</MenuItem>
                      <MenuItem value={310}>দিনাজপুর</MenuItem>
                      <MenuItem value={320}>নোয়াখালী</MenuItem>
                      <MenuItem value={330}>নাটোর</MenuItem>
                      <MenuItem value={340}>নওগাঁ</MenuItem>
                      <MenuItem value={350}>নড়াইল</MenuItem>
                      <MenuItem value={360}>নরসিংদী</MenuItem>
                      <MenuItem value={370}>নারায়ণগঞ্জ</MenuItem>
                      <MenuItem value={380}>নীলফামারী</MenuItem>
                      <MenuItem value={390}>নেত্রকোণা</MenuItem>
                      <MenuItem value={400}>লক্ষ্মীপুর</MenuItem>
                      <MenuItem value={410}>লালমনিরহাট</MenuItem>
                      <MenuItem value={420}>সিরাজগঞ্জ</MenuItem>
                      <MenuItem value={430}>সাতক্ষীরা</MenuItem>
                      <MenuItem value={440}>সিলেট</MenuItem>
                      <MenuItem value={450}>সুনামগঞ্জ</MenuItem>
                      <MenuItem value={460}>পাবনা</MenuItem>
                      <MenuItem value={470}>পটুয়াখালী</MenuItem>
                      <MenuItem value={480}>পিরোজপুর</MenuItem>
                      <MenuItem value={490}>পঞ্চগড়</MenuItem>
                      <MenuItem value={500}>ফেনী</MenuItem>
                      <MenuItem value={510}>ফরিদপুর</MenuItem>
                      <MenuItem value={520}>ব্রাহ্মণবাড়িয়া</MenuItem>
                      <MenuItem value={530}>বান্দরবান</MenuItem>
                      <MenuItem value={540}>বগুড়া</MenuItem>
                      <MenuItem value={550}>বাগেরহাট</MenuItem>
                      <MenuItem value={560}>বরিশাল</MenuItem>
                      <MenuItem value={570}>বরগুনা</MenuItem>
                      <MenuItem value={580}>ভোলা</MenuItem>
                      <MenuItem value={590}>ময়মনসিংহ</MenuItem>
                      <MenuItem value={600}>মেহেরপুর</MenuItem>
                      <MenuItem value={610}>মাগুরা</MenuItem>
                      <MenuItem value={620}>মৌলভীবাজার</MenuItem>
                      <MenuItem value={630}>মানিকগঞ্জ</MenuItem>
                      <MenuItem value={640}>মুন্সিগঞ্জ</MenuItem>
                      <MenuItem value={650}>মাদারীপুর</MenuItem>
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
                  বিভাগ *
                </legend>
                <Box sx={{ width: "100%" }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>ঢাকা</MenuItem>
                      <MenuItem value={20}>ময়মনসিংহ</MenuItem>
                      <MenuItem value={30}>চট্টগ্রাম</MenuItem>
                      <MenuItem value={40}>রাজশাহী</MenuItem>
                      <MenuItem value={50}>খুলনা</MenuItem>
                      <MenuItem value={60}>বরিশাল</MenuItem>
                      <MenuItem value={70}>সিলেট</MenuItem>
                      <MenuItem value={80}>রংপুর</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <h5 style={{ color: "gray" }}>
                  # স্থায়ী ঠিকানা যে বিভাগের আওতাধীন
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
                <Box sx={{ width: "100%" }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>সকল জেলা</MenuItem>
                      <MenuItem value={20}>কুমিল্লা</MenuItem>
                      <MenuItem value={30}>কক্সবাজার</MenuItem>
                      <MenuItem value={40}>কুষ্টিয়া</MenuItem>
                      <MenuItem value={50}>কিশোরগঞ্জ</MenuItem>
                      <MenuItem value={60}>কুড়িগ্রাম</MenuItem>
                      <MenuItem value={70}>খাগড়াছড়ি</MenuItem>
                      <MenuItem value={80}>খুলনা</MenuItem>
                      <MenuItem value={90}>গাজীপুর</MenuItem>
                      <MenuItem value={100}>গোপালগঞ্জ</MenuItem>
                      <MenuItem value={110}>গাইবান্ধা</MenuItem>
                      <MenuItem value={120}>হবিগঞ্জ</MenuItem>
                      <MenuItem value={130}>চাঁদপুর</MenuItem>
                      <MenuItem value={140}>চট্টগ্রাম</MenuItem>
                      <MenuItem value={150}>চাঁপাইনবাবগঞ্জ</MenuItem>
                      <MenuItem value={160}>চুয়াডাঙ্গা</MenuItem>
                      <MenuItem value={170}>জয়পুরহাট</MenuItem>
                      <MenuItem value={180}>জামালপুর</MenuItem>
                      <MenuItem value={190}>ঝিনাইদহ</MenuItem>
                      <MenuItem value={200}>ঝালকাঠি</MenuItem>
                      <MenuItem value={210}>যশোর</MenuItem>
                      <MenuItem value={220}>শরীয়তপুর</MenuItem>
                      <MenuItem value={230}>শেরপুর</MenuItem>
                      <MenuItem value={240}>টাঙ্গাইল</MenuItem>
                      <MenuItem value={250}>ঠাকুরগাঁও</MenuItem>
                      <MenuItem value={260}>ঢাকা</MenuItem>
                      <MenuItem value={270}>রাঙ্গামাটি</MenuItem>
                      <MenuItem value={280}>রাজশাহী</MenuItem>
                      <MenuItem value={290}>রাজবাড়ী</MenuItem>
                      <MenuItem value={300}>রংপুর</MenuItem>
                      <MenuItem value={310}>দিনাজপুর</MenuItem>
                      <MenuItem value={320}>নোয়াখালী</MenuItem>
                      <MenuItem value={330}>নাটোর</MenuItem>
                      <MenuItem value={340}>নওগাঁ</MenuItem>
                      <MenuItem value={350}>নড়াইল</MenuItem>
                      <MenuItem value={360}>নরসিংদী</MenuItem>
                      <MenuItem value={370}>নারায়ণগঞ্জ</MenuItem>
                      <MenuItem value={380}>নীলফামারী</MenuItem>
                      <MenuItem value={390}>নেত্রকোণা</MenuItem>
                      <MenuItem value={400}>লক্ষ্মীপুর</MenuItem>
                      <MenuItem value={410}>লালমনিরহাট</MenuItem>
                      <MenuItem value={420}>সিরাজগঞ্জ</MenuItem>
                      <MenuItem value={430}>সাতক্ষীরা</MenuItem>
                      <MenuItem value={440}>সিলেট</MenuItem>
                      <MenuItem value={450}>সুনামগঞ্জ</MenuItem>
                      <MenuItem value={460}>পাবনা</MenuItem>
                      <MenuItem value={470}>পটুয়াখালী</MenuItem>
                      <MenuItem value={480}>পিরোজপুর</MenuItem>
                      <MenuItem value={490}>পঞ্চগড়</MenuItem>
                      <MenuItem value={500}>ফেনী</MenuItem>
                      <MenuItem value={510}>ফরিদপুর</MenuItem>
                      <MenuItem value={520}>ব্রাহ্মণবাড়িয়া</MenuItem>
                      <MenuItem value={530}>বান্দরবান</MenuItem>
                      <MenuItem value={540}>বগুড়া</MenuItem>
                      <MenuItem value={550}>বাগেরহাট</MenuItem>
                      <MenuItem value={560}>বরিশাল</MenuItem>
                      <MenuItem value={570}>বরগুনা</MenuItem>
                      <MenuItem value={580}>ভোলা</MenuItem>
                      <MenuItem value={590}>ময়মনসিংহ</MenuItem>
                      <MenuItem value={600}>মেহেরপুর</MenuItem>
                      <MenuItem value={610}>মাগুরা</MenuItem>
                      <MenuItem value={620}>মৌলভীবাজার</MenuItem>
                      <MenuItem value={630}>মানিকগঞ্জ</MenuItem>
                      <MenuItem value={640}>মুন্সিগঞ্জ</MenuItem>
                      <MenuItem value={650}>মাদারীপুর</MenuItem>
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
                  বিভাগ *
                </legend>
                <Box sx={{ width: "100%" }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>ঢাকা</MenuItem>
                      <MenuItem value={20}>ময়মনসিংহ</MenuItem>
                      <MenuItem value={30}>চট্টগ্রাম</MenuItem>
                      <MenuItem value={40}>রাজশাহী</MenuItem>
                      <MenuItem value={50}>খুলনা</MenuItem>
                      <MenuItem value={60}>বরিশাল</MenuItem>
                      <MenuItem value={70}>সিলেট</MenuItem>
                      <MenuItem value={80}>রংপুর</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <h5 style={{ color: "gray" }}>
                  # বর্তমান ঠিকানা যে বিভাগের আওতাধীন
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
                  জন্মসন (আসল) *
                </legend>
                <Box sx={{ width: "100%" }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleTimeChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
                <h5 style={{ color: "gray" }}>
                  # অবশ্যই সত্যটা দিবেন। সার্টিফিকেটের নয়।
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
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>---</MenuItem>
                      <MenuItem value={20}>কালো</MenuItem>
                      <MenuItem value={30}>শ্যামলা</MenuItem>
                      <MenuItem value={40}>উজ্জ্বল শ্যামলা</MenuItem>
                      <MenuItem value={50}>ফর্সা</MenuItem>
                      <MenuItem value={60}>উজ্জ্বল ফর্সা</MenuItem>
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
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>৪'১''</MenuItem>
                      <MenuItem value={20}>৪'২''</MenuItem>
                      <MenuItem value={30}>৪'৩''</MenuItem>
                      <MenuItem value={40}>৪'৪''</MenuItem>
                      <MenuItem value={50}>৪'৫''</MenuItem>
                      <MenuItem value={60}>৪'৬''</MenuItem>
                      <MenuItem value={70}>৪'৭''</MenuItem>
                      <MenuItem value={80}>৪'৮''</MenuItem>
                      <MenuItem value={90}>৪'৯''</MenuItem>
                      <MenuItem value={100}>৪'১০''</MenuItem>
                      <MenuItem value={110}>৪'১১''</MenuItem>
                      <MenuItem value={120}>৪'১২''</MenuItem>
                      <MenuItem value={130}>৫'০''</MenuItem>
                      <MenuItem value={140}>৫'১''</MenuItem>
                      <MenuItem value={150}>৫'২''</MenuItem>
                      <MenuItem value={160}>৫'৩''</MenuItem>
                      <MenuItem value={170}>৫'৪''</MenuItem>
                      <MenuItem value={180}>৫'৫''</MenuItem>
                      <MenuItem value={190}>৫'৬''</MenuItem>
                      <MenuItem value={200}>৫'৭''</MenuItem>
                      <MenuItem value={210}>৫'৮''</MenuItem>
                      <MenuItem value={220}>৫'৯''</MenuItem>
                      <MenuItem value={230}>৫'১০''</MenuItem>
                      <MenuItem value={240}>৫'১১''</MenuItem>
                      <MenuItem value={250}>৫'১২''</MenuItem>
                      <MenuItem value={260}>৬'০''</MenuItem>
                      <MenuItem value={270}>৬'১''</MenuItem>
                      <MenuItem value={280}>৬'২''</MenuItem>
                      <MenuItem value={290}>৬'৩''</MenuItem>
                      <MenuItem value={300}>৬'৪''</MenuItem>
                      <MenuItem value={310}>৬'৫''</MenuItem>
                      <MenuItem value={320}>৬'৬''</MenuItem>
                      <MenuItem value={330}>৬'৭''</MenuItem>
                      <MenuItem value={340}>৬'৮''</MenuItem>
                      <MenuItem value={350}>৬'৯''</MenuItem>
                      <MenuItem value={360}>৬'১০''</MenuItem>
                      <MenuItem value={370}>৬'১১''</MenuItem>
                      <MenuItem value={380}>৬'১২''</MenuItem>
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
                  রক্তের গ্রুপ *
                </legend>
                <Box sx={{ width: "100%" }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>A+</MenuItem>
                      <MenuItem value={20}>A-</MenuItem>
                      <MenuItem value={30}>B+</MenuItem>
                      <MenuItem value={40}>B-</MenuItem>
                      <MenuItem value={50}>O+</MenuItem>
                      <MenuItem value={60}>O-</MenuItem>
                      <MenuItem value={70}>AB+</MenuItem>
                      <MenuItem value={80}>AB-</MenuItem>
                      <MenuItem value={90}>জানা নেই</MenuItem>
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # সর্বোচ্চ ৩ শব্দে শুধু পদবী লিখবেন। পেশা সম্পর্কে বিস্তারিত
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন। জানাতে চাইলে এভাবে
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
            <StepContent>
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ
                  মিরপুর-২,ঢাকা।
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # বাসার নাম্বার না দিয়ে এলাকা সহ ঠিকানা লিখুন। যেমনঃ
                  মিরপুর-২,ঢাকা।
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
                  <TextField required fullWidth id="fullWidth" />
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
            <StepContent>
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
                      value={study}
                      onChange={handleStudyChange}
                      required
                      displayEmpty
                    >
                      <MenuItem value="">
                        <em>---</em>
                      </MenuItem>
                      <MenuItem value={10}>মাদ্রাসা</MenuItem>
                      <MenuItem value={20}>জেনারেল</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <h5 style={{ color: "gray" }}>
                  # আলিয়া / মাধ্যমিক / কারিগরি / ইংরেজি মাধ্যমে শিক্ষিতরা
                  "জেনারেল" অপশন সিলেক্ট করুন।
                </h5>
              </fieldset>

              {study == 10 && (
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
                          value={age}
                          onChange={handleChange}
                          required
                        >
                          <MenuItem value={10}>---</MenuItem>
                          <MenuItem value={20}>হ্যাঁ</MenuItem>
                          <MenuItem value={30}>না</MenuItem>
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
                          value={hadith}
                          onChange={handleHadithChange}
                          required
                        >
                          <MenuItem value={10}>---</MenuItem>
                          <MenuItem value={20}>হ্যাঁ</MenuItem>
                          <MenuItem value={30}>না</MenuItem>
                          <MenuItem value={40}>না, এখনো পড়ছি</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </fieldset>

                  {hadith == 20 && (
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
                                value={value}
                                onChange={handleTimeChange}
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
                              value={age}
                              onChange={handleChange}
                              required
                            >
                              <MenuItem value={10}>---</MenuItem>
                              <MenuItem value={20}>মুমতায</MenuItem>
                              <MenuItem value={30}>জায়্যিদ জিদ্দান</MenuItem>
                              <MenuItem value={40}>জায়্যিদ</MenuItem>
                              <MenuItem value={50}>মকবূল</MenuItem>
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
                              value={takashos}
                              onChange={handleTakashosChange}
                              required
                            >
                              <MenuItem value={10}>---</MenuItem>
                              <MenuItem value={20}>হ্যাঁ</MenuItem>
                              <MenuItem value={30}>না</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </fieldset>
                      {takashos == 20 && (
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
                              <TextField required fullWidth id="fullWidth" />
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
                              <TextField required fullWidth id="fullWidth" />
                            </Box>
                            <h5 style={{ color: "gray" }}>
                              # ছাত্র হলে লিখবেন ছাত্র
                            </h5>
                          </fieldset>
                        </div>
                      )}
                    </div>
                  )}

                  {hadith == 40 && (
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
                          <TextField required fullWidth id="fullWidth" />
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
                      <TextField multiline rows={4} fullWidth id="fullWidth" />
                    </Box>
                    <h5 style={{ color: "gray" }}>
                      # শিক্ষার বিষয়, প্রতিষ্ঠানের নাম, পাসের সন ইত্যাদি
                      বিস্তারিত লিখবেন।
                    </h5>
                  </fieldset>
                </div>
              )}

              {study == 20 && (
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
                          value={ssc}
                          onChange={handleSscChange}
                          required
                        >
                          <MenuItem value={10}>---</MenuItem>
                          <MenuItem value={20}>হ্যাঁ</MenuItem>
                          <MenuItem value={30}>না</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </fieldset>

                  {ssc == 20 && (
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
                              value={age}
                              onChange={handleChange}
                              required
                            >
                              <MenuItem value={10}>---</MenuItem>
                              <MenuItem value={20}>Golden A+</MenuItem>
                              <MenuItem value={30}>A+</MenuItem>
                              <MenuItem value={40}>A</MenuItem>
                              <MenuItem value={50}>A-</MenuItem>
                              <MenuItem value={60}>B</MenuItem>
                              <MenuItem value={70}>B-</MenuItem>
                              <MenuItem value={80}>C</MenuItem>
                              <MenuItem value={90}>C-</MenuItem>
                              <MenuItem value={100}>D</MenuItem>
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
                              value={age}
                              onChange={handleChange}
                              required
                            >
                              <MenuItem value={10}>---</MenuItem>
                              <MenuItem value={20}>বিজ্ঞান বিভাগ</MenuItem>
                              <MenuItem value={30}>মানবিক বিভাগ</MenuItem>
                              <MenuItem value={40}>ব্যবসা বিভাগ</MenuItem>
                              <MenuItem value={50}>কারিগরি / ভোকেশনাল</MenuItem>
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
                                value={value}
                                onChange={handleTimeChange}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </Stack>
                          </LocalizationProvider>
                        </Box>
                      </fieldset>
                    </div>
                  )}
                </div>
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
        </Stepper>
      </Box>
    </div>
  );
};

export default EditBiodata;
