import React from 'react'
import Head from 'next/head'
import { Grid, Button } from '@mui/material'
import Main from '../components/layouts/main'

export default function Home() {
	return (
		<Main>
			<Head>
				<title>Rick & Morty React App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Grid container spacing={0}>
				<Grid className="banner" item xs={12} md={12}>
					<img
						src="/logo.png"
						alt="Rick y Morty"
						height="300px"
					></img><br/>
					<h1>Bienvenido a Rick y Morty</h1>
					<Button color="secondary" variant="contained" href="/buscar">Continuar</Button>
				</Grid>
			</Grid>

			<style jsx global>{`
				.banner {
					background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('/bg.png');
					backdrop-filter: brightness(50%);
					height: 100vh;
					text-align: center;
				}
				body {
					margin: 0px;
				}
				h1 {
					color: #fff;
				}
			`}</style>
		</Main>
	)
}
