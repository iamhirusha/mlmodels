export async function predictFraud(formData) {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict_fraud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Day_of_Week: formData.day_of_week,
          Time: Number(formData.time),
          Type_of_Card: formData.type_of_card,
          Entry_Mode: formData.entry_mode,
          Amount: Number(formData.amount),
          Type_of_Transaction: formData.type_of_transaction,
          Merchant_Group: formData.merchant_group,
          Country_of_Transaction: formData.country_of_transaction,
          Country_of_Residence: formData.country_of_residence,
          Gender: formData.gender,
          Age: Number(formData.age),
          Bank: formData.bank,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to get prediction");
      }
  
      const data = await response.json();
      return { success: true, predictedFraud: data.predicted_fraud };
    } catch (error) {
      console.error("API Error:", error);
      return { success: false, error: "Prediction Error. Please try again." };
    }
  }
  