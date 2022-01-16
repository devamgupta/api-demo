import { ButtonBase, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import './ItemCard.css';
// ₹

const useStyles = makeStyles(theme => ({
    image: {
        width: 128,
        height: 128,

    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 6
    },
    origPrice: {
        textDecoration: 'line-through'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
}))

function ItemCard({ item }) {
    const classes = useStyles();
    return (
        <div>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid
                    item container
                    direction="column"
                    xs={8} sm={8} md={8} lg={8}
                >
                    <Typography variant='h6'>
                        {item.itemName}
                    </Typography>
                
                    <Grid item container>
                        <Typography className={classes.origPrice} color='textSecondary' gutterBottom>
                            ₹{item.originalPrice}
                        </Typography>
                        &nbsp; &nbsp; 
                        <Typography color='textPrimary' gutterBottom>
                            ₹{item.price}
                        </Typography>
                    </Grid>

                    <Typography color='textSecondary' variant='body2'>
                        {item.description}
                    </Typography>
                </Grid>

                <Grid
                    item container
                    justifyContent='flex-end'
                    xs={4} sm={4} md={4} lg={4}
                >
                    <ButtonBase className={classes.image}>
                        <img
                            className={classes.img}
                            src={item.image[0]}
                        />
                    </ButtonBase>
                </Grid>
                
            </Grid>
        </Paper>
        </div>
    )
}

export default ItemCard;
