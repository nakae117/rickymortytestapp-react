import React, { useState } from 'react'
import Head from 'next/head'
import { Grid, Box, AppBar, Toolbar, Typography, Container, Button } from '@mui/material'
import Main from '../components/layouts/main'

import { createStore } from 'redux'
import counter from '../reducers'

const store = createStore(counter);

let contador = store.getState();

export default function ReduxPrueba() {
	React.useEffect(() => {
		run()
	});

	const run = function () {
		alert('run')
	}

	const [contar, setValue] = useState(store.getState());
	
	const incrementar = () => {
		store.dispatch({ type: 'INCREMENT' })
		setValue(store.getState())
	};

	const decrementar = () => {
		store.dispatch({ type: 'DECREMENT' })
		setValue(store.getState())
	};

	return (
		<div className="main-root">
			<Head>
				<title>Rick & Morty React App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
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

				<Container className="personajes-container">
					<Grid container spacing={3}>
						<Grid item xs={12} md={12}>
							{contar} - {contador} <br/>
							<Button color="secondary" variant="contained" onClick={incrementar}>Incrementar</Button>&nbsp;
							<Button color="secondary" variant="contained" onClick={decrementar}>Decrementar</Button>
						</Grid>
					</Grid>
				</Container>
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

				.main-root :global(.personajes-container) {
					margin-top: 25px;
					margin-bottom: 25px;
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