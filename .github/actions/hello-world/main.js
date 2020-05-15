const core = require("@actions/core");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");

console.log(`Hello ${firstGreeting}`);
core.info(`Hello ${firstGreeting}`)
console.log(`Hello ${secondGreeting}`);
core.info(`Hello ${firstGreeting}`);
if (thirdGreeting) {
    console.log(`Hello ${thirdGreeting}`);
}