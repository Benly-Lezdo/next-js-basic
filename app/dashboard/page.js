"use client";

import { Box, Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { todoData } from "../store/todo/todoSlice";
import "./page.css";

export default function Dashboard() {
  const { dataVal, isLoading, error } = useSelector((state) => state.todo);

  const currentData = useMemo(() => dataVal, [dataVal]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      dispatch(todoData());
    } catch (e) {
      console.log("e", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/settings");
  };

  return (
    <>
      <Box>
        <div className="d-flex justify-content-center">Dashboard Pages</div>
        <h1>Whereas disregard and contempt for human rights have resulted</h1>
        <p>Hellooooo</p>
        <h4>haii</h4>
        <div className="d-flex justify-content-end">
          <Button onClick={handleClick} variant="success">
            settings
          </Button>
        </div>
        <div className="container mt-2">
          <table id="attendanceTable">
            <thead>
              <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  <tr>
                    <td colSpan="3">
                      <Skeleton variant="text" width="100%" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <Skeleton variant="text" width="100%" />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3">
                      <Skeleton variant="text" width="100%" />
                    </td>
                  </tr>
                </>
              ) : (
                currentData?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.title || "No Title"}</td>
                    <td className="text-center">
                      <Box>
                        <Button variant="warning">Edit</Button>
                        <Button className="mx-2" variant="danger">
                          Delete
                        </Button>
                      </Box>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Box>
    </>
  );
}
