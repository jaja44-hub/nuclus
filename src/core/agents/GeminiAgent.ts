export const GeminiAgent = {
  invoke: async (prompt: string, context: Record<string, any>) => {
    return { response: { reply: `Echo: ${prompt}` } };
  }
};
