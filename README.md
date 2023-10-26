# ChitChat - A Simple Chat Application

ChitChat is a basic chat application built with React, Node.js, and ChatEngine.io. It provides a simple and intuitive platform for users to enter their usernames and start chatting with others in real-time.


## Features

- **User-friendly Interface:** ChitChat offers an easy-to-use interface that allows users to quickly get started without any complications.

- **Real-Time Chat:** Engage in real-time conversations with other users, sending and receiving messages instantly.

- **Custom Usernames:** Choose a unique username to personalize your identity in the chat room.

- **Responsive Design:** ChitChat is designed to work seamlessly on various devices, including desktops, tablets, and smartphones.

## Technologies Used

- **React:** The front-end of ChitChat is built using React, a popular JavaScript library for building user interfaces.

- **Node.js:** The back-end is powered by Node.js, which facilitates real-time communication and data handling.

- **ChatEngine.io:** ChatEngine.io is utilized for real-time chat functionality, making it easy to manage users, messages, and more.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/chitchat.git
   ```

2. Install the required dependencies for both the client and server:

   ```
   cd chitchat
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Create a `.env` file in the server directory and set up the following environment variables:
   ```
   PROJECTID=your-chat-engine-project-id
   USERNAME=your-admin-username
   USERSECRET=your-admin-secret
   ```

   Replace the placeholders with your actual ChatEngine.io credentials.

4. Start the client and server:

   ```
   cd client
   npm start
   ```

   ```
   cd server
   npm start
   ```

5. Open your browser and access the application at `http://localhost:3000`.

## Usage

1. Launch the ChitChat application.

2. Enter your desired username to join the chat room.

3. Start chatting with other users in real-time.

