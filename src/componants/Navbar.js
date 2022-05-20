import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, makeStyles, InputBase, alpha} from '@material-ui/core';
import { Search } from '@mui/icons-material'; 
import Cancel from '@mui/icons-material/HighlightOffOutlined';
const useStyles = makeStyles((theme) => ({
    bar:{
        backgroundColor: '#BD9658', 
        borderRadius: 17,
        color: '#F6ECE7',
    },
    toolbar:{
      display: 'flex', 
      justifyContent: 'space-between'
    },
    logo:{
        fontStyle: 'bold', 
        fontSize: '45px'
    },
    searchButton:{
      display: 'none', 
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]:{ 
        display: (props) => (props.open ? 'none' : 'flex'),
      }, 
    },
    searchBox:{
      display: 'flex', 
      alignItems: 'center',
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: 17,
      [theme.breakpoints.down('sm')]:{
        display: (props) => (props.open ? 'flex' : 'none'),
      },
      width: '30%'
    },
    input:{
      color: '#F6ECE7', 
      marginLeft: theme.spacing(1), 
    },
    cancel:{ // Fix this thing position, |       X ->  | let it stick to the right side !!!
      display: 'flex', 
      alignItems: 'center',
      [theme.breakpoints.up('md')]:{ 
        display: 'none',  
    }
    }
}))

const Navbar = () => {

  const [open, setOpen] = React.useState(false)
  const classes = useStyles({open})

  return (
    <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.logo}
            variant="h6"
            noWrap
            component="div"
          >
            Pick Up Limes
          </Typography>
          <Box className={classes.searchButton}>
            <Search  
              onClick={() => setOpen(true)}
            />
          </Box>
          <Box className={classes.searchBox}>
            <Search />
            <InputBase placeholder="Search..." className={classes.input}/>
            <Box className={classes.cancel}>
              <Cancel onClick={() => setOpen(false)}/>
            </Box>
          </Box>
        </Toolbar>
    </AppBar>
  );
};
export default Navbar;
