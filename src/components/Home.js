import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import CoolTheme from "./StyleTheme";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box } from "@mui/material";


const useStyles = makeStyles({
    button: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 20,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
    },
    box: {
         background:" #3c3f47",
         height: 350,
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
         justifyContent: 'center',
         fontSize: '10px',
         color: 'white',
       
    },
});


const Home = () => {
const classes = useStyles();

    return (
        <ThemeProvider theme={CoolTheme}>
            <Box className={classes.box}>
                <h1>hallo</h1>
                <Button
                    className={classes.button}
                    onClick={() => alert("Hello World")}
                    variant="contained"
                    color="primary"
                >
                    Hello World
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default Home