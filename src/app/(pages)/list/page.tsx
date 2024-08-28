"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import { boardDelete, boardFetch, boardWrite } from "@/app/_api/board";

type FormData = {
  name: string;
  age: string;
  sex: string;
  university: string;
  phone: string;
  mail: string;
};

const CustomerList = () => {
  const tableColumns = [
    "No",
    "이름",
    "나이",
    "성별",
    "대학",
    "전화번호",
    "이메일",
    "삭제",
    "수정",
  ];

  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  // modal style
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const queryClient = useQueryClient();

  // get
  const { data: boardData } = useQuery({
    queryKey: ["board"],
    queryFn: boardFetch,
  });

  // delete
  const deleteMutation = useMutation({
    mutationFn: (boardId: number) => boardDelete(boardId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["board"] });
    },
  });
  const onDelete = (id: number) => {
    if (window.confirm("게시물을 삭제하시겠습니까?")) {
      deleteMutation.mutate(id);
    } else {
      return false;
    }
  };

  // post
  const postMutation = useMutation({
    mutationFn: (form) => boardWrite(form),
    onSuccess: () => {
      console.log("Data successfully submitted!");
    },
    onError: (error) => {
      console.error("Error submitting data:", error);
    },
  });

  const onSubmitForm = (data) => {
    // console.log("Submitted Data:", data);
    setOpenPopup(false);
    postMutation.mutate(data);
  };

  // put or patch

  return (
    <>
      <Modal
        open={openPopup}
        onClose={handleClosePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            게시물 추가
          </Typography>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Controller
                name="name"
                control={control}
                rules={{ required: "name is required" }}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Controller
                name="age"
                control={control}
                rules={{ required: "age is required" }}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="age"
                    variant="outlined"
                    error={!!errors.age}
                    helperText={errors.age ? errors.age.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Controller
                name="sex"
                control={control}
                defaultValue=""
                rules={{ required: "sex is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="sex"
                    variant="outlined"
                    error={!!errors.sex}
                    helperText={errors.sex ? errors.sex.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Controller
                name="university"
                control={control}
                defaultValue=""
                rules={{ required: "university is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="university"
                    variant="outlined"
                    error={!!errors.university}
                    helperText={
                      errors.university ? errors.university.message : ""
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{ required: "phone is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="phone"
                    variant="outlined"
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sx={{ mb: 2 }}>
              <Controller
                name="mail"
                control={control}
                defaultValue=""
                rules={{ required: "mail is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="mail"
                    variant="outlined"
                    error={!!errors.mail}
                    helperText={errors.mail ? errors.mail.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type={"submit"}
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Box>
      </Modal>
      <Box component="main" sx={{ flexGrow: 1, mt: 15 }}>
        <Container maxWidth={false}>
          <Box sx={{ width: "100px", marginLeft: "auto" }}>
            <Button variant="contained" onClick={handleOpenPopup}>
              추가
            </Button>
          </Box>
          <Box mt={3}>
            <Card>
              <CardContent>
                <TableContainer>
                  <Table>
                    <TableHead
                      style={{ backgroundColor: "rgba(249, 249, 249, 1)" }}
                    >
                      <TableRow>
                        {tableColumns.map((column) => (
                          <TableCell align="center" key={column}>
                            {column}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {boardData?.data.map((item: any) => (
                        <TableRow
                          key={item.id}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          <TableCell align="center" mt={2}>
                            {item.id}
                          </TableCell>
                          <TableCell align="center">{item.name}</TableCell>
                          <TableCell align="center">{item.age}</TableCell>
                          <TableCell align="center">{item.sex}</TableCell>
                          <TableCell align="center">
                            {item.university}
                          </TableCell>
                          <TableCell align="center">{item.phone}</TableCell>
                          <TableCell align="center">{item.mail}</TableCell>
                          <TableCell align="center">
                            <Button
                              variant="contained"
                              size="small"
                              color="info"
                              onClick={() => {
                                onDelete(item.id);
                              }}
                            >
                              삭제
                            </Button>
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              variant="contained"
                              size="small"
                              color="info"
                            >
                              수정
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
