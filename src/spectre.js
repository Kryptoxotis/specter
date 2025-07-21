const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ...rest of your actual code, using CommonJS syntax...

// If you have any exports, use:
// module.exports = { ... }
