import { Menu } from "@/app/sgmcoe/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/sgmcoe",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/sgmcoe/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/sgmcoe/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/sgmcoe/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/sgmcoe/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/sgmcoe/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/sgmcoe/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/sgmcoe/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/sgmcoe/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/sgmcoe/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/sgmcoe/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/sgmcoe/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
