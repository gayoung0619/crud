"use client";
import * as React from "react";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const LoginForm = ({ onChange: onChangeType }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      password: "", // Ensure this matches the field name
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Box sx={customStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card style={{ padding: "40px" }}>
            <Typography
              sx={{ fontSize: "26px" }}
              component="div"
              fontWeight="600"
              align="center"
            >
              로그인
            </Typography>

            <CardContent style={{ padding: "0" }}>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12}>
                  <Controller
                    name="id"
                    control={control}
                    rules={{
                      required: "ID is required.",
                      pattern: {
                        value: /^[a-zA-Z0-9\s,.'-]{5,}$/,
                        message:
                          "Invalid ID format. Please ensure it is valid.",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        label="아이디"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error !== undefined}
                        helperText={
                          fieldState.error && fieldState.error.message
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    required={true}
                    name="password" // Ensure this matches the field name
                    control={control}
                    rules={{
                      required: "PW is required.",
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        fullWidth
                        type="password"
                        label="패스워드"
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error !== undefined}
                        helperText={
                          fieldState.error && fieldState.error.message
                        }
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </CardContent>

            <CardActions style={{ padding: "0" }}>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12} mt={1}>
                  <LoadingButton
                    fullWidth
                    type="submit"
                    size="large"
                    variant="contained"
                  >
                    로그인
                  </LoadingButton>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </form>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(249, 249, 249, 1);
`;

const customStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

export default LoginForm;
