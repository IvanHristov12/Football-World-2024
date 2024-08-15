# Football World 2024

This project is a React Single Page Application (SPA) designed to handle basic CRUD operations within a football-focused platform. It was developed as a project for Softuni React 2024 and serves as a comprehensive demonstration of modern React practices, including the use of hooks, context, and API integration.

# Features

CRUD Operations: Users can create, read, update, and delete posts related to football discussions.
API Integration: The application integrates with the Football API from API-Sports to display current standings and upcoming fixtures for various football leagues.
Responsive Design: The application is built with Tailwind CSS, ensuring a responsive and user-friendly interface across all devices.
Authentication: Basic authentication features are implemented to allow users to manage their own posts securely.

# Important Notice

The Football API used in this project has a limit of 100 requests per day as of now. Due to this limitation, some pages related to specific football competitions might not function as expected if the API request limit has been exceeded. This issue is not related to the development of the application but rather to the restrictions imposed by the API provider. If you encounter issues accessing the standings or fixtures, please try again later when the API limit resets.

# API Information

API Provider: API-Football by API-Sports
Daily Request Limit: 100 requests
Request Throttling: Please be aware of the request limit, especially during testing or when viewing competition pages multiple times.

## 1. Initialize Project
 - [x] Initialize git repository
 - [x] Add softuni practice server
 - [x] Add base vite react project
 - [x] Cleanup vite
 - [x] Create folder structure
## 2. React Router
 - [x] Install react-router-dom
 - [x] Setup react-router-dom
 - [x] Add routes in App.jsx 
 - [x] Add links in navigation 
## 3. Create Custom Fetch hook
 - [x] Custom useFetch Hook
 - [x] Preseed practice server
## 4. Page Implementation
 - [x] Home
 - [x] Competitions
   - [x] England
   - [x] France
   - [x] Germany
   - [x] Italy
   - [x] Spain
 - [x] Login
 - [x] Register
 - [x] Forum
   - [x] Post Details Link
   - [x] Details route
   - [x] Details page
   - [x] Create Forum Post Page
   - [x] Create Forum Post Page Functionality
 - [x] About us 
## 5. Comments
  - [x] Post comments to server
  - [x] Read comments from server
  - [x] Update comments in the component
  - [x] Add comments in the component
  - [x] Clear form
## 6. API Hooks
  - [x] Form Hook
  - [x] PostAPI Hooks
  - [x] Comment Hooks
## 7. Authentication
  - [x] Auth API
    - [x] Login
    - [x] Register
    - [x] Logout
  - [x] Auth API Hook
    - [x] Login
    - [x] Register
    - [x] Logout
  - [x] Auth state & context
  - [x] Token management
  - [x] Login
  - [x] Register
  - [x] Logout
  - [x] Authorized Requests
## 8. UI Implementation
  - [x] Dynamic Navigation
  - [x] Create post 
    - [x] Api function
    - [x] Create hook
 - [x] About us 
 - [x] Delete post
 - [x] Edit post
## 9. Refactoring
 - [x] Extract state from App component
 - [x] Persist auth state
 - [x] Comments