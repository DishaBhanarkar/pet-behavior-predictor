import pandas as pd
import pickle
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

print("🚀 Script started...")

# Load dataset
df = pd.read_csv("pet_behavior_dataset_500.csv")
print("✅ Dataset loaded")

# -------- Encode categorical columns --------
categorical_cols = ["TimeOfDay", "MealSize", "ActivityLevel", "WaterIntake", "DayType"]

encoders = {}

for col in categorical_cols:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le

print("✅ Encoding done")

# -------- Encode targets --------
df["HungrySoon"] = df["HungrySoon"].map({"No": 0, "Yes": 1})
df["BehaviorStatus"] = df["BehaviorStatus"].map({"Normal": 0, "Unusual": 1})

# -------- Features --------
X = df.drop(["HungrySoon", "BehaviorStatus"], axis=1)

# -------- Model 1: Hunger --------
y1 = df["HungrySoon"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y1, test_size=0.2, random_state=42
)

model_hunger = DecisionTreeClassifier()
model_hunger.fit(X_train, y_train)

pred1 = model_hunger.predict(X_test)
print("Hunger Accuracy:", accuracy_score(y_test, pred1))

# -------- Model 2: Behavior --------
y2 = df["BehaviorStatus"]

X_train2, X_test2, y_train2, y_test2 = train_test_split(
    X, y2, test_size=0.2, random_state=42
)

model_behavior = DecisionTreeClassifier()
model_behavior.fit(X_train2, y_train2)

pred2 = model_behavior.predict(X_test2)
print("Behavior Accuracy:", accuracy_score(y_test2, pred2))

# -------- SAVE FILES --------
print("📁 Saving in:", os.getcwd())

pickle.dump(model_hunger, open("model_hunger.pkl", "wb"))
pickle.dump(model_behavior, open("model_behavior.pkl", "wb"))
pickle.dump(encoders, open("encoders.pkl", "wb"))

print("✅ Models and encoders saved successfully!")
