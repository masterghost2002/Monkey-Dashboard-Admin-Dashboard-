import styled from "styled-components";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
const Container = styled.div`
    height:90vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const SubContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Title = styled.h2`
    color: #d32f2f;
`
const WarningDetail = styled.p`
    padding:20px;
    font-size:18px;
    font-weight:500;
    text-align:center;
    color:#808080;
`
export default function DesktopModeWarning() {
  return (
    <Container>
        <SubContainer>
            <PriorityHighIcon sx={{fontSize:'100px', color:'#d32f2f'}}/>
            <Title>Warning</Title>
        </SubContainer>
        <WarningDetail>
            Monkey-Dashboard is optmized only for Desktop.To use the application please switch to Desktop
        </WarningDetail>
    </Container>
  )
}
