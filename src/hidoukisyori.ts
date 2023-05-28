import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime = performance.now();
readFile("test.txt", "utf8", (err, result) => {
  const endTime = performance.now();
  console.log(`${endTime - startTime}ミリ秒かかりました`);
});
