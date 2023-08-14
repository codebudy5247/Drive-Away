import { useFormContext, Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Material UI TextField Component
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#5e5b5d",
    fontWeight: 400,
  },
  "& .MuiInputBase-input": {
    borderColor: "#c8d0d4",
  },
  "& .MuiInput-underline:after": {
    border: "none",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-error": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#d32f2f",
      },
    },
    "& fieldset": {
      borderColor: "#c8d0d4",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      border: "1px solid #c8d0d4",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #c8d0d4",
    },
  },
});

interface IProps {
  name: string;
}

export default function RHFTextField({
  name,
  ...other
}: IProps & TextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <CssTextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
