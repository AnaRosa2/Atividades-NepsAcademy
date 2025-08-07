const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let P = parseInt(input.split(" ")[0]);
let R = parseInt(input.split(" ")[1]);

if (P === 0) {
    console.log("C");
} else if (R === 0) {
    console.log("B");
} else {
    console.log("A");
}
