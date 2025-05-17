
import { FormData, Recommendation } from "../types";

// Mock API response for development
const MOCK_RESPONSE: Recommendation = {
  "Recommended_Platform": "Meitav Dash",
  "Reasoning": "Matched due to strong historical performance, high liquidity, and excellent self-management tools.",
  "Alternative_Options": {
    "Most_Affordable_Platform": "Interactive Brokers",
    "Most_Accessible_Platform": "eToro"
  }
};

export async function submitQuestionnaire(formData: FormData): Promise<Recommendation> {
  try {
     const response = await fetch('https://tradar-api.onrender.com/recommend', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     });
    
     if (!response.ok) {
       throw new Error('API request failed');
     }
    
    return await response.json();
    
    // Mock response with a slight delay to simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_RESPONSE);
      }, 800);
    });
  } catch (error) {
    console.error('Error submitting questionnaire:', error);
    throw error;
  }
}
