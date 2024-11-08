"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Box, Skeleton } from "@mui/material";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { todoData } from "../store/todo/todoSlice";
import "./page.css";
import DatePicker from "react-datepicker";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { FaWatchmanMonitoring } from "react-icons/fa";

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { dataVal, isLoading, error } = useSelector((state) => state.todo);
  const currentData = useMemo(() => dataVal, [dataVal]);

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

  const [startDate, setStartDate] = useState(new Date());
  const handleSave = () => {
    console.log("startDate", startDate);
  };

  const handleClick = () => {
    router.push("/dashboard/settings");
  };
  const handleBack = () => {
    router.push("/");
  };

  return (
    <>
      <Box>
        <div className="d-flex justify-content-center">Dashboard Pages</div>
        <h1>Whereas disregard and contempt for human rights have resulted</h1>
        <p>Hellooooo</p>
        <h4>haii</h4>
        <div className="d-flex justify-content-between">
          <Button onClick={handleBack}>Home</Button>
          <Button onClick={handleClick} variant="success">
            settings
          </Button>
        </div>
        <div className="p-3">
          <AcUnitIcon style={{ color: "orange" }} />
          <FaWatchmanMonitoring style={{ color: "pink", fontSize: "25px" }} />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <DatePicker
            dateFormat="dd-MM-YYY"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <Button className="mx-2" onClick={handleSave}>
            save
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
