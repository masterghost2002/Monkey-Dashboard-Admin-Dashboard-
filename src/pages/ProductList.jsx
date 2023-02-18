import styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { productListRow } from "../tempData";
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
const Name = styled.div`
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
export default function ProductList() {
    const [productData, setproductData] = useState(productListRow);
    const handleDelete = (id) => {
        setproductData(productData.filter(item => item.id !== id));
    }
    const productListColumn = [
        { field: 'id', headerName: 'ID', flex: 1 },
        {
            field: 'name', headerName: 'Product Name', flex: 4, renderCell: (params) => {
                return (
                    <ColumnContainer>
                        <Image src={params.row.image} />
                        <Name>
                            {params.row.name}
                        </Name>
                    </ColumnContainer>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', flex: 2 },
        { field: 'status', headerName: 'Status', flex: 2 },
        {
            field: 'price', headerName: 'Price', flex: 2, renderCell: (params) => {
                return (
                    <span>
                        {
                            (params.row.price).toLocaleString('en-IN', {
                                style: 'currency',
                                currency: 'INR'
                            })
                        }
                    </span>
                )
            }
        },
        {
            field: 'action', headerName: 'Action', flex: 2, renderCell: (params) => {
                return (
                    <>
                        <IconButton color='red' onClick={() => handleDelete(params.row.id)} >
                            <DeleteOutlineIcon />
                            Delete
                        </IconButton>
                        <StyledLink to={`/product/${params.row.id}`}>
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
                rows={productData}
                columns={productListColumn}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Container>
    )
}