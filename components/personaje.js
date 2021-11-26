import { Dialog, DialogContent, IconButton, DialogContentText, DialogTitle, DialogActions, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function Personaje(props) {
	const onClose = function(){
		props.onClosePersonaje();
	};

	return (
		<div>
			<Dialog
				open={props.open}
				onClose={onClose}
				scroll={'paper'}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogTitle id="alert-dialog-title">
					{"Use Google's location service?"}
				</DialogTitle>

				<DialogContent dividers>
					<DialogContentText id="alert-dialog-description">
						{props.personaje.name} -
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</DialogContentText>
				</DialogContent>

				<DialogActions>
					<Button onClick={onClose}>
						Cerrar
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}