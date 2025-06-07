import mermaid from 'mermaid';

export const createDiagram = async (definition) => {
  try {
    const { svg } = await mermaid.render('mermaid-svg', definition);
    return svg;
  } catch (error) {
    console.error('Mermaid parsing or rendering error:', error);
    return `<div class="text-red-500">Error rendering diagram: ${error.message}</div>`;
  }
}; 