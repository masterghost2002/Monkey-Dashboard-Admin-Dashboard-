import styled from "styled-components";
import { latestTransactions } from "../../tempData";
const Container = styled.div`
    flex:5;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 0px 20px;
    margin-left: 20px;
    margin-right:20px;
    border-radius:12px;
    overflow:auto;
    position:relative;
    &:hover{
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`
const Title = styled.h2`
  padding:0px;
  font-weight: 600;
  margin-bottom:20px;
`
const Table = styled.table`
  width:100%;
`
const Row = styled.tr`
  background-color:white;
  width:100%;
  display: flex;
  justify-content: space-between;
  padding:10px;
  border-bottom:1px solid #DCDCDC;
  position: ${props => props.position ? props.position : 'static'};
  top:0px;
  z-index:${props => props.position !== 'static' ? '100' : '0'}
`
const TableHeading = styled.th`
  flex:${props => props.flex ? props.flex : 1};
  text-align:start;
  font-size:20px;
`
const TableData = styled.td`
  flex:${props => props.flex ? props.flex : 1};
  display: flex;
  align-items: center;
  font-size: ${props => props.fs};
  font-weight: 500;
  color: ${props => props.color ? props.color : 'black'}
`
const AvatarImage = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
`
const Name = styled.span`
    font-size: 20px;
    margin-left: 10px;
    font-weight: 500;
`
const Button = styled.button`
  background-color: ${props => props.bg};
  color: ${props => props.color};
  font-size:  ${props => props.fs};
  border-radius: 12px;
  padding: 5px 7px;
  border:none;
  cursor: pointer;
  font-weight:500;
`
export default function WidgetLg(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Table>
        <thead style={{position:'sticky', top:'0px'}}>
        <Row position="sticky">
          <TableHeading flex="2">Customer</TableHeading>
          <TableHeading>Date</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Status</TableHeading>
        </Row>
        </thead>
        <tbody>
        {latestTransactions.map((item, index) =>
          (props.limit === undefined || index<props.limit) && 
          <Row key={index}>
            <TableData flex="2">
              <AvatarImage src={item.avatarImg} />
              <Name>{item.name}</Name>
            </TableData>
            <TableData color="#696969">
              {item.date}
            </TableData>
            <TableData color="#696969">{(item.price).toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR'
            })}</TableData>
            <TableData>
              <Button bg={item.status === "Pending"?"#ffb74d":item.status === "Declined"?"#e57373":"#81c784"}>{item.status}</Button>
            </TableData>
          </Row>
        )}

        </tbody>
        
      </Table>
    </Container>
  )
}
