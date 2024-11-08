"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleNext = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h3>Welcome to Next js</h3>
        <Button variant="outlined" onClick={handleNext}>
          dashboard
        </Button>
      </div>
    </>
  );
}
