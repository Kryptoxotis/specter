const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// The rest of your code, converted to CommonJS:
// - Replace all `import ... from ...` with `const ... = require(...)`
// - Replace all `export default ...` or `export { ... }` with `module.exports = ...`
// - If you use top-level await, wrap it in an async function and export a function instead

// Example export for compatibility with server.js:
module.exports = {
  openai,
  // ...add other exports as needed
};
