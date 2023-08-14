// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";


// Images
import { Typography } from "@mui/material/styles/createTypography";

const date = new Date().getFullYear();
// import logoCT from "assets/images/logo-ct-dark.png";
import logoCT from "../src/assets/logo-ct-dark.png"


export default {
  brand: {
    name: "Logo",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "",
    },
    {
      icon: <TwitterIcon />,
      link: "",
    },
    {
      icon: <GitHubIcon />,
      link: "",
    },
    {
      icon: <YouTubeIcon />,
      link: "",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creative-tim.com/presentation" },
        { name: "freebies", href: "https://www.creative-tim.com/templates/free" },
        { name: "premium tools", href: "https://www.creative-tim.com/templates/premium" },
        { name: "blog", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
        { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creative-tim.com/" },
        { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
      ],
    },
  ],
  // copyright: (
    
  //   <Typography variant="button" fontWeight="regular">
  //     All rights reserved. Copyright &copy; {date} Edtech by{" "}
  //     <Typography
  //       component="a"
  //       href="/"
  //       target="_blank"
  //       rel="noreferrer"
  //       variant="button"
  //       fontWeight="regular"
  //     >
  //       Codebuddy
  //     </Typography>
  //     .
  //   </Typography>
  // ),
};
