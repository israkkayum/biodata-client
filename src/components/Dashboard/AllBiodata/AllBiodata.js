import { TableCell } from "@mui/material";
import React from "react";

const AllBiodata = ({ biodata, labelId }) => {
  return (
    <div>
      <TableCell component="th" id={labelId} scope="row" padding="normal">
        {/* body row name  */}

        {biodata.name}
      </TableCell>
      <TableCell align="left">{biodata.calories}</TableCell>
      <TableCell align="left">{biodata.fat}</TableCell>
      <TableCell align="left">{biodata.carbs}</TableCell>
      <TableCell align="left">{biodata.protein}</TableCell>
    </div>
  );
};

export default AllBiodata;
