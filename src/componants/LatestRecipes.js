import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import Data from './Data' 
import Card from './Card'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    cardGrid:{
        display: 'flex', 
        flexDirection: 'row', 
        columnGap: theme.spacing(2), 
        flexWrap: 'nowrap', 
        height: '600px', 
        overflow: 'auto'
    }
}))

export default function LatestRecipes() {
    const classes = useStyles()
    const cards = Data.map((card, idx )=> {
        return (
            <Card 
                {...card}
            />
        )
    })
  return (
    <Container className={classes.heroContainer}>
        <Typography variant='h4'>
            Latest Recipes
        </Typography>
        <div className={classes.cardGrid}>
            {cards}
        </div>
    </Container>
  )
}
