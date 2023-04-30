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
import VisibilityIcon from "@mui/icons-material/Visibility";
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
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import blurnumber from "../../../images/blur_number.gif";

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
          My Proposal
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

const MyProposal = ({ proposal }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [openDelete, setOpenDelete] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [id, setId] = React.useState("");
  const [isLoadding, setisLoadding] = React.useState(false);

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

  const handleClose = () => {
    setOpenDelete(false);
  };

  const handleFeedbackRemove = (id) => {
    setisLoadding(true);

    fetch(`https://biodata-server.vercel.app/paymentList/remove/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setisLoadding(false);
        window.location.reload();
      });
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - proposal.length) : 0;

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
              Are you sure, you want to Remove this proposal. If you do it, this
              proposal will be delete !
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
                  onClick={() => handleFeedbackRemove(id)}
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

      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{ minWidth: "650px" }}
              aria-labelledby="tableTitle"
              size={"large"}
            >
              <TableBody>
                {proposal
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <Box
                        sx={{
                          m: 3,
                        }}
                      >
                        <Paper
                          elevation={1}
                          sx={{
                            p: 3,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "start",
                            color: "gray",
                            fontWeight: "bold",
                          }}
                        >
                          <div>
                            <Box sx={{ width: "100%" }}>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={5}
                                marginBottom="10px"
                              >
                                <span>Biodata Number</span>
                                <span></span>
                                <span></span>
                                <span>{row.biodataNumber}</span>
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={5}
                                marginBottom="10px"
                              >
                                <span>Payment</span>
                                <span></span>
                                <span></span>
                                <span>{row.totalBlance}</span>
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={5}
                                marginBottom="10px"
                              >
                                <span>Payment Method</span>
                                <span></span>
                                <span></span>
                                <span>---</span>
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={5}
                                marginBottom="10px"
                              >
                                <span>Guardian</span>
                                <span></span>
                                <span></span>
                                <span>{row.guardianRelated}</span>
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={5}
                                marginBottom="10px"
                              >
                                <span>Guardian Number</span>
                                <span></span>
                                <span></span>

                                {row?.status == "Shifted" ? (
                                  <span>{row.guardianPhoneNumber}</span>
                                ) : (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Tooltip
                                      placement="top"
                                      title="আপনার তথ্য যাচাই করতে 48 ঘন্টা পর্যন্ত সময় লাগতে পারে। পরে আবার চেক করুন."
                                    >
                                      <IconButton>
                                        <VisibilityIcon />
                                      </IconButton>
                                    </Tooltip>
                                    <img
                                      src={blurnumber}
                                      style={{
                                        width: "150px",
                                        height: "20px",
                                      }}
                                    />
                                  </div>
                                )}
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={5}
                                marginBottom="10px"
                              >
                                <span>Contact Email</span>
                                <span></span>
                                <span></span>

                                {row?.status == "Shifted" ? (
                                  <span>{row.contactEmail}</span>
                                ) : (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Tooltip
                                      placement="top"
                                      title="আপনার তথ্য যাচাই করতে 48 ঘন্টা পর্যন্ত সময় লাগতে পারে। পরে আবার চেক করুন."
                                    >
                                      <IconButton>
                                        <VisibilityIcon />
                                      </IconButton>
                                    </Tooltip>
                                    <img
                                      src={blurnumber}
                                      style={{
                                        width: "150px",
                                        height: "20px",
                                      }}
                                    />
                                  </div>
                                )}
                              </Stack>
                            </Box>
                          </div>
                          <div>
                            <IconButton
                              aria-label="delete"
                              sx={{ color: "red" }}
                            >
                              <DeleteIcon
                                onClick={() => handleDeleteOpen(row._id)}
                              />
                            </IconButton>
                          </div>
                        </Paper>
                      </Box>
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
            count={proposal.length}
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

export default MyProposal;
