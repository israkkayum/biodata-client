import { Button, Divider, Paper } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import couple from "../../../images/couple.png";
import male from "../../../images/male.png";
import female from "../../../images/female.png";
import relation from "../../../images/relation.png";

const Body = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ my: 10, textAlign: "center" }}>
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
          আপনার বায়োডাটা সম্পূর্ণ করুন
        </Button>
        <br></br>
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
              <h2>13044+</h2>
              <h3 style={{ color: "blue" }}>
                মোট দ্বীনদার পাত্র-পাত্রীর বায়োডাটা
              </h3>
            </Paper>
            <Paper elevation={3}>
              <img
                src={male}
                style={{ width: "100px", height: "100px", padding: "15px" }}
              />
              <Divider />
              <h2>7536+</h2>
              <h3 style={{ color: "blue" }}>মোট পাত্রের বায়োডাটা </h3>
            </Paper>
            <Paper elevation={3}>
              <img
                src={female}
                style={{ width: "100px", height: "100px", padding: "15px" }}
              />
              <Divider />
              <h2>5508+</h2>
              <h3 style={{ color: "blue" }}>মোট পাত্রীর বায়োডাটা </h3>
            </Paper>
            <Paper elevation={3}>
              <img
                src={relation}
                style={{ width: "100px", height: "100px", padding: "15px" }}
              />
              <Divider />
              <h2>625+</h2>
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
              <center>জীবনসঙ্গী নির্বাচনে ইসলামের নির্দেশনা</center>
            </h2>
            <p style={{ color: "gray" }}>
              জীবনসঙ্গী নির্বাচনে ইসলামের নির্দেশনা পাত্র-পাত্রী নির্বাচন খুব
              গুরুত্বপূর্ণ একটি বিষয়। যে মানুষটির সাথে সারা জীবন অতিবাহিত করতে
              হবে সেই মানুষটির চারিত্রিক ও নৈতিক বৈশিষ্ট্য তার জীবনসঙ্গীর উপর
              অনেক প্রভাব বিস্তার করে।
            </p>
            <p style={{ color: "gray" }}>
              এ ব্যাপারে কয়েকটি হাদিস উল্লেখযোগ্য –
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                ‘যার দ্বীনদারী ও চরিত্রে তোমরা সন্তুষ্ট, এমন কেউ বিবাহের
                প্রস্তাব দিলে তার সাথে তোমরা বিবাহ সম্পন্ন কর। তা না করলে
                পৃথিবীতে ফিৎনা দেখা দেবে ও ব্যাপক ফ্যাসাদ ছড়িয়ে পড়বে।’
              </span>
              <span style={{ color: "gray" }}>(তিরমিযী: ১০৮৪)</span>
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                ‘নারীকে বিবাহ করা হয় চারটি জিনিস দেখে। তার সম্পদ দেখে,
                বংশমর্যাদা দেখে, রূপ দেখে এবং দ্বীনদারী দেখে। হে মুমিন! তুমি
                দ্বীনদার নারী বিবাহ করে ধন্য হয়ে যাও।’
              </span>
              <span style={{ color: "gray" }}>(বুখারী : ৫০৯০ )</span>
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                “সমগ্র দুনিয়াটাই সম্পদ। এর মধ্যে সবচাইতে উত্তম সম্পদ হলাে
                পরহেযগার স্ত্রী।“
              </span>
              <span style={{ color: "gray" }}>(মুসলিম – ৩৭১৬)</span>
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "gray" }}>
                {" "}
                “তোমরা নারীদের (কেবল) রূপ দেখে বিবাহ করো না। হতে পারে রূপই তাদের
                বরবাদ করে দেবে। তাদের অর্থ-সম্পদ দেখেও বিবাহ করো না, হতে পারে
                অর্থ-সম্পদ তাকে উদ্ধত করে তুলবে। বরং দ্বীন দেখেই তাদের বিবাহ কর।
                একজন নাক-কান-কাটা অসুন্দর দাসীও (রূপসী ধনবতী স্বাধীন নারী
                অপেক্ষা) শ্রেয়, যদি সে দ্বীনদার হয়। “
              </span>{" "}
              <span style={{ color: "gray" }}>(ইবনে মাজাহ)</span>
            </p>
            <p style={{ color: "gray" }}>
              উপরিউক্ত হাদিস সমূহের শিক্ষা হল, পাত্র-পাত্রী নির্বাচনে দ্বীনদারী
              ও সচ্চরিত্রকে সর্বাগ্রে রাখতে হবে। সৌন্দর্য, অর্থ-সম্পদ ও বংশীয়
              সমতাও বিচার্য বটে, কিন্তু সবই দ্বীনদারীর পরবর্তী স্তরে। দ্বীনদারী
              ও চরিত্র সন্তোষজনক হলে বাকিগুলোতে ছাড় দেওয়া যায়, কিন্তু
              বাকিগুলো যতই আকর্ষণীয় হোক, তার খাতিরে দ্বীনদারীতে ছাড় দেওয়ার
              অবকাশ নেই। আর যদি দ্বীনদারীর সাথে অন্যগুলোও মিলে যায়, সে অতি
              সুন্দর মিলন বটে, কিন্তু তা খুব সহজলভ্যও নয়। তাই সে রকম আশার
              ক্ষেত্রে মাত্রাজ্ঞানের পরিচয় দেওয়া জরুরি। একজন দ্বীনদার
              জীবনসঙ্গী আল্লাহর নৈকট্যে যেতে সহায়ক ভূমিকা পালন করে, অন্যথায়
              দ্বীনের উপর অবিচল থাকা অনেক কঠিন হয়ে যায়। তাই ইসলামে
              পাত্র-পাত্রী নির্বাচনে দ্বীনদারীকে প্রাধান্য দেয়ার নির্দেশনা পাওয়া
              যায়।
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Body;
