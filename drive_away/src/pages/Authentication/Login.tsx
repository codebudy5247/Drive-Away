import {
  Container,
  Grid,
  Box,
  Typography,
  Stack,
  Link as MuiLink,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { FormProvider, RHFTextField } from "../../components/hook-form";
import Iconify from "../../components/Iconify";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useIsMountedRef from "../../hooks/useIsMountedRef";

import GoogleButton from "react-google-button";
import GithubButton from "react-github-login-button";
// ----------------------------------------------------------------------

// Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

type FormValuesProps = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  afterSubmit?: string;
};

const Login = () => {
  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First name required"),
    lastName: Yup.string().required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  // const {
  //   reset,
  //   setError,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = methods;

  return (
    <Container
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: { xs: "#fff", md: "#f4f4f4" } }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid
          item
          sx={{ maxWidth: "70rem", width: "100%", backgroundColor: "#fff" }}
        >
          <FormProvider methods={methods}>
            <Grid
              container
              sx={{
                boxShadow: { sm: "0 0 5px #ddd" },
                py: "6rem",
                px: "1rem",
              }}
            >
              <Grid
                item
                container
                justifyContent="space-between"
                rowSpacing={5}
                sx={{
                  maxWidth: { sm: "45rem" },
                  marginInline: "auto",
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{ borderRight: { sm: "1px solid #ddd" } }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{ paddingRight: { sm: "3rem" } }}
                    // onSubmit={methods.handleSubmit(onSubmitHandler)}
                  >
                    <Typography
                      variant="h6"
                      component="h1"
                      sx={{ textAlign: "center", mb: "1.5rem" }}
                    >
                      Log into your account
                    </Typography>

                    <RHFTextField
                      label="Enter your email"
                      type="email"
                      name="email"
                      focused
                      required
                    />
                    <RHFTextField
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      focused
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              edge="end"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Iconify
                                icon={
                                  showPassword
                                    ? "eva:eye-fill"
                                    : "eva:eye-off-fill"
                                }
                              />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    {/* <FormControlLabel
                      control={
                        <Checkbox
                          size="small"
                          aria-label="trust this device checkbox"
                          required
                          // {...methods.register("persistUser")}
                        />
                      }
                      label={
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "0.8rem",
                            fontWeight: 400,
                            color: "#5e5b5d",
                          }}
                        >
                          Trust this device
                        </Typography>
                      }
                    /> */}

                    <Button
                      variant="contained"
                      sx={{
                        py: "0.8rem",
                        mt: 2,
                        width: "80%",
                        marginInline: "auto",
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      paddingLeft: { sm: "3rem" },
                      mb: "1.5rem",
                      textAlign: "center",
                    }}
                  >
                    Log in with another provider:
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    sx={{
                      paddingLeft: { sm: "5rem" },
                      rowGap: "1rem",
                    }}
                  >
                    <GoogleButton
                      disabled
                      onClick={() => {
                        console.log("Google button clicked");
                      }}
                    />
                    <GithubButton
                      disabled
                      onClick={() => {
                        console.log("Github button clicked");
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Stack sx={{ mt: "3rem", textAlign: "center" }}>
                  <Typography sx={{ fontSize: "0.9rem", mb: "1rem" }}>
                    Need an account?{" "}
                    <LinkItem to="/signup">Sign up here</LinkItem>
                  </Typography>
                  <Typography sx={{ fontSize: "0.9rem" }}>
                    Forgot your{" "}
                    <LinkItem to="/forgotPassword">password?</LinkItem>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
