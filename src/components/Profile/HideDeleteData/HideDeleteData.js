import React, { useState } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Divider,
  Paper,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

const HideDeleteData = (props) => {
  const [open, setOpen] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const { disabled, setDisabled } = props;
  const { _id, status } = props.biodataProfile;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //   ----------

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  return (
    <div>
      {/* HIDE AND PUBLIC MODAL  */}

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          {status == "private" ? (
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
                  onClick={() => props.handlePublicStatus(_id)}
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
                  onClick={() => props.handlePrivateStatus(_id)}
                >
                  Confirm
                </Button>
              </Box>
            </DialogContent>
          )}
        </BootstrapDialog>
      </div>

      {/* ------------------- */}

      {/* DELETE MODAL  */}

      <div>
        <BootstrapDialog
          onClose={handleCloseDelete}
          aria-labelledby="customized-dialog-title"
          open={openDelete}
        >
          <DialogContent dividers>
            <Alert severity="warning" sx={{ lineHeight: "1.5", mb: 2 }}>
              <AlertTitle>Warning</AlertTitle>
              Are you sure, you want to delete your biodata. If you do it, your
              biodata will be delete !
              <p>
                For confirm please type this <strong>'DELETE'</strong> word.
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
                onClick={() => props.handleRemoveBiodata(_id)}
              >
                Confirm
              </Button>
            </Box>
          </DialogContent>
        </BootstrapDialog>
      </div>

      {/* ------------ */}

      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Button
            onClick={handleClickOpen}
            sx={{
              backgroundColor: "blue",
              mb: { xs: 3, md: 0 },
              px: 5,
              py: 2,
              fontSize: "17px",
              fontWeight: "bold",
            }}
            variant="contained"
          >
            {status == "private" ? (
              <span>Public Biodata</span>
            ) : (
              <span>Hide Biodata</span>
            )}
          </Button>
        </div>
        <div>
          <Button
            sx={{
              backgroundColor: "red",
              px: 5,
              py: 2,
              fontSize: "17px",
              fontWeight: "bold",
            }}
            variant="contained"
            onClick={handleClickOpenDelete}
          >
            Delete Biodata
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default HideDeleteData;
