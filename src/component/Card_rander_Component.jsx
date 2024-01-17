import { Grid } from '@mui/material'
import React from 'react'
import { Second_Component } from './Second_Component'


const card_rander =  [
    {
    img1:"https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif",


    img2:"https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",


    img3:"https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif",


    img4:"https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif",
    },
    {
        img1:"https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif",
        
        img2:"https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif",
        
        img3:"https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",
   
        img4:"https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif",
        },
        {
            img1:"https://f.nooncdn.com/mpcms/EN0001/assets/26b5ab14-2596-473a-b1e6-411903ebcb44.png?format=avif",
        
        
            img2:"https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif",
        
        
            img3:"https://f.nooncdn.com/mpcms/EN0001/assets/1b352827-1fc9-40cd-8d51-4f0b28b8f389.png?format=avif",
        
        
            img4:"https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif",
            }
]

const Card_rander_Component = () => {
  return (
    <div>
      <Grid container>

        {
          card_rander.map((obj,index)=>{
            
            return(
                <Grid  key={index} item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Second_Component
                    img1={obj.img1}
                    img2={obj.img2}
                    img3={obj.img3}
                    img4={obj.img4}

                    
                    />

                </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}

export  {Card_rander_Component}
