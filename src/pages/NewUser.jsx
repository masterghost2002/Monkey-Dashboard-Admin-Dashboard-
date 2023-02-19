import styled from "styled-components";
import {Button} from '../components/User/CardComponents';
import { motion } from "framer-motion";
const Container = styled(motion.div)`
    flex:5;
    padding: 20px;
`
const Title = styled.h2`
    padding: 0px;
    margin: 0px;
`
const Form = styled.form`
    // background-color:red;
    display:flex;
    flex-wrap:wrap; 
    justify-content:space-between;
`
const InputGroup = styled.div`
    margin-top:20px;
    margin-right:20px;
    display:flex;
    flex-direction:column;
    width:500px;
`
const Label = styled.label`
    font-size:20px;
    margin-bottom:10px;
    font-weight:500;
    color:#303030;
`
const Input = styled.input`
    border:none;
    border-bottom: 2px solid #A9A9A9;
    height:20px;
    padding:10px 0px;
    font-size:20px;
    &:focus{
        outline:none;
        border-bottom: 2px solid #696969;
    }
`
const GenderContainer = styled.div`

`
const Select = styled.select`
    height:40px;

`
export default function NewUser() {
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
            <Title>Add User</Title>
            <Form>
                <InputGroup>
                    <Label>Full Name</Label>
                    <Input type="text" placeholder="Paul Walker" />
                </InputGroup>
                <InputGroup>
                    <Label>Username</Label>
                    <Input type="text" placeholder="paulwalker111" />
                </InputGroup>
                <InputGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="paulwalker111@mail.com" />
                </InputGroup>
                <InputGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="*********" />
                </InputGroup>
                <InputGroup>
                    <Label>Phone</Label>
                    <Input type="text" placeholder="+1 123 456 7890" />
                </InputGroup>
                <InputGroup>
                    <Label>Address</Label>
                    <Input type="text" placeholder="Delhi, India" />
                </InputGroup>
                <InputGroup>
                    <Label>Gender</Label>
                    <GenderContainer>
                        <Input type="radio" value="male" id="gender" name="gender" />
                        <label htmlFor="male">Male</label>
                        <Input type="radio" value="female" id="female" name="gender" />
                        <label htmlFor="male">Female</label>
                        <Input type="radio" value="other" id="gender" name="gender" />
                        <label htmlFor="other">Other</label>
                    </GenderContainer>
                </InputGroup>
                <InputGroup>
                    <Label>Active</Label>
                    <Select style={{width:'100px'}}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Select>
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="file" style={{cursor:'pointer'}}>Upload Profile Picture</Label>
                    <Input type="file" style={{border:'none'}} id="file"></Input>
                </InputGroup>
                <Button type="submit" mt='20px' w='100px'  bg='#009fff' hbg='#007fff'>Submit</Button>
            </Form>
        </Container>
    )
}
