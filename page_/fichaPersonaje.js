import { Card, Box, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	fichaPersonaje: {
		cursor: 'pointer',
		'&:hover': {
			boxShadow: '0px 2px 1px -1px #02b1c8, 0px 0px 1px 0px #02b1c8, 0px 1px 3px 0px #02b1c8'
		}
	},
	cardContent: {
		padding: '5px 16px !important',
	},
	textTitle: {
		'font-size': '14px',
	},
	textSubtitle: {
		'font-size': '11px',
	}
});

export default function FichaPersonaje(props) {
	const classes = useStyles();

	const selectPersonaje = function(personaje_id){
		props.onSelectPersonaje(personaje_id)
	}

	return (
		<>
			<Card sx={{ display: 'flex' }} className={classes.fichaPersonaje} onClick={() => selectPersonaje(props.personaje.id)}>
				<CardMedia
					component="img"
					sx={{ width: 125 }}
					image={props.personaje.image}
					alt="Live from space album cover"
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent className={classes.cardContent}>
						<Typography className={classes.textSubtitle} variant="subtitle2" color="text.secondary" component="div">
							{props.personaje.status} - {props.personaje.species}
						</Typography>

						<Typography className={classes.textTitle} component="div" variant="subtitle1">
							{props.personaje.name}
						</Typography>
					</CardContent>

					<CardContent className={classes.cardContent}>
						<Typography className={classes.textSubtitle} variant="subtitle2" color="text.secondary" component="div">
							Location
						</Typography>

						<Typography className={classes.textTitle} component="div" variant="subtitle1">
							{props.personaje.location.name}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</>
	)
}