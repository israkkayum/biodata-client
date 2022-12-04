import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import PublicBiodata from "../PublicBiodata/PublicBiodata";
import Skeletons from "../Share/Skeletons/Skeletons";
import nodata from "../../images/no-data.jpg";
import ReplayIcon from "@mui/icons-material/Replay";

const PublicBiodatas = () => {
  const [publicBiodatas, setPublicBiodatas] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [hasPagination, setHasPagination] = useState(false);

  const [quarry, setQuarry] = useState({});
  const [filterBiodata, setFilterBiodata] = useState([]);

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...quarry };
    newInfo[field] = value;
    setQuarry(newInfo);
  };

  const handleSearch = (e) => {
    let matchedBiodatas;
    if (quarry.biodataNo) {
      matchedBiodatas = publicBiodatas.filter((biodata) =>
        biodata.biodataNumber.includes(quarry.biodataNo)
      );
    } else if (
      quarry.biodataType &&
      quarry.maritalStatus &&
      quarry.subDistrict
    ) {
      matchedBiodatas = publicBiodatas.filter(
        (biodata) =>
          biodata.biodataType.includes(quarry.biodataType) &&
          biodata.maritalStatus.includes(quarry.maritalStatus) &&
          biodata.parmanentSubDistrict.includes(quarry.subDistrict)
      );
    } else if (quarry.biodataType && quarry.maritalStatus) {
      matchedBiodatas = publicBiodatas.filter(
        (biodata) =>
          biodata.biodataType.includes(quarry.biodataType) &&
          biodata.maritalStatus.includes(quarry.maritalStatus)
      );
    } else if (quarry.biodataType && quarry.subDistrict) {
      matchedBiodatas = publicBiodatas.filter(
        (biodata) =>
          biodata.biodataType.includes(quarry.biodataType) &&
          biodata.parmanentSubDistrict.includes(quarry.subDistrict)
      );
    } else if (quarry.maritalStatus && quarry.subDistrict) {
      matchedBiodatas = publicBiodatas.filter(
        (biodata) =>
          biodata.maritalStatus.includes(quarry.maritalStatus) &&
          biodata.parmanentSubDistrict.includes(quarry.subDistrict)
      );
    } else {
      matchedBiodatas = publicBiodatas.filter(
        (biodata) =>
          biodata.biodataType.includes(quarry.biodataType) ||
          biodata.maritalStatus.includes(quarry.maritalStatus) ||
          biodata.parmanentSubDistrict.includes(quarry.subDistrict) ||
          biodata.biodataNumber.includes(quarry.biodataNo)
      );
    }

    setFilterBiodata(matchedBiodatas);
    setHasPagination(true);
  };

  const size = 9;

  useEffect(() => {
    fetch(
      `https://biodata-server.up.railway.app/publicbiodatas?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilterBiodata(data.biodatas);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);

        setHasPagination(false);
      });
  }, [page]);

  useEffect(() => {
    fetch("https://biodata-server.up.railway.app/biodatas")
      .then((res) => res.json())
      .then((data) => setPublicBiodatas(data));
  }, []);

  return (
    <div>
      <Box
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "blue",
          marginBottom: "50px",
          color: "white",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            paddingTop: "10px",
            paddingBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "auto",
              height: "auto",
              backgroundColor: "blue",
            },
          }}
        >
          <Paper elevation={3}>
            <div style={{ textAlign: "center", padding: "50px" }}>
              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-helper-label"
                >
                  আমি খুঁজছি
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="biodataType"
                  label="আমি খুঁজছি"
                  onChange={handleOnChange}
                  sx={{ color: "white" }}
                >
                  <MenuItem value="পাত্রের বায়োডাটা">পাত্রের বায়োডাটা</MenuItem>
                  <MenuItem value="পাত্রীর বায়োডাটা">পাত্রীর বায়োডাটা</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-helper-label"
                >
                  বৈবাহিক অবস্থা
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="maritalStatus"
                  label="বৈবাহিক অবস্থা"
                  onChange={handleOnChange}
                  sx={{ color: "white" }}
                >
                  <MenuItem value="অবিবাহিত">অবিবাহিত</MenuItem>
                  <MenuItem value="বিবাহিত">বিবাহিত</MenuItem>
                  <MenuItem value="ডিভোর্সড">ডিভোর্সড</MenuItem>
                  <MenuItem value="বিধবা">বিধবা</MenuItem>
                  <MenuItem value="বিপত্নীক">বিপত্নীক</MenuItem>
                </Select>
              </FormControl>
              {/* <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-helper-label"
                >
                  জেলা
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="district"
                  label="জেলা"
                  onChange={handleOnChange}
                  sx={{ color: "white" }}
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
                  <MenuItem value="চাঁপাইনবাবগঞ্জ">চাঁপাইনবাবগঞ্জ</MenuItem>
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
                  <MenuItem value="ব্রাহ্মণবাড়িয়া">ব্রাহ্মণবাড়িয়া</MenuItem>
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
              </FormControl> */}
              {/* {quarry.district == "চট্টগ্রাম" && ( */}

              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                <InputLabel
                  sx={{ color: "white" }}
                  id="demo-simple-select-helper-label"
                >
                  উপজেলা
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  name="subDistrict"
                  label="জেলা"
                  onChange={handleOnChange}
                  sx={{ color: "white" }}
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

              <TextField
                sx={{
                  m: 1,
                  minWidth: 120,
                  input: { color: "white" },
                  label: { color: "white" },
                }}
                fullWidth
                label="বায়োডাটা নং"
                name="biodataNo"
                id="fullWidth"
                onChange={handleOnChange}
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
                <NavLink to="/biodatas" style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ color: "white" }}
                    variant="outlined"
                    startIcon={<SearchIcon />}
                    onClick={handleSearch}
                  >
                    বায়োডাটা খুঁজুন
                  </Button>
                </NavLink>
                {hasPagination && (
                  <Button
                    sx={{ color: "white" }}
                    variant="outlined"
                    startIcon={<ReplayIcon />}
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    রিলোড দিন
                  </Button>
                )}
              </Stack>
            </div>
          </Paper>
        </Box>
      </Box>
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <h1 style={{ textAlign: "center", paddingBottom: "50px" }}>
          বায়োডাটা সমূহ
        </h1>
        {publicBiodatas.length != 0 ? (
          filterBiodata.length != 0 ? (
            <Grid container spacing={4}>
              {filterBiodata.map(
                (publicBiodata) =>
                  publicBiodata.status == "public" &&
                  publicBiodata.adminStatus == "Accepted" && (
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                      <PublicBiodata
                        key={publicBiodata.email}
                        publicBiodata={publicBiodata}
                      />
                    </Grid>
                  )
              )}
            </Grid>
          ) : (
            <div>
              <img src={nodata} style={{ width: "100%", height: "100%" }} />
            </div>
          )
        ) : (
          <Skeletons></Skeletons>
        )}
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center", pb: 5 }}>
        <Pagination
          onChange={(event, value) => setPage(value - 1)}
          count={pageCount}
          page={page + 1}
          variant="outlined"
          shape="rounded"
          disabled={hasPagination ? true : false}
        />
      </Box>
    </div>
  );
};
export default PublicBiodatas;
