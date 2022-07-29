import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles'

import {BsCircleFill, BsFillHexagonFill, BsStarFill, BsFillTriangleFill} from 'react-icons/bs'

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
    cPaper: {
        height: 200,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        color: "#00FFFF"
    },
    mPaper: {
        height: 200,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        color: "#FF00FF"
    },
    yPaper: {
        height: 200,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        color: "#FFE900"
    },
    kPaper: {
        height: 200,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        color: "#000000"
    }
}))

const colorMap = {
    "C":"cPaper",
    "M":"mPaper",
    "Y":"yPaper",
    "K":"kPaper",
}

const shapeMap = {
    "STAR":<BsStarFill style={{fontSize:'5em'}}/>,
    "CIRCLE":<BsCircleFill style={{fontSize:'5em'}} />,
    "HEXAGON":<BsFillHexagonFill style={{fontSize:'5em'}} />,
    "TRIANGLE":<BsFillTriangleFill style={{fontSize:'5em'}} />,
}

const ClickSquare = (props) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(`SHAPE: ${props.shape} COLOR: ${props.color}, QUADRANT: ${props.quadrant}`);
        props.setClickBoxes(getClickBoxes)
      }

    const classes = useStyles();
    return (
        <Grid item xs={6} align="center" onClick={handleClick}>
            <Paper  className={classes[colorMap[props.color]]}>
                {shapeMap[props.shape]}
            </Paper>
        </Grid>
    )
}

const ClickSquareWrapper = (props)=> {
    return {
        addSetClickBoxes(setClickBoxes) {
            return new ClickSquare({color: props.color, shape: props.shape, quadrant: props.quadrant, setClickBoxes: setClickBoxes})
        }
    }
}

const getClickBoxes = ()=> {
    const colors = ["C", "M", "Y", "K"].sort((a, b) => 0.5 - Math.random());;
    const shapes = ["STAR", "CIRCLE", "HEXAGON", "TRIANGLE"].sort((a, b) => 0.5 - Math.random());;
    return [
        new ClickSquareWrapper({color: colors[0], shape: shapes[0], quadrant: "IV"}),
        new ClickSquareWrapper({color: colors[1], shape: shapes[1], quadrant: "I"}),
        new ClickSquareWrapper({color: colors[2], shape: shapes[2], quadrant: "III"}),
        new ClickSquareWrapper({color: colors[3], shape: shapes[3], quadrant: "II"}),
    ]
}

const ClickGrid = () => {
    const classes = useStyles();
    const [clickBoxes, setClickBoxes] = useState(getClickBoxes());
    
    return (
        <div className={classes.root}>
            <Grid container
                justifyContent="center"
                style={{ maxWidth: '100%' }}
            >
                {clickBoxes[0].addSetClickBoxes(setClickBoxes)}
                {clickBoxes[1].addSetClickBoxes(setClickBoxes)}
                {clickBoxes[2].addSetClickBoxes(setClickBoxes)}
                {clickBoxes[3].addSetClickBoxes(setClickBoxes)}
            </Grid>
        </div>
    )
    
}

export default withStyles(useStyles)(ClickGrid);