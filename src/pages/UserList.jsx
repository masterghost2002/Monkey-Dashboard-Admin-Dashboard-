import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { userListRow } from "../tempData";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
const Container = styled(motion.div)`
    display:flex;
    flex:5;
    padding:20px;
`
const Image = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
`
const UserName = styled.div`
    margin-left: 10px;
    font-weight:500;
`
const ColumnContainer = styled.div`
    display:flex;
    align-items:center;
`;
const IconButton = styled.button`
    display:flex;
    align-items:center;
    border:none;
    background-color:${props => props.bg ? props.bg : 'transparent'};
    color:${props => props.color ? props.color : 'black'};
    cursor:pointer;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`

export default function UserList() {
    const [userData, setUserData] = useState(userListRow);
    const handleDelete = (id)=>{
        setUserData(userData.filter(item=>item.id!==id));
    }
    const userListColumn = [
        { field: 'id', headerName: 'ID', flex: 1 },
        {
            field: 'username', headerName: 'User', flex: 3, renderCell: (params) => {
                return (
                    <ColumnContainer>
                        <Image src={params.row.avatar} />
                        <UserName>
                            {params.row.username}
                        </UserName>
                    </ColumnContainer>
                )
            }
        },
        { field: 'email', headerName: 'Email', flex: 3 },
        { field: 'status', headerName: 'Status', flex: 2 },
        {
            field: 'transaction', headerName: 'Transaction', flex: 2, renderCell: (params) => {
                return (
                    <span>
                        {
                            (params.row.transaction).toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR'
                            })
                        }
                    </span>
                )
            }
        },
        {
            field: 'action', headerName: 'Action', flex: 3, renderCell: (params) => {
                return (
                    <>
                        <IconButton color='red' onClick={()=>handleDelete(params.row.id)} >
                            <DeleteOutlineIcon />
                            Delete
                        </IconButton>
                        <StyledLink to={`/user/${params.row.id}`}>
                            <IconButton color='#007fff' >
                                <EditIcon />
                                Edit
                            </IconButton>
                        </StyledLink>
                    </>
    
                )
            }
        }
    ];
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
            <DataGrid
                rows={userData}
                columns={userListColumn}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    )
}
