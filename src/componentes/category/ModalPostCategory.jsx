import {
  Box,
  Button,
  Card,
  CardHeader,
  Dialog,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

const ModalPostCategory = (props) => {
  const { open, close, formik } = props;

  return (
    <>
      <Dialog open={open} onClose={close}>
        <Card>
          <CardHeader title="Agrega Categoria" />
          <Divider />
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid xs={6}>
                <TextField
                  label="Codigo o nomnbre de la empresa"
                  name="EmpresaId"
                  error={!!(formik.touched.EmpresaId && formik.errors.EmpresaId)}
                  helperText={formik.touched.EmpresaId && formik.errors.EmpresaId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
              <Grid xs={6}>
                <TextField
                  label="Nombre de la Categoria"
                  name="Nombre"
                  error={!!(formik.touched.Nombre && formik.errors.Nombre)}
                  helperText={formik.touched.Nombre && formik.errors.Nombre}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <Button variant="contained" type="submit">
                Agregar
              </Button>
              <Button onClick={close}>Cancelar</Button>
            </Box>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default ModalPostCategory;
