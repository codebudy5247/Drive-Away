import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../components/themes/Box/MUIBox";
import MKTypography from "../../components/themes/Typography/MUITypography";
import { Box, Typography } from "@mui/material";

// Define the types for the props
interface Social {
  icon: React.ReactNode;
  link: string;
}

interface MenuItem {
  name: string;
  route?: string;
  href?: string;
}

interface Content {
  brand: {
    route: string;
    image: string;
    name: string;
  };
  socials: Social[];
  menus: {
    name: string;
    items: MenuItem[];
  }[];
  copyright?: string;
}

interface DefaultFooterProps {
  content: Content;
}

const DefaultFooter: React.FC<DefaultFooterProps> = ({ content }) => {
  const { brand, socials, menus } = content;

  return (
    <Box component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <Box>
              <Link to={brand.route}>
                <Box
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  maxWidth="2rem"
                  mb={2}
                />
              </Link>
              <Typography variant="h6">{brand.name}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <Typography
                  key={link}
                //   component="a"
                //   href={link}
                //   target="_blank"
                //   rel="noreferrer"
                //   variant="h5"
                //   color="dark"
                //   opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </Typography>
              ))}
            </Box>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <Typography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </Typography>
              <Box component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <Box
                    key={name}
                    component="li"
                    p={0}
                    m={0}
                    lineHeight={1.25}
                  >
                    {href ? (
                      <Typography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </Typography>
                    ) : (
                      <Typography
                        // component={Link}
                        // to={route}
                        // variant="button"
                        // fontWeight="regular"
                        // textTransform="capitalize"
                      >
                        {name}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          {/* <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default DefaultFooter;
