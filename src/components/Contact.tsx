import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NavigationIcon from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

const Contact: React.FunctionComponent = () => {
  return (
    <div className="form">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            className="field"
            id="standard-basic"
            label="Your name (required)"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className="field"
            id="standard-basic"
            label="Your email (required)"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className="field"
            id="standard-basic"
            label="Your message"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="buttonContainer">
            <Button variant="outlined" className="button">Send</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
