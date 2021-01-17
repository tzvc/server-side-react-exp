import * as React from 'react';
interface SubTestComponentProps {
  language: 'en' | 'fr';
}

export default function TestComponent({
  language = 'en',
}: SubTestComponentProps) {
  {
    return <div>{language == 'en' ? 'World!' : 'tout le monde!'}</div>;
  }
}
