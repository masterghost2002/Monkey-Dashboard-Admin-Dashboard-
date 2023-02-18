import styled from "styled-components";
import { CardHeader,AvatarImage, InfoContainer, Detail, CardBody } from "../User/CardComponents";
import Chart from '../chart/Chart';
import { productChartData } from "../../tempData";
const Container = styled.div`
  display:flex;
`
const Left = styled.div`
  flex:3;
  margin:10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius:6px;
`
const Right = styled.div`
  margin:10px;
  padding:20px;
  flex:2;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius:6px;
`
export default function ProductTop() {
  return (
    <Container>
      <Left>
        <Chart
          title="Sale Chart"
          data={productChartData}
          grid={true}
          xDataKey="name"
          lineDataKey="Sales"
        />
      </Left>
      <Right>
        <CardHeader bp={true}>
          <AvatarImage
            src='https://images.acer.com/is/image/acer/vt0_vt240y_wp_01?$Line-Overview-M1-M2-S$'
            width='40px'
            height='40px'
            br='50%'
          />
          <InfoContainer ml='20px' mb='10px'>
            <Detail fw='600'>Acer 24inc 2K Monitor</Detail>
            <Detail color='#808080' fw='500'>Electronics</Detail>
          </InfoContainer>
        </CardHeader>
        <CardBody>
                <Detail fs='18px' color='#A9A9A9' fw='500' mt='20px' mb='20px'>Product Detail</Detail>
                <InfoContainer mb='10px'>
                    <Detail fw='500'><span style={{fontWeight:'600', marginRight:'10px'}}>ID:</span> 1</Detail>
                </InfoContainer>
                <InfoContainer mb='10px'>
                    <Detail fw='500'><span style={{fontWeight:'600', marginRight:'10px'}}>Sales:</span> 43,431</Detail>
                </InfoContainer>
                <InfoContainer mb='10px'>
                    <Detail fw='500'><span style={{fontWeight:'600', marginRight:'10px'}}>Active:</span> Yes</Detail>
                </InfoContainer>
                <InfoContainer mb='10px'>
                    <Detail fw='500'><span style={{fontWeight:'600', marginRight:'10px'}}>InStock:</span> Yes</Detail>
                </InfoContainer>
            </CardBody>
      </Right>
    </Container>
  )
}
