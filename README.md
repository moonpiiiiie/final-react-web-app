# Dog-Friendly Restaurants

## Introduction

The Dog-Friendly Restaurant Finder is a full-stack web application designed to make it easier for dog owners to find dog-friendly restaurants in their area. This project aims to provide a seamless and convenient way for dog owners to discover restaurants where they can enjoy a meal or snack with their furry companions.

### Home Page

![Home Page](https://github.com/moonpiiiiie/final-react-web-app/blob/main/src/images/Detailed%20Page.png?raw=true)

### Detailed Page

![Detailed Page](https://github.com/moonpiiiiie/final-react-web-app/blob/main/src/images/Home%20Page.png?raw=true)

### Regristration Page

![Regristration Page](https://github.com/moonpiiiiie/final-react-web-app/blob/main/src/images/Registration%20Page.png?raw=true)

### Search Page

![Search Page](https://github.com/moonpiiiiie/final-react-web-app/blob/main/src/images/Search%20Page.png?raw=true)

## How It Works

The application utilizes the Yelp API to fetch restaurant details, such as name, location, contact information, and user ratings, in JSON format. The backend server, built with Node.js, acts as an intermediary between the client-side application and the Yelp API. It handles requests from the frontend, communicates with the Yelp API to retrieve the necessary data, and sends the fetched restaurant details back to the client for display.

To enhance the user experience and provide additional features, the application also leverages MongoDB as its database. MongoDB stores and manages data such as user preferences, favorite restaurants, and reviews. This enables personalized recommendations and allows users to keep track of their favorite dog-friendly dining spots.

## Features

- **Search for Dog-Friendly Restaurants**: Users can enter their location or use geolocation services to find dog-friendly restaurants in their area.
- **Detailed Restaurant Information**: The application displays comprehensive details for each restaurant, including ratings, reviews, photos, and contact information.
- **Favorite and Save Restaurants**: Users can mark restaurants as favorites and save them for future reference.
- **Write and Read Reviews**: Users can leave reviews for restaurants they have visited and read reviews from other dog owners.
- **User Authentication**: The application supports user registration and authentication, allowing users to access personalized features and securely store their preferences.

## Technologies Used

- **Frontend**: The client-side of the application is built using modern web technologies such as HTML, CSS, and JavaScript. Additional libraries and frameworks, such as React, may be used to enhance the user interface and interactivity.
- **Backend**: The backend server is developed with Node.js, leveraging its lightweight and efficient nature for handling API requests and data management.
- **API Integration**: The application integrates with the Yelp API to retrieve restaurant details, leveraging its extensive database and rich information about local businesses.
- **Database**: MongoDB is used as the database for storing user preferences, favorite restaurants, and reviews. MongoDB's flexibility and scalability make it ideal for managing dynamic data.
- **Deployment**: The application can be deployed on cloud platforms such as Heroku or AWS, ensuring availability and scalability.
