/*
 * SPDX-FileCopyrightText:  Copyright 2023 Roland Csaszar
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Project:  WASM-stuff
 * File:     esbuild-serve_config.js
 * Date:     25.Jun.2023
 *
 * ==============================================================================
 */
const esS = require("esbuild-server");
const fs = require("node:fs");

esS.createServer(
    {
        bundle: true,
        entryPoints: ["./src/main.ts"],
        outfile: "./http/app.js",
        sourcemap: "external",
    },
    {
        static: "http",
        port: 8080,
        https: {
            key: fs.readFileSync("../https_cert-key.pem"),
            cert: fs.readFileSync("../https_cert.pem"),
        },
    }
).start();
