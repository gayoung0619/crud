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

const dummyData = [
  {
    id: 1,
    name: "권수빈",
    age: "15",
    sex: "남",
    university: "대학교",
    phone: "010-0000-0000",
    email: "abcd@naver.com",
  },
  {
    id: 2,
    name: "양가영",
    age: "29",
    sex: "여",
    university: "대학교",
    phone: "010-1111-2222",
    email: "abcd@naver.com",
  },
  {
    id: 3,
    name: "권수빈",
    age: "15",
    sex: "남",
    university: "대학교",
    phone: "010-0000-0000",
    email: "abcd@naver.com",
  },
  {
    id: 4,
    name: "권수빈",
    age: "15",
    sex: "남",
    university: "대학교",
    phone: "010-0000-0000",
    email: "abcd@naver.com",
  },
  {
    id: 5,
    name: "권수빈",
    age: "15",
    sex: "남",
    university: "대학교",
    phone: "010-0000-0000",
    email: "abcd@naver.com",
  },
];
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

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth={false}>
          <Box mt={3}>
            <Card>
              <CardContent>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        {tableColumns.map((column) => (
                          <TableCell align="center" key={column}>
                            {column}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dummyData.map((item) => (
                        <TableRow
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
                              button
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
