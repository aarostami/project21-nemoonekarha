import { Container, Box, bgcolor, width } from '@mui/system'
import Grid from '@mui/system/Unstable_Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
// import Carousel from 'react-spring-3d-carousel'
import { v4 as uuidv4 } from 'uuid'
import Masonry from '@mui/lab/Masonry'
/*  import img1 from 'C://Users/home/Sync/نمونه کارها/Screen1-2020-8.jpg'
    import img2 from 'C://Users/home/Sync/نمونه کارها/Screen2-complete-2020-8'
    import img3 from 'C://Users/home/Sync/نمونه کارها/Screen3-complete-2021-11'
    import img4 from 'C://Users/home/Sync/نمونه کارها/Screen4-3-compelete-2021-3'
    import img5 from 'C://Users/home/Sync/نمونه کارها/Screen6-resume-shakhsi-2022-2'
    import img6 from 'C://Users/home/Sync/نمونه کارها/Screen8-English Landing Page UI Design with Interactions-2022-4'
    import img7 from 'C://Users/home/Sync/نمونه کارها/Screen9-2022-8'
    import img8 from 'C://Users/home/Sync/نمونه کارها/Screen10-resume-2022-9'
    import img9 from 'C://Users/home/Sync/نمونه کارها/Screen11-sherkati-2022-9'
    import img10 from 'C://Users/home/Sync/نمونه کارها/Screen12-webbee.maccarianagency.com-2023-8-25' */
import img1 from '../pics/Screen1-2020-8.jpg'
import img2 from '../pics/Screen2-complete-2020-8.jpg'
import img3 from '../pics/Screen3-complete-2021-11.jpg'
import img4 from '../pics/Screen4-3-compelete-2021-3.jpg'
import img5 from '../pics/Screen6-resume-shakhsi-2022-2.png'
import img6 from '../pics/Screen8-English Landing Page UI Design with Interactions-2022-4.jpg'
import img7 from '../pics/Screen9-2022-8.png'
import img8 from '../pics/Screen10-resume-2022-9.png'
import img9 from '../pics/Screen11-sherkati-2022-9.png'
import img10 from '../pics/Screen12-webbee.maccarianagency.com-2023-8-25.png'
import { Carousel } from 'react-responsive-3d-carousel'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import { useState } from 'react'
import telegram from '../pics/social/Telegram.png'
import whatsapp from '../pics/social/whatsapp.png'
import linedin from '../pics/social/LinkedIn.png'
import gmail from '../pics/social/gmail.png'
import Stack from '@mui/material/Stack'


