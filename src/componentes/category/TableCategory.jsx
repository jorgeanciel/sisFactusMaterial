import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { Scrollbar } from '../common/ScrollBar';

const TableCategory = () => {
  return (
    <>
      <Card>
        <Scrollbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Categoria</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </>
  );
};

export default TableCategory;
