import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box"; 
import TextField from "@mui/material/TextField"; 
import Slider from "@mui/material/Slider"; 
import {createTheme} from "@mui/material/styles"; 
import { ThemeProvider } from "@emotion/react";
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
        <Box sx={{mt: 5, mx: "auto", width: 500}}>
          <Slider
            aria-label="Restricted values"
            defaultValue={0}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="on"
            marks={marks}   
          />
          </Box>
          <Box sx = {{mt: 10, mx: "auto", width: 200}}>
            <TextField id="outlined-basic" label="Enter" variant="outlined" color= "secondary"/>
          </Box>
        </ThemeProvider>
    </>
  );
}

export default App;
