import Step from "@/theme/Step";
import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  step: number;
}
const steps = [
  {
    id: 1,
    description: "Your info",
    title: "Step 1",
  },
  {
    id: 2,
    description: "Select plan",
    title: "Step 2",
  },
  {
    id: 3,
    description: "Add-ons",
    title: "Step 3",
  },
  {
    id: 4,
    description: "Summary",
    title: "Step 4",
  },
];

const SideBar: FC<Props> = (props) => {
  return (
    <Box
      sx={{
        width: "33.33%",
        borderRadius: "1rem",
        backgroundImage: "url('assets/images/desktop-bg.svg')",
        height: "100%",
      }}
    >
      <Box sx={{ marginTop: "3rem", marginInlineStart: "2rem" }}>
        {steps.map((step) => (
          <Step
            key={step.id}
            step={step.id}
            isActive={props.step === step.id}
            description={step.description}
            title={step.title}
          />
        ))}
      </Box>
    </Box>
  );
};
export default SideBar;
