import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  // Only allow GET requests
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "Helix BioWorks API",
    }),
  };
};

export { handler };
