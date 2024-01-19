import { Inputs } from "@/app/page";
import { addOnePackages, plans } from "@/variables/data";
import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { UseFormWatch } from "react-hook-form";

interface Props {
  watch: UseFormWatch<Inputs>;
}

const Summery: FC<Props> = (props) => {
  const { watch } = props;
  const userPlan = plans.find((plan) => plan.id === watch("plan"));
  const userAddOne = watch("addOne").map((item) =>
    addOnePackages.find((addOne) => item === addOne.id)
  );

  return (
    <>
      <Typography variant="h4" component="h1">
        Finishing up
      </Typography>
      <Typography variant="caption" component="p" sx={{ mb: "2rem" }}>
        Double-check everything looks OK before confirming.
      </Typography>
      <Box
        sx={{
          bgcolor: "hsl(217, 100%, 97%)",
          p: "1rem",
          borderRadius: ".5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body1"> {userPlan?.title}</Typography>

          <Typography variant="body1">
            {userPlan?.priceSymbol}
            {watch("duration") === "Monthly"
              ? userPlan?.monthPrice
              : userPlan?.yearPrice}
            /{watch("duration") === "Monthly" ? "mo" : "yr"}
          </Typography>
        </Box>
        <Divider sx={{ my: "1rem" }} />
        {userAddOne.map((item) => (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                mb: "1rem",
              }}
            >
              <Typography variant="caption" component="p">
                {item?.title}
              </Typography>
              <Typography variant="body1">
                {item?.priceSymbol}
                {watch("duration") === "Monthly"
                  ? item?.monthPrice
                  : item?.yearPrice}
                /{watch("duration") === "Monthly" ? "mo" : "yr"}
              </Typography>
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default Summery;
