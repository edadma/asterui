import React from 'react';
import { createRoot } from 'react-dom/client';
import { Steps } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Steps>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  ),
  vertical: (
    <Steps vertical>
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  ),
  colors: (
    <Steps>
      <Steps.Step color="info">Fly to moon</Steps.Step>
      <Steps.Step color="info">Shrink the moon</Steps.Step>
      <Steps.Step color="info">Grab the moon</Steps.Step>
      <Steps.Step color="success">Sit on toilet</Steps.Step>
    </Steps>
  ),
  'custom-content': (
    <Steps>
      <Steps.Step color="primary" dataContent="?">
        Step 1
      </Steps.Step>
      <Steps.Step color="primary" dataContent="!">
        Step 2
      </Steps.Step>
      <Steps.Step dataContent="✓">Step 3</Steps.Step>
      <Steps.Step dataContent="✕">Step 4</Steps.Step>
    </Steps>
  ),
  responsive: (
    <Steps className="steps-vertical lg:steps-horizontal">
      <Steps.Step color="primary">Register</Steps.Step>
      <Steps.Step color="primary">Choose plan</Steps.Step>
      <Steps.Step>Purchase</Steps.Step>
      <Steps.Step>Receive Product</Steps.Step>
    </Steps>
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
