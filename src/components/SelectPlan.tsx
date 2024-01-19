import { Inputs } from "@/app/page";
import PlanCard from "@/theme/PlanCard";
import Switch from "@/theme/Switch";
import { plans } from "@/variables/data";
import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface Props {
  watch: UseFormWatch<Inputs>;
  setValue: UseFormSetValue<Inputs>;
  register: UseFormRegister<Inputs>;
}

const SelectPlan: FC<Props> = (props) => {
  const { setValue, watch, register } = props;
  return (
    <>
      <Typography variant="h4" component="h1">
        Select your plan
      </Typography>
      <Typography variant="caption" component="p" sx={{ mb: "2rem" }}>
        You have the option of monthly or yearly billing.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            duration={watch("duration")}
            icon={plan.icon}
            price={
              plan.priceSymbol +
              (watch("duration") === "Monthly"
                ? plan.monthPrice
                : plan.yearPrice)
            }
            title={plan.title}
            selected={plan.id === watch("plan")}
            onClick={() => setValue("plan", plan.id)}
          />
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          background: "hsl(217, 100%, 97%)",
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          height: "2.5rem",
          borderRadius: ".5rem",
          my: "1rem",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            sx={{
              color:
                watch("duration") === "Monthly"
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(231, 11%, 63%)",
            }}
          >
            Monthly
          </Typography>
          <Switch
            checked={watch("duration") === "Yearly"}
            inputProps={{ "aria-label": "ant design" }}
            {...register("duration", {
              onChange: (e) => {
                setValue("duration", e.target.checked ? "Yearly" : "Monthly");
              },
            })}
          />
          <Typography
            sx={{
              color:
                watch("duration") === "Yearly"
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(231, 11%, 63%)",
            }}
          >
            Yearly
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default SelectPlan;
