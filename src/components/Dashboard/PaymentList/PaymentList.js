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
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import {
  Alert,
  AlertTitle,
  Button,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "red",
    color: "red",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: "left",
  fontSize: "15px",
  fontWeight: "bold",
  color: theme.palette.text.secondary,
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
          Contact Requests
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

const PaymentList = ({ payment }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [expanded, setExpanded] = React.useState(false);

  const [openDelete, setOpenDelete] = React.useState(false);
  const [openSend, setOpenSend] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [id, setId] = React.useState("");
  const [isLoadding, setisLoadding] = React.useState(false);

  const handleExpandChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteOpen = (id) => {
    setOpenDelete(true);
    setId(id);
  };
  const handleSendOpen = (id) => {
    setOpenSend(true);
    setId(id);
  };

  const handleClose = () => {
    setOpenDelete(false);
    setOpenSend(false);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - payment.length) : 0;

  const handleOrderRemove = (id) => {
    setisLoadding(true);

    fetch(`https://biodata-server.herokuapp.com/paymentList/remove/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setisLoadding(false);
        window.location.reload();
      });
  };

  const handleOrderShift = (id) => {
    setisLoadding(true);

    const status = { status: "Shifted" };

    fetch(`https://biodata-server.herokuapp.com/paymentList/shifted/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => {
        setisLoadding(false);
        window.location.reload();
      });
  };

  return (
    <div>
      {/* --------- */}

      {/* Delete payment list  */}

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openDelete}
        >
          <DialogContent dividers>
            <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              Are you sure, you want to Remove this record. If you do it, this
              record will be delete !
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
                  onClick={() => handleOrderRemove(id)}
                >
                  Confirm
                </Button>
              </Box>
            )}
          </DialogContent>
        </BootstrapDialog>
      </div>

      {/* ------------ */}
      {/* --------- */}

      {/* shift payment list  */}

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openSend}
        >
          <DialogContent dividers>
            <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              Are you sure, you shifted this order !
              <p>
                For confirm please type this <strong>'SHIFTED'</strong> word.
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
                  placeholder="Type 'SHIFTED'"
                  id="fullWidth"
                  onChange={(e) => {
                    if (e.target.value == "SHIFTED") {
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
                  onClick={() => handleOrderShift(id)}
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
                {payment
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Accordion
                        expanded={expanded === `${row._id}`}
                        onChange={handleExpandChange(`${row._id}`)}
                      >
                        <AccordionSummary
                          aria-controls="panel1d-content"
                          id="panel1d-header"
                        >
                          {row.status == "Shifted" ? (
                            <MarkEmailReadIcon
                              sx={{ color: "green" }}
                            ></MarkEmailReadIcon>
                          ) : (
                            <Box sx={{ color: "action.active" }}>
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                  vertical: "top",
                                  horizontal: "left",
                                }}
                                variant="dot"
                              >
                                <MailIcon />
                              </StyledBadge>
                            </Box>
                          )}

                          <Typography
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="normal"
                          >
                            {/* body row name  */}

                            {row.name}
                          </Typography>
                          <Typography>{row.email}</Typography>
                          <Typography>{row.phoneNumber}</Typography>

                          <Typography>
                            {row.status == "Shifted" ? (
                              <Chip
                                label="SHIFTED"
                                sx={{
                                  backgroundColor: "green",
                                  color: "white",
                                  mr: 2,
                                }}
                                size="small"
                                disabled
                              />
                            ) : (
                              <Chip
                                label="Send"
                                sx={{
                                  backgroundColor: "green",
                                  color: "white",
                                  mr: 2,
                                }}
                                size="small"
                                onClick={() => handleSendOpen(row._id)}
                              />
                            )}
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
                          <Box sx={{ width: "100%" }}>
                            <Stack spacing={2}>
                              <Item>
                                <Table>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell>Name</TableCell>
                                      <TableCell>{row.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Email</TableCell>
                                      <TableCell>{row.email}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Mobile Number</TableCell>
                                      <TableCell>{row.phoneNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Biodata Numbers</TableCell>
                                      <TableCell>{row.biodataNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Total Biodata</TableCell>
                                      <TableCell>{row.totalBiodata}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Total Balance</TableCell>
                                      <TableCell>{row.totalBlance}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Payment Method</TableCell>
                                      <TableCell>{row.method}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Payment Number</TableCell>
                                      <TableCell>{row.paymentNumber}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell>Transaction ID</TableCell>
                                      <TableCell>
                                        {row.transactionNumber}
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </Item>
                            </Stack>
                          </Box>
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
            count={payment.length}
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

export default PaymentList;
