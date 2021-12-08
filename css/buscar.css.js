import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export default makeStyles({
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