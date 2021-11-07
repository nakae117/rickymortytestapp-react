import { Card } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function FichaPersonaje() {
	const theme = useTheme();

	return (
		<>
			<Card sx={{ display: 'flex' }}>
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image="/cover.jpg"
					alt="Live from space album cover"
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography variant="subtitle2" color="text.secondary" component="div">
							Mac Miller
						</Typography>

						<Typography component="div" variant="h6">
							Live From Space
						</Typography>
					</CardContent>

					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography variant="subtitle2" color="text.secondary" component="div">
							Mac Miller
						</Typography>

						<Typography component="div" variant="h6">
							Live From Space
						</Typography>
					</CardContent>
				</Box>
			</Card>

			<style jsx>{`
				.text--title {
					font - size: 14px;
				}

				.text--subtitle {
					font - size: 11px;
				}
			`}
			</style>
		</>
	)
}