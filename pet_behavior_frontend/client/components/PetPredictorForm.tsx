import { useState } from "react";
import { Heart, AlertCircle, CheckCircle, Clock } from "lucide-react";

interface PredictionResult {
  hungryPrediction: string;
  behaviorPrediction: string;
  confidence: number;
  timestamp: string;
}

export default function PetPredictorForm() {
  // Form state
  const [formData, setFormData] = useState({
    timeOfDay: "morning",
    hoursSinceLastMeal: 4,
    lastMealSize: "medium",
    activityLevel: 5,
    sleepHours: 8,
    waterIntake: 2,
    dayType: "weekday",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "number" || name === "activityLevel" || name === "waterIntake"
          ? parseFloat(value)
          : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // TODO: Replace with your actual backend endpoint
      const response = await fetch("https://pet-backend-en8g.onrender.com/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to get prediction from server");
      }

      const data = await response.json();
      setPrediction({
        ...data,
        timestamp: new Date().toLocaleTimeString(),
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while getting prediction"
      );
      console.error("Prediction error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Pet Analysis
          </h2>
          <p className="text-muted-foreground mb-6">
            Enter your pet's current details to predict hunger and behavior
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 flex-1">
            {/* Time of Day */}
            <div className="space-y-2">
              <label
                htmlFor="timeOfDay"
                className="block text-sm font-semibold text-foreground"
              >
                Time of Day
              </label>
              <select
                id="timeOfDay"
                name="timeOfDay"
                value={formData.timeOfDay}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="morning">Morning (6am - 12pm)</option>
                <option value="afternoon">Afternoon (12pm - 6pm)</option>
                <option value="evening">Evening (6pm - 9pm)</option>
                <option value="night">Night (9pm - 6am)</option>
              </select>
            </div>

            {/* Hours Since Last Meal */}
            <div className="space-y-2">
              <label
                htmlFor="hoursSinceLastMeal"
                className="block text-sm font-semibold text-foreground"
              >
                Hours Since Last Meal
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  id="hoursSinceLastMeal"
                  name="hoursSinceLastMeal"
                  min="0"
                  max="24"
                  step="0.5"
                  value={formData.hoursSinceLastMeal}
                  onChange={handleInputChange}
                  className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-sm font-semibold text-primary min-w-12">
                  {formData.hoursSinceLastMeal}h
                </span>
              </div>
            </div>

            {/* Last Meal Size */}
            <div className="space-y-2">
              <label
                htmlFor="lastMealSize"
                className="block text-sm font-semibold text-foreground"
              >
                Last Meal Size
              </label>
              <select
                id="lastMealSize"
                name="lastMealSize"
                value={formData.lastMealSize}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>

            {/* Activity Level */}
            <div className="space-y-2">
              <label
                htmlFor="activityLevel"
                className="block text-sm font-semibold text-foreground"
              >
                Activity Level (1-10)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  id="activityLevel"
                  name="activityLevel"
                  min="1"
                  max="10"
                  step="1"
                  value={formData.activityLevel}
                  onChange={handleInputChange}
                  className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-sm font-semibold text-primary min-w-8">
                  {formData.activityLevel}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                1 = Very low, 10 = Very high
              </p>
            </div>

            {/* Sleep Hours */}
            <div className="space-y-2">
              <label
                htmlFor="sleepHours"
                className="block text-sm font-semibold text-foreground"
              >
                Sleep Hours (Last 24h)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  id="sleepHours"
                  name="sleepHours"
                  min="0"
                  max="24"
                  step="1"
                  value={formData.sleepHours}
                  onChange={handleInputChange}
                  className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-sm font-semibold text-primary min-w-12">
                  {formData.sleepHours}h
                </span>
              </div>
            </div>

            {/* Water Intake */}
            <div className="space-y-2">
              <label
                htmlFor="waterIntake"
                className="block text-sm font-semibold text-foreground"
              >
                Water Intake (Last 24h, in cups)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  id="waterIntake"
                  name="waterIntake"
                  min="0"
                  max="10"
                  step="0.5"
                  value={formData.waterIntake}
                  onChange={handleInputChange}
                  className="flex-1 h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-sm font-semibold text-primary min-w-12">
                  {formData.waterIntake}
                </span>
              </div>
            </div>

            {/* Day Type */}
            <div className="space-y-2">
              <label
                htmlFor="dayType"
                className="block text-sm font-semibold text-foreground"
              >
                Day Type
              </label>
              <select
                id="dayType"
                name="dayType"
                value={formData.dayType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="weekday">Weekday</option>
                <option value="weekend">Weekend</option>
                <option value="holiday">Holiday</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" />
                  Get Prediction
                </>
              )}
            </button>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-900">Error</p>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Results Section */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-foreground mb-2">Results</h2>
          <p className="text-muted-foreground mb-6">
            Your pet's prediction analysis
          </p>

          {!prediction && !isLoading && (
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-muted rounded-lg p-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                <p className="text-muted-foreground">
                  Submit the form to see predictions
                </p>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="flex-1 flex items-center justify-center border-2 border-dashed border-muted rounded-lg p-8">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-muted-foreground">
                  Analyzing your pet's data...
                </p>
              </div>
            </div>
          )}

          {prediction && (
            <div className="space-y-4 flex-1">
              {/* Hunger Prediction */}
              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-start gap-3 mb-3">
                  <Heart className="w-5 h-5 text-hunger flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Hunger Prediction
                    </h3>
                    <p className="text-2xl font-bold text-hunger mt-1">
                      {prediction.hungryPrediction}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on meal timing and activity level
                </p>
              </div>

              {/* Behavior Prediction */}
              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-start gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-behavior flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Behavior Prediction
                    </h3>
                    <p className="text-2xl font-bold text-behavior mt-1">
                      {prediction.behaviorPrediction}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on activity, sleep, and water intake patterns
                </p>
              </div>

              {/* Confidence Score */}
              <div className="p-6 border border-border rounded-lg bg-card">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Confidence Score
                    </h3>
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-bold text-success">
                          {Math.round(prediction.confidence * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-success h-full rounded-full transition-all"
                          style={{
                            width: `${prediction.confidence * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timestamp */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                <Clock className="w-4 h-4" />
                <span>Predicted at {prediction.timestamp}</span>
              </div>

              {/* Clear Results Button */}
              <button
                onClick={() => setPrediction(null)}
                className="w-full mt-4 px-4 py-2 text-sm border border-input rounded-lg text-foreground hover:bg-muted transition-all"
              >
                New Analysis
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
