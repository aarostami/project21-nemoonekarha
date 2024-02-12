import { Container, Box } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

function Nav() {
    /* var [anchorel, setAnchorel] = useState(null);
    // var open = Boolean(anchorel);
    function handleClick(e) {
        setAnchorel(e.currentTarget)
    }
    function handleClose() {
        setAnchorel(null)
    } */

    var [expand, setExpand] = useState(null);
    function menuHandle() {
        (expand == 'flex') ? setExpand('none') : setExpand('flex')
    }

    return (
        <header>
            {/* <Container sx={{fontFamily: 'byekan'}}> */}
            <Container>
                <Grid container py='1rem'>
                    <Grid xs={12} sm={12} md={6}>
                        <Button role='button' onClick={menuHandle} id='menuButton' size='small'>Menu</Button>
                        <ul style={{ listStyleType: 'none', display: expand }} id='menu'>
                            <li><a href=''>خانه</a></li>
                            <li><a href=''>مهارت ها</a></li>
                            <li><a href=''>نمونه کارها</a></li>
                            <li><a href=''>درباره من</a></li>
                            <li><a href=''>تماس با من</a></li>
                        </ul>
                        {/* <Button id='menuButton'
                            aria-controls={open ? 'menuButton' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >Menu</Button>
                        <Menu style={{ listStyleType: 'none' }} id='menu'
                            anchorel={anchorel}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ 'aria-labelledby': 'menuBotton' }}
                        >
                            <MenuItem onClick={handleClose}><a href=''>خانه</a></MenuItem>
                            <MenuItem onClick={handleClose}><a href=''>مهارت ها</a></MenuItem>
                            <MenuItem><a href=''>نمونه کارها</a></MenuItem>
                            <li><a href=''>درباره من</a></li>
                            <li><a href=''>تماس با من</a></li>
                        </Menu> */}
                    </Grid>
                    <Grid xs={12} sm={12} md={6} display='flex' justifyContent='flex-end'>
                        <Button variant='text' size='large' sx={{ fontFamily: 'byekan', color: 'white', backgroundImage: 'linear-gradient(to right, #183cdd, #4baae1)', padding: '8px 25px', marginTop: '5px' }}>در خواست همکاری</Button>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
}

export default Nav;