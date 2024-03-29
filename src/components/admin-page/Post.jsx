import React, { useState } from 'react'
import './WareHouse.css'
import { formatMoney } from '../../abc'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
export default function WareHouse({ item, onEdit, onRemove }) {
    const onHandleEdit = (item) => {
        onEdit(item)
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{ backgroundColor: "GrayText" }}>
                            <TableCell sx={{ color: "white" }} align="left" >Id</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Image</TableCell>

                            <TableCell sx={{ color: "white" }} align="center">Name</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Price</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Category</TableCell>

                            <TableCell sx={{ color: "white" }} align="center">Update</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {item.map((item, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell align="left">{item.id}</TableCell>
                                <TableCell style={{ width: "200px" }} align="center">
                                    <img style={{ width: "40%" }} src={item.image} alt="" />
                                </TableCell>
                                <TableCell align="center">{item.name}</TableCell>
                                <TableCell align="center">{formatMoney(item.price)}</TableCell>
                                <TableCell align="center">{item.category && item.category.name}</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" onClick={(e) => onHandleEdit(item)}>
                                        Update
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="error" onClick={() => onRemove(item.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        // <div >
        //     <div className="xoa">
        //         <i onClick={() => onRemove(id)} className="fas fa-trash-alt"> </i> </div>
        //     <div className="hinhanh"><img src={image} /></div>
        //     <div className="id"> id: {id} </div>
        //     <div className="ten">{name}</div>
        //     <div className="sao">
        //         <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
        //     </div>
        //     <div className="gia">price: {formatMoney(price)}</div>
        //     <div className="gia">loai sp: {category && category.name} </div>
        //     {/* <div className="hang">loai: {} </div> */}
        //     <button onClick={() => onHandleEdit({
        //         image, name, price, id
        //     })} className="btn btnPrimary" >Sửa sản phẩm</button>

        // </div>

    )
}
