import React from 'react';

import { Button } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";
import CoolTheme from "./StyleTheme";


const Home = () => {
    return (
        <ThemeProvider theme={CoolTheme}>
            <div className="App-container">
                <h1>hallo</h1>
                <Button onClick={() => alert("Hello World")}
                    variant="contained"
                    color="primary">
                    Hello World
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default Home