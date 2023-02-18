import styled from "styled-components";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { newUserData } from "../../tempData";
const Container = styled.div`
    flex:2;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-left: 20px;
    padding: 0px 20px;
    border-radius:12px;
    transition: all linear .5s;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`
const Title = styled.h2`
    padding:0px;
    font-weight: 600;
    margin-bottom:20px;
`
const List = styled.ul` 
    list-style:none;
    padding:0px;
    margin:0px;
`
const ListItem = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:1px solid #DCDCDC;
`
const AvatarImage = styled.img`
    flex:1;
    width:40px;
    height:40px;
    border-radius:50%;
`
const DetailContainer = styled.div`
    flex:4;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    font-weight:400;
    font-family: 'Poppins', sans-serif;
    margin-bottom:10px;
`
const DetailItem = styled.span`
    margin-left:10px;
    color:${props => props.color};
`
const Button = styled.button`
    flex:1;
    background-color: #DCDCDC;
    border:none;
    display:flex;
    align-items:center;
    margin-left:20px;
    cursor:pointer;
    border-radius:12px;
    padding:5px;
    transition:all ease-in 0.2 s;
    &:hover{
        background-color:#D3D3D3;
    }
`
export default function WidgetSm() {
    return (
        <Container>
            <Title>New Join Members</Title>
            <List>
                {newUserData.map((item, index) =>
                    <ListItem key={index}>
                            <AvatarImage src={item.avatarImg} />
                        <DetailContainer>
                            <DetailItem>{item.name}</DetailItem>
                            <DetailItem color="gray">{item.profession}</DetailItem>
                        </DetailContainer>
                        <Button>
                            <RemoveRedEyeOutlinedIcon sx={{ marginRight: '5px', fontSize:'20px' }} />
                            Show
                        </Button>
                    </ListItem>
                )}

            </List>
        </Container>
    )
}
