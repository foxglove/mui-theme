import * as React from "react";
import { CssBaseline } from "@mui/material"

import customViewports from "./viewports";
import { createMuiTheme, ThemeProvider } from "../src/theme";

const darkTheme = createMuiTheme("dark");
const lightTheme = createMuiTheme("light");

const withThemeProvider = (Story, context) => {
  // Toggle dark mode theme on selected background from addons-background
  const darkBgOption = context.parameters.backgrounds?.values?.find((v) => v.name === "dark");
  const selectedBackground = context.globals.backgrounds;
  const isDark = selectedBackground && selectedBackground.value === darkBgOption.value;
  const theme = isDark ? darkTheme : lightTheme;
  
  return (
    <ThemeProvider isDark={isDark}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

const viewports = {
  ...customViewports,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  viewport: {
    viewports,
  },
};
