import { styled } from "@mui/material";
import { FC } from "react";
import MuiSwitch, { SwitchProps } from "@mui/material/Switch";

type Props = SwitchProps;

const Switch: FC<Props> = (props) => {
  const CustomSwitch = styled(MuiSwitch)(({ theme }) => ({
    width: 48,
    height: 28,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 4.5,
      "&.Mui-checked": {
        transform: "translateX(22px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "hsl(213, 96%, 18%)",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 18,
      height: 18,
      borderRadius: "50%",
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 28 / 2,
      opacity: 1,

      backgroundColor: "hsl(213, 96%, 18%)",
      boxSizing: "border-box",
    },
  }));
  return <CustomSwitch {...props} />;
};

export default Switch;
