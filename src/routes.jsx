import { ListFeeType } from "./pages";

export const mainRoutes = [
  {
    title: "Fee Type",
    component: <ListFeeType />,
    path: "/",
    exact: true,
  },
];

export const authRoutes = [
  {
    component: <ListFeeType />,
    path: "/",
    exact: true,
  },
];
