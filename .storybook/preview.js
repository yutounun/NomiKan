// Without the following code, you cannot use tailwind with storybook
import "tailwindcss/tailwind.css";
const customViewports = {
  iphone8: {
    name: "iphone8",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
};

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
    defaultViewport: "iphone8",
  },
};
