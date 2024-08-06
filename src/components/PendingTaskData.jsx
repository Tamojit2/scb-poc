import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export default function PendingTaskData() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed style={{ display: "flex" }}>
        <Box
          sx={{
            height: "200px",
            // width: "200px",
            margin: "5px"
          }}
        >
          <Typography variant="body1" gutterBottom>
            687
            <br /> Pending send to bank
          </Typography>
        </Box>
        <Box sx={{ height: "200px", width: "200px", margin: "5px" }}>
          <Typography variant="body1" gutterBottom>
            8
            <br /> Pending Repaires
          </Typography>
        </Box>
        <Box sx={{ height: "200px", width: "200px", margin: "5px" }}>
          <Typography variant="body1" gutterBottom>
            830
            <br /> Pendin Authorization
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}