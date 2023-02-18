import styled from "styled-components";
import { motion } from "framer-motion";
import FeaturedInfo from "../components/featuredInfo/FeaturedInfo";
import Chart from "../components/chart/Chart";
import { chartData } from "../tempData";
import WidgetLg from "../components/widget/WidgetLg";
import WidgetSm from "../components/widget/WidgetSm";
const Container = styled(motion.div)`
    flex:5;
    margin-bottom:50px;
`
const Widget = styled.div`
    display:flex;
    max-height:60vh;
`

export default function Home(){
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
            <FeaturedInfo/>
            <Chart
                title="User Analytics"
                data = {chartData}
                grid={true}
                xDataKey = "name"
                lineDataKey = "Active User"
            />
            <Widget>
                <WidgetSm/>
                <WidgetLg title="Latest Transactions" limit={10}/>
            </Widget>
        </Container>
    )
}