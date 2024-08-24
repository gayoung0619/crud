"use client";
import * as React from "react";
import { useEffect } from "react";
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
import { useForm } from "react-hook-form";
import styled from "styled-components";

const LoginForm = ({ onChange: onChangeType }: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm();
  const refreshPage = () => window.location.reload();

  /* input validation */
  useEffect(() => {
    register("admin_id", {
      required: true,
      // pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    });
    register("password", {
      required: true,
      minLength: 4,
    });
  }, [register]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue(name, value);
    await trigger(name.toString());
  };

  const onSubmit = () => {
    console.log("submit!");
  };

  return (
    <Wrapper>
      <Box sx={customStyle}>
        <ValidatorForm onSubmit={handleSubmit(onSubmit)}>
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
                  <TextField
                    label="아이디"
                    fullWidth
                    variant="outlined"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="패스워드"
                    type="password"
                    fullWidth
                    variant="outlined"
                    onChange={onChange}
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
        </ValidatorForm>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.body`
  background-color: rgba(249, 249, 249, 1);
`;

const ValidatorForm = styled.div`
  padding: 40px;
`;

const customStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

export default LoginForm;
