# Angular Weather Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Key](#api-key)
- [Technologies Used](#technologies-used)
- [Bonus Features](#bonus-features)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The **Angular Weather Application** is a responsive web application built with Angular and Angular Material. It allows users to search for any city worldwide and view the current weather conditions along with a 5-day forecast. The application integrates seamlessly with the OpenWeatherMap API to fetch real-time weather data.

## Features

- **City Search:** Users can search for a city's current weather and forecast.
- **Current Weather Display:** Shows temperature, humidity, and weather description.
- **5-Day Forecast:** Displays date, high and low temperatures, and weather descriptions.
- **Error Handling:** Alerts users for invalid city names or failed API requests.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Favorites (Bonus):** Save and manage a list of favorite cities.
- **Caching (Bonus):** Cache weather data to reduce API calls and improve performance.
- **Unit Testing (Bonus):** Ensure application reliability with comprehensive tests.

## Demo

![Live Demo](./live-demo.gif)

_Include a GIF or link to a live demo if available._

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Install [Node.js](https://nodejs.org/) (v14 or higher recommended).
- **Angular CLI:** Install Angular CLI globally if not already installed.

  ```bash
  npm install -g @angular/cli
  ```

- **Git:** Ensure Git is installed to clone the repository.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/KOJIOTOB/angular-weather-app.git
   cd angular-weather-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create an `environment.ts` file in the `src/environments` directory and add your OpenWeatherMap API key:

   ```typescript
   // src/environments/environment.ts
   export const environment = {
     production: false,
     openWeatherMapApiKey: "YOUR_API_KEY_HERE",
     openWeatherMapApiUrl: "https://api.openweathermap.org/data/2.5",
   };
   ```

   **Note:** Replace `'YOUR_API_KEY_HERE'` with your actual OpenWeatherMap API key. You can obtain one by signing up at [OpenWeatherMap](https://openweathermap.org/api).

### Running the Application

Start the development server:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you make any changes to the source files.

## Usage

1. **Search for a City:**

   - Enter the name of a city in the search input field.
   - Click the search button or press Enter.

2. **View Current Weather:**

   - Displays the city's name, temperature, humidity, and a brief weather description.

3. **View 5-Day Forecast:**

   - Scroll through the forecast cards to view weather predictions for the next five days.

4. **Manage Favorites:**
   - Save your favorite cities for quick access.
   - Click on a favorite city to view its weather data.

## API Key

The application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. To obtain an API key:

1. **Sign Up:**

   - Create an account on [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

2. **Generate API Key:**

   - Navigate to the API keys section in your account dashboard.
   - Generate a new API key.

3. **Configure API Key:**
   - Add the API key to your Angular application's environment configuration as shown in the [Installation](#installation) section.

## Technologies Used

- **Angular:** Frontend framework for building the application.
- **Angular Material:** UI component library for styling and responsive design.
- **OpenWeatherMap API:** External API for fetching weather data.
- **RxJS:** Reactive programming for handling asynchronous data streams.
- **TypeScript:** Superset of JavaScript for type-safe code.

## Bonus Features

### Caching Weather Data

- **Purpose:** Reduce the number of API calls and improve performance by caching weather data for each searched city.
- **Implementation:** Weather data is cached locally with a timestamp. Data is fetched from the cache if it's less than one hour old; otherwise, a new API request is made.

### Favorite Cities

- **Purpose:** Allow users to save and manage a list of their favorite cities for quick access.
- **Implementation:** Favorite cities are stored in the browser's local storage. Users can add or remove cities from their favorites list.

### Unit Testing

- **Purpose:** Ensure application reliability and maintainability.
- **Implementation:** Comprehensive unit tests are written for components and services using Jasmine and Karma.

## Testing

To run unit tests:

```bash
ng test
```

This command launches the Karma test runner and executes all unit tests.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeatureName
   ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Viktor Kolotov:** kolotov.v91@gmail.com
- **GitHub:** https://github.com/KOJIOTOB
- **LinkedIn:** https://www.linkedin.com/in/viktor-kolotov-903b27229/
