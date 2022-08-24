import { Button, Divider, Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import couple from "../../../images/couple.png";
import male from "../../../images/male.png";
import female from "../../../images/female.png";
import relation from "../../../images/relation.png";
import { NavLink } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 10, textAlign: "center" }}>
        <NavLink to="/profile" style={{ textDecoration: "none" }}>
          <Button
            style={{
              backgroundColor: "gold",
              color: "black",
              fontWeight: "bold",
              fontSize: "20px",
            }}
            sx={{ py: 3, px: 10 }}
            variant="contained"
          >
            আপনার বায়োডাটা তৈরি করুন
          </Button>
        </NavLink>
        <br></br>
        <NavLink to="/tutorial" style={{ textDecoration: "none" }}>
          <Button
            style={{
              backgroundColor: "blue",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
            }}
            sx={{ py: 3, px: 8, my: 5 }}
            variant="contained"
          >
            যেভাবে বায়োডাটা তৈরি করবেন (ভিডিও)
          </Button>
        </NavLink>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              my: 10,
              "& > :not(style)": {
                m: 1,
                width: { xs: "100%", md: 250, lg: 250 },
                height: 280,
              },
            }}
          >
            <Paper elevation={3}>
              <img
                src={couple}
                style={{ width: "100px", height: "100px", padding: "15px" }}
              />
              <Divider />
              <h2>Loadding...</h2>
              <h3 style={{ color: "blue" }}>মোট পাত্র-পাত্রীর বায়োডাটা</h3>
            </Paper>
            <Paper elevation={3}>
              <img
                src={male}
                style={{ width: "100px", height: "100px", padding: "15px" }}
              />
              <Divider />
              <h2>Loadding...</h2>
              <h3 style={{ color: "blue" }}>মোট পাত্রের বায়োডাটা </h3>
            </Paper>
            <Paper elevation={3}>
              <img
                src={female}
                style={{ width: "100px", height: "100px", padding: "15px" }}
              />
              <Divider />
              <h2>Loadding...</h2>
              <h3 style={{ color: "blue" }}>মোট পাত্রীর বায়োডাটা </h3>
            </Paper>
            <Paper elevation={3}>
              <img
                src={relation}
                style={{ width: "100px", height: "100px", padding: "15px" }}
              />
              <Divider />
              <h2>Loadding...</h2>
              <h3 style={{ color: "blue" }}>সর্বমোট সফল বিবাহ </h3>
            </Paper>
          </Box>
        </div>
      </Container>
      <div
        style={{
          paddingTop: "25px",
          paddingBottom: "25px",
          marginTop: "50px",
          backgroundColor: "#F6F6F6",
        }}
      >
        <Container maxWidth="md">
          <div style={{ lineHeight: "2" }}>
            <h2 style={{ fontWight: "bold" }}>
              <center>বিবাহের গুরুত্ব ও প্রয়োজনীয়তা</center>
            </h2>
            <p style={{ color: "gray" }}>
              বিবাহ মানুষের জীবনকে পরিশীলিত, মার্জিত এবং পবিত্র করে তোলে । আদর্শ
              পরিবার গঠন, জৈবিক চাহিদা পূরণ, মানসিক প্রশান্তি ও মানব বংশ বৃদ্ধির
              অন্যতম মাধ্যম হলো বিবাহ । মহান রাব্বুল আলামিন কুরআন কারিমে ইরশাদ
              করেন ‘আর এক নিদর্শন এই যে, তিনি তোমাদের জন্যে তোমাদের মধ্য থেকে
              তোমাদের সংগিনীদের সৃষ্টি করেছেন, যাতে তোমরা তাদের কাছে শান্তিতে
              থাক এবং তিনি তোমাদের মধ্যে পারস্পরিক সম্প্রীতি ও দয়া সৃষ্টি
              করেছেন । আল্লাহ অন্যত্র ইরশাদ করেন- ‘তারা (স্ত্রীগণ) তোমাদের পোশাক
              এবং তোমরা (স্বামীগণ) তাদের পোশাকস্বরূপ`।
            </p>
            <p style={{ color: "gray" }}>
              রাসূল সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম ইরশাদ করেন, ` বিয়ে হলো আমার
              সুন্নাত যে ব্যক্তি আমার সুন্নাত তরিকা ছেড়ে চলবে সে আমার দলভুক্ত নয়
              । ’ (বুখারি) অন্য হাদিসে এসেছে - `হে যুবসমাজ! তোমাদের মধ্যে যারা
              বিয়ের সামর্থ্য রাখে, তাদের বিয়ে করা কর্তব্য, কেননা বিয়ে দৃষ্টি
              নিয়ন্ত্রণকারী, যৌন অঙ্গের পবিত্রতা রক্ষাকারী । ’ (মিশকাত) তিনি আরো
              ইরশাদ করেন, ‘ হে যুব সম্প্রদায়! তোমাদের মধ্যে যারাই স্ত্রীর অধিকার
              আদায়ে সামর্থ্য রাখে, তারা যেন অবশ্যই বিয়ে বন্ধনে আবদ্ধ হয় । ’
              (বুখারি) ইসলামে বৈরাগ্যবাদে স্থান নেই । তাই মানুষ যতক্ষণ পর্যন্ত
              বিবাহ না করে ততক্ষণ পর্যন্ত পূর্ণাঙ্গ মুসলমান হতে পারে না । হাদিসে
              এসেছে - ‘ যখন কোনো বান্দা বিবাহ করলো তখন সে তার ঈমানের অর্ধাংশ
              পূর্ণ করল । ’ (মিশকাত)
            </p>

            <p style={{ color: "gray" }}>
              আল্লাহ তায়ালা প্রত্যেককে ইসলামি অনুশাসন মেনে বিবাহ করার মাধ্যমে
              সুন্দর সমাজ বিনির্মাণের তাওফিক দান করুক । আমীন ।
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Body;
