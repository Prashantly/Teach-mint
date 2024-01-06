# User Directory

This project aims to create a simple user directory with several features:

## Features

- User List Display:

  - Show a list of user name cards with the total number of posts by each user.
  - Clicking a card navigates to the user’s profile page.

- User Profile Page
  - Display user profile with a country clock selector and posts displayed as cards.
  - Clock functions like a digital clock, showing the time from the selected country.
  - Includes a Pause/Start button to control the clock's functioning.

## Requirements

- Each user has a unique route to their page.
- Back button for easy navigation between pages.
- Responsive design ensuring compatibility with mobile views.
- User list served via states.

## APIs Used:

- Countries API:
  `http://worldtimeapi.org/api/timezone`
- Current Time API:
  `http://worldtimeapi.org/api/timezone/:area/:location[/:region]`
- Example usage: `http://worldtimeapi.org/api/timezone/America/Argentina/Salta`
- users :
  `https://jsonplaceholder.typicode.com/users`
- Posts :
  `https://jsonplaceholder.typicode.com/posts`

## Bonus Feature:

- Popup displaying complete post content on post click, closing when clicked outside.

## Clone the Project:

- git clone <https://github.com/Prashantly/Teach-mint.git>
- cd <your-project-folder>

## Project Setup:

### Install Dependencies:

`npm install`

### Run the Project:

`npm run dev`
