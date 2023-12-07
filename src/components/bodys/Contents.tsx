import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box"
import Container from '@mui/material/Container'

type Props = {}

const Contents = (props: Props) => {
  return (
    <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}>
      <div>
        <h2>News</h2>
        <p>รวมข่าวสารมุสลิมที่น่าสนใจ</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button style={{ borderRadius: 25 , backgroundColor: 'green' }} variant="contained">Contained</Button>
      </div> 
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '35vh' }}>
            <div style={{flex: 'start', textAlign:'start'}}>
           
            <img style={{width: '100%'}} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_768/https://beritamuslimmag.com/wp-content/uploads/2023/10/%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%A5%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B5-768x512.jpg" alt="" />
             <h3> ศูนย์การเรียนรู้ กฟผ. คว้า 4 รางวัลกินรี การันตีแหล่งท่องเที่ยวเพื่อการเรียนรู้ มุ่งสู่คาร์บอนต่ำอย่างยั่งยืน</h3>
           
            </div>
        </Box>
        <Box sx={{ bgcolor: '#cfe8fc', height: '35vh' }}>
            
        </Box>
      </Container>

        




    </div>
  );
};

export default Contents;
