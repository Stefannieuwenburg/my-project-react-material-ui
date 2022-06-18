import React from "react";
import { Stack, Box, Typography, Fab, Portal } from "@mui/material";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
   
    fab: {
        background: "linear-gradient(45deg, #616161 30%, #424242 90%)",
        border: 0,
        borderRadius: 20,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
    },
    boxpop: {
        position: "fixed",
        width: 200,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "2px solid",
        borderRadius: 30,
        p: 1,
        color: "white",
        textAlign: "center",
        background: "linear-gradient(45deg, #616161 30%, #424242 90%)",
    },
});

const Footer = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Box mt={4}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    <Typography>
                        <a href="https://github.com/Stefannieuwenburg">
                            <AiOutlineGithub
                                style={{ color: "green", fontSize: "40px" }}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/stefan-nieuwenburg-3030a1213/">
                            <IoLogoLinkedin
                                style={{ color: "blue", fontSize: "40px" }}
                            />
                        </a>
                    </Typography>
                    <Typography style={{ fontSize: "15px" }}>
                        © Copyright 2022 | Ontwikkeling door Stefan Nieuwenburg
                        Services | Alle rechten voorbehouden.
                    </Typography>

                    <Box>
                        <Fab
                            className={classes.fab}
                            sx={{ mr: 1 }}
                            variant="extended"
                            size="small"
                            color="primary"
                            aria-label="add"
                            onClick={handleClick}
                        >
                            callme
                        </Fab>

                        {open ? (
                            <Portal>
                                <Box className={classes.boxpop}>
                                    Call me for work: 0626142085
                                </Box>
                            </Portal>
                        ) : null}
                    </Box>
                </Stack>
            </Box>
        </>
    );
};

export default Footer;
