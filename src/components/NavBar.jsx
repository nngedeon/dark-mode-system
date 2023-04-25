import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
// const Label = { inputProps:{ 'area-label':'switch demo' } }
const NavBar = ({changeMode}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <DarkModeIcon  sx={{ cursor:'pointer' }}  onClick={changeMode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
