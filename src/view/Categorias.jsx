import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import ModalPostCategory from '../componentes/category/ModalPostCategory';
import TableCategory from '../componentes/category/TableCategory';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Categorias = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(!openModal);
  };

  const formik = useFormik({
    initialValues: {
      EmpresaId: '',
      Nombre: '',
    },
    validationSchema: Yup.object({
      EmpresaId: Yup.string().required('Requiere nombrar empresa o codigo'),
      Nombre: Yup.string().required('Agrega Categoria'),
    }),
    onSubmit: (values, helpers) => {
      try {
        console.log(values);
        closeModal();
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Typography variant="h5">Categorias</Typography>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <AddIcon />
                </SvgIcon>
              }
              variant="contained"
              onClick={() => closeModal()}
            >
              Agregar Categoria
            </Button>
          </Stack>
          <ModalPostCategory open={openModal} close={closeModal} formik={formik} />
          <TableCategory />
        </Container>
      </Box>
    </>
  );
};

export default Categorias;
