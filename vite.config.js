import react from "@vitejs/plugin-react";

export default {
  root: "src/",
  publicDir: "../public",
  plugins: [react()],
  server: {
    hot: true,
  },
};
