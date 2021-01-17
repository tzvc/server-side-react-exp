import * as React from 'react';
import SubTestComponent from './SubTestComponent';

interface TestComponentProps {
  language: 'en' | 'fr';
}

export default function TestComponent({ language = 'en' }: TestComponentProps) {
  return (
    <>
      {language === 'en' ? <div>Hello</div> : <div>Bonjour</div>}
      <SubTestComponent language={language} />
    </>
  );
}
