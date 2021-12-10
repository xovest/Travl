import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Typography, InputBase, Box } from '@material-ui/core'
import Toolbar from '@mui/material/Toolbar'
import { SearchIcon } from '@material-ui/icons/Search'

import useStyles from './styles'

export const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travl Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explora da new placez
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>

    </AppBar>
  )
}

export default Header