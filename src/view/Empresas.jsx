import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import React, { useState } from 'react';
import ModalPost from '../componentes/company/ModalPost';
import TableCompany from '../componentes/company/TableCompany';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createCompany } from '../services/createCompany';

const Empresas = () => {
  const [postModal, setPostModal] = useState(false);

  const closeModal = () => {
    setPostModal(!postModal);
  };

  const formik = useFormik({
    initialValues: {
      Nombre: '',
      Descripcion: '',
      Direccion: '',
      Telefono: '',
      Ruc: '',
      Responsable: '',
    },
    validationSchema: Yup.object({
      Nombre: Yup.string().max(200).required('Nombre es requerido'),
      Descripcion: Yup.string().max(200).required('Descripcion es requerido'),
      Direccion: Yup.string().max(200).required('Direccion es requerido'),
      Telefono: Yup.number().required('Telefono es requerido'),
      Ruc: Yup.number().required('RUC es requerido'),
      Responsable: Yup.string().max(200).required('Responsable es requerido'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await createCompany(values);
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
            <Typography variant="h5">Empresas</Typography>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <AddBusinessTwoToneIcon />
                </SvgIcon>
              }
              variant="contained"
              onClick={() => closeModal()}
            >
              Agregar empresa
            </Button>
            <ModalPost openModal={postModal} closeModal={closeModal} formik={formik} />
          </Stack>
          <TableCompany />
        </Container>
      </Box>
    </>
  );
};

export default Empresas;
