import { Card, CardHeader, AvatarImage, Detail, CardBody, Title, Input, Button } from "./CardComponents";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import styled from "styled-components";
const SubContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content: ${props => props.js ? props.js : 'flex-start'};
    align-items: ${props => props.ai !== null && props.ai};
    // background-color:red;
`
export default function UserRightCard() {
    return (
        <Card flex='4' ml='20px' >
            <CardHeader>
                <Title>
                    Edit
                </Title>
            </CardHeader>
            <form >
                <CardBody direction='row'>
                    <SubContainer direction='column'>
                        <Detail fw='500' mt='20px'>Username</Detail>
                        <Input placeholder="paulwalker111" />
                        <Detail mt='20px' fw='500' >Full Name</Detail>
                        <Input placeholder="Paul Walker" />
                        <Detail mt='20px' fw='500'>Email</Detail>
                        <Input placeholder="paulwalker111@mail.com" />
                        <Detail mt='20px' fw='500'>Phone</Detail>
                        <Input placeholder="+1 123 456 7890" />
                        <Detail mt='20px' fw='500'>Address</Detail>
                        <Input placeholder="KS Fort Riley, KS Burden, KS Buffalo, NY" />
                    </SubContainer>
                    <SubContainer direction='column' ai='center' js='space-between'>
                        <SubContainer direction='column'>
                            <AvatarImage
                                src='https://hips.hearstapps.com/hmg-prod/images/paul-walker-21044993-1-402.jpg'
                                width='150px'
                                height='150px'
                                br='6px'
                            />
                            <label htmlFor="file" style={{marginTop:'10px', cursor:'pointer'}} title={'Upload Image'}><FileUploadIcon/></label>
                            <Input type="file" style={{display:'none'}} id="file"/>
                        </SubContainer>
                        <Button w='100px' bg='#66bb6a' hbg='#388e3c' type="submit">Update</Button>
                    </SubContainer>
                </CardBody>
            </form>

        </Card>
    )
}
