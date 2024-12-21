"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DiagramTypeSelector } from './diagram-type-selector';
import { DiagramEditor } from './diagram-editor';
import { DiagramPreview } from './diagram-preview';
import { initializeMermaid, generateDiagramSVG } from '@/lib/mermaid-config';
import { diagramTemplates, DiagramType } from '@/lib/templates/diagram-templates';
import { useToast } from '@/hooks/use-toast';

export function DiagramGenerator() {
  const [diagramType, setDiagramType] = useState<DiagramType>('useCase');
  const [code, setCode] = useState(diagramTemplates.useCase);
  const [description, setDescription] = useState('');
  const [diagram, setDiagram] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    initializeMermaid();
  }, []);

  const handleDiagramTypeChange = (value: DiagramType) => {
    setDiagramType(value);
    setCode(diagramTemplates[value]);
  };

  const handleGenerateDiagram = async () => {
    try {
      const svg = await generateDiagramSVG(code);
      setDiagram(svg);
      toast({
        title: "Success",
        description: "Diagram generated successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate diagram",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <DiagramTypeSelector
            value={diagramType}
            onValueChange={handleDiagramTypeChange}
          />
        </div>

        <DiagramEditor
          code={code}
          description={description}
          onCodeChange={setCode}
          onDescriptionChange={setDescription}
        />

        <Button onClick={handleGenerateDiagram} className="mt-4">
          Generate Diagram
        </Button>
      </Card>

      <DiagramPreview svg={diagram} />
    </div>
  );
}