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
import FichaPersonaje from '../components/fichaPersonaje'
import useStyles from '../css/personaje.css'

export default function Personaje({ open, personaje, loadingEpisodios, episodios, personajesInteresantes, onClosePersonaje, onSelectPersonaje }) {
	const styleClass = useStyles();
	const onClose = () => onClosePersonaje()

	const renderEpisodios = function(){
		if(loadingEpisodios){
			return <Grid item xs={12} md={12} className={styleClass.loading}> Cargando episodios </Grid>
		}
		else {
			if(episodios.length > 1){
				return renderEpisodiosList()
			} else {
				return (
					<Grid item xs={12} md={4} key={'episodio-' + episodios.id}>
						<TextField
							id={'episodio-helperText-' + episodios.id}
							label={episodios.name ? episodios.name : ''}
							defaultValue={episodios.episode ? episodios.episode : ''}
							helperText={episodios.air_date ? episodios.air_date : ''}
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
		return episodios.map((episodio) => {
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

	const openFichaPersonajeInteresante = (personaje_id) => onSelectPersonaje(personaje_id)

	const renderPersonajesInteresList = () => {
		if(loadingEpisodios){
			return <Grid item xs={12} md={12} className={styleClass.loading}> Cargando Personajes de interés </Grid>
		} else {
			return personajesInteresantes.map((personaje) => {
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
				open={open}
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
				<Avatar alt={personaje.name} src={personaje.image} className={styleClass.avatarFicha} sx={{ width: 80, height: 80 }} />
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
								{personaje.status}
							</Typography>

							<Typography className={styleClass.textTitle} component="div" variant="subtitle1">
								{personaje.name}
							</Typography>

							<Typography className={styleClass.textTitle} component="div" variant="subtitle1">
								{personaje.species}
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
										defaultValue={personaje.gender ? personaje.gender : '-'}
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
										defaultValue={personaje.origin ? personaje.origin.name : '-'}
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
										defaultValue={personaje.type ? personaje.type : '-'}
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
										{renderEpisodios()}
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