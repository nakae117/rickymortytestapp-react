import React from 'react'
import { Grid, Button } from '@mui/material'
import Main from '../components/layouts/main'

export default function Home() {
	return (
		<Main>
			<Grid container spacing={0}>
				<Grid className="baner" item xs={12} md={12}>
					<img
						src="/logo.png"
						alt="Rick y Morty"
						height="300px"
					></img><br/>
					<h1>Bienvenido a Rick y Morty</h1>
					<Button color="secondary" variant="contained">Continuar</Button>
				</Grid>
			</Grid>

			<style jsx global>{`
				.baner {
					background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('/bg.png');
					backdrop-filter: brightness(50%);
					height: 100vh;
					text-align: center;
				}
				body{
					margin: 0px;
				}
				h1 {
					color: #fff;
				}
			`}</style>
		</Main>
	)
}
