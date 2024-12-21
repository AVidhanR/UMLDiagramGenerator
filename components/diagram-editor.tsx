"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

interface DiagramEditorProps {
  code: string;
  description: string;
  onCodeChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
}

export function DiagramEditor({
  code,
  description,
  onCodeChange,
  onDescriptionChange,
}: DiagramEditorProps) {
  return (
    <Tabs defaultValue="code" className="mt-6">
      <TabsList>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="description">Description</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        <Textarea
          placeholder="Enter your diagram code here..."
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
          className="min-h-[300px] font-mono"
        />
      </TabsContent>
      <TabsContent value="description">
        <Textarea
          placeholder="Enter a description of what the diagram should represent..."
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          className="min-h-[300px]"
        />
      </TabsContent>
    </Tabs>
  );
}