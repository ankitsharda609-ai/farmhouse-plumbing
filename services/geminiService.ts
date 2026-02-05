
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are a helpful and expert plumbing assistant for "Farmhouse Plumbing Repair" based in Ankeny, Iowa. 
Your expertise includes:
1. Secondary septic lateral line repair (biomat buildup, root infiltration).
2. Frost-proof outdoor yard hydrants (burial depths of 5-6ft in Iowa, plunger replacement, leaking packing nuts).
3. General farm plumbing (barn lines, pressure tanks, livestock watering).

Our location: 200 SW State St, Ankeny, IA 50023.
Our phone: (844) 340-6413.

Be professional, knowledgeable, and direct. If a problem sounds like an emergency or requires a pro, suggest they call us at (844) 340-6413.
Always refer to the local Iowa climate (harsh winters) when relevant.`;

export async function getPlumbingAdvice(message: string): Promise<string> {
  // Always initialize GoogleGenAI inside the call context to ensure the latest API key is used
  // and follow the mandatory named parameter pattern: { apiKey: process.env.API_KEY }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // The .text property returns the generated string directly (it is not a method)
    return response.text || "I'm not sure how to answer that. Let me connect you with a technician: (844) 340-6413.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technical error. Please reach us at (844) 340-6413 for immediate assistance.";
  }
}
