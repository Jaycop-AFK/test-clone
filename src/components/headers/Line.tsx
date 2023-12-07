import React from 'react';
import { MyHeader } from '../../interfaces/interface';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
import { FaFacebook, FaTwitter, FaLine, FaInstagram, FaYoutube } from 'react-icons/fa';

type Props = {}

const myHeader: MyHeader = {
    about: '>เกี่ยวกับเรา',
    contact: '>ติดต่อเรา',
    tel: '0201888885'
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'green',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display: 'flex',
    color: 'white',
    justifyContent: 'space-around', 
    alignItems: 'center', 
    width: '100%',
    flexDirection:'row',
}));

const Line = () => {
    return (
        <div>
            <Box sx={{ width: 'auto',  }}>
                <Stack spacing={1}>
                    <Item>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p style={{ margin: '5px' }}>{myHeader.about}</p>
                            <p style={{ margin: '5px' }}>{myHeader.contact}</p>
                            <p style={{ margin: '5px' }}>{myHeader.tel}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', marginRight: '10px' }}> 
                            
                            <FaFacebook style={{ marginRight: '5px' }} />
                            <FaTwitter style={{ marginRight: '5px' }} />
                            <FaInstagram style={{ marginRight: '5px' }} />
                            <FaYoutube style={{ marginRight: '5px' }} />
                            <FaLine style={{ marginRight: '5px' }} />
                            <p style={{ marginRight: '5px' }}>เปลี่ยนภาษา | Thai Eng</p>
                        </div>
                    </Item>
                    
                </Stack>
            </Box>
        </div>
    )
}

export default Line;
