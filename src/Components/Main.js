import { Box, Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import {
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
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CalculateIcon from "@mui/icons-material/Calculate";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import swal from "sweetalert";
export default function Main() {
  const [businessData, setBusinessData] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState({
    name: "",
    type: "",
    contactNo: "",
    emailId: "",
  });
  const [variableValues, setVariableValues] = useState({
    VariableKey1: "Value 1",
    VariableKey2: "Value 2",
    VariableKey3: "Value 3",
    VariableKey4: "Value 4",
    VariableKey5: "Value 5",
  });
  const [contacts, setContacts] = useState([
    {
      title: "Mr",
      name: "Kushagra gupta",
      email: "kushgupta@guptaIndustries.com",
      contactNo: "+91 9876543210",
      tgUsername: "Kushhhhhh",
      designation: "CEO",
    },
  ]);
  function handleContactSubmit() {
    setOpen(false);
  }
  function handleClose() {
    setOpen(false);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  function handleSubmit() {
    let raw = `{\n    "account": {\n        "name": "string1",\n        "type": "string11",\n        "contactNo": "strin111g",\n        "emailId": "string1111"\n    },\n    "contacts": [\n        {\n            "title": "string",\n            "name": "string",\n            "email": "string",\n            "contactNo": "string",\n            "tgUsername": "string",\n            "designation": "string"\n        }],\n    "variableValues": {\n        "VariableKey1": "Value 1",\n        "VariableKey2": "Value 2",\n        "VariableKey3": "Value 3",\n   "VariableKey4": "Value 4",\n "VariableKey5": "Value 5"\n   },\n    "internName" : "kush"\n}`;

    axios
      .post("https://internship.leadtorev.com/clients/customers/add", {
        headers: { "Content-Type": "application/json" },
        data: raw,
        account,
        variableValues,
        internName: "kush",
        contacts,
      })
      .then((response) => {
        console.log(response.data.data);
        setBusinessData([response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleVariable() {
    setIsDisabled((disable) => !disable);
  }

  function handleAccount(e) {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    setVariableValues({
      ...variableValues,
      [e.target.name]: e.target.value,
    });
  }

  // function handleContacts(e) {
  //   setContacts((items) => [{ ...items, [e.target.name]: e.target.value }]);
  // }
  const handleContacts = (index) => (e) => {
    const newArr = contacts.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setContacts(newArr);
  };
  function handleAccept() {
    let internName = prompt("Enter internName");
    console.log(internName);

    axios
      .get(
        `https://internship.leadtorev.com//clients/customers/get/by-intern-name?internName=${internName}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          marginTop: "80px",
          width: "100%",
          fontFamily: "Poppins",
          position: "relative",
          padding: "20px",
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              m: -1,
            }}
          >
            <Typography sx={{ m: 1 }} variant="h4" color="primary">
              Add Customer
            </Typography>
            <Button variant="Contained" color="primary" onClick={handleAccept}>
              Submit
            </Button>
            <Box sx={{ m: 1 }}>
              <Button
                variant="contained"
                color="inherit"
                onClick={handleSubmit}
              >
                Add Customer
              </Button>
            </Box>
          </Box>

          <Box sx={{ mt: 3 }}>
            {/* Business Account Details */}

            <Paper
              sx={{
                background: "#E7EEF4 0% 0% no-repeat padding-box",
                padding: "20px",
              }}
              elevation={0}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  marginBottom: "30px",
                }}
              >
                {/* icon */}
                <RecentActorsIcon />
                <Typography variant="h6">BUSINESS ACCOUNT DETAILS</Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <TextField
                  id="accountName"
                  name="name"
                  value={account.name}
                  label="Account Name"
                  onChange={handleAccount}
                  sx={{ width: "440px", background: "white" }}
                />
                <TextField
                  id="accountType"
                  name="type"
                  value={account.type}
                  label="Account Type"
                  onChange={handleAccount}
                  sx={{ width: "440px", background: "white" }}
                />
                <TextField
                  id="contactNumber"
                  name="contactNo"
                  value={account.contactNo}
                  label="Contact Number"
                  onChange={handleAccount}
                  sx={{ width: "440px", background: "white" }}
                />
                <TextField
                  id="emailID"
                  name="emailId"
                  value={account.emailId}
                  label="Email Id"
                  onChange={handleAccount}
                  sx={{ width: "440px", background: "white" }}
                />
              </Box>
            </Paper>
            {/* Variables */}
            <Box display="flex" sx={{ gap: "1rem" }}>
              <Paper
                sx={{
                  background: "#E7EEF4 0% 0% no-repeat padding-box",
                  padding: "20px",
                  marginTop: "20px",
                  width: "50%",
                }}
                elevation={0}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    {/* icon */}
                    <CalculateIcon />
                    <Typography variant="h6">VARIABLES</Typography>
                  </Box>
                  <Button
                    color="inherit"
                    variant="contained"
                    onClick={handleVariable}
                  >
                    ADD VARIABLE
                  </Button>
                </Box>
                <Box>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "15px",
                    }}
                  >
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Variable 1 key"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{ background: "white" }}
                    />
                    <TextField
                      value={variableValues.VariableKey1}
                      onChange={handleAccount}
                      name="VariableKey1"
                      sx={{ background: "white" }}
                      disabled={isDisabled}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "15px",
                    }}
                  >
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Variable 2 key"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{ background: "white" }}
                    />
                    <TextField
                      value={variableValues.VariableKey2}
                      onChange={handleAccount}
                      name="VariableKey2"
                      sx={{ background: "white" }}
                      disabled={isDisabled}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "15px",
                    }}
                  >
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Variable 3 key"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{ background: "white" }}
                    />
                    <TextField
                      value={variableValues.VariableKey3}
                      onChange={handleAccount}
                      name="VariableKey3"
                      sx={{ background: "white" }}
                      disabled={isDisabled}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "15px",
                    }}
                  >
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Variable 4 key"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{ background: "white" }}
                    />
                    <TextField
                      value={variableValues.VariableKey4}
                      onChange={handleAccount}
                      name="VariableKey4"
                      sx={{ background: "white" }}
                      disabled={isDisabled}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "15px",
                    }}
                  >
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="Variable 5 key"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{ background: "white" }}
                    />
                    <TextField
                      value={variableValues.VariableKey5}
                      onChange={handleAccount}
                      name="VariableKey5"
                      sx={{ background: "white" }}
                      disabled={isDisabled}
                    />
                  </div>
                </Box>
              </Paper>
              {/* Contact Person */}

              <Paper
                sx={{
                  background: "#E7EEF4 0% 0% no-repeat padding-box",
                  padding: "20px",
                  marginTop: "20px",
                  width: "50%",
                }}
                elevation={0}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                    }}
                  >
                    {/* icon */}
                    <ContactMailIcon />
                    <Typography variant="h6">CONTACT PERSON</Typography>
                  </Box>

                  <Button
                    color="inherit"
                    variant="contained"
                    onClick={handleClickOpen}
                  >
                    <PersonAddAlt1Icon />
                    <span style={{ marginLeft: "6px" }}> ADD NEW</span>
                  </Button>
                </Box>
                {contacts.map((item, index) => (
                  <Box>
                    <TableContainer component={Paper} elevation={0}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right" sx={{ padding: "10px" }}>
                              {" "}
                              <BorderColorIcon />
                            </TableCell>

                            {/* <TableCell align="right"></TableCell> */}
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.title}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.name}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Phone Number</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.contactNo}
                            </TableCell>
                            .
                          </TableRow>
                          <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.email}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Designation</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.designation}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Telegram Username</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.tgUsername}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>Contact Person</DialogTitle>
                      <DialogContent>
                        <TextField
                          value={item.title}
                          onChange={handleContacts(index)}
                          label="Title"
                          name="title"
                          fullWidth
                        />
                        <TextField
                          value={item.name}
                          onChange={handleContacts(index)}
                          label="Name"
                          name="name"
                          fullWidth
                        />
                        <TextField
                          value={item.email}
                          onChange={handleContacts(index)}
                          label="Email"
                          name="email"
                          fullWidth
                        />
                        <TextField
                          value={item.contactNo}
                          onChange={handleContacts(index)}
                          label="Contact Number"
                          name="contactNo"
                          fullWidth
                        />
                        <TextField
                          value={item.tgUsername}
                          onChange={handleContacts(index)}
                          label="Telegram Username"
                          name="tgUsername"
                          fullWidth
                        />
                        <TextField
                          value={item.designation}
                          onChange={handleContacts(index)}
                          label="Designation"
                          name="designation"
                          fullWidth
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleContactSubmit}>Submit</Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                ))}
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
