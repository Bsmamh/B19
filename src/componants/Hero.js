import { alpha, Button, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import imgH from '../img/cupcake.jpg'

const useStyles = makeStyles((theme) => ({
    heroContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontFamily: 'Cormorant Garamond',
        margin: 'auto'
    },
    heroContent:{ //need to expand a little bit 
        color: '#0A0609',
        fontSize: '40px'
    },
    button:{
        marginTop: theme.spacing(7),
        backgroundColor: '#BD9658', 
        borderRadius: 17,
        color: '#F6ECE7',
        '&:hover': {
            backgroundColor: '#c5a36d', 
        },
        textTransform: 'capitalize',
        fontSize: '18px', 
    },
    heroImg:{ 
        marginTop: theme.spacing(2),
    },
    
})) 

export default function Hero() {
    const classes = useStyles({})
    return (
        <Container className={classes.heroContainer}>
            <div className={classes.heroContent}>
                <Typography variant='h3'>
                    Get cooking with our collection of delicious plant-based recipes.
                </Typography>
                <Typography variant='h6'>
                    psst: we're happy you're here!
                </Typography>
                <div>
                    <Button variant='contained' className={classes.button}>Browse Recipes</Button>
                </div>
            </div>
            <div className={classes.heroImg}>
                <img src={imgH} alt='girl'/>
            </div>
        </Container>
    )
}
