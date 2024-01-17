import { Grid } from '@mui/material'
import React from 'react'
import Third_Card_Component from './Third_Card_Component'

const pro_Arr = [
    {
    img_url:"https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1669724765/N40633047A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
  {
    img_url:"https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},


{
    img_url:"https://f.nooncdn.com/p/pzsku/ZEA919E23DB36258950F6Z/45/_/1695354686/97759e9c-e5cf-4351-9f56-7b93b69b7cbf.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/pzsku/Z30EE653CFA647496033CZ/45/_/1695354428/12f5fbfb-359c-4908-8b70-898c6f30998e.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
  {
    img_url:"https://f.nooncdn.com/p/v1649059451/N51346464A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1616572008/N15039686A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1666972025/N48083147A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/pzsku/Z549D7ECE6FFC020B23BEZ/45/_/1663818611/affe8a93-77ee-4fac-828c-cc254d032247.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},



{
    img_url:"https://f.nooncdn.com/products/tr:n-t_240/v1635071675/N42934460A_7.jpg",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/products/tr:n-t_240/v1646914144/N46569464A_1.jpg",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
  {
    img_url:"https://f.nooncdn.com/products/tr:n-t_240/v1645647238/N26505142A_1.jpg",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/products/tr:n-t_240/v1652078576/N43431945A_1.jpg",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/products/tr:n-t_240/v1669102687/N28431691A_16.jpg",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/products/tr:n-t_240/pnsku/N70020112V/45/_/1698760325/746820c5-e64f-4c07-859b-cf86853cd6c6.jpg",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},



{
    img_url:"https://f.nooncdn.com/p/pnsku/N53398633A/45/_/1704184673/7060c16d-bcd3-4275-9431-3fef8b1a5a01.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1690369167/N53422649A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
  {
    img_url:"https://f.nooncdn.com/p/v1659335490/N53338272A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/pnsku/N53416269A/45/_/1699424523/e4637035-8cd6-4d56-a859-b5e1017d52ed.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1665392506/N53356366A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1671548521/N19200514A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},



{
    img_url:"https://f.nooncdn.com/p/v1615231293/N20985375A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/pnsku/N18938413A/45/_/1704712174/56ba35b5-a00f-47ff-800e-a129c903210d.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
  {
    img_url:"https://f.nooncdn.com/p/v1690474727/N53418074A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1615220190/N13164722A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/p/v1638273633/N41247590A_1.jpg?format=avif&width=240",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},
{
    img_url:"https://f.nooncdn.com/products/tr:n-t_240/pzsku/Z4EB55AB9D8F6A4E5DE0CZ/45/_/1699291228/66684342-f927-44d6-9a83-98fe3ff1b032.jpg",
    price:"Apple iPhone 14 Pro Max256GB Deep Purple 5G…AED 4,8495,099Only 3 left in stock Price : $15000"
},

]
const Main_Card_Rander_Component = (props) => {
   

  return (
    <div>
      
      <Grid container>
   {
    pro_Arr.map((obj,index)=>{
   return(
    <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={2}>
        <Third_Card_Component
       img_url = {obj.img_url}
       price = {obj.price}
        />

    </Grid>
   )
    })
   }
      </Grid>
    </div>
  )
}

export default Main_Card_Rander_Component
