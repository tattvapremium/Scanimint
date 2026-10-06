import {GoogleGenAI} from '@google/genai';
export async function askGemini(prompt:string){
 const key=process.env.GOOGLE_API_KEY;
 if(!key) return null;
 const ai=new GoogleGenAI({apiKey:key});
 const r=await ai.models.generateContent({model:'gemini-2.5-flash',contents:prompt});
 return r.text ?? null;
}
