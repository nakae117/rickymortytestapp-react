import { makeStyles } from '@mui/styles'

export default makeStyles({
	fichaPersonaje: {
		cursor: 'pointer',
		'&:hover': {
			boxShadow: '0px 2px 1px -1px #02b1c8, 0px 0px 1px 0px #02b1c8, 0px 1px 3px 0px #02b1c8'
		}
	},
	cardContent: {
		padding: '5px 16px !important',
	},
	textTitle: {
		'font-size': '14px',
	},
	textSubtitle: {
		'font-size': '11px',
	}
});