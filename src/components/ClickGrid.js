import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        margin: 0
    },
    paper: {
        height: 200,
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
}))

const getClickBoxes = ()=> {
    return ["IV", "I", "III", "II"]
}


const ClickGrid = ()=> {
    const classes = useStyles();
    const clickBoxes = getClickBoxes();
    return (
        <div className={classes.root}>
            <Grid container
                justify="center"
                style={{ maxWidth: '100%' }}>
                <Grid item xs={6} align="center">
                    <Paper className={classes.paper}>
                        {clickBoxes[0]}
                    </Paper>
                </Grid>
                <Grid item xs={6} align="center">
                    <Paper className={classes.paper}>
                        {clickBoxes[1]}
                    </Paper>
                </Grid>
                <Grid item xs={6} align="center">
                    <Paper className={classes.paper}>
                        {clickBoxes[2]}
                    </Paper>
                </Grid>
                <Grid item xs={6} align="center">
                    <Paper className={classes.paper}>
                        {clickBoxes[3]}
                    </Paper>
                </Grid>
            </Grid>
        </div>
  )
}

export default withStyles(useStyles)(ClickGrid);