import {React,useState} from 'react';
import { Button, ButtonGroup, Checkbox } from "@material-ui/core";

import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import { ThemeProvider } from "@emotion/react";
import theme from "./StyleTheme";
import MyButton from "./StyleButton";




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
    return (
        <div className="btn-page">
            <ThemeProvider theme={theme}>
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
        </div>
    );
    
}

export default ButtonPage