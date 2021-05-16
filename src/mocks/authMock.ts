import mock from "../utils/mock";

const userData = {
  id: "12345",
  email: "demo@pushe.co",
  name: "Lucy Lavender",
};

mock.onPost("/api/auth/sign-in").reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email === "demo@pushe.co" && password === "unsafepassword") {
    return [200, userData];
  }

  return [401, { message: "ایمیل و یا کلمه عبور اشتباه است!" }];
});

mock.onPost("/api/auth/sign-up").reply(() => {
  return [200, userData];
});

mock.onPost("/api/auth/reset-password").reply(() => {
  return [200, userData];
});
