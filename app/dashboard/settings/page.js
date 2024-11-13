"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { toast } from "sonner";

export default function Settings() {
  const router = useRouter();

  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.length < 3) {
      toast.error("Please Fill");
    }
    if (val.length >= 3) {
      toast.success("🦇");
      setVal("");
      console.log("val", val);
    }
  };
  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <div
        className="d-flex justify-content-center text-center"
        style={{
          flexDirection: "column",
        }}
      >
        <h3>Settings Page</h3>
      </div>
      <Box className="d-flex align-items-center">
        <TextField
          value={val}
          onChange={(e) => setVal(e.target.value)}
          label="mmbu"
          size="small"
        />
        <Button onClick={handleSubmit} className="mx-2" variant="outlined">
          Submit
        </Button>
      </Box>
      <Button onClick={handleClick} className="mt-2" variant="contained">
        Back
      </Button>
    </>
  );
}
