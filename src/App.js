import "./App.css";
import icon from "./icon.png"; 
import * as React from "react";
import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField"; 
import Slider from "@mui/material/Slider"; 
import Stack from "@mui/material/Stack"; 
import {ThemeProvider, useTheme, createTheme} from "@mui/material/styles"; 
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline"
const theme = createTheme({
  palette: {
    primary: {
      main: "#f7dd93",
      contrastText: "#012869",
    },
    secondary: {
      main: "#93adf7",
      contrastText: "#2e364d",
    },
    background: {
      default: "#FEFDE4",
    }
  },
});
const marks = [
  {  value: 0,
    label: "1 Day",
  }, 
  {  value: 25, 
    label: "1 Week", 
  }, 
  {  value: 50, 
    label: "1 Month", 
  }, 
  {  value: 75, 
    label: "6 Months", 
  }, 
  {  value: 100, 
    label: "1 Year", 
  },
]; 
function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function App() {
  return (
    <>
        <ThemeProvider theme= {theme}>
          <CssBaseline />
          <Box sx = {{bgcolor: "#E4F2FE", width: "100%", height: 100, alignItems: "cemter"}}> 
            <Stack direction= "row" spacing = {2}>
              <item> <Box sx={{mt:1}}> <img src = {icon} width= {80} height= {80} alt={""} ></img> </Box></item>
              <item> <TextField sx = {{width: 700, mt: 2.5, ml: 20}} id="outlined-basic" label="Enter" variant="outlined" color= "primary"/> </item>
              <item> <Button variant="contained" sx = {{py: 2, mt: 2.5}} color= "secondary">Add</Button> </item>
            </Stack>
          </Box>
          <Grid container direction="row" alignItems="center" wrap = "nowrap">
              <Grid item sx={{mt: 5, mx: "auto", width: 600}}>
                <Slider
                aria-label="Restricted values"
                defaultValue={0}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={null}
                valueLabelDisplay="on"
                marks={marks}   
                />              
              </Grid>
          </Grid>
        </ThemeProvider>
    </>
  );
}

export default App;
