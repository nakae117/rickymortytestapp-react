import React from 'react'
import { Grid, TextField, Paper, FormControl, Select, MenuItem, InputLabel, Box, AppBar, Toolbar, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import Main from '../components/layouts/main'

export default function Buscar() {
	const [status, setStatus] = React.useState('');
	const [gender, setGender] = React.useState('');

	const changeStatus = (event) => {
		setStatus(event.target.value);
	};

	const changeGender = (event) => {
		setGender(event.target.value);
	};

	return (
		<div className="main-root">
			<Main>
				<Grid container spacing={0}>
					<Grid className="banner-buscar" item xs={12} md={12}>
						<div className="logo">
							<img
								src="/logo.png"
								alt="Rick & Morty"
								height="180px"
							></img>
						</div>

						<Grid container spacing={0} justifyContent="center">
							<Grid item xs={5} md={5}>
								<Paper>
									<TextField
										label="Buscar personaje"
										id="outlined-size-small"
										size="small"
										fullWidth
										InputProps={{
											endAdornment: <Search />
										}}
									/>
								</Paper>
							</Grid>
						</Grid>

						<br/><br/>

						<Grid container spacing={3} justifyContent="center">
							<Grid item xs={3} md={3}>
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

							<Grid item xs={3} md={3}>
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
			</Main>

			<style jsx>{`
				.main-root :global(.banner-buscar) {
					background-image: url('/bg.png');
					background-position: center;
					height: 400px;
				}
				.main-root :global(.logo) {
					text-align: center;
				}
				h1 {
					color: #fff;
				}
			`}</style>

			<style jsx global>{`
				body{
					margin: 0px;
				}
			`}</style>
		</div>
	)
}
