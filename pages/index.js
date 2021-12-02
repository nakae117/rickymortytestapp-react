import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Grid, Button, Box } from '@mui/material'
import Main from '../components/layouts/main'

export default function Home() {
	return (
		<Main>
			<Head>
				<title>Rick & Morty React App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Grid sx={{
				background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/bg.png")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backdropFilter: 'brightness(50%)',
				height: '100vh',
				textAlign: 'center'
			}} container spacing={0} alignItems="center" justifyContent="column" justify="center">
				<Grid item xs={12} md={12}>
					<Box
						sx={{
							height: { xs: '120px', sm: '200px', lg: '300px' }
						}}
					>
						<img
							src="/logo.png"
							alt="Rick y Morty"
							height="100%"
						></img>
					</Box>
					
					<h1>Bienvenido a Rick y Morty</h1>

					<Link href="/buscar">
						<Button color="secondary" variant="contained">Continuar</Button>
					</Link>
				</Grid>
			</Grid>

			<style jsx global>{`
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
