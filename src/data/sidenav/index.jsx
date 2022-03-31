import { homeRun } from "../../assets";

const sidenav = {
  items: [
    {
      label: "Dashboard",
      icon: <img src={homeRun} alt="Master Data Management" />,
      href: "/dashboard",
    },
    {
      label: "Master Data Management",
      icon: <img src={homeRun} alt="Master Data Management" />,
      href: "/",
      items: [
        {
          label: "Standard Mark-Up",
          href: "/",
        },
        {
          label: "Standard Service Fee",
          href: "/",
        },
        {
          label: "Fee Type",
          href: "/",
        },
        {
          label: "Freequent Traveler Program",
          href: "/",
        },
        {
          label: "Standard Ancillar Fee",
          href: "/",
        },
        {
          label: "Rating Type",
          href: "/",
        },
        {
          label: "Setup Flight Comission",
          href: "/",
        },
        {
          label: "Special Dates",
          href: "/",
        },
        {
          label: "Corporate Rating",
          href: "/",
        },
      ],
    },
  ],
};

export default sidenav;
