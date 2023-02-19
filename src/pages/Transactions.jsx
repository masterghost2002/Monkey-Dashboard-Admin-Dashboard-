import styled from "styled-components";
import WidgetLg from "../components/widget/WidgetLg";
import { motion } from "framer-motion";
const Container = styled(motion.div)`
    flex:5;
    padding: 20px;
    position:relative;
`
export default function Transactions(){
    return(
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
            <WidgetLg  title="All Transactions"/>
        </Container>
    )
}