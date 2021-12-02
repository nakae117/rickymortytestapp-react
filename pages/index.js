import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Grid, Button } from '@mui/material'
import Main from '../components/layouts/main'
import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles({
	banner: {
		background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/bg.png")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backdropFilter: 'brightness(50%)',
		height: '100vh',
		textAlign: 'center'
	},
	imageBanner: {
		height: '300px',
		[theme.breakpoints.down('sm')]: {
			height: '120px !important',
		},
		[theme.breakpoints.down('md')]: {
			height: '200px',
		},
	}
});

export default function Home() {
	const styleClass = useStyles();

	return (
		<Main>
			<Head>
				<title>Rick & Morty React App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Grid container spacing={0} alignItems="center" justifyContent="column" justify="center" className={styleClass.banner}>
				<Grid item xs={12} md={12}>
					<div>
						<img
							src="/logo.png"
							alt="Rick y Morty"
							className={styleClass.imageBanner}
						></img>
					</div>
					
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
