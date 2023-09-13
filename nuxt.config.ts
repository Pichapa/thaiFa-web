// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from "@nuxt/schema";

const config: NuxtConfig = {
  app: {
    head: {
      title: "ThaiFa",
      script: [],
    },
  },
  css: ["bootstrap/dist/css/bootstrap.css"],
  plugins: [{ src: "~/plugins/bootstrap.js", mode: "client" }],
  modules: ["@pinia/nuxt"],
};

export default config;
