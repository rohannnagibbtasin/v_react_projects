/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import { Table, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
export default function useTable(records, headCells) {
    const page = [5, 10, 25];
    const [pages, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const TblContainer = (props) => (
        // eslint-disable-next-line no-unused-expressions
        // eslint-disable-next-line react/destructuring-assignment
        <Table>{props.children}</Table>
    );
    // eslint-disable-next-line no-unused-vars
    const TblHead = (props) => (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={Math.random()}>{headCell.label}</TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
    const TblPagination = () => {
        <TablePagination
            component="div"
            rowsPerPageOptions={pages}
            page={page}
            rowsPerPage={rowsPerPage}
            count={records.lenth}
        />;
    };
    return { TblContainer, TblHead, TablePagination };
}
