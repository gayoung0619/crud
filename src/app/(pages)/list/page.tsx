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
} from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { boardDelete, boardFetch } from "@/app/_api/board";

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

  const { data: boardData } = useQuery({
    queryKey: ["board"],
    queryFn: boardFetch,
  });

  const deleteMutation = useMutation({
    mutationFn: (boardId: number) => boardDelete(boardId),
  });

  const onDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

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
                      {boardData?.data.map((item: any) => (
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
                              onClick={() => {
                                alert("삭제됨");
                                onDelete(item.id);
                              }}
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
