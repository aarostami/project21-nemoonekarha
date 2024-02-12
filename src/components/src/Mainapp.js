import { Container, Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles'
import styled, { ThemeProvider } from 'styled-components'
import CssBaseline from '@mui/material/CssBaseline'

import Nav from './components/Nav'
import Body from './components/Body'
import './components/header.css'
import './components/body.css'
// import byekan from './font/b_Yekan.ttf'

function Mainapp() {

	/* var themepal = createTheme({
		palette: {
			primary: {
				main: '#222'
			},
		}
	})

	var Mycom = styled('div')((props) => ({
		backgroundColor: props.theme.palette.primary.main
	})) */

	//kar nakard. yani coponent typography ro cusomize va in font family nakard
	var theme = createTheme({
		typography: {
			fontFamily: 'byekan'
		},
		/* components: {
			MuiCssBaseline: {
				styleOverrides: `
				@font-face {
					font-family: 'byekan';
					src: url(${byekan})
				}
			`}
		} */
	})

	return (
		<>
			{/* <ThemeProvider theme={theme}> */}
				{/* <CssBaseline /> */}
				<Nav />
				<Body />
				<ul style={{ listStyleType: 'none', margin: '0', padding: '0' }} className='circles'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			{/* </ThemeProvider> */}
		</>
	)
}

export default Mainapp;