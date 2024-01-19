import { Inputs } from "@/app/page";
import { InputLabel, Typography } from "@mui/material";
import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  errors: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
}
const UserInfo: FC<Props> = (props) => {
  const { errors, register } = props;
  return (
    <>
      <Typography variant="h4" component="h1">
        Personal Info
      </Typography>
      <Typography variant="caption" component="p" sx={{ mb: "2rem" }}>
        Please provide your name, email address, and phone number.
      </Typography>
      <InputLabel shrink htmlFor="name-input" sx={{ mt: "1rem" }}>
        Name
      </InputLabel>
      <input
        className="custom-input "
        id="name-input"
        placeholder="e.g. Stephen King"
        {...register("name", {
          required: true,
        })}
      />
      {errors.name && (
        <Typography variant="subtitle2" sx={{ color: "red" }}>
          name is required
        </Typography>
      )}
      <InputLabel shrink htmlFor="name-input" sx={{ mt: "1rem" }}>
        Email Address
      </InputLabel>
      <input
        className="custom-input "
        id="name-input"
        placeholder=" e.g. stephenking@lorem.com"
        {...register("email", {
          required: true,
        })}
      />
      {errors.email && (
        <Typography variant="subtitle2" sx={{ color: "red" }}>
          email is required
        </Typography>
      )}
      <InputLabel shrink htmlFor="name-input" sx={{ mt: "1rem" }}>
        Phone Number
      </InputLabel>
      <input
        className="custom-input "
        id="name-input"
        placeholder=" e.g. +1 234 567 890"
        {...register("phone", {
          required: true,
        })}
      />
      {errors.phone && (
        <Typography variant="subtitle2" sx={{ color: "red" }}>
          phone number is required
        </Typography>
      )}
    </>
  );
};

export default UserInfo;
