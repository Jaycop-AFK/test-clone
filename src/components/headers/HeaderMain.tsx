import React from 'react'
import Banner from './Banner'
import { Container } from '@mui/material'
import Line from './Line'
import Nav from './Navbar'
import SlideShow from './SlideShow'

type Props = {}

const HeaderMain = (props: Props) => {
  return (
    <div className='header'>
        <Container maxWidth="sm">

            <Banner />
            
        </Container>
        <Line />
        <Nav />
        <SlideShow />


    </div>
  )
}

export default HeaderMain