import { Box, Typography, styled } from "@mui/material";
import { type FC } from "react";

interface Props {
  step: number;
  title: string;
  description: string;
  isActive?: boolean;
}
const Step: FC<Props> = (props) => {
  const NumberContainer = styled(Box)(() => ({
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    border: "1px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: props.isActive ? "hsl(213, 96%, 18%)" : "#fff",
    background: props.isActive ? "hsl(206, 94%, 87%)" : undefined,
  }));
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mt: "1.5rem",
      }}
    >
      <NumberContainer>{props.step}</NumberContainer>
      <Box sx={{ marginInlineStart: "1rem" }}>
        <Typography variant="caption">{props.title}</Typography>
        <Typography variant="body2"> {props.description}</Typography>
      </Box>
    </Box>
  );
};

export default Step;
