import Head from 'next/head'

export default function Main({ children }) {
	return (
		<>
			<main>
				<Head>
					<title>Rick & Morty React App</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				
				{children}
			</main>
		</>
	)
}