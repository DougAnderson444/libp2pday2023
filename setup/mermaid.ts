import { defineMermaidSetup } from "@slidev/types";

export default defineMermaidSetup(() => {
  return {
    theme: "default",
    themeVariables: {
      // yellow
      commitLabelBackground: "#f6e83b20",
    },
  };
});
