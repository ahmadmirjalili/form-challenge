import { Avatar, Box, Typography } from "@mui/material";
import { type FC } from "react";

interface Props {
  icon: string;
  title: string;
  duration: "Monthly" | "Yearly";
  price: string;
  selected?: boolean;
  onClick?: () => void;
}
const PlanCard: FC<Props> = (props) => {
  return (
    <Box
      onClick={props.onClick}
      sx={{
        width: "32%",
        height: "12rem",
        borderRadius: "1rem",
        border: `1px solid ${props?.selected ? "hsl(213, 96%, 18%)" : "#EEEE"}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        background: props?.selected ? "hsl(217, 100%, 97%)" : "#fff",
      }}
    >
      <Avatar
        alt={props.title}
        src={props.icon}
        sx={{ marginInlineStart: "1rem", mt: "1rem" }}
      />
      <Box
        sx={{
          mb: "1rem",
          marginInlineStart: "1rem",
        }}
      >
        <Typography variant="body1" component="p">
          {props.title}
        </Typography>
        <Typography variant="caption">
          {props.price}/{props.duration === "Monthly" ? "mo" : "yr"}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlanCard;
