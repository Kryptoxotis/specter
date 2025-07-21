const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function respond(message) {
  // Replace this with your actual OpenAI call logic, using the message argument
  const response = await openai.responses.create({
    model: "o4-mini", // or your preferred model
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: message }
        ]
      }
    ]
  });
  return response; // or response.choices[0].message.content, etc.
}

module.exports = { respond };
