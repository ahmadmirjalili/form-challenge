import { Inputs } from "@/app/page";
import { addOnePackages } from "@/variables/data";
import { Box, Checkbox, Typography } from "@mui/material";
import { FC } from "react";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";

interface Props {
  watch: UseFormWatch<Inputs>;
  setValue: UseFormSetValue<Inputs>;
}

const AddOne: FC<Props> = (props) => {
  const { setValue, watch } = props;

  const clickHandler = (addOne: any) => {
    if (watch("addOne").includes(addOne.id)) {
      setValue(
        "addOne",
        watch("addOne").filter((item) => item !== addOne.id)
      );
    } else {
      setValue("addOne", [...watch("addOne"), addOne.id]);
    }
  };

  return (
    <>
      <Typography variant="h4" component="h1">
        Pick add-ons
      </Typography>
      <Typography variant="caption" component="p" sx={{ mb: "2rem" }}>
        Add-ons help enhance your gaming experience.
      </Typography>
      {addOnePackages.map((addOne) => (
        <Box
          onClick={() => clickHandler(addOne)}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "1rem",
            width: "100%",
            height: "4.5rem",
            borderRadius: ".5rem",
            border: `1px solid ${
              watch("addOne")?.includes(addOne.id)
                ? "hsl(213, 96%, 18%)"
                : "hsl(231, 11%, 63%)"
            }`,
            background: watch("addOne")?.includes(addOne.id)
              ? "hsl(217, 100%, 97%)"
              : "",
            cursor: "pointer",
            mb: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={watch("addOne")?.includes(addOne.id)}
              sx={{
                height: "5rem",
                color: "hsl(231, 11%, 63%)",
                "&.Mui-checked": {
                  color: "hsl(243, 100%, 62%)",
                },
              }}
            />
            <Box sx={{ marginInlineStart: ".5rem" }}>
              <Typography variant="body1">{addOne.title}</Typography>
              <Typography variant="caption">{addOne.description}</Typography>
            </Box>
          </Box>
          <Typography variant="subtitle1">
            {" "}
            +
            {addOne.priceSymbol +
              (watch("duration") === "Monthly"
                ? addOne.monthPrice
                : addOne.yearPrice)}
            /{watch("duration") === "Monthly" ? "mo" : "yr"}
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default AddOne;
