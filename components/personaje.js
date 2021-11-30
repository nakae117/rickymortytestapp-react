import {
	Dialog,
	DialogContent,
	IconButton,
	DialogContentText,
	Avatar,
	CardMedia,
	Typography,
	TextField,
	Container,
	Grid
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { makeStyles } from '@mui/styles'
import FichaPersonaje from '../components/fichaPersonaje'

const useStyles = makeStyles({
	coverFicha: {
		filter: 'brightness(50%)'
	},
	textTitle: {
		'font-size': '14px',
	},
	textHead: {
		'font-size': '16px',
		'font-weight': '600',
		margin: '15px 0px'
	},
	avatarFicha: {
		margin: '-91px 6px 10px 15px'
	},
	infoHead: {
		marginBottom: '10px',
		textAlign: 'center'
	},
	loading: {
		textAlign: 'center'
	},
	marignY15: {
		margin: '15px 0px'
	},
	personajesContainer: {
		margin: '25px 0'
	}
});

export default function Personaje(props) {
	const styleClass = useStyles();
	const onClose = function () {
		props.onClosePersonaje();
	};

	const episodios = function () {
		if (props.loadingEpisodios) {
			return <Grid item xs={12} md={12} className={styleClass.loading}> Cargando episodios </Grid>
		}
		else {
			if (props.episodios.length > 1) {
				return renderEpisodiosList()
			} else {
				return (
					<Grid item xs={12} md={4} key={'episodio-' + props.episodios.id}>
						<TextField
							id={'episodio-helperText-' + props.episodios.id}
							label={props.episodios.name ? props.episodios.name : ''}
							defaultValue={props.episodios.episode ? props.episodios.episode : ''}
							helperText={props.episodios.air_date ? props.episodios.air_date : ''}
							size="small"
							InputProps={{
								readOnly: true,
							}}
						/>
					</Grid>
				)
			}
		}
	}

	const renderEpisodiosList = () => {
		return props.episodios.map((episodio) => {
			return (
				<Grid item xs={12} md={4} key={'episodio-' + episodio.id}>
					<TextField
						id={'episodio-helperText-' + episodio.id}
						label={episodio.name ? episodio.name : ''}
						defaultValue={episodio.episode ? episodio.episode : ''}
						helperText={episodio.air_date ? episodio.air_date : ''}
						size="small"
						InputProps={{
							readOnly: true,
						}}
					/>
				</Grid>
			)
		})
	}

	const openFichaPersonajeInteresante = function(personaje_id){
		props.onSelectPersonaje(personaje_id)
	}

	const renderPersonajesInteresList = () => {
		if(props.loadingEpisodios){
			return <Grid item xs={12} md={12} className={styleClass.loading}> Cargando Personajes de interés </Grid>
		} else {
			return props.personajesInteresantes.map((personaje) => {
				return (
					<Grid item xs={12} md={6} key={'interesante-personaje-' + personaje.id}>
						<FichaPersonaje personaje={personaje} onSelectPersonaje={openFichaPersonajeInteresante}></FichaPersonaje>
					</Grid>
				)
			})
		}
	}

	return (
		<>
			<Dialog
				open={props.open}
				onClose={onClose}
				scroll={'paper'}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="md"
				fullWidth={true}
			>
				<CardMedia
					className={styleClass.coverFicha}
					component="img"
					height="200"
					image="/ficha.jpg"
					alt="Cover ficha"
				/>
				<Avatar alt={props.personaje.name} src={props.personaje.image} className={styleClass.avatarFicha} sx={{ width: 80, height: 80 }} />
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: 'white',
					}}
				>
					<CloseIcon />
				</IconButton>

				<DialogContent dividers>
					<DialogContentText component="div" id="alert-dialog-description">
						<Container className={styleClass.infoHead}>
							<Typography className={styleClass.textTitle} component="div" variant="subtitle1">
								{props.personaje.status}
							</Typography>

							<Typography className={styleClass.textTitle} component="div" variant="subtitle1">
								{props.personaje.name}
							</Typography>

							<Typography className={styleClass.textTitle} component="div" variant="subtitle1">
								{props.personaje.species}
							</Typography>
						</Container>

						<Typography className={styleClass.textHead} component="div" variant="subtitle1">
							Información
						</Typography>

						<Container>
							<Grid container spacing={3}>
								<Grid item xs={6} md={4}>
									<TextField
										id="gender-helperText"
										label="Gender"
										defaultValue={props.personaje.gender ? props.personaje.gender : '-'}
										size="small"
										InputProps={{
											readOnly: true,
										}}
									/>
								</Grid>

								<Grid item xs={6} md={4}>
									<TextField
										id="gender-helperText"
										label="Origin"
										defaultValue={props.personaje.origin ? props.personaje.origin.name : '-'}
										size="small"
										InputProps={{
											readOnly: true,
										}}
									/>
								</Grid>

								<Grid item xs={6} md={4}>
									<TextField
										id="gender-helperText"
										label="Type"
										defaultValue={props.personaje.type ? props.personaje.type : '-'}
										size="small"
										InputProps={{
											readOnly: true,
										}}
									/>
								</Grid>
							</Grid>
						</Container>

						<hr className={styleClass.marignY15}/>

						<Typography className={styleClass.textHead} component="div" variant="subtitle1">
							Episodios
						</Typography>

						<Container>
							<Grid container spacing={3}>
								<Grid item xs={12} md={12}>
									<Grid container spacing={3}>
										{episodios()}
									</Grid>
								</Grid>
							</Grid>
						</Container>
						
						<hr className={styleClass.marignY15} />

						<Typography className={styleClass.textHead} component="div" variant="subtitle1">
							Personajes de interés
						</Typography>

						<Container className={styleClass.personajesContainer}>
							<Grid container spacing={1}>
								{renderPersonajesInteresList()}
							</Grid>
						</Container>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	)
}