"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const perf_hooks_1 = require("perf_hooks");
const startTime = perf_hooks_1.performance.now();
(0, fs_1.readFile)("test.txt", "utf8", (err, result) => {
    const endTime = perf_hooks_1.performance.now();
    console.log(`${endTime - startTime}ミリ秒かかりました`);
});
