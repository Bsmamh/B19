import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import React from 'react'
import Card from './Card'
import Data from './Data'

const useStyles = makeStyles((theme) => ({ 
    title:{
        textAlign: 'center', 
        marginTop: theme.spacing(4), 
        marginBottom: theme.spacing(2), 
    },
    qoute:{
        // fontFamily: theme.typography.b, //did not work 
        textAlign: 'center', 
        marginBottom: theme.spacing(4),
        textTransform: 'capitalize',
        letterSpacing: '3px'
    },  
    cardgrid:{
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}))

export default function CardGrid(props) {
    const classes = useStyles()
    const cards = Data.map(card => {
        return (
            <Grid item lg={3}>
                <Card 
                    {...card}
                />
            </Grid>   
        )
    })
  return (
      <div>
       <Typography className={classes.title} variant='h2'>
            Recipes
        </Typography> 
       <Typography className={classes.qoute} variant='h5'>
            Nourish the cells and the soul
        </Typography>
        <Container className={classes.cardgrid}>
            <Grid container spacing={4}>
                {cards}
            </Grid>
        </Container>
      </div>
  )
}
