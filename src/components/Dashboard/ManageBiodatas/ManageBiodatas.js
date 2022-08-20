import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Alert,
  AlertTitle,
  Button,
  Chip,
  Divider,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ManageBiodata from "../ManageBiodata/ManageBiodata";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-container": {
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Manage Biodatas
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: "none",
  margin: 10,
  "&:not(:child)": {
    border: "none",
    margin: 5,
  },
  "&:before": {
    display: "none",
    margin: 5,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderRadius: 5,
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
    display: "flex",
    justifyContent: "space-around",
    padding: 5,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderLeft: "1px solid rgba(0, 0, 0, .125)",
  borderRight: "1px solid rgba(0, 0, 0, .125)",
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

const ManageBiodatas = (props) => {
  const { biodatas, setBiodatas } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [id, setId] = React.useState("");

  const [expanded, setExpanded] = React.useState("");

  const handleExpandChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - biodatas.length) : 0;

  return (
    <div>
      {/* admin status modal  */}

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          {biodatas.adminStatus == "private" ? (
            <DialogContent dividers>
              <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
                <AlertTitle>Warning</AlertTitle>
                Are you sure, you want to public your biodata. If you do it,
                your biodata and all information will see anyone !
                <p>
                  For confirm please type this <strong>'PUBLIC'</strong> word.
                </p>
              </Alert>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Type 'PUBLIC'"
                  id="fullWidth"
                  onChange={(e) => {
                    if (e.target.value == "PUBLIC") {
                      setDisabled(false);
                    } else {
                      setDisabled(true);
                    }
                  }}
                />

                <Button
                  sx={{
                    backgroundColor: "blue",
                    px: 4,
                    py: 2,
                    ml: -0.3,
                    borderRadius: "0px 5px 5px 0px",
                  }}
                  variant="contained"
                  disabled={disabled}
                  onClick={() => props.handleAdminStatus(id, "Unaccept")}
                >
                  Confirm
                </Button>
              </Box>
            </DialogContent>
          ) : (
            <DialogContent dividers>
              <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
                <AlertTitle>Warning</AlertTitle>
                Are you sure, you want to hide your biodata. If you do it, your
                biodata and all information will not see anyone !
                <p>
                  For confirm please type this <strong>'HIDE'</strong> word.
                </p>
              </Alert>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Type 'HIDE'"
                  id="fullWidth"
                  onChange={(e) => {
                    if (e.target.value == "HIDE") {
                      setDisabled(false);
                    } else {
                      setDisabled(true);
                    }
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: "blue",
                    px: 4,
                    py: 2,
                    ml: -0.3,
                    borderRadius: "0px 5px 5px 0px",
                  }}
                  variant="contained"
                  disabled={disabled}
                  onClick={() => props.handleAdminStatus(id, "Unaccept")}
                >
                  Confirm
                </Button>
              </Box>
            </DialogContent>
          )}
        </BootstrapDialog>
      </div>

      {/* ------------- */}

      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              <TableBody>
                {biodatas
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Accordion
                        expanded={expanded === `${row.biodataNumber}`}
                        onChange={handleExpandChange(`${row.biodataNumber}`)}
                      >
                        <AccordionSummary
                          aria-controls="panel1d-content"
                          id="panel1d-header"
                        >
                          <Typography
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                          >
                            {/* body row name  */}

                            {row.yourName}
                          </Typography>
                          <Typography>{row.biodataNumber}</Typography>
                          <Typography>
                            {row.isApprove == "yes" ? (
                              <Chip
                                label="Accepted"
                                disabled
                                sx={{
                                  backgroundColor: "green",
                                  color: "white",
                                }}
                                size="small"
                              />
                            ) : (
                              <Chip
                                disabled
                                sx={{
                                  backgroundColor: "blue",
                                  color: "white",
                                }}
                                label="Pending"
                                size="small"
                              />
                            )}
                          </Typography>
                          <Typography>
                            <Chip
                              label="Unaccept"
                              sx={{
                                backgroundColor: "green",
                                color: "white",
                                mr: 2,
                              }}
                              size="small"
                              onClick={() => handleClickOpen(row._id)}
                            />
                            <Chip
                              label="Accept"
                              sx={{
                                backgroundColor: "green",
                                color: "white",
                                mr: 2,
                              }}
                              size="small"
                              onClick={() => handleClickOpen(row._id)}
                            />
                            <Chip
                              label="Remove"
                              sx={{
                                backgroundColor: "red",
                                color: "white",
                              }}
                              size="small"
                            />
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ManageBiodata email={row.email}></ManageBiodata>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}

                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={biodatas.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
};

export default ManageBiodatas;
