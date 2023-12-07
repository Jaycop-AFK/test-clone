import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import '../styles/slide.css'
import  Button  from '@mui/material/Button'

type Props = {}



  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '850px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const slideImages = [
    {
      url:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/3-1.jpg',
      
    },
    {
      url:
        'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/1-1-1980x891.jpg',
      
    },
    {
      url:'https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/uploads/2021/10/2-1-1980x891.jpg'
  
    },
  ];

const SlideShow = (props: Props) => {
  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
        <div className='seemore'>
            <div  style={{  flexDirection: 'row', alignItems: 'center' }}>
            <h1 style={{color: 'green'}}>Berita Muslim Life</h1>
            <p>สาระดีดี เพื่อตอบโจทย์วิถีมุสลิมเมือง</p>
            </div>
            <div  style={{  flexDirection: 'row', alignItems: 'center' }}>
            <Button style={{borderRadius: 25}} variant="contained">SEE MORE MAGAZINE</Button>
            </div>
        </div>
      </div>
  )
}

export default SlideShow