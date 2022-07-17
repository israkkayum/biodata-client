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
  const [hsc, setHsc] = React.useState("");

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
  const handleHscChange = (event) => {
    setHsc(event.target.value);
  };

  const handleTimeChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ maxWidth: "100%", p: { xs: 2, md: 3, lg: 3 } }}>
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
                              value={hsc}
                              onChange={handleHscChange}
                              required
                            >
                              <MenuItem value={10}>---</MenuItem>
                              <MenuItem value={20}>হ্যাঁ</MenuItem>
                              <MenuItem value={30}>না</MenuItem>
                              <MenuItem value={40}>ডিপ্লোমা পড়েছি</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </fieldset>

                      {hsc == 20 && (
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
                                  value={age}
                                  onChange={handleChange}
                                  required
                                >
                                  <MenuItem value={10}>---</MenuItem>
                                  <MenuItem value={20}>বিজ্ঞান বিভাগ</MenuItem>
                                  <MenuItem value={30}>মানবিক বিভাগ</MenuItem>
                                  <MenuItem value={40}>ব্যবসা বিভাগ</MenuItem>
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
                            <legend
                              style={{ fontWeight: "bold", color: "gray" }}
                            >
                              স্নাতক / স্নাতক (সম্মান) / সমমান শিক্ষাগত যোগ্যতা
                            </legend>
                            <Box
                              sx={{
                                width: "100%",
                              }}
                            >
                              <TextField
                                multiline
                                rows={4}
                                fullWidth
                                id="fullWidth"
                              />
                            </Box>
                            <h5 style={{ color: "gray" }}>
                              # উত্তরটা এভাবে দিতে পারেনঃ Bachelor of Science
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
                              <TextField required fullWidth id="fullWidth" />
                            </Box>
                            <h5 style={{ color: "gray" }}>
                              # যে প্রতিষ্ঠান থেকে স্নাতক করেছেন ।
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
                              <TextField required fullWidth id="fullWidth" />
                            </Box>
                            <h5 style={{ color: "gray" }}>
                              # ছাত্র হলে শিক্ষাবর্ষ লিখবেন।যেমনঃ তৃতীয় বর্ষ
                            </h5>
                          </fieldset>
                        </div>
                      )}

                      {hsc == 30 && (
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
                                  value={age}
                                  onChange={handleChange}
                                  required
                                >
                                  <MenuItem value={10}>---</MenuItem>
                                  <MenuItem value={20}>
                                    HSC দ্বিতীয় বর্ষ
                                  </MenuItem>
                                  <MenuItem value={30}>HSC প্রথম বর্ষ</MenuItem>
                                  <MenuItem value={40}>
                                    HSC রেজাল্ট দেয় নি এখনো
                                  </MenuItem>
                                  <MenuItem value={50}>
                                    SSC এর পর আর পড়াশোনা করা হয় নি
                                  </MenuItem>
                                  <MenuItem value={60}>
                                    HSC পরীক্ষা দিয়ে পাশ করতে পারি নি।
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </fieldset>
                        </div>
                      )}

                      {hsc == 40 && (
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
                              <TextField required fullWidth id="fullWidth" />
                            </Box>
                            <h5 style={{ color: "gray" }}>
                              # এভাবে উত্তর দিতে পারেনঃ Diploma in Textile
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
                              <TextField required fullWidth id="fullWidth" />
                            </Box>
                            <h5 style={{ color: "gray" }}>
                              # যে প্রতিষ্ঠান থেকে ডিপ্লোমা পড়েছেন
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
                            <Box sx={{ width: "100%" }}>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
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
                            <h5 style={{ color: "gray" }}>
                              # ছাত্র হলে বর্ষ লিখবেন। যেমনঃ ৩য় বর্ষ
                            </h5>
                          </fieldset>
                        </div>
                      )}
                    </div>
                  )}

                  {ssc == 30 && (
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
                              value={age}
                              onChange={handleChange}
                              required
                            >
                              <MenuItem value={10}>---</MenuItem>
                              <MenuItem value={20}>১oম</MenuItem>
                              <MenuItem value={30}>৯ম</MenuItem>
                              <MenuItem value={40}>৮ম</MenuItem>
                              <MenuItem value={50}>৭ম</MenuItem>
                              <MenuItem value={60}>৬ষ্ঠ</MenuItem>
                              <MenuItem value={60}>৫ম</MenuItem>
                              <MenuItem value={60}>৪র্থ</MenuItem>
                              <MenuItem value={60}>৩য়</MenuItem>
                              <MenuItem value={60}>২য়</MenuItem>
                              <MenuItem value={60}>১ম</MenuItem>
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
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # শিক্ষার বিষয়, প্রতিষ্ঠানের নাম, পাসের সন ইত্যাদি বিস্তারিত
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
                  পিতার নাম (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে না)
                  *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # পিতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র
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
                  মাতার নাম (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে না)
                  *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # মাতার পূর্ণ নাম লিখবেন, নাম নেয়া হচ্ছে শুধুমাত্র
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত)
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # মৃত হলে প্রথমে (মৃত) লিখার পর পেশা লিখবেন। যেমনঃ (মৃত)
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
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>---</MenuItem>
                      <MenuItem value={20}>বোন নেই</MenuItem>
                      <MenuItem value={30}>৯</MenuItem>
                      <MenuItem value={40}>৮</MenuItem>
                      <MenuItem value={50}>৭</MenuItem>
                      <MenuItem value={60}>৬</MenuItem>
                      <MenuItem value={60}>৫</MenuItem>
                      <MenuItem value={60}>৪</MenuItem>
                      <MenuItem value={60}>৩</MenuItem>
                      <MenuItem value={60}>২</MenuItem>
                      <MenuItem value={60}>১</MenuItem>
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
                      value={age}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value={10}>---</MenuItem>
                      <MenuItem value={20}>ভাই নেই</MenuItem>
                      <MenuItem value={30}>৯</MenuItem>
                      <MenuItem value={40}>৮</MenuItem>
                      <MenuItem value={50}>৭</MenuItem>
                      <MenuItem value={60}>৬</MenuItem>
                      <MenuItem value={60}>৫</MenuItem>
                      <MenuItem value={60}>৪</MenuItem>
                      <MenuItem value={60}>৩</MenuItem>
                      <MenuItem value={60}>২</MenuItem>
                      <MenuItem value={60}>১</MenuItem>
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
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # জানাতে অনিচ্ছুক হলে ঘরটি ফাঁকা রাখুন।
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
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
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
                  প্রতিদিন পাঁচ ওয়াক্ত নামাজ পড়া হয় ? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  নিয়মিত নামায কত সময় যাবত পড়ছেন? *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  # অর্থাৎ কয় বছর/মাস যাবত ৫ ওয়াক্ত নামায শুরু করেছেন।
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
                  মাহরাম/নন-মাহরাম মেনে চলেন কি ? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  শুদ্ধভাবে কুরআন তিলওয়াত করতে পারেন? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  কোন মাঝহাব অনুসরণ করেন? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  কোনো রাজনৈতিক দর্শন থাকলে লিখুন *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  নাটক/সিনেমা/সিরিয়াল/গান এসব দেখেন বা শুনেন? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  মানসিক বা শারীরিক কোনো রোগ আছে কি? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  দ্বীনের কোন বিশেষ মেহনতে যুক্ত আছেন? *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>যেমনঃ তাবলীগ ইত্যাদি।</h5>
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
                  আপনি কি কোনো পীরের মুরিদ বা অনুসারী ? *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  যদি হয়ে থাকেন তাহলে পীরের নাম এবং তরিকার নাম লিখবেন।
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
                  মাজার সম্পর্কে আপনার ধারণা বা বিশ্বাস কি? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  আপনার পছন্দের অন্তত ৩ টি ইসলামী বই এর নাম লিখুন *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  আপনার পছন্দের অন্তত ৩ জন আলেমের নাম লিখুন *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা (যদি থাকে)
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
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
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
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
                  অভিভাবক আপনার বিয়েতে রাজি কি না? *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি? *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>সংক্ষেপে বর্ণনা করুন।</h5>
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
              <h3 style={{ marginLeft: "10px" }}>অন্যান্য তথ্য</h3>
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
                  বিশেষ কিছু যদি জানাতে চান
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  আপনার কোনো শর্ত বা উপরে লিখার সুযোগ হয় নি এমন কিছু জানানোর
                  থাকলে এই ঘরে লিখতে পারেন। যেমনঃ ছাত্র অবস্থায় বিয়ে করলে কিভাবে
                  ভরণপোষণ করবেন বা সংসার চালাবেন, পারিবারিক বা ব্যক্তিগত কোনো
                  সুবিধা বা অসুবিধা ইত্যাদি যে কোনো বিষয়ে যত ইচ্ছা লিখতে পারবেন।
                  । যদি কিছুই না লিখতে চান, তাহলে ঘরটি ফাঁকা রাখবেন।
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
                  বয়স *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  গাত্রবর্ণ *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  নূন্যতম উচ্চতা *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  নূন্যতম শিক্ষাগত যোগ্যতা *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  জেলা *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  বৈবাহিক অবস্থা *
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  পারিবারিক অবস্থা
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
                <legend style={{ fontWeight: "bold", color: "gray" }}>
                  জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField multiline rows={4} fullWidth id="fullWidth" />
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
                  OrdhekDeen.com ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক
                  জানেন? *
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
                  আল্লাহ'র শপথ করে সাক্ষ্য দিন, যে তথ্যগুলো দিচ্ছেন সব সত্য? *
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
                  কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার
                  ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি? *
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
                  অভিভাবকের নাম্বার *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  অবশ্যই ইংরেজীতে নাম্বার লিখবেন এভাবে 01700-000000। বিঃদ্রঃ
                  নিজের নাম্বার দিলে ভেরিফিকেশনে এপ্রুভ হবে না। এই ব্যাপারে আমরা
                  সর্বোচ্চ কঠোর। সব সময় খোলা থাকবে এমন নাম্বার লিখবেন। নাম্বার
                  বন্ধ থাকার আশংকা থাকলে দুইটি নাম্বার লিখতে পারেন।
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
                  <TextField required fullWidth id="fullWidth" />
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
                  <TextField required fullWidth id="fullWidth" />
                </Box>
                <h5 style={{ color: "gray" }}>
                  এই ই-মেইলে অপরপক্ষ বায়োডাটার লিংক পাঠাতে পারে। তাই নির্ভুলভাবে
                  লিখুন।
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
                  আপনার নাম্বার (শুধুমাত্র আপনি ও কতৃপক্ষ বাদে কেউ দেখতে পাচ্ছে
                  না) *
                </legend>
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <TextField required fullWidth id="fullWidth" />
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
                    Publish
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
