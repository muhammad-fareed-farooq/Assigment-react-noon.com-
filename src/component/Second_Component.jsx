import { Stack, Typography } from '@mui/material'
import React from 'react'

const Second_Component = (props) => {
  return (
      <>
      <Stack marginBlockStart="15px" flexDirection="row">
      <Typography marginInline="8px" >
            <img style={{width:"180px"}} src={props.img1} />
      </Typography>
      <Typography marginInline="8px" flexDirection="row">
            <img style={{width:"180px"}} src={props.img2} />
      </Typography>
      </Stack>
      <Stack marginBlockStart="20px" flexDirection="row">
      <Typography marginInline="8px" >
            <img style={{width:"180px"}} src={props.img3} />
      </Typography>
      <Typography marginInline="8px" flexDirection="row">
            <img style={{width:"180px"}} src={props.img4} />
      </Typography>
      </Stack>
      
      </>
    
  )
}

export  {Second_Component}
