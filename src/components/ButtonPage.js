import {React,useState} from 'react';
import { Button, ButtonGroup, Checkbox,Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider } from "@mui/material/styles";
import CoolTheme from "./StyleTheme";
import MyButton from "./StyleButton";

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
        backgroundColor:'#6b6c6d',
        height: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        color: "white",
    },
});


function ControlledCheckbox() {
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    };
    
 
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}

const ButtonPage = () => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <ThemeProvider theme={CoolTheme}>
                <ControlledCheckbox />
                <ButtonGroup>
                    <MyButton
                        href="#"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        color="primary"
                    >
                        save
                    </MyButton>
                    <Button
                        endIcon={<DeleteIcon />}
                        variant="contained"
                        color="primary"
                    >
                        delete
                    </Button>
                </ButtonGroup>
            </ThemeProvider>
        </Box>
    );
    
}

export default ButtonPage