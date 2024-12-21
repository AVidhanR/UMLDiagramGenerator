"use client";

import { Activity, GitBranch, Users } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DiagramType } from '@/lib/templates/diagram-templates';

export const diagramTypeConfig = {
  useCase: {
    name: 'Use Case Diagram',
    icon: Users,
    description: 'Show system actors and their interactions',
  },
  sequence: {
    name: 'Sequence Diagram',
    icon: GitBranch,
    description: 'Illustrate object interactions over time',
  },
  activity: {
    name: 'Activity Diagram',
    icon: Activity,
    description: 'Represent workflows and processes',
  },
} as const;

interface DiagramTypeSelectorProps {
  value: DiagramType;
  onValueChange: (value: DiagramType) => void;
}

export function DiagramTypeSelector({ value, onValueChange }: DiagramTypeSelectorProps) {
  return (
    <div>
      <Label htmlFor="diagramType">Diagram Type</Label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select diagram type" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(diagramTypeConfig).map(([id, config]) => (
            <SelectItem key={id} value={id}>
              <div className="flex items-center gap-2">
                <config.icon className="h-4 w-4" />
                <span>{config.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground mt-2">
        {diagramTypeConfig[value].description}
      </p>
    </div>
  );
}