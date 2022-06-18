import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { styled } from "@mui/material/styles";

const Div = styled("div")`



`;


function Stats() {
    return (
        <Box component="section" py={3}>
            <Container>
                <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
                    <Grid item xs={12} md={4}>
                        <Card>
                            {" "}
                            <CardContent align="center">
                                <AccessibilityNewIcon
                                    color="secondary"
                                    sx={{ fontSize: 50 }}
                                />
                                <Typography variant="body1">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} display="flex">
                        <Card align="center">
                            {" "}
                            <CardContent>
                                <AccessibilityNewIcon
                                    color="secondary"
                                    sx={{ fontSize: 50 }}
                                />
                                <Typography variant="body1">
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card align="center">
                            <CardContent>
                                <AccessibilityNewIcon
                                    color="secondary"
                                    sx={{ fontSize: 50 }}
                                />
                                <Typography
                                    variant="body1"
                                    
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Stats;
