import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({  
    footer:{
        backgroundColor: '#BD9658',
        borderRadius: 17,
        color: '#F6ECE7',
        padding: theme.spacing(2), 
        textAlign: 'center',
        fontSize: '25px',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
    }, 
    link:{
        textDecoration: 'none', 
    } 
})) 

export default function Footer() {
    const classes = useStyles({})
    return (
        <div>
            <Typography variant='body1' className={classes.footer}>
                This is a demo for <a href='https://www.pickuplimes.com/' className={classes.link}>Pick Up Limes</a>, 
                made by Ahlam Alsaedi and Bashair.. 
                We're an interns in El Café de los Sentidos as Full-Stack developers 
            </Typography>
        </div>
              
    )
}
