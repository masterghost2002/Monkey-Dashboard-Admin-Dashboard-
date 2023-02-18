import styled from "styled-components";
import CountUp from 'react-countup';
const Item = styled.div`
  flex:1;
  margin:0px 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition:all linear .5s;
  &:hover{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;
  }
`
const Title = styled.span`
    font-size:${props => props.size};
    font-family: 'Poppins', sans-serif;
    font-weight: ${props => props.weight};
    color: ${props => props.color}
`
const MoneyContainer = styled.div`
    display:flex;
    align-items:center;
    margin: 10px 0px;
`
const Money = styled.span`
  font-size:30px;
  font-weight: 600;
`
const MoneyRate = styled.span`
    display:flex;
    align-items:center;
    margin-left: 20px;
    font-weight:500;
`

export default function FeaturedItem(props) {
    return (
        <Item>
            <Title size="20px" weight="500">{props.title}</Title>
            <MoneyContainer>
                <CountUp
                    start={Math.random()*props.moneyAmount}
                    end={props.moneyAmount}
                    duration={1}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix={props.currencySign}
                >
                    {({ countUpRef}) => (
                        <Money ref={countUpRef}/>
                    )}
                </CountUp>
                <MoneyRate>{props.moneyRate}{props.arrowType}</MoneyRate>
            </MoneyContainer>
            <Title size="18px" color="gray" weight="400">Compared to last month</Title>
        </Item>
    )
};


