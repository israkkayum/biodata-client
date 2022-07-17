import { Button, Paper, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import banner from "../../../images/banner.jpg";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";

const Banner = () => {
  const [gender, setGender] = React.useState("");
  const [type, setType] = React.useState("");
  const [distict, setDistict] = React.useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleDistictChange = (event) => {
    setDistict(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            paddingTop: "13.5%",
            paddingBottom: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 400,
              height: "auto",
            },
          }}
        >
          <Paper elevation={3}>
            <div style={{ textAlign: "center", padding: "50px" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  আমি খুঁজছি
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={gender}
                  label="আমি খুঁজছি"
                  onChange={handleGenderChange}
                >
                  <MenuItem value={10}>সকল বায়োডাটা</MenuItem>
                  <MenuItem value={20}>পাত্রের বায়োডাটা</MenuItem>
                  <MenuItem value={30}>পাত্রীর বায়োডাটা</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  বৈবাহিক অবস্থা
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={type}
                  label="বৈবাহিক অবস্থা"
                  onChange={handleTypeChange}
                >
                  <MenuItem value={10}>সকল</MenuItem>
                  <MenuItem value={20}>অবিবাহিত</MenuItem>
                  <MenuItem value={30}>বিবাহিত</MenuItem>
                  <MenuItem value={40}>ডিভোর্সড</MenuItem>
                  <MenuItem value={50}>বিধবা</MenuItem>
                  <MenuItem value={60}>বিপত্নীক</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  জেলা
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={distict}
                  label="জেলা"
                  onChange={handleDistictChange}
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
              <TextField
                sx={{ m: 1, minWidth: 120 }}
                fullWidth
                label="বায়োডাটা নং"
                id="fullWidth"
              />
              <Stack
                sx={{
                  m: 1,
                  minWidth: 120,
                  display: "flex",
                  justifyContent: "center",
                }}
                direction="row"
                spacing={2}
              >
                <Button variant="outlined" startIcon={<SearchIcon />}>
                  বায়োডাটা খুঁজুন
                </Button>
              </Stack>
            </div>
          </Paper>
        </Box>
      </div>
      {/* <img style={{ width: "100%" }} src={banner} /> */}
    </div>
  );
};

export default Banner;
