import React, { Component } from "react";
import Alert from '@mui/material/Alert';

export default function Confirmation() {
    return (
        <Alert severity="success">
        Action completed successfully.
        </Alert>
  );
}