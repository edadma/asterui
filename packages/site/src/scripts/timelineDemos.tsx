import React from 'react';
import { createRoot } from 'react-dom/client';
import { Timeline } from 'asterui';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const PrimaryCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="text-primary w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Timeline>
      <Timeline.Item start="1984" icon={<CheckIcon />} end="First Macintosh computer" endBox />
      <Timeline.Item start="iMac" icon={<CheckIcon />} end="1998" startBox />
    </Timeline>
  ),
  vertical: (
    <Timeline vertical>
      <Timeline.Item start="2015" icon={<PrimaryCheckIcon />} end="Apple Watch" endBox />
      <Timeline.Item start="2017" icon={<PrimaryCheckIcon />} end="iPhone X" endBox />
      <Timeline.Item start="2020" icon={<PrimaryCheckIcon />} end="Apple Silicon M1" endBox />
    </Timeline>
  ),
  compact: (
    <Timeline vertical compact>
      <Timeline.Item
        icon={<CheckIcon />}
        end={
          <div>
            <time>1984</time>
            <div className="text-lg font-black">First Macintosh computer</div>
          </div>
        }
        endBox
      />
      <Timeline.Item
        icon={<CheckIcon />}
        end={
          <div>
            <time>1998</time>
            <div className="text-lg font-black">iMac</div>
          </div>
        }
        endBox
      />
      <Timeline.Item
        icon={<CheckIcon />}
        end={
          <div>
            <time>2001</time>
            <div className="text-lg font-black">iPod</div>
          </div>
        }
        endBox
      />
    </Timeline>
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
