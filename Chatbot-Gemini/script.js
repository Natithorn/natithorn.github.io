

const apiKey = "AIzaSyBPbJ3JRm5ioJ9h70Uc79Qvlxf3KS4JE50"; 
const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

async function fetchAIResponse(prompt) {
  const requestBody = {
    contents: [
      {
        parts: [{ text: prompt }]
      }
    ]
  };

  try {
    const response = await fetch(`${apiUrl}?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response:", data);
    return data; 
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return null;
  }
}

// เรียกใช้งานฟังก์ชัน
fetchAIResponse("Explain how AI works")
  .then((data) => {
    if (data) {
      console.log("AI Output:", data);
    }
  });

document.getElementById("send-button").addEventListener("click", async () => {
    const userInput = document.getElementById("user-input").value;
    const responseDiv = document.getElementById("response");
  
    if (userInput.trim()) {
      responseDiv.innerHTML = "Loading...";
      const data = await fetchAIResponse(userInput);
  
      if (data && data.candidates && data.candidates.length > 0) {
        // ดึงข้อความตอบกลับ
        const message = data.candidates[0].content.parts[0].text;
        responseDiv.innerHTML = message;
      } else {
        responseDiv.innerHTML = "No response received. Please try again.";
      }
    } else {
      responseDiv.innerHTML = "Please enter a valid question.";
    }
  });
  
  