function Body() {
    /* var slides = [
        {
            key: uuidv4(),
            content: <p>aaaajjjjjj</p>
        },
        {
            key: uuidv4(),
            content: <p>aa555555aa</p>
        },
        {
            key: uuidv4(),
            content: <p>iiiiiiiaaaa</p>
        },
    ] */

    var itemData = [
        /* {
            img: img1,
            title: 'title'
        },
        {
            img: img1,
            title: 'title'
        },
        {
            img: img1,
            title: 'title'
        }, */
    ]

    /* var carouseldata = [
        './Screen1-2020-8.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen2-complete-2020-8.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen3-complete-2021-11.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen4-3-compelete-2021-3.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen6-resume-shakhsi-2022-2.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen8-English Landing Page UI Design with Interactions-2022-4.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen9-2022-8.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen10-resume-2022-9.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen11-sherkati-2022-9.jpg',
        'C://Users/home/Sync/نمونه کارها/Screen12-webbee.maccarianagency.com-2023-8-25.jpg'
    ] */
    var carouseldata = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
    ]

    var [open, setOpen] = useState(false);
    var [imgurl, setImgurl] = useState(null);

    return (
        <main style={{ paddingTop: '2rem' }}>
            {/* <Container maxWidth='lg' sx={{fontFamily: 'byekan'}}> */}
            <Container maxWidth='lg'>
                <section>
                    <Grid container bgcolor='rgb(238, 238, 238, 0.2)' borderRadius={3} p='1rem' className='intro'>
                        <Grid md={3}>
                            <Box>
                                {/* <img src="" /> */}
                                <Typography variant='h4' fontFamily='byekan'>علیرضا رستمی</Typography>
                                <Typography variant='body1' fontFamily='byekan' style={{ color: '#777', marginTop: '0.5rem' }}>برنامه نویس سایت</Typography>
                            </Box>
                        </Grid>
                        <Grid md={9} sx={{ position: 'relative' }}>
                            <Typography variant='body1' fontFamily='byekan'>سلام امیدوارم بتونیم کارهای خوبی رو با هم انجام بدیم، کار برنامه نویسی UI و Front-end داشتید در خدمت هستم.</Typography>
                            <div className='anim'></div>
                        </Grid>
                    </Grid>
                </section>
                <Divider variant='middle' component='section' style={{ margin: '2rem 0' }} />
                <section className='skils'>
                    <h3>مهارت ها</h3>
                    {/*<Grid container py={2} rowSpacing={4}>
                         <Grid xs={12} sm={6} md={4} lg={3}>
                            <Box className='skilsBox' display='flex' alignItems='center' justifyContent={'space-between'}>
                                <span>HTML</span>
                                <div className='boxDiv'>
                                    <span style={{ display: 'block', width: '40%', height: '10px', backgroundColor: '#3a76e6', borderRadius: '8px' }}></span>
                                </div>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={3}>
                            <Box className='skilsBox' display='flex' alignItems='center' justifyContent={'space-between'}>
                                <span>CSS</span>
                                <div className='boxDiv'>
                                    <span style={{ display: 'block', width: '40%', height: '10px', backgroundColor: '#3a76e6', borderRadius: '8px' }}></span>
                                </div>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={3}>
                            <Box className='skilsBox' display='flex' alignItems='center' justifyContent='space-between'>
                                <span>JavaScript</span>
                                <div className='boxDiv'>
                                    <span style={{ display: 'block', width: '40%', height: '10px', backgroundColor: '#3a76e6', borderRadius: '8px' }}></span>
                                </div>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={3}>
                            <Box className='skilsBox' display='flex' alignItems='center' justifyContent={'space-between'}>
                                <span>Jquery</span>
                                <div className='boxDiv'>
                                    <span style={{ display: 'block', width: '40%', height: '10px', backgroundColor: '#3a76e6', borderRadius: '8px' }}></span>
                                </div>
                            </Box>
                        </Grid> 
                    </Grid>*/}
                    <div style={{ paddingRight: '2rem' }} className="skilsTexts">
                        <Typography variant='body1' fontFamily='byekan'>مسلط به HTML</Typography>
                        <Typography variant='body1' fontFamily='byekan'>مسلط به CSS</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی کامل به فریم ورک Bootstrap و متوسط به Sass</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی به Material ui</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی متوسط به JavaScript</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی متوسط به Jquery</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی متوسط به Reactjs و کمی به Redux</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی به Restful API</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی با Nodejs</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی به دستورات SQL</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی به Git</Typography>
                        <Typography variant='body1' fontFamily='byekan'>آشنایی متوسط به Figma و خیلی کم به فتوشاپ</Typography>
                        <Typography variant='body1' fontFamily='byekan'>زبان انگلیسی متوسط</Typography>
                        <Typography variant='body1' fontFamily='byekan'>علاقه مند به یادگیری</Typography>
                    </div>
                </section>
                <Divider variant='middle' component='section' style={{ margin: '2rem 0' }} />
                <section className='portfolio'>
                    <h3>نمونه کارها</h3>
                    <Grid container>
                        {/* <Carousel slides={slides} width='200px' height='200px' offset={2} /> */}
                        {/* <Masonry columns={3} spacing={5}>
                            {itemData.map((item, index) => (
                                <div key={index}>
                                    <img
                                        src={`${item.img}`} style={{display: 'block'}} />
                                </div>
                            ))}
                        </Masonry> */}
                        {/* <div container className='images'>
                            <div className='imagescol'>
                                <img src={img1} />
                            </div>
                            <div className='imagescol'>
                                <img src={img1} />
                            </div>
                            <div className='imagescol'>
                                <img src={img1} />
                                </div>
                            </div> */}
                        {/* {console.log(carouseldata[0])} */}
                        <Carousel interval='5000' arrowsWidth='50px' arrowsHeight='50px' width='250px' height='480px' showStatus={false}>
                            {carouseldata.map((img, index) => <img src={img} key={index} onClick={() => { setImgurl(img); setOpen(true) }} style={{ right: '10px !important' }} alt='portfol' />)}
                            {/* <img src={carouseldata} onClick={() => setImgurl(img1)} /> */}
                            {/* <img src={img1} />
                            <img src={img1} /> */}
                        </Carousel>
                        {open && (<Lightbox mainSrc={imgurl} onCloseRequest={() => setOpen(false)} />)}
                        {/* <Lightbox mainSrc={img1} onCloseRequest={() => setOpen(true)} />
                        <Lightbox mainSrc={img1} onCloseRequest={() => setOpen(true)} />
                        <Lightbox mainSrc={img1} onCloseRequest={() => setOpen(true)} /> */}
                    </Grid>
                </section>
                <Divider variant='middle' component='section' style={{ margin: '2rem 0' }} />
                <section className='contactme' style={{ paddingBottom: '1rem' }}>
                    <Typography variant='h5' fontWeight='bold' fontFamily='byekan'>تماس با من سلام</Typography>
                    <Grid container>
                        <Box>
                            <Typography variant='body' fontFamily='byekan'>شماره تماس: 09193976582</Typography>
                            <Stack direction='row' spacing={1} className='stack'>
                                <a href="mailto:alireza.ro76@gmail.com">
                                    <img src={gmail} />
                                </a>
                                <a href="https://telegram.me/Allirezaro">
                                    <img src={telegram} />
                                </a>
                                <a href="https://web.whatsapp.com/send/?phone=989193976582">
                                    <img src={whatsapp} />
                                </a>
                                <a href='https://www.linkedin.com/in/alireza-ro-874a16b8/'>
                                    <img src={linedin} />
                                </a>
                            </Stack>
                        </Box>
                    </Grid>
                </section>
            </Container>
            {/* <Divider variant='fullWidth' component='section' style={{ margin: '1rem 0' }} /> */}
            <div className='wrapper' style={{ margin: '1rem 0' }}></div>
            <footer style={{ paddingBottom: '1rem' }}>
                <Typography variant='body1' align='center' fontWeight='bold' fontFamily='byekan'>ساخته شده توسط Alireza</Typography>
            </footer>
        </main>
    );
}

export default Body;