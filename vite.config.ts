import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import fs from "fs";
import solid from "vite-plugin-solid";

export default defineConfig({
    plugins: [
        solid(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: false,
            outDir: "http",
            injectRegister: null,
            includeManifestIcons: true,
            injectManifest: {
                injectionPoint: "VITE_PLUGIN_MANIFEST",
                additionalManifestEntries: ["sw.js", "/"],
                globPatterns: [
                    "**/*.{js,css,html,ico,png,svg,xml,json}",
                    "icons/*.{png,svg}",
                    "assets/*.{js,css,html,ico,png,svg,xml,json}",
                ],
            },
            strategies: "injectManifest",
        }),
    ],
    server: {
        https: {
            key: fs.readFileSync("../https_cert-key.pem"),
            cert: fs.readFileSync("../https_cert.pem"),
        },
    },
    preview: {
        port: 4173,
    },
    build: {
        sourcemap: true,
        outDir: "./http",
        emptyOutDir: true,
    },
});
