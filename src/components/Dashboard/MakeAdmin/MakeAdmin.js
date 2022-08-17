import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Button, Chip, Divider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  backgroundColor: "rgba(0, 0, 0, .03)",
  textAlign: "center",
  marginLeft: 20,
  marginRight: 20,
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
          List of Admins
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

const MakeAdmin = ({ users }) => {
  return (
    <div>
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
                <Box sx={{ width: "100%", my: 3 }}>
                  <Stack spacing={1}>
                    {users.map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <div>
                          {row.role == "admin" && (
                            <div>
                              <Item
                                sx={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                  alignItems: "center",
                                }}
                              >
                                <Typography>{row.displayName}</Typography>
                                <Typography>{row.email}</Typography>
                                <Typography>{row.biodataNumber}</Typography>
                                <Chip
                                  label="Remove"
                                  sx={{
                                    backgroundColor: "red",
                                    color: "white",
                                    mr: 2,
                                  }}
                                  size="small"
                                />
                              </Item>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </Stack>
                </Box>

                <Stack
                  spacing={1}
                  direction="row"
                  sx={{
                    p: 5,
                  }}
                >
                  <TextField
                    sx={{ width: "70%" }}
                    label="Type Email"
                    id="fullWidth"
                    required
                    type="email"
                  />
                  <Button sx={{ px: 5, width: "30%" }} variant="outlined">
                    Make Admin
                  </Button>
                </Stack>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
};

export default MakeAdmin;
