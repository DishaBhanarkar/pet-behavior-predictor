const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy ML prediction logic
app.post("/api/predict", (req, res) => {
  const {
    hoursSinceLastMeal,
    activityLevel,
    sleepHours,
    waterIntake,
  } = req.body;

  let hungryPrediction = "Not Hungry";
  let behaviorPrediction = "Normal";
  let confidence = 0.75;

  // Simple logic (replace later with ML model)
  if (hoursSinceLastMeal > 5 || activityLevel > 7) {
    hungryPrediction = "Hungry";
    confidence += 0.1;
  }

  if (sleepHours < 5 || waterIntake < 1) {
    behaviorPrediction = "Unusual";
    confidence += 0.1;
  }

  res.json({
    hungryPrediction,
    behaviorPrediction,
    confidence: Math.min(confidence, 1),
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});