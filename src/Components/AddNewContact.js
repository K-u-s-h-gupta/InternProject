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
export default function AddNewContact({
  index,
  handleCreateCancel,
  handleContacts,
  handleContactCreate,
  open1,
}) {
  return (
    <>
      <Dialog open={open1} onClose={handleCreateCancel}>
        <DialogTitle>Create new Contact Person</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your Full name with title(eg. Mrs, Ms, Er)
          </DialogContentText>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              onChange={handleContacts(index)}
              label="Title"
              name="title"
              //   fullWidth
              sx={{ maxWidth: 100 }}
            />
            <TextField
              onChange={handleContacts(index)}
              label="Name"
              name="name"
              fullWidth
            />
          </Box>
          <DialogContentText>Enter your Email Address</DialogContentText>
          <TextField
            onChange={handleContacts(index)}
            label="Email"
            name="email"
            fullWidth
          />
          <DialogContentText>
            Enter your Contact Number(+91 XXXXXXXXXX)
          </DialogContentText>

          <TextField
            onChange={handleContacts(index)}
            label="Contact Number"
            name="contactNo"
            fullWidth
          />
          <DialogContentText>Enter your Telegram Username</DialogContentText>
          <TextField
            onChange={handleContacts(index)}
            label="Telegram Username"
            name="tgUsername"
            fullWidth
          />
          <DialogContentText>
            Enter your Designation (eg. CEO, Manager, Principal, Director ,
            etc.)
          </DialogContentText>
          <TextField
            onChange={handleContacts(index)}
            label="Designation"
            name="designation"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateCancel}>Cancel</Button>
          <Button
            onClick={handleContactCreate}
            variant="contained"
            color="primary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
