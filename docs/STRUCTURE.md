# Frontend Structure

Below is a diagram illustrating the structure of our frontend application:

```mermaid
graph TD
    A[main.tsx] -->|Renders| B[App.tsx]
    B --> C[BrowserRouter]
    C --> D[ThemeProvider]
    D --> E[Navbar]
    D --> F[Routes]
    D --> G[Footer]
    F --> H[Home]
    F --> I[Notes]
    H --> J[Card Component]
    style A fill:#f9d5e5,stroke:#333,stroke-width:2px
    style B fill:#eeac99,stroke:#333,stroke-width:2px
    style C fill:#e06377,stroke:#333,stroke-width:2px
    style D fill:#c83349,stroke:#333,stroke-width:2px
    style E fill:#5b9aa0,stroke:#333,stroke-width:2px
    style F fill:#d6d4e0,stroke:#333,stroke-width:2px
    style G fill:#b8a9c9,stroke:#333,stroke-width:2px
    style H fill:#622569,stroke:#333,stroke-width:2px
    style I fill:#622569,stroke:#333,stroke-width:2px
    style J fill:#843b62,stroke:#333,stroke-width:2px
```

## Diagram Explanation

- `main.tsx` is the entry point of our application.
- `App.tsx` is the main component that sets up the overall structure.
- We use `BrowserRouter` for handling routing in our application.
- `ThemeProvider` wraps our app to provide theming capabilities.
- `Navbar` and `Footer` are consistent across all pages.
- `Routes` component manages different page routes.
- `Home` and `Notes` are our main page components.
- `Card Component` is used within the `Home` page to display information.

The colors in the diagram represent different levels or types of components in our structure.