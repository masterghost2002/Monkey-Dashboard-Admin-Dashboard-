import styled from "styled-components";
import NotificationsNoneIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge } from "@mui/material";
const AvatarImg = "https://rakeshdhariwal-portfolio.netlify.app/static/media/profile_avatar_two.4a344055b3780a29c0fb.png";
const Container = styled.div`
    width: 100%;
    height:50px;
    position:sticky;
    top:0px;
    background-color:white;
    z-index:999;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;
  align-items: center;
`
const TopLeft = styled.div`

`
const Logo = styled.span`
  font-weight: 600;
  font-size:20px;
`
const TopRight = styled.div`
  display:flex;
  align-items:center;
`
const IconContainer = styled.div`
  margin-right:20px;
  cursor: pointer;
`
const Avatar = styled.img`
  height: 30px;
  widht: 30px;
  border-radius: 50%;
  cursor:pointer;
`
export default function Topbar() {
  return (
    <Container>
      <Wrapper>
        <TopLeft>
          <Logo><span style={{ color: "#007FFF" }}>MONKEY</span>-Dashboard</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneIcon color="action" />
            </Badge>
          </IconContainer>
          <IconContainer>
            <SettingsIcon color="action"/>
          </IconContainer>
          <Avatar src = {AvatarImg} />
        </TopRight>
      </Wrapper>
    </Container>
  )
}
