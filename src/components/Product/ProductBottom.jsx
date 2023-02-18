import styled from "styled-components";
import { CardHeader, CardBody, Button,Title, Input,AvatarImage, Detail} from "../User/CardComponents";
import FileUploadIcon from '@mui/icons-material/FileUpload';
const Container = styled.div`
  padding:20px;
`
const SubContainer = styled.div`
    flex:1;
    display:flex;
    flex-direction: ${props => props.direction ? props.direction : 'column'};
    justify-content: ${props => props.js ? props.js : 'flex-start'};
    align-items: ${props => props.ai !== null && props.ai};
    // background-color:red;
`
export default function ProductBottom() {
  return (
    <Container>
      <CardHeader>
        <Title>
          Edit Product
        </Title>
      </CardHeader>
      <form >
        <CardBody direction='row'>
          <SubContainer direction='column'>
            <Detail fw='500' mt='20px'>Identification Number (Model Number)</Detail>
            <Input placeholder="pRMV2201" />
            <Detail mt='20px' fw='500' >Product Name</Detail>
            <Input placeholder="Acer 23.8 inch Full HD LED Backlit" />
            <Detail mt='20px' fw='500'>Details</Detail>
            <Input placeholder="ezel-Less Panel, Anti-Glare, Flat Monitor (RMV2201)" />
            <Detail mt='20px' fw='500'>Seller Contact</Detail>
            <Input placeholder="+1 123 456 7890" />
            <Detail mt='20px' fw='500'>Stock Quantity</Detail>
            <Input placeholder="123" />
            <Detail mt='20px' fw='500'>Price</Detail>
            <Input placeholder="RS 12,399" />
          </SubContainer>
          <SubContainer direction='column' ai='center' js='space-between'>
            <SubContainer direction='column'>
              <AvatarImage
                src='https://images.acer.com/is/image/acer/vt0_vt240y_wp_01?$Line-Overview-M1-M2-S$'
                width='150px'
                height='150px'
                br='6px'
              />
              <label htmlFor="file" style={{ marginTop: '10px', cursor: 'pointer' }} title={'Upload Image'}><FileUploadIcon /></label>
              <Input type="file" style={{ display: 'none' }} id="file" />
            </SubContainer>
            <Button w='100px' bg='#66bb6a' hbg='#388e3c' type="submit">Update</Button>
          </SubContainer>
        </CardBody>
      </form>
    </Container>
  )
}
