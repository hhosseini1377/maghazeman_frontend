import React from "react";

import {
  BookOpen,
  Briefcase,
  Calendar as CalendarIcon,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  Monitor,
  ShoppingCart,
  PieChart,
  Sliders,
  Users,
  Eye,
  Bell,
  FileText,
  Headphones,
  Star,
} from "react-feather";
import { GridOn } from "@material-ui/icons";
import async from "../components/Async";
import { ReactComponent as Home } from "../assets/images/sidebar/Icon/home.svg";
import { ReactComponent as User } from "../assets/images/sidebar/Icon/user.svg";
import { ReactComponent as Store } from "../assets/images/sidebar/Icon/store.svg";
import { ReactComponent as ListTicket } from "../assets/images/sidebar/Icon/listTicket.svg";
import { ReactComponent as Alarm } from "../assets/images/sidebar/Icon/notif.svg";
import { ReactComponent as Mali } from "../assets/images/sidebar/Icon/mali.svg";
import { ReactComponent as Subscription } from "../assets/images/sidebar/Icon/Astrak.svg";
import { ReactComponent as TicketCustomer } from "../assets/images/sidebar/Icon/ticketCustomer.svg";
import { ReactComponent as ChatIcon } from "../assets/images/sidebar/Icon/chat.svg";
import { ReactComponent as Sms } from "../assets/images/sidebar/Icon/sms.svg";
import { ReactComponent as Blog } from "../assets/images/sidebar/Icon/blog.svg";
import { ReactComponent as Video } from "../assets/images/sidebar/Icon/vidoe.svg";
import { ReactComponent as Role } from "../assets/images/sidebar/Icon/role.svg";
import { ReactComponent as Supports } from "../assets/images/sidebar/Icon/supprt.svg";
// Guards
const AuthGuard = async(() => import("../components/AuthGuard"));

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const SignUp = async(() => import("../pages/auth/SignUp"));
const ResetPassword = async(() => import("../pages/auth/ResetPassword"));
const Page404 = async(() => import("../pages/auth/Page404"));
const Page500 = async(() => import("../pages/auth/Page500"));

// Pages components
const Blank = async(() => import("../pages/pages/Blank"));

// Protected routes
const ProtectedPage = async(() => import("../pages/protected/ProtectedPage"));

const HomeCu = async(() => import("../pages/Home/Home"));

const HomeRoutes = {
  id: "صفحه اصلی",
  path: "/",
  header: "",
  icon: <Home />,
  containsHome: true,
  children: [
    {
      path: "/",
      name: "داشبرد",
      component: HomeCu,
    },
  ],
  component: null,
};

const ProfileRoutes = {
  id: "حساب کاربری",
  path: "/TEST",
  header: "",
  icon: <User />,
  children: [
    {
      path: "/overview",
      name: "نمای کلی",
      component: Blank,
    },
    {
      path: "/analyze",
      name: "آنالیز",
      component: Blank,
    },
    {
      path: "/new",
      name: "جدید",
      component: Blank,
    },
  ],
  component: null,
};

const StoreRoutes = {
  id: "فروشگاه",
  path: "/User",
  header: "",
  icon: <Store />,

  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};

const ListTicketRoutes = {
  id: "لیست تیکت",
  path: "/c-a",
  header: "",
  icon: <ListTicket />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};

const AlertRoutes = {
  id: "اعلانات",
  path: "/c-b",
  header: "",
  icon: <Alarm />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};

const FinancialRoutes = {
  id: "امور مالی",
  path: "/c-c",
  header: "",
  icon: <Mali />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};

const CustomerRoutes = {
  id: "سفارش مشتری",
  path: "/d-a",
  header: "",
  icon: <TicketCustomer />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};

const SubscriptionRoutes = {
  id: "اشتراک",
  path: "/d-b",
  header: "",
  icon: <Subscription />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
    {
      path: "/profile",
      name: "پروفایل",
      component: Blank,
    },
  ],
  component: null,
};

const ChatRoutes = {
  id: "چت",
  path: "/d-d",
  header: "",
  icon: <ChatIcon />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};
const SmsRoutes = {
  id: "پنل اس ام اس",
  path: "/d-d",
  header: "",
  icon: <Sms />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};
const BlogRoutes = {
  id: "وبلاگ",
  path: "/d-d",
  header: "",
  icon: <Blog />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};
const VideoRoutes = {
  id: "فیلم آموزشی",
  path: "/d-d",
  header: "",
  icon: <Video />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};
const RoleRoutes = {
  id: "قوانین",
  path: "/d-d",
  header: "",
  icon: <Role />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};
const supportRoutes = {
  id: "پشتیبانی",
  path: "/d-d",
  header: "",
  icon: <Supports />,
  children: [
    {
      path: "/test",
      name: "تست",
      component: Blank,
    },
  ],
  component: null,
};

const authRoutes = {
  id: "Auth",
  path: "/auth",
  icon: <Users />,
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn,
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp,
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword,
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404,
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500,
    },
  ],
  component: null,
};

// TODO: We should remove this parts
const landingRoutes = {
  id: "Landing Page",
  path: "/",
  header: "Docs",
  icon: <Monitor />,
  component: Blank,
  children: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/",
  component: ProtectedPage,
  children: null,
  guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  HomeRoutes,
  ProfileRoutes,
  StoreRoutes,
  ListTicketRoutes,
  AlertRoutes,
  FinancialRoutes,
  CustomerRoutes,
  SubscriptionRoutes,
  ChatRoutes,
  SmsRoutes,
  BlogRoutes,
  VideoRoutes,
  RoleRoutes,
  supportRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes];

// Routes visible in the sidebar
export const sidebarRoutes = [
  HomeRoutes,
  ProfileRoutes,
  StoreRoutes,
  ListTicketRoutes,
  AlertRoutes,
  FinancialRoutes,
  CustomerRoutes,
  SubscriptionRoutes,
  ChatRoutes,
  SmsRoutes,
  BlogRoutes,
  VideoRoutes,
  RoleRoutes,
  supportRoutes,
];
