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
  CircularProgress,
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

// dialog
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

// table name and filter option
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

// accordion style
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

// accordion summary style
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

// accordion details style
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderLeft: "1px solid rgba(0, 0, 0, .125)",
  borderRight: "1px solid rgba(0, 0, 0, .125)",
  borderBottom: "1px solid rgba(0, 0, 0, .125)",
}));

const ManageBiodatas = (props) => {
  const { biodatas, isLoadding } = props;
  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [openAccept, setOpenAccept] = React.useState(false);
  const [openUnAccept, setOpenUnAccept] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [id, setId] = React.useState("");

  const [expanded, setExpanded] = React.useState("");

  // handle accordion expand
  const handleExpandChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // change page / pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // modal open
  const handleAcceptOpen = (id) => {
    setOpenAccept(true);
    setId(id);
  };
  const handleUnAcceptOpen = (id) => {
    setOpenUnAccept(true);
    setId(id);
  };

  const handleDeleteOpen = (id) => {
    setOpenDelete(true);
    setId(id);
  };

  // modal close
  const handleClose = () => {
    setOpenAccept(false);
    setOpenUnAccept(false);
    setOpenDelete(false);
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
          open={openAccept}
        >
          <DialogContent dividers>
            <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              Are you sure, you want to Accept this biodata. If you do it, This
              biodata will see anyone !
              <p>
                For confirm please type this <strong>'ACCEPT'</strong> word.
              </p>
            </Alert>
            <Divider sx={{ mb: 2 }} />
            {isLoadding ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Type 'ACCEPT'"
                  id="fullWidth"
                  onChange={(e) => {
                    if (e.target.value == "ACCEPT") {
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
                  onClick={() => props.handleAdminStatus(id, "Accepted")}
                >
                  Confirm
                </Button>
              </Box>
            )}
          </DialogContent>
        </BootstrapDialog>
      </div>

      {/* ------------- */}

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openUnAccept}
        >
          <DialogContent dividers>
            <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              Are you sure, you want to Unaccept this biodata. If you do it,
              this biodata will not see anyone !
              <p>
                For confirm please type this <strong>'UNACCEPT'</strong> word.
              </p>
            </Alert>
            <Divider sx={{ mb: 2 }} />
            {isLoadding ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Type 'UNACCEPT'"
                  id="fullWidth"
                  onChange={(e) => {
                    if (e.target.value == "UNACCEPT") {
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
                  onClick={() => props.handleAdminStatus(id, "Unaccepted")}
                >
                  Confirm
                </Button>
              </Box>
            )}
          </DialogContent>
        </BootstrapDialog>
      </div>

      {/* ------------- */}

      {/* DELETE MODAL  */}

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openDelete}
        >
          <DialogContent dividers>
            <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              Are you sure, you want to delete this biodata. If you do it, this
              biodata will be delete !
              <p>
                For confirm please type this <strong>'DELETE'</strong> word.
              </p>
            </Alert>
            <Divider sx={{ mb: 2 }} />
            {isLoadding ? (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Type 'DELETE'"
                  id="fullWidth"
                  onChange={(e) => {
                    if (e.target.value == "DELETE") {
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
                  onClick={() => props.handleRemoveBiodata(id)}
                >
                  Confirm
                </Button>
              </Box>
            )}
          </DialogContent>
        </BootstrapDialog>
      </div>

      {/* ------------ */}

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
                            <Chip
                              label={row.adminStatus}
                              disabled
                              sx={{
                                color: "white",
                                backgroundColor: "blue",
                              }}
                              size="small"
                            />
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
                              onClick={() => handleUnAcceptOpen(row._id)}
                              disabled={
                                row.adminStatus == "Unaccepted" ? true : false
                              }
                            />
                            <Chip
                              label="Accept"
                              sx={{
                                backgroundColor: "green",
                                color: "white",
                                mr: 2,
                              }}
                              size="small"
                              onClick={() => handleAcceptOpen(row._id)}
                              disabled={
                                row.adminStatus == "Accepted" ? true : false
                              }
                            />
                            <Chip
                              label="Remove"
                              sx={{
                                backgroundColor: "red",
                                color: "white",
                              }}
                              size="small"
                              onClick={() => handleDeleteOpen(row._id)}
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
