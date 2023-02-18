import styled from "styled-components";
import WidgetLg from "../components/widget/WidgetLg";
const Container = styled.div`
    flex:5;
    padding: 20px;
    position:relative;
`
export default function Transactions(){
    return(
        <Container>
            <WidgetLg  title="All Transactions"/>
        </Container>
    )
}