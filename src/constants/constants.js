export const projects = [
  {
    title: 'Face Mask Detection Web App',
    description: "Web app using Flask as the backend and Tensorflow as the open-source ML library that allows you to upload an image, and detects whether or not the person in the image is wearing a face mask using a custom network based on the MobileNetV1.0 architecture.",
      image: '/images/facemask.jpg',
      tags: ['Flask', 'Tensorflow', 'Keras'],
    source: 'https://medium.com/mlearning-ai/deploy-a-face-mask-detection-web-app-with-flask-part-1-10c19722bf0',
    visit: 'https://github.com/AReyH/mask_detection',
    id: 0,
  },
  {
    title: 'Music Generation Using Recurrent Neural Netowrks',
    description: "Recurrent Neural Network trained on a dataset of LoFi songs and sounds, which generates full length LoFi songs which are then uploaded to SoundCloud. Authored article on Medium about the subject, and published by MLearning.ai.",
    image: '/images/shapes.PNG',
    tags: ['Tensorflow','Keras','LoFi','Music Generation'],
    source: 'https://arturorey.medium.com/how-to-generate-music-using-machine-learning-72360ba4a085',
    visit: 'https://github.com/AReyH/ai-generated-music',
    id: 3,
  },
  {
    title: 'Shape Predictor with Javascript Canvas',
    description: "Web app created using React as frontend and Flask as backend. The app allows you to draw a shape on a canvas a predicts the shape using a MobileNet V2.0 network architecture. ",
    image: '/images/shapes.PNG',
    tags: ['React','Flask','Tensorflow','Keras'],
    source: 'https://medium.com/swlh/league-of-legends-win-prediction-5f5516c4b1d7',
    visit: 'https://github.com/AReyH/shape_prediction',
    id: 1,
  },
  {
    title: 'End-to-End Machine Learning',
    description:"Article written on Medium, published by Geek Culture. The article shows the life cycle of a Machine Learning project on predicting car prices, starting with data collection, model selection and ending on the deployment of the web app containing the model.",
    image: '/images/endtoend.jpg',
    tags: ['Scikit Learn','Streamlit'],
    source: 'https://medium.com/geekculture/end-to-end-machine-learning-project-6d08b8915bdc',
    visit: 'https://medium.com/geekculture/end-to-end-machine-learning-project-6d08b8915bdc',
    id: 2,
  },
  {
    title: 'Lyft Surge Pricing Prediction',
    description: "Article written on Medium and published by The Startup. The article talks about how to deal with an imbalanced dataset using SMOTE. Trained on several models including Random Forest and Extra Trees.",
      image: '/images/lyft.jpg',
      tags: ['Scikit Learn','imbalanced-learn'],
    source: 'https://medium.com/swlh/lyft-surge-pricing-prediction-aa96114d9e1c',
    visit: 'https://medium.com/swlh/lyft-surge-pricing-prediction-aa96114d9e1c',
    id: 3,
  },
  {
    title: 'League of Legends Outcome Prediction',
    description: "Web app created using Streamlit as the open-source app, and Scikit Learn as the open-source ML library. This web app uses a Random Forest classifier to predict the outcome of a game based on accessible information taken from the Riot API.",
    image: '/images/lol.jpg',
    tags: ['Scikit Learn','Tensorflow','Riot API','Keras'],
    source: 'https://medium.com/swlh/league-of-legends-win-prediction-5f5516c4b1d7',
    visit: 'https://github.com/AReyH/LoL_Game_Predictor',
    id: 1,
  },
  
];

export const TimeLineData = [
  { year: 2018, text: 'Started my journey as a Python developer', },
  { year: 2019, text: 'Deployed my first web app', },
  { year: 2020, text: 'Started working as a freelance Data Analyst', },
  { year: 2021, text: 'Published my first article on Medium, and completed Web Development Specialization', },
  { year: 2022, text: "Started leading Machine Learning for Predictive Maintenance Project. Graduated with Honors Correlation One's Data Science 4 All.", },
];
