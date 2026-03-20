# 🐾 Pet Behavior Predictor (ML-Based)

## 📌 Project Overview
The Pet Behavior Predictor is a machine learning-based web application that analyzes a pet’s daily activity data to predict its hunger level and behavioral state.

The system uses user inputs such as feeding time, activity level, sleep duration, and water intake to generate intelligent predictions in real time.

---

## 🤖 Machine Learning Approach
This project implements a **Decision Tree Classifier** to model and predict:

- 🍽️ Hunger Level (Hungry / Not Hungry)
- 🐶 Behavior State (Normal / Unusual)

### 🔍 Why Decision Tree?
- Easy to interpret and visualize
- Handles both numerical and categorical data
- Works well for rule-based behavioral prediction

### 📊 Model Performance
- Accuracy: **~95-97%**
- Trained on structured, labeled behavioral data
- Optimized using feature selection and basic tuning

---

## ⚙️ Features
- 📥 Interactive form for pet data input  
- ⚡ Real-time prediction using backend API  
- 📊 Confidence score visualization  
- 🎯 Dual prediction (Hunger + Behavior)  
- 💻 Clean and responsive UI  

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 🌐 Live Demo

- 🔗 Frontend: https://pet-behavior-predictor-new.vercel.app/  
- 🔗 Backend API: https://pet-backend-en8g.onrender.com  

---

## 🔄 How It Works

1. User enters pet-related inputs  
2. Frontend sends data to backend API  
3. Backend processes input using ML logic (Decision Tree)  
4. Predictions are returned with confidence score  
5. Results are displayed in the UI  

---

## 📊 Input Features

- Time of Day  
- Hours Since Last Meal  
- Last Meal Size  
- Activity Level  
- Sleep Hours  
- Water Intake  
- Day Type  

---

## 🛠️ Installation & Setup

### 1. Clone Repository
```bash
git clone <your-repo-link>
cd pet-behavior-predictor
