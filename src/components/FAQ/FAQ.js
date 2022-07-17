import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
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

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: "blue", fontWeight: "bold" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  color: "blue",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  padding: "25px",
  lineHeight: "2",
}));

const FAQ = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
        <h1>সাধারণ প্রশ্ন ও উত্তর</h1>
      </Box>
      <Container maxWidth="lg">
        <div style={{ paddingTop: "50px", paddingBottom: "150px" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                বায়োডাটা জমা দিতে কত টাকা লাগে?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                আমরা এখন পর্যন্ত কারো কাছ থেকে টাকা নিচ্ছি না।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                এই ওয়েবসাইট কি সবার জন্য উন্মুক্ত?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                না, এই ওয়েবসাইট সবার জন্য নয়, এই ওয়েবসাইট শুধুমাত্র দ্বীনদার
                মুসলিমদের জন্য।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                বায়োডাটা তৈরি করার কোনো বিশেষ শর্ত আছে?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p style={{ fontWeight: "bold" }}>
                  আমাদের ওয়েবসাইটে বায়োডাটা তৈরি করতে হলে নূন্যতম আবশ্যকতা
                  নিম্নরূপ-
                </p>
                <p style={{ fontWeight: "bold" }}>পুরুষ-</p>

                <p>১/ ৫ ওয়াক্ত নামাযী হতে হবে।</p>
                <p>২/ ওয়াজিব দাড়ি সুন্নতি পদ্ধতিতে বড় থাকতে হবে।</p>
                <p>৩/ টাখনুর উপর কাপড় পরতে হবে।</p>

                <p style={{ fontWeight: "bold" }}>নারী-</p>

                <p>১/ ৫ ওয়াক্ত নামাযী হতে হবে।</p>
                <p>২/ “নিকাব” সহ ফরজ পর্দানশীন হতে হবে।</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                আমার বায়োডাটা এপ্রুভ হয় নি কেন?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  আমরা বিভিন্ন কারণে বায়োডাটা এপ্রুভ করি না। তার মাঝে কয়েকটি
                  কারণ উল্লেখ করা হলো।
                </p>
                <p>
                  ১/ আপনি যদি অভিভাবককে না জানিয়ে আমাদের ওয়েবসাইটে বায়োডাটা জমা
                  দেন।
                </p>
                <p>২/ অভিভাবকের নাম্বারের ঘরে নিজের নাম্বার লিখে রাখেন।</p>
                <p>৩/ ৫ ওয়াক্ত নামাযী না হোন।</p>
                <p>
                  ৪/ ওয়াজিব দাঁড়ি সুন্নতি পদ্ধতীতে বড় না থাকে। (পুরুষদের জন্য)
                </p>
                <p>৫/ টাখনুর উপর কাপড় না পরেন। (পুরুষদের জন্য)</p>
                <p>৬/ নিকাব সহ ফরজ পর্দা/বোরকা না পরেন। (নারীদের জন্য)</p>
                <p>৭/ হিজাব পরেন কিন্ত নিকাব পরেন না। (নারীদের জন্য)</p>
                <p>৮/ বায়োডাটাতে কোনো মিথ্যা তথ্য দিয়ে থাকলে।</p>
                <p>
                  ৯/ প্রশ্নের উত্তর স্পষ্ট ভাবে না দিয়ে অন্য ভাবে দিলে। যেমনঃ
                  শুধু “আলহামদুলিল্লাহ” বা “হুম” ইত্যাদি লিখেন অনেকেই, অথচ এটি
                  দ্বারা হ্যাঁ/না স্পষ্টভাবে বোঝা যায় না ।
                </p>
                <p>১০/ দ্বীনদার মুসলিম না হয়ে থাকলে।</p>
                <p>
                  ১১/ কোনো গুরুত্বপূর্ণ প্রশ্নের উত্তর না দিয়ে ফাঁকা রেখে দিলে।
                  যেমনঃ অনেকেই “কতৃপক্ষের জিজ্ঞাসা” উত্তর না দিয়েই পাবলিশ করেন।
                </p>
                <p>
                  ১২/ আলিয়া মাদ্রাসা শিক্ষিতদের জেনারেল সিলেক্ট করতে বলার পরেও
                  কেউ যদি মাদ্রাসা সিলেক্ট করেন তাহলেও এপ্রুভ হয় না।
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                কিছু তথ্য সঠিকভাবে না দেয়ার কারণে আমার বায়োডাটা এপ্রুভ হয় নি,
                আমি কি আবার বায়োডাটা জমা দিতে পারবো?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                হ্যাঁ পারবেন। যে ঘরে ভুল তথ্য দেয়ার জন্য আপনার বায়োডাটা নট
                এপ্রুভ করা হয়েছে, সেই ঘরে সঠিক তথ্য দিয়ে Save Changes ক্লিক করে
                Publish Biodata করবেন তাহলে এপ্রুভ করা হবে ইন শা আল্লাহ। তবে
                উপরের প্রশ্নের উত্তরে উল্লিখিত বিশেষ শর্ত না থাকার কারণে যদি
                বায়োডাটা নট এপ্রুভ হয় তাহলে আর এপ্রুভ হবে না।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                আমি ৫ ওয়াক্ত নামাযী, কিন্ত আমি সুন্নতী দাঁড়ি রাখি নি, আমি
                বায়োডাটা আপলোড করতে পারবো?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                না, আপনি বায়োডাটা আপলোড করলে এপ্রুভ করা হবে না। যাদের ওয়াজিব
                দাড়ি আছে শুধুমাত্র তাদের বায়োডাটা এপ্রুভ করা হবে।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                আমি ৫ ওয়াক্ত নামাযী, আমি বোরকা ও হিজাব পরি তবে নিকাব করি না। আমি
                বায়োডাটা আপলোড করতে পারবো?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                না, আপনি বায়োডাটা আপলোড করলে এপ্রুভ করা হবে না। যারা নিকাব সহ
                বোরকা পরেন শুধুমাত্র তাদের বায়োডাটা এপ্রুভ করা হয়।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                আমার অভিভাবক আমার বিয়েতে রাজি নয়, আমি কি বায়োডাটা জমা দিতে
                পারবো?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                না। আপনি পাত্র/পাত্রী যেই হোন না কেন, আমাদের ওয়েবসাইটে বায়োডাটা
                তৈরি করতে হলে অবশ্যই অভিভাবকের অনুমতি নিয়ে জমা দিতে হবে। অন্যথায়
                বায়োডাটা এপ্রুভ করা হবে না।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                আমি একজন ছাত্র, আমার এখনো কোনো আয় নেই, আমি কি বায়োডাটা আপলোড
                করতে পারবো?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                হ্যাঁ, পারবেন। তবে অবশ্যই আপনার অভিভাবকের অনুমতি নিয়ে বায়োডাটা
                তৈরি করতে হবে।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                বায়োডাটা জমা দেয়ার পর বিয়ে হয়ে গেলে বা অন্য কারণে বায়োডাটা ডিলিট
                করতে পারবো?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                হ্যাঁ, আপনার যখন ইচ্ছা তখন বায়োডাটা ডিলিট করতে পারবেন। বায়োডাটা
                ডিলিট করতে ই-মেইল এর মাধ্যমে যোগাযোগ করুন।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                একজনের বায়োডাটা আরেকজন তৈরি করতে পারবে?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                আমাদের বায়োডাটা ফর্মে অনেক ব্যক্তিগত প্রশ্ন আছে, যেগুলোর উত্তর
                একমাত্র পাত্র-পাত্রী নিজেই ভাল জানেন। পরিবারের অন্য কেউ যদি
                ফর্মটি তৈরি করে দেন তাহলে সেই প্রশ্নগুলোর উত্তর বাহ্যিকভাবে সত্য
                হলেও কিছু ত্রুটি থেকে যাবে। এজন্য যার বিয়ে তাকেই লিখতে হবে এমন
                শর্ত আবশ্যক করা হয়েছে। তবে অনেকেই আছেন বাংলা টাইপ করতে জানেন না।
                এক্ষেত্রে বাংলা টাইপ করতে জানেন এমন একজনকে পাশে বসিয়ে উনি
                উত্তরগুলো বলে দিবেন, টাইপ জানা ব্যক্তি লিখে ফর্মটি তৈরি করবেন।
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontWeight: "bold" }}>
                আমি বাংলা টাইপ করতে জানি না। আমি কিভাবে বায়োডাটা তৈরি করবো?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                এক্ষেত্রে বাংলা টাইপ করতে জানেন এমন একজনকে পাশে বসিয়ে আপনি
                উত্তরগুলো বলে দিবেন, টাইপ জানা ব্যক্তি লিখে ফর্মটি তৈরি করবেন।
                অবশ্যই উত্তরগুলো আপনার হতে হবে। নয়ত ত্রুটিযুক্ত উত্তর হবে, যা
                পাঠকের সাথে প্রতারণার শামিল ও ওয়েবসাইটের রুলস পরিপন্থী।
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
