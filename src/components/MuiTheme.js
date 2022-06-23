
import { createTheme,colors } from "@mui/material/styles";
import { shadows, typography } from "./styles";

const MuiTheme = createTheme({
    palette: {
        background: {
            // dark: '#F4F6F8',
            default: colors.common.white,
            paper: colors.common.white,
        },
        primary: {
            main: colors.indigo[500],
        },
        secondary: {
            main: colors.indigo[500],
        },
        text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600],
        },
    },
    shadows,
    typography,
});

export default MuiTheme;
// Layout:
// Typography;
//TextField id="outlined-basic" label="Outlined" variant="outlined"
{/* <Box
    sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
        },
    }}
/>; */}
// Container = side conners
// Grid = grid

{/* <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}
></Stack> */}

//surface
//card
//Paper