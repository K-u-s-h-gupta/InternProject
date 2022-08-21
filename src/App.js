import React from "react";
import Sidebar from "./Components/Sidebar";
import Top from "./Components/Top";
import Main from "./Components/Main";
import { Box, AppBar, Toolbar, CssBaseline } from "@mui/material";
function App() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            background: "#F7F7F7 0% 0% no-repeat padding-box",
            // width: "80.5%",
          }}
        >
          <Toolbar>
            <Top />
          </Toolbar>
        </AppBar>

        {/* drawer */}
        <Box>
          <Sidebar />
        </Box>

        {/* main content */}
        <Main />
      </Box>
    </div>
  );
}

export default App;
