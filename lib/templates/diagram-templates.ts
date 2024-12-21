export const diagramTemplates = {
  useCase: `graph TD
    User((User))
    A[Login]
    B[View Profile]
    C[Edit Settings]
    
    User --> A
    User --> B
    User --> C`,
    
  sequence: `sequenceDiagram
    actor User
    participant System
    participant Database
    
    User->>System: Request Data
    System->>Database: Query
    Database-->>System: Return Results
    System-->>User: Display Data`,
    
  activity: `stateDiagram-v2
    [*] --> Start
    Start --> Processing: Initialize
    Processing --> Decision
    Decision --> Success: Valid
    Decision --> Error: Invalid
    Success --> [*]
    Error --> Processing: Retry`
};

export type DiagramType = keyof typeof diagramTemplates;