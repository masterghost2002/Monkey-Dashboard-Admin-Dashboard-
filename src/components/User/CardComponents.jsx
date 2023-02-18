import styled from "styled-components";
export const Card = styled.div`
    flex:${props=>props.flex?props.flex:'1'};
    // background-color:pink;
    margin-left:${props=>props.ml};
    padding:20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius:6px;
    height:100%;
`
export const CardHeader = styled.div`
    display:flex;
    align-items:center;
    border-bottom: ${props=>props.bp === true && '2px solid #A9A9A9'};
`
export const AvatarImage = styled.img`
    width:${props=>props.width};
    height:${props=>props.height};
    border-radius:${props=>props.br};
`
export const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:${props=>props.ml};
    margin-top:${props=>props.mt};
    margin-bottom:${props=>props.mb};
    margin-right:${props=>props.mr};
`
export const Detail = styled.div`
    display:flex;
    align-items:center;
    color:${props=>props.color};
    font-size:${props=>props.fs};
    font-weight:${props=>props.fw};
    margin-left:${props=>props.ml};
    margin-top:${props=>props.mt};
    margin-bottom:${props=>props.mb};
    margin-right:${props=>props.mr};

`
export const CardBody = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:${props=>props.direction?props.direction:'column'}
`
export const Title = styled.h2`
    padding: 0px;
    margin: 0px;
`
export const Input = styled.input`
    border:none;
    border-bottom: 2px solid #A9A9A9;
    padding:3px;
    font-size:20px;
    &:focus{
        outline:none;
        border-bottom: 2px solid #696969;
    }
`
export const Button = styled.button`
    padding: 5px;
    margin-left:${props=>props.ml};
    margin-top:${props=>props.mt};
    margin-bottom:${props=>props.mb};
    margin-right:${props=>props.mr};
    color:${props=>props.color?props.color:'white'};
    background-color:${props=>props.bg?props.bg:'gray'};
    text-align:center;
    width:${props=>props.w?props.w:'auto'};
    border:none;
    font-weight:600;
    border-radius:6px;
    &:hover{
        background-color:${props=>props.hbg?props.hbg:'gray'};
    }
`