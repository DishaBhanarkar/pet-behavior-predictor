from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

# Load models
model_hunger = pickle.load(open("model_hunger.pkl", "rb"))
model_behavior = pickle.load(open("model_behavior.pkl", "rb"))
encoders = pickle.load(open("encoders.pkl", "rb"))

@app.route("/")
def home():
    return "API is running 🚀"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    try:
        # Encode input
        input_data = []
        for col in ["TimeOfDay", "MealSize", "ActivityLevel", "WaterIntake", "DayType"]:
            value = data[col]
            encoded = encoders[col].transform([value])[0]
            input_data.append(encoded)

        input_array = np.array([input_data])

        # Predictions
        hunger_pred = model_hunger.predict(input_array)[0]
        behavior_pred = model_behavior.predict(input_array)[0]

        return jsonify({
            "hunger": "Yes" if hunger_pred == 1 else "No",
            "behavior": "Unusual" if behavior_pred == 1 else "Normal"
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)