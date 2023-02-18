import styled from "styled-components";
import ProductTop from "../components/Product/ProductTop";
import ProductBottom from "../components/Product/ProductBottom";
import { Button } from "../components/User/CardComponents";
import { motion } from "framer-motion";
const Container = styled(motion.div)`
    flex:5;
    padding:20px;
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
export default function Product() {
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
            <Title>Product</Title>
            <Button bg='#009fff' hbg='#007fff'>Add Product</Button>
        </Header>
        <ProductTop/>
        <ProductBottom/>
    </Container>
  )
}
