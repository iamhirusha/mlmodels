export async function predictDestinationCountry(formData) {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Gender: formData.gender,
          Age: Number(formData.age),
          Origin_Country: formData.origin_country,
          State: formData.state,
          Hotel_Rating: Number(formData.hotel_rating),
          No_of_Days: Number(formData.no_of_days),
          No_Of_People: Number(formData.no_of_people),
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to get prediction");
      }
  
      const data = await response.json();
      return { success: true, predictedCountry: data.predicted_country };
    } catch (error) {
      console.error("API Error:", error);
      return { success: false, error: "Prediction Error. Please try again." };
    }
  }
  