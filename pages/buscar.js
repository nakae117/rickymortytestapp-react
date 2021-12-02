import React, { useEffect, useState } from 'react'
import {
	Grid,
	TextField,
	Paper,
	FormControl,
	Select, MenuItem,
	InputLabel,
	Box,
	AppBar,
	Toolbar,
	Typography,
	Container,
	IconButton,
	Pagination,
	Stack,
	Backdrop,
	CircularProgress
} from '@mui/material'
import { Search } from '@mui/icons-material'
import Main from '../components/layouts/main'
import FichaPersonaje from '../components/fichaPersonaje'
import Personaje from '../components/personaje'
import axios from 'axios'
import { useRouter } from 'next/router'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles({
	bannerBuscar: {
		backgroundImage: 'url("/bg.png")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '400px'
	},
	imageContainer: {
		textAlign: 'center'
	},
	imageBanner: {
		height: '180px',
		[theme.breakpoints.down('sm')]: {
			height: '120px !important',
		},
		[theme.breakpoints.down('md')]: {
			height: '150px',
		},
	},
	personajesContainer: {
		margin: '25px auto'
	},
	paginadoPersonaje: {
		textAlign: 'center',
		padding: '16px 0'
	}
});

export default function Buscar() {
	const styleClass = useStyles();
	const router = useRouter();
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState('');
	const [gender, setGender] = useState('');
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);
	const [personajes, setPersonajes] = useState([]);
	const [personajesInteresantes, setPersonajesInteresantes] = useState([]);
	const [episodios, setEpisodios] = useState([]);
	const [loadingEpisodios, setLoadingEpisodios] = useState(false);
	const [loadingPersonajesInteresantes, setLoadingPersonajesInteresantes] = useState(false);
	const [personaje, setPersonaje] = useState({});
	const [info, setInfo] = useState({});
	const [modalPersonaje, setDialogPersonaje] = useState(false);

	const changeSearch = function(event){
		setSearch(event.target.value)
	}

	const changeStatus = function(event){
		setStatus(event.target.value)
	}

	const changeGender = function(event){
		setGender(event.target.value)
	}

	const buttonSearch = function(){
		changeQuery()

		if(page == 1){
			if (!loading) buscar();
		} else {
			setPage(1)
		}
	}

	const changeQuery = function(){
		let query = {};

		if(page){
			query.page = parseInt(page)
		}

		if(search){
			query.search = search
		}

		if(status){
			query.status = status
		}

		if(gender){
			query.gender = gender
		}

		router.push({
			pathname: '/buscar',
			query: query
		})
	}

	const changePage = (event, value) => {
		setPage(value);
	};

	const buscar = function(){
		setLoading(true)
		setPersonajes([])

		let consulta = {
			page: page,
			name: search,
			status: status,
			gender: gender
		}

		return new Promise((resolve, reject) => {
			axios.get('https://rickandmortyapi.com/api/character/', { params: consulta })
				.then((response) => {
					setInfo(response.data.info)
					setPersonajes(response.data.results)
					setLoading(false)
				}).catch(() => {
					setPersonajes([])
					setLoading(false)
				})
		})
	}

	const obtenerPersonajesInteresantes = function(){
		setLoadingPersonajesInteresantes(true)
		let personaje1 = Math.floor(Math.random() * 672),
			personaje2 = Math.floor(Math.random() * 672),
			personaje3 = Math.floor(Math.random() * 672);

		return new Promise((resolve, reject) => {
			axios.get('https://rickandmortyapi.com/api/character/' + personaje1 + ',' + personaje2 + ',' + personaje3)
				.then((response) => {
					setPersonajesInteresantes(response.data)
					setLoadingPersonajesInteresantes(false)
				}).catch(() => {
					setpersonajesInteresantes([])
					setLoadingPersonajesInteresantes(false)
				})
		})
	}

	const openFichaPersonaje = function(personaje_id){
		setLoading(true)
		setDialogPersonaje(false)

		return new Promise((resolve, reject) => {
			axios.get('https://rickandmortyapi.com/api/character/' + personaje_id)
				.then((response) => {
					setPersonaje(response.data)
					setLoading(false)
					setDialogPersonaje(true)
					obtenerEpisodios(response.data)
					obtenerPersonajesInteresantes()
				}).catch((error) => {
					setPersonaje({})
					setLoading(false)
				})
		})
	}

	const obtenerEpisodios = function(personajeShow){
		setLoadingEpisodios(true)

		let consulta = episodiosKeys(personajeShow);

		return new Promise((resolve, reject) => {
			axios.get('https://rickandmortyapi.com/api/episode/' + consulta)
				.then((response) => {
					setEpisodios(response.data)
					setLoadingEpisodios(false)
				}).catch((error) => {
					setEpisodios([])
					setLoadingEpisodios(false)
				})
		})
	}

	const closeFichaPersonaje = function(){
		setDialogPersonaje(false)
	}

	const episodiosKeys = function(personajeFicha){
		let episodiosKeys = [];

		if(personajeFicha){
			personajeFicha.episode.forEach(function(element, key){
				let ids = element.split('/');
				episodiosKeys.push(ids[5])
			})

		}

		return episodiosKeys.join(',')
	}

	const renderPersonajesList = () => {
		return personajes.map((personaje) => {
			return (
				<Grid item xs={12} md={4} key={'personaje-' + personaje.id}>
					<FichaPersonaje personaje={personaje} onSelectPersonaje={openFichaPersonaje}></FichaPersonaje>
				</Grid>
			)
		})
	}

	useEffect(() => {
		if(!router.isReady) return;

		if(router.query.page){
			setPage(router.query.page)
		}

		if(router.query.search){
			setSearch(router.query.search)
		}

		if(router.query.status){
			setStatus(router.query.status)
		}

		if(router.query.gender){
			setGender(router.query.gender)
		}
	}, [router.isReady]);

	useEffect(() => {
		changeQuery()
		if(page == 1){
			if(!loading) buscar();
		} else {
			setPage(1)
		}
	}, [status, gender]);

	useEffect(() => {
		changeQuery()
		if(!loading) buscar();
	}, [page]);

	useEffect(() => {
		buscar()
	}, []);

	return (
		<div className="main-root">
			<Main>
				<Grid className={styleClass.bannerBuscar} container spacing={0} alignItems="center" justifyContent="column" justify="center">
					<Grid item xs={12} md={12}>
						<div className={styleClass.imageContainer}>
							<img
								src="/logo.png"
								alt="Rick & Morty"
								className={styleClass.imageBanner}
							></img>
						</div>

						<Grid container spacing={0} justifyContent="center">
							<Grid item xs={11} md={5}>
								<Paper>
									<TextField
										label="Buscar personaje"
										id="outlined-size-small"
										size="small"
										fullWidth
										onChange={changeSearch}
										value={search}
										InputProps={{
											endAdornment: <IconButton onClick={buttonSearch} edge="end">
												<Search />
											</IconButton>
										}}
									/>
								</Paper>
							</Grid>
						</Grid>

						<br/><br/>

						<Grid container spacing={3} justifyContent="center">
							<Grid item xs={5} md={3}>
								<FormControl fullWidth>
									<Paper>
										<InputLabel id="status-label">Status</InputLabel>
										<Select
											labelId="status-label"
											id="status"
											value={status}
											label="Status"
											onChange={changeStatus}
											fullWidth
											size="small"
										>
											<MenuItem value={'alive'}>Alive</MenuItem>
											<MenuItem value={'dead'}>Dead</MenuItem>
											<MenuItem value={'unknown'}>Unknown</MenuItem>
										</Select>
									</Paper>
								</FormControl>
							</Grid>

							<Grid item xs={5} md={3}>
								<FormControl fullWidth>
									<Paper>
										<InputLabel id="gender-label">Gender</InputLabel>
										<Select
											labelId="gender-label"
											id="gender"
											value={gender}
											label="Gender"
											onChange={changeGender}
											fullWidth
											size="small"
										>
											<MenuItem value={'female'}>Female</MenuItem>
											<MenuItem value={'male'}>Male</MenuItem>
											<MenuItem value={'genderless'}>Genderless</MenuItem>
											<MenuItem value={'unknown'}>Unknown</MenuItem>
										</Select>
									</Paper>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static" color="default">
						<Toolbar>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Rick & Morty - App
          					</Typography>
						</Toolbar>
					</AppBar>
				</Box>

				<Container className={styleClass.personajesContainer}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={12}>
							<Grid container spacing={3}>
								{ renderPersonajesList() }
							</Grid>
						</Grid>
					</Grid>
				</Container>

				<Container>
					<Grid container spacing={3}>
						<Grid item xs={12} md={12} className={styleClass.paginadoPersonaje}>
							<Stack spacing={2}>
								<Pagination count={info.pages} page={parseInt(page)} onChange={changePage} size="large" color="primary" />
							</Stack>
						</Grid>
					</Grid>
				</Container>
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={loading}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
				<Personaje
					open={modalPersonaje}
					onClosePersonaje={closeFichaPersonaje}
					personaje={personaje}
					loadingEpisodios={loadingEpisodios}
					episodios={episodios}
					loadingPersonajesInteresantes={loadingPersonajesInteresantes}
					personajesInteresantes={personajesInteresantes}
					onSelectPersonaje={openFichaPersonaje}
				/>
			</Main>

			<style jsx global>{`
				body{
					margin: 0px;
				}
			`}</style>
		</div>
	)
}
