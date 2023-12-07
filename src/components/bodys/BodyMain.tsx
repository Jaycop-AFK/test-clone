import React from 'react'
import Container from '@mui/material/Container'
import Advert from './Advert'
import Menu from './Menu'
import Contents from './Contents'

type Props = {}

const BodyMian = (props: Props) => {
  return (
    <Container >
        <Advert />
        <Menu />
        <Contents />
    </Container>
  )
}

export default BodyMian