import { Button, Container, Input, Paper, Box, Fab } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import styled from "./StyleTheme";



const ContactForm = () => {
    return (
        <>
            <ThemeProvider theme={styled}>
                <Box mt={4}>
                    <Container maxWidth="sm">
                        <Paper>
                            <Input fullWidth placeholder="First Name" />
                            <Input fullWidth placeholder="Last Name" />
                            <Input fullWidth placeholder="Email" />
                            <Input fullWidth placeholder="Website" />
                            <Box mt={1}>
                                <Button variant="contained" color="error">
                                    Submit
                                </Button>
                                <Button variant="contained" color="success">
                                    Cancel
                                </Button>
                                
                            </Box>
                        </Paper>
                    </Container>
                </Box>
            </ThemeProvider>
        </>
    );
};
export default ContactForm;
