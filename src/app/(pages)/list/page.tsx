"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { boardFetch } from "@/app/_api/board";

const dummyData = [];
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
  ];

  const {
    data: boardData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["board"],
    queryFn: boardFetch,
  });

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, mt: 15 }}>
        <Container maxWidth={false}>
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
                      {boardData?.data.map((item) => (
                        <TableRow
                          key={item.id}
                          sx={{
                            cursor: "pointer",
                          }}
                        >
                          <TableCell align="center">{item.id}</TableCell>
                          <TableCell align="center">{item.name}</TableCell>
                          <TableCell align="center">{item.age}</TableCell>
                          <TableCell align="center">{item.sex}</TableCell>
                          <TableCell align="center">
                            {item.university}
                          </TableCell>
                          <TableCell align="center">{item.phone}</TableCell>
                          <TableCell align="center">{item.email}</TableCell>
                          <TableCell align="center">
                            <Button
                              variant="contained"
                              size="small"
                              color="info"
                            >
                              삭제
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
