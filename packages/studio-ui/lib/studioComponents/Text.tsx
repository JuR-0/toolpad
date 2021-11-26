import React from 'react';
import type { StudioComponentDefinition } from '../types';

interface TextComponentProps {
  value: string;
}

function TextComponent({ value, ...props }: TextComponentProps) {
  return (
    <div {...props} style={{ padding: 10 }}>
      {value}
    </div>
  );
}

const defaultValue = 'Text';

const Text: StudioComponentDefinition<TextComponentProps> = {
  Component: React.memo(TextComponent),
  props: { value: { type: 'string', defaultValue } },
  render(context, node, resolvedProps) {
    context.addImport('@mui/material/Button', 'default', 'Button');
    const { value, ...other } = resolvedProps;
    return `
      <div 
        ${context.renderRootProps(node.id)} 
        style={{ padding: 10 }} 
        ${context.renderProps(other)}
      >
        {${value || '""'}}
      </div>
    `;
  },
};

export default Text;
