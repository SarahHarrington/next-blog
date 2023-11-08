import { buildLegacyTheme } from "sanity";

const props = {
  "--white": "#FFFFFF",
  "--dark-purple": "#19091c",
  "--md-purple": "#d25df7",
  "--lt-purple": "#f1dfff",
  "--lt-gray": "f7f7f7",
  "--md-gray": "#dfdfedf",
}

export const myTheme = buildLegacyTheme({
  
  "--black": props["--dark-purple"],
  "--white": props["--white"],

  "--component-bg": props["--dark-purple"],
  "--component-text-color": props["--white"],

  "--brand-primary": props["--md-purple"],

  "--default-button-color": props["--md-purple"],

  "--state-info-color": props["--md-purple"],
  "--main-navigation-color": props["--dark-purple"],
  "--main-navigation-color--inverted": props["--white"],

  "--focus-color": props["--md-purple"]
})


