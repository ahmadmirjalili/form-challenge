"use client";
import AddOne from "@/components/AddOne";
import SelectPlan from "@/components/SelectPlan";
import SideBar from "@/components/Sidebar";
import Summery from "@/components/Summery";
import UserInfo from "@/components/UserInfo";
import { Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";

export type Inputs = {
  name: string;
  email: string;
  phone: string;
  duration: "Yearly" | "Monthly";
  plan: number;
  addOne: number[];
};
export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,

    formState: { errors, disabled },
  } = useForm<Inputs>({
    defaultValues: {
      duration: "Monthly",
      addOne: [],
      plan: 1,
    },
  });
  const [step, setStep] = useState(4);

  const goBackHandler = () => {
    setStep((pre) => pre - 1);
  };
  const formHandleSubmit = (event: Inputs) => {
    if (!disabled) {
      setStep((pre) => pre + 1);
    }
  };
  return (
    <Box
      sx={{
        bgcolor: " hsl(217, 100%, 97%)",
        height: "100vh",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "white",
            height: "568px",
            borderRadius: "1.5rem",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SideBar step={step} />
          <form
            className="form-container"
            onSubmit={handleSubmit(formHandleSubmit)}
          >
            <Box
              sx={{
                width: "100%",
                height: "90%",
              }}
            >
              {step === 1 && <UserInfo errors={errors} register={register} />}
              {step === 2 && (
                <SelectPlan
                  register={register}
                  setValue={setValue}
                  watch={watch}
                />
              )}
              {step === 3 && <AddOne setValue={setValue} watch={watch} />}
              {step === 4 && <Summery watch={watch} />}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {step > 1 && (
                <Button
                  sx={{ marginInlineEnd: "auto", color: "hsl(231, 11%, 63%)" }}
                  onClick={goBackHandler}
                >
                  Go Back
                </Button>
              )}
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginInlineStart: "auto",
                }}
              >
                Next Step
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
