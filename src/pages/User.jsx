import styled from "styled-components";
import UserLeftCard from "../components/User/UserLeftCard";
import UserRightCard from "../components/User/UserRightCard";
import { Link } from "react-router-dom";
import { Button } from "../components/User/CardComponents";
import { motion } from "framer-motion";
const Container = styled(motion.div)`
    flex:5;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
`
const Header = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const Title = styled.h2`
    padding: 0px;
    margin: 0px;
`

const UserContainer = styled.div`
    display:flex;
    margin-top:20px;
`
const StyledLink = styled(Link)`
    text-decoration:none;
`
export default function User() {
  return (
    <Container
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        }}
    >
        <Header>
            <Title>Edit User</Title>
            <StyledLink to='/user/newuser'>
                <Button bg='#29b6f6' hbg='#0288d1'>Create</Button>
            </StyledLink>
        </Header>
        <UserContainer>
                <UserLeftCard/>
                <UserRightCard/>
        </UserContainer>
    </Container>
  )
}
