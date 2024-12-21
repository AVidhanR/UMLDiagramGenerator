import mermaid from 'mermaid';

export const initializeMermaid = () => {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
    },
    sequence: {
      showSequenceNumbers: true,
      actorMargin: 50,
    },
    stateDiagram: {
      defaultRenderer: 'dagre',
    },
  });
};

export const generateDiagramSVG = async (code: string): Promise<string> => {
  try {
    const { svg } = await mermaid.render('diagram', code);
    return svg;
  } catch (error) {
    console.error('Error generating diagram:', error);
    throw new Error('Failed to generate diagram. Please check your syntax.');
  }
};