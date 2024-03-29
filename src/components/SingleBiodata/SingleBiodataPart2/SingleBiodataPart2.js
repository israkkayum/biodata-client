import React from "react";
import {
  Button,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F0F0F0",
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    borderTop: "3px solid blue",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    // fontWeight: "bold",
    lineHeight: 1.8,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SingleBiodataPart2 = ({ biodataProfile }) => {
  return (
    biodataProfile.status == "public" &&
    biodataProfile.adminStatus == "Accepted" && (
      <div>
        <Paper elevation={3} sx={{ p: 3 }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table" sx={{ borderRadius: "10px" }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    ঠিকানা
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    স্থায়ী ঠিকানা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.parmanentAddress}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    বর্তমান ঠিকানা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.presentAddress}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    কোথায় বড় হয়েছেন
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.growingUpLife}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    শিক্ষাগত যোগ্যতা
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    কোন মাধ্যমে পড়াশোনা করেছেন
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.studyMedium}
                  </StyledTableCell>
                </StyledTableRow>
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouHafez && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        আপনি কি হাফেজ?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.areYouHafez}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouPassDawora && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        দাওরায়ে হাদীস পাশ করেছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.areYouPassDawora}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouPassDawora == "হ্যাঁ" &&
                  biodataProfile.dateofPassDawora && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        দাওরায়ে হাদীস পাসের সন
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.dateofPassDawora
                          .toString()
                          .slice(7, 15)}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouPassDawora == "হ্যাঁ" &&
                  biodataProfile.natizaOfDawora && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        দাওরায়ে হাদীসের নতিজা কি?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.natizaOfDawora}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouPassDawora == "হ্যাঁ" &&
                  biodataProfile.areYouStudyTakasshos && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        আপনি কি তাখাস্সুস পড়েছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.areYouStudyTakasshos}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouPassDawora == "হ্যাঁ" &&
                  biodataProfile.areYouStudyTakasshos == "হ্যাঁ" &&
                  biodataProfile.takasshosStudySub && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        কোন বিষয়ে তাখাস্সুস পড়েছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.takasshosStudySub}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouPassDawora == "হ্যাঁ" &&
                  biodataProfile.areYouStudyTakasshos == "হ্যাঁ" &&
                  biodataProfile.takasshosStudyDate && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        তাখাস্সুস পাসের সন
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.takasshosStudyDate}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.areYouPassDawora == "না, এখনো পড়ছি" &&
                  biodataProfile.studyingYearDawora && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        দাওরায়ে হাদীস কোন বর্ষে পড়ছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.studyingYearDawora}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "মাদ্রাসা" &&
                  biodataProfile.maxStudyQualification && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        সর্বোচ্চ শিক্ষাগত যোগ্যতা
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.maxStudyQualification}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        মাধ্যমিক (SSC) / সমমান পাশ করেছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.areYouSscPass}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.sscResult && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        মাধ্যমিক (SSC) / সমমান ফলাফল
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.sscResult}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.sscGroup && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        মাধ্যমিক (SSC) / সমমান বিভাগ
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.sscGroup}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.dateofPassSsc && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        মাধ্যমিক (SSC) / সমমান পাসের সন
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.dateofPassSsc.toString().slice(7, 15)}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        উচ্চ মাধ্যমিক (HSC) / সমমান পাশ করেছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.areYouHscPass}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "হ্যাঁ" &&
                  biodataProfile.hscResult && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        উচ্চ মাধ্যমিক (HSC) / সমমান ফলাফল
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.hscResult}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "হ্যাঁ" &&
                  biodataProfile.hscGroup && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        উচ্চ মাধ্যমিক (HSC) / সমমানের বিভাগ
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.hscGroup}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "হ্যাঁ" &&
                  biodataProfile.dateofPassHsc && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        উচ্চ মাধ্যমিক (HSC) / সমমান পাসের সন
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.dateofPassHsc.toString().slice(7, 15)}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "হ্যাঁ" &&
                  biodataProfile.hounrsQualification && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        স্নাতক / স্নাতক (সম্মান) / সমমান শিক্ষাগত যোগ্যতা
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.hounrsQualification}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "হ্যাঁ" &&
                  biodataProfile.hounrsQualification &&
                  biodataProfile.hounrsInstituteName && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        শিক্ষাপ্রতিষ্ঠানের নাম
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.hounrsInstituteName}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "হ্যাঁ" &&
                  biodataProfile.hounrsQualification &&
                  biodataProfile.hounrsPassDate && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        স্নাতক / স্নাতক (সম্মান) / সমমান পাসের সন
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.hounrsPassDate}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "না" &&
                  biodataProfile.msxHscStuding && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        উচ্চ মাধ্যমিক (HSC) / সমমান কোন বর্ষে পড়ছেন ?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.msxHscStuding}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "ডিপ্লোমা পড়েছি" &&
                  biodataProfile.diplomaStudySub && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        ডিপ্লোমা কোন বিষয়ে পড়েছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.diplomaStudySub}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "ডিপ্লোমা পড়েছি" &&
                  biodataProfile.diplomaStudySub &&
                  biodataProfile.diplomaInstituteName && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        ডিপ্লোমা শিক্ষাপ্রতিষ্ঠানের নাম
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.diplomaInstituteName}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "হ্যাঁ" &&
                  biodataProfile.areYouHscPass == "ডিপ্লোমা পড়েছি" &&
                  biodataProfile.diplomaStudySub &&
                  biodataProfile.diplomaPassDate && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        ডিপ্লোমা পাসের সন
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.diplomaPassDate}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.studyMedium == "জেনারেল" &&
                  biodataProfile.areYouSscPass == "না" &&
                  biodataProfile.minClassStudy && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        কোন ক্লাস পর্যন্ত পড়েছেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.minClassStudy}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.otherEducationalQua && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      অন্যান্য শিক্ষাগত যোগ্যতা
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.otherEducationalQua}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    পারিবারিক তথ্য
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    পিতার পেশা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.YourFatherProfession}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    মাতার পেশা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.YourMotherProfession}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    বোন কয়জন
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.numberOfSister}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    ভাই কয়জন
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.numberOfBrother}
                  </StyledTableCell>
                </StyledTableRow>
                {biodataProfile.professionOfOtherRelated && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      চাচা মামাদের পেশা
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.professionOfOtherRelated}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    পরিবারের অর্থনৈতিক ও সামাজিক অবস্থা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.economicSocialPosition}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    ব্যক্তিগত তথ্য
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {biodataProfile.whichMazhabFollow && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      আপনার মাঝহাব বা আকীদা কী?
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.whichMazhabFollow}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
                {biodataProfile.areYouPrayerRegu && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      নিয়মিত প্রার্থনা করেন তো?
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.areYouPrayerRegu}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
                {biodataProfile.religiousIdo && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      আপনার ধর্মীয় দৃষ্টিভঙ্গী উল্লেখ করুন
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.religiousIdo}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
                {biodataProfile.anyPoliticalIdology && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      কোনো রাজনৈতিক দর্শন থাকলে লিখুন
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.anyPoliticalIdology}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    মানসিক বা শারীরিক কোনো রোগ আছে কি
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.haveAnyDiseases}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    আপনার প্রিয় শখ কী?
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.yourFavoriteHobby}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    আপনার পছন্দের তিনজন আদর্শ মানুষের নাম লিখুন
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.favoriteMan}
                  </StyledTableCell>
                </StyledTableRow>

                {biodataProfile.anyExtraQua && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      বিশেষ দ্বীনি বা দুনিয়াবি যোগ্যতা
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.anyExtraQua}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    নিজের সম্পর্কে কিছু লিখুন
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.aboutYourSelf}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    বিয়ে সংক্রান্ত তথ্য
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    অভিভাবক আপনার বিয়েতে রাজি কি না?
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.agreeGuardian}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    বিয়ে কেন করছেন? বিয়ে সম্পর্কে আপনার ধারণা কি?
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.idologyOfMarit}
                  </StyledTableCell>
                </StyledTableRow>
                {biodataProfile.biodataType == "পাত্রের বায়োডাটা" &&
                  biodataProfile.afterwWifeWear && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        বিয়ের পর স্ত্রীর পর্দার ব্যবস্থা রাখতে পারবেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.afterwWifeWear}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.biodataType == "পাত্রের বায়োডাটা" &&
                  biodataProfile.afterwWifeStudy && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        বিয়ের পর স্ত্রীকে পড়াশোনা করতে দিতে চান?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.afterwWifeStudy}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.biodataType == "পাত্রের বায়োডাটা" &&
                  biodataProfile.afterwWifeWork && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        বিয়ের পর স্ত্রীকে চাকরী করতে দিতে চান?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.afterwWifeWork}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.biodataType == "পাত্রের বায়োডাটা" &&
                  biodataProfile.afterwWifeHome && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        বিয়ের পর স্ত্রীকে কোথায় নিয়ে থাকবেন?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.afterwWifeHome}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.biodataType == "পাত্রের বায়োডাটা" &&
                  biodataProfile.afterwWifeDower && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        বিয়ে উপলক্ষে আপনি বা আপনার পরিবার পাত্রীপক্ষের কাছে
                        যৌতুক বা উপহার বা অর্থ আশা করবেন কি না?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.afterwWifeDower}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.biodataType == "পাত্রীর বায়োডাটা" &&
                  biodataProfile.afterYourStudy && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        বিয়ের পর পড়াশোনা চালিয়ে যেতে চান?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.afterYourStudy}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
                {biodataProfile.biodataType == "পাত্রীর বায়োডাটা" &&
                  biodataProfile.afterYourJob && (
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        বিয়ের পর চাকরি চালিয়ে যেতে চান?
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {biodataProfile.afterYourJob}
                      </StyledTableCell>
                    </StyledTableRow>
                  )}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    যেমন জীবনসঙ্গী আশা করেন
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    বয়স
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.ageOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    গাত্রবর্ণ
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.skinColorOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    নূন্যতম উচ্চতা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.minHeightOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    নূন্যতম শিক্ষাগত যোগ্যতা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.minEduQuaOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    জেলা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.districtOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    বৈবাহিক অবস্থা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.maritalStatusOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    পেশা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.professionOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    অর্থনৈতিক অবস্থা
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.economicOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
                {biodataProfile.FamilyStatusOfLifePartner && (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      পারিবারিক অবস্থা
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {biodataProfile.FamilyStatusOfLifePartner}
                    </StyledTableCell>
                  </StyledTableRow>
                )}
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    জীবনসঙ্গীর যে বৈশিষ্ট্য বা গুণাবলী আশা করেন
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.characteristicsOfLifePartner}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    কর্তৃপক্ষের জিজ্ঞাসা
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    bibahomubarok ওয়েবসাইটে বায়োডাটা জমা দিচ্ছেন তা অভিভাবক
                    জানেন?
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.agreeYourGurdean}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    কোনো মিথ্যা তথ্য দিয়ে থাকলে তার দুনিয়াবী ও আখিরাতের দায়ভার
                    ওয়েবসাইট কর্তৃপক্ষ নিবে না। আপনি কি রাজি?
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {biodataProfile.ourNoLiability}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" colSpan={2}>
                    যোগাযোগ
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{ textAlign: "center" }}
                  >
                    <span style={{ color: "blue" }}>
                      আপনি যদি উক্ত বায়োডাটাটির অভিভাবকের সাথে যোগাযোগ করতে
                      আগ্রহী হন, তাহলে নিচের বাটনে ক্লিক করুন।
                    </span>
                    <Box sx={{ pt: 3, pb: 2 }}>
                      <NavLink
                        // to="/contact-request"
                        to={`/contact-request/${biodataProfile._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          style={{
                            backgroundColor: "blue",
                            fontSize: "17px",
                          }}
                          sx={{ px: 5, py: 1 }}
                          variant="contained"
                        >
                          যোগাযোগ করুন
                        </Button>
                      </NavLink>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    )
  );
};

export default SingleBiodataPart2;
