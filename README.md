# GitHub User Avatar Fetcher

## Objective

The objective of this project is to develop a web application using React that allows users to input a GitHub username. Upon entering a username, the application fetches the user's avatar image from the GitHub API and displays it. To enhance user experience and prevent excessive API calls, the project implements debouncing using a custom hook called `useDebounce`.

## User Interface (UI)

The application provides a simple and user-friendly UI with the following components:

- A text input box where users can enter a GitHub username.
- An image container to display the user's avatar image.

## GitHub API Integration

- The project integrates with the GitHub API to fetch user information, specifically the user's avatar image.
- It effectively handles API requests and responses.

## Avatar Display

- Upon a successful API response, the user's avatar image is displayed in the designated container.

## Debouncing with `useDebounce` Hook

The project incorporates debouncing to improve performance and prevent excessive API calls while users are typing in the input box. This is achieved through the `useDebounce` custom hook, which works as follows:

- The `useDebounce` hook takes an input value and a specified delay time as arguments.
- It implements debounce logic using `setTimeout`.
- The debounced value is returned after the specified delay has passed.

## Getting Started

Follow these steps to run the project on your local machine:

1. Clone the repository:

    git clone https://github.com/DEVnitishOfficial/Github_Api_Project.git

2. Navigate to the project directory:
    cd Github_Api_Project

3. Install dependencies:
    npm install

   *********This 4th step is optional if you are blocked from the github api access then use this step otherewise you can escape this step
4. Create a GitHub Personal Access Token (PAT) if you don't have one. Replace YOUR_PAT_HERE in Github.jsx   with your actual GitHub PAT:

headers: {
  Authorization: 'Bearer YOUR_PAT_HERE'
}

5. Start the development server:
npm start



## Usage

Enter a GitHub username in the input box.
The user's avatar image will be displayed upon successful API response.
The application effectively debounces input to prevent excessive API calls while typing.


##  Custom Debounce Hook (useDebounce)

The useDebounce hook is implemented in the project to manage the debouncing functionality. It can be reused in other components or projects as needed.