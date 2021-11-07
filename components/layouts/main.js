import { Container } from '@mui/material';
import Head from 'next/head'

export default function Main({ children }) {
	return (
		<>
			<main>
				<Head>
					<title>Rick & Morty React App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				
				{/* <Container> */}
					{children}
				{/* </Container> */}
			</main>
		</>
	)
}