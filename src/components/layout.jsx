"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { QueryClientProvider } from "react-query";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <QueryClientProvider> */}
          {children}
        {/* </QueryClientProvider> */}
      </LocalizationProvider>
    </ThemeProvider >
  )
}

