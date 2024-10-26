# Dearborn Coding Club Website Front-end Documentation

## Overview

This document provides an overview of the front-end structure for the Dearborn Coding Club website. The application is built using React and React Router for navigation.

## File Structure

```
src/
├── main.tsx
├── App.tsx
├── pages/
│   ├── Home.tsx
│   └── Notes.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Card.tsx
├── contexts/
│   └── ThemeContext.tsx
└── css/
    ├── main.css
    ├── theme.css
    ├── App.css
    └── Home.css
```

## Component Hierarchy

1. `main.tsx`: Entry point of the application
2. `App.tsx`: Main component that sets up routing and layout
   - `Navbar`: Navigation component
   - `Routes`: Handles routing between pages
     - `Home`: Home page component
     - `Notes`: Notes page component
   - `Footer`: Footer component

## Routing

The application uses React Router for navigation. Routes are defined in `App.tsx`:

- `/`: Home page
- `/notes`: Notes page

## Key Components

### App.tsx

The main component that sets up the overall structure of the application. It includes:

- `Navbar` component
- `Routes` for handling navigation
- `Footer` component

### Home.tsx

The home page component. It showcases:

- Multiple `Card` components with information about the Dearborn Coding Club
- Links to GitHub repositories and Slack organization

### Notes.tsx

A simple notes page with:

- "Go Back" button for navigation
- Placeholder text for notes functionality

### ErrorPage.tsx

A custom error page component that displays when routing errors occur.

## Styling

The application uses a combination of CSS files and inline styles:

- `main.css`: Global styles
- `theme.css`: Theme-related styles
- `App.css`: Styles specific to the App component
- `Home.css`: Styles specific to the Home component

Some components (like `Notes.tsx` and `ErrorPage.tsx`) use inline styles for simplicity.

## Context

The application uses React Context for theme management:

- `ThemeContext.tsx`: Provides theme-related functionality to the entire app

## Contributing

To contribute to the front-end, follow our [CONTRIBUTING.md](https://github.com/dearborn-coding-club/website-base-frontend/blob/main/CONTRIBUTING.md) guidance, as well as the following general rules:

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/website-base-frontend.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test your changes locally
6. Commit your changes: `git commit -m "Add your commit message"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a pull request from your fork to the main repository

or if you are already a contributor to the project:

1. Clone the repository `git clone https://github.com/dearborn-coding-club/website-base-frontend.git`
2. Create a new branch: git checkout -b feature/your-feature-name
3. Test your changes locally
4. Commit your changes: `git commit -m "Add your commit message"`
5. Push to your branch: `git push -u origin feature/your-feature-name`
6. Create a pull request on the website-base-frontend repository

When contributing, please:
- Follow the guidance in our [CONTRIBUTING.md](https://github.com/dearborn-coding-club/website-base-frontend/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/dearborn-coding-club/website-base-frontend/blob/main/CODE_OF_CONDUCT.md) documents.
- Follow the existing code style and conventions
- Write clear, concise commit messages
- Update documentation as necessary
- Test your changes thoroughly before submitting a pull request

For any questions or clarifications, please reach out to the project maintainers or use the Slack channel.