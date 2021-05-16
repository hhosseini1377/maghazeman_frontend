import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import axios from "axios";
import { signIn } from "../../../redux/actions/authActions";
import {
  Alert,
  TextField,
  Wrapper,
  BigAvatar,
  useStyle,
  CuButton,
  BoxBtn,
  CuBtn,
  BoxLink,
} from "./SignIn.styled-components";
import { ReactComponent as LogoLogin } from "../../../assets/images/LogoLogin.svg";
import { ReactComponent as UserIcon } from "../../../assets/images/iconInput/IconLogin.svg";
import { ReactComponent as PassIcon } from "../../../assets/images/iconInput/password.svg";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const Classes = useStyle();

  return (
    <Wrapper>
      <Helmet title="Sign In" />
      <LogoLogin />
      <Formik
        initialValues={{
          username: "",
          password: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().max(255).required("ایمیل اجباری است!"),
          password: Yup.string().max(255).required("کلمه عبور اجباری است!"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          await console.log(values, "values");
          try {
            await dispatch(
              signIn({ username: values.username, password: values.password })
            );
            history.push("/");
          } catch (error) {
            const message = error.message || "Something went wrong";
            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate className={Classes.root} onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert mt={2} mb={1} severity="warning">
                {errors.submit}
              </Alert>
            )}
            <TextField
              variant={"standard"}
              type="text"
              name="username"
              placeholder="نام کاربری"
              error={Boolean(touched.username && errors.username)}
              fullWidth
              helperText={touched.username && errors.username}
              onBlur={handleBlur}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment className={Classes.icon} position="start">
                    <UserIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant={"standard"}
              type="password"
              name="password"
              placeholder="پسورد"
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment className={Classes.icon} position="start">
                    <PassIcon />
                  </InputAdornment>
                ),
              }}
            />
            <BoxBtn>
              <CuBtn type="submit" variant="contained" disabled={isSubmitting}>
                ورود
              </CuBtn>
              <CuButton
                type="submit"
                variant="contained"
                disabled={isSubmitting}
              >
                ورود
              </CuButton>
            </BoxBtn>
            <BoxLink>
              <Button component={Link} to="/auth/sign-up">
                ثبت نام
              </Button>
              <Button component={Link} to="/auth/sign-in">
                درباره ما
              </Button>
            </BoxLink>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default SignIn;
