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
style A fill:#ffb3c1,stroke:#000,stroke-width:2px
style B fill:#ff9980,stroke:#000,stroke-width:2px
style C fill:#ff5a5a,stroke:#000,stroke-width:2px
style D fill:#e60033,stroke:#000,stroke-width:2px
style E fill:#60c3d0,stroke:#000,stroke-width:2px
style F fill:#f0edf9,stroke:#000,stroke-width:2px
style G fill:#d1c3f5,stroke:#000,stroke-width:2px
style H fill:#9a4bc6,stroke:#000,stroke-width:2px  
style I fill:#9a4bc6,stroke:#000,stroke-width:2px  
style J fill:#d43d71,stroke:#000,stroke-width:2px  
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