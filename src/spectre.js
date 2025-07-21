const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function respond(message) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Change to your preferred model
      messages: [
        { role: "system", content: "You are Spectre, an autonomous senior developer and planner. Follow all rules and structure as described in the project." },
        { role: "user", content: message }
      ]
    });
    return response.choices[0].message.content;
  } catch (err) {
    console.error("Spectre error:", err);
    return "[Spectre error: " + err.message + "]";
  }
}

module.exports = { respond };
