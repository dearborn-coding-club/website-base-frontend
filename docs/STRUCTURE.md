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