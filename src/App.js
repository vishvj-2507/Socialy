import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Grid, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Grid
          container
          direction="row"
          spacing={1}
          justifyContent="space-between"
        >
          <Grid item lg="2" md="2">
            <Sidebar setMode={setMode} mode={mode} />
          </Grid>
          <Grid item lg="6" md="6" sm="12">
            <Feed />
          </Grid>
          <Grid item lg="4" md="4" sm="12">
            <Rightbar />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
