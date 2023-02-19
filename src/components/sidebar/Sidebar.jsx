import styled from "styled-components";
import { Link } from "react-router-dom";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ReportIcon from '@mui/icons-material/Report';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
const SidebarContainer = styled.div`
    flex:1;
    max-height: 100vh;
    position:sticky;
    overflow:scroll;
    top:50px;
    // background-color:pink;
    // 50px is the height of navbar (topbar)
`
const SidebarWrapper = styled.div`
    font-size:15px;
    padding: 20px;
    margin-bottom:20px;
    color:#555;
`
const SidebarMenu = styled.div`
`
const Title = styled.h3`
    padding:0px;
    margin:0px;
    color:#181818;
`
const List = styled.ul`
    list-style:none;
    padding:0px;
`
const ListItem = styled.li`
    display:flex;
    align-items:center;
    padding:5px;
    font-weight: 500;
    cursor:pointer;
    transition: all ease-out 0.5s;
    &:hover{
        background-color: #DCDCDC;
        color:black;
        border-radius:8px;
    }
`
const StyledLink = styled(Link)`
    width:100%;
    text-decoration: none;
    color:${props=>props.isActive === 'isActive'?'#007fff':'inherit'};
    display:flex;
    align-items:center;


`
export default function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarWrapper>
                <SidebarMenu>
                    <Title>
                        Dashboard
                    </Title>
                    <List>
                        <ListItem>
                            <StyledLink  to="/">
                                <LineStyleIcon/>
                                Home
                            </StyledLink>
                        </ListItem>
                        <ListItem>
                            <TimelineIcon/>
                            Analytics
                        </ListItem>
                        <ListItem>
                            <TrendingUpIcon/>
                            Sales
                        </ListItem>
                    </List>
                </SidebarMenu>
                

                <SidebarMenu>
                    <Title>
                        Quick Menu
                    </Title>
                    <List>
                        <ListItem>
                            <StyledLink to="/users">
                            <Person2OutlinedIcon/>
                                Users
                            </StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink to='/products'>
                            <Inventory2OutlinedIcon/>
                            Products
                            </StyledLink>
                        </ListItem>
                        <ListItem >
                            <StyledLink to='/transactions'>
                            <CurrencyRupeeOutlinedIcon/>
                            Transactions
                            </StyledLink>
                        </ListItem>
                    </List>
                </SidebarMenu>

                <SidebarMenu>
                    <Title>
                        Action
                    </Title>
                    <List>
                        <ListItem>
                            <StyledLink to="/user/newuser">
                            <PersonAddAltOutlinedIcon/>
                               Add User
                            </StyledLink>
                        </ListItem>
                        <ListItem>
                            <StyledLink to='/product/newproduct'>
                            <Inventory2OutlinedIcon/>
                            Add Product
                            </StyledLink>
                        </ListItem>
                    </List>
                </SidebarMenu>
                <SidebarMenu>
                    <Title>
                        Notification
                    </Title>
                    <List>
                        <ListItem disabled={true}>
                            <MailOutlineOutlinedIcon/>
                            Mail
                        </ListItem>
                        <ListItem>
                            <DynamicFeedOutlinedIcon/>
                            Feedback
                        </ListItem>
                        <ListItem>
                            <ChatBubbleOutlineOutlinedIcon/>
                            Messages
                        </ListItem>
                    </List>
                    <SidebarMenu>
                    <Title>
                        Staff
                    </Title>
                    <List>
                        <ListItem>
                            <WorkOutlinedIcon/>
                            Manage
                        </ListItem>
                        <ListItem>
                            <TimelineIcon/>
                            Analytics
                        </ListItem>
                        <ListItem>
                            <ReportIcon color="error"/>
                            Report
                        </ListItem>
                    </List>
                </SidebarMenu>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
