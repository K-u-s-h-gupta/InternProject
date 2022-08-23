import React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
export default function AddNewVariable({
  open,
  handleVariableValue,
  handleVariableKey,
  handleAddNewVariable,
  setOpen,
}) {
  return (
    <Dialog open={open}>
      <DialogTitle>Add New Variables</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            onChange={handleVariableKey}
            label="Variable Key"
            name="key"
            //   fullWidth
          />
          <TextField
            onChange={handleVariableValue}
            label="Variable Value"
            name="value"
            // fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={() => setOpen(false)}>Cancel</Button> */}
        <Button
          onClick={handleAddNewVariable}
          variant="contained"
          color="primary"
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
