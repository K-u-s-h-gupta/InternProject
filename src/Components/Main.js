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
} from "@mui/material";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import CalculateIcon from "@mui/icons-material/Calculate";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Main = () => {
  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    let raw =
      '{\n    "account": {\n        "name": "string1",\n        "type": "string11",\n        "contactNo": "strin111g",\n        "emailId": "string1111"\n    },\n    "contacts": [\n        {\n            "title": "string",\n            "name": "string",\n            "email": "string",\n            "contactNo": "string",\n            "tgUsername": "string",\n            "designation": "string"\n        }],\n    "variableValues": {\n        "VariableKey1": "Value 1",\n        "VariableKey2": "Value 2",\n        "VariableKey3": "Value 3",\n   "VariableKey4": "Value 4",\n "VariableKey5": "Value 5"\n   },\n    "internName" : "kush"\n}';
    let config = {
      method: "post",
      url: "https://internship.leadtorev.com/clients/customers/add",
      headers: { "Content-Type": "application/json" },
      data: raw,
    };

    axios(config)
      .then((response) => {
        console.log(response.data.data);
        setBusinessData([response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit() {
    let internName = prompt("Enter internName");
    console.log(internName);
    let config = {
      method: "get",
      url: `https://internship.leadtorev.com//clients/customers/get/by-intern-name?internName=${internName}`,
      headers: { "Content-Type": "application/json" },
    };
    axios(config)
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

          {businessData.map((item) => (
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
                    value={item.account.name}
                    sx={{ width: "440px", background: "white" }}
                  />
                  <TextField
                    id="accountType"
                    name="type"
                    value={item.account.type}
                    sx={{ width: "440px", background: "white" }}
                  />
                  <TextField
                    id="contactNumber"
                    value={item.account.contactNo}
                    sx={{ width: "440px", background: "white" }}
                  />
                  <TextField
                    id="emailID"
                    value={item.account.emailId}
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
                    <Button color="inherit" variant="contained">
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
                        value={item.variableValues.VariableKey1}
                        sx={{ background: "white" }}
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
                        value={item.variableValues.VariableKey2}
                        sx={{ background: "white" }}
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
                        value={item.variableValues.VariableKey3}
                        sx={{ background: "white" }}
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
                        value={item.variableValues.VariableKey4}
                        sx={{ background: "white" }}
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
                        value={item.variableValues.VariableKey5}
                        sx={{ background: "white" }}
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

                    <Button color="inherit" variant="contained">
                      <PersonAddAlt1Icon />
                      <span style={{ marginLeft: "6px" }}> ADD NEW</span>
                    </Button>
                  </Box>
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
                              {item.contacts[0].title}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.contacts[0].name}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Phone Number</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.contacts[0].contactNo}
                            </TableCell>
                            .
                          </TableRow>
                          <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.contacts[0].email}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Designation</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              {item.contacts[0].tgUsername}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Telegram Username</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>
                              Telegram Username
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                </Paper>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Main;
