import React from 'react'
import PropTypes from 'prop-types';
import { Card, Box, CardContent, CardMedia, Typography } from '@mui/material'
import useStyles from '../css/fichaPersonaje.css'

const FichaPersonaje = ({ personaje, onSelectPersonaje }) => {
    const classes = useStyles();

    const selectPersonaje = (personaje_id) => onSelectPersonaje(personaje_id)

    return (
        <>
            <Card sx={{ display: 'flex' }} className={classes.fichaPersonaje} onClick={() => selectPersonaje(personaje.id)}>
                <CardMedia
                    component="img"
                    sx={{ width: 125, height: 125 }}
                    image={personaje.image}
                    alt="Live from space album cover"
                />
                
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.textSubtitle} variant="subtitle2" color="text.secondary" component="div">
                            {personaje.status} - {personaje.species}
                        </Typography>

                        <Typography className={classes.textTitle} component="div" variant="subtitle1">
                            {personaje.name}
                        </Typography>
                    </CardContent>

                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.textSubtitle} variant="subtitle2" color="text.secondary" component="div">
                            Location
                        </Typography>

                        <Typography className={classes.textTitle} component="div" variant="subtitle1">
                            {personaje.location.name}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </>
    )
}


FichaPersonaje.propTypes = {
    personaje: PropTypes.object,
    onSelectPersonaje: PropTypes.func
}

export default FichaPersonaje