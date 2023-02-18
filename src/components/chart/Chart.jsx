import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Container = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    padding: 0px;
    font-weight:600;
    margin-bottom: 20px;

`
export default function Chart(props) {
    
  return (
    <Container>
        <Title>{props.title}</Title>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          data={props.data}
        >
          <XAxis dataKey={props.xDataKey} stroke="#007FFF"/>
          <YAxis/>
          <Line type="monotone" dataKey={props.lineDataKey} stroke="#007FFF" />
          <Tooltip/>
          {props.grid && <CartesianGrid/>}
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}
