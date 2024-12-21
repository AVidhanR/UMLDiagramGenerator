import { DiagramGenerator } from "@/components/diagram-generator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            UML Diagram Generator
          </h1>
          <p className="text-lg text-muted-foreground">
            Generate professional UML diagrams from code and descriptions
          </p>
        </div>
        <DiagramGenerator />
      </div>
    </main>
  );
}
