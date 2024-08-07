import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Vite configuration for Storybook with TypeScript path aliases
export default defineConfig({
  plugins: [tsconfigPaths()],
});
