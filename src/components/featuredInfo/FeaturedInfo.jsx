import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpward } from "@mui/icons-material";
import { data } from '../../tempData';
const Container = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  margin-top:20px;
`


export default function FeaturedInfo() {
  return (
    <Container>
      {
        data.map(
          (item, index) =>
          <FeaturedItem 
            key = {index}
            title={item.title} 
            moneyAmount = {item.moneyAmount}
            currencySign = {item.currencySign}
            moneyRate = {item.moneyRate}
            arrowType = {item.arrowType === "up"?<ArrowUpward  sx={{ fontSize: "20px", color:"green" }}/>:<ArrowDownwardIcon sx={{ fontSize: "20px", color:'red' }}/>}
          />
          )
      }
    </Container>
  )
}
