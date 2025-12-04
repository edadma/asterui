import React from 'react';
import { createRoot } from 'react-dom/client';
import { Stats, Button } from 'asterui';

const demos: Record<string, React.ReactNode> = {
  basic: (
    <Stats className="shadow">
      <Stats.Stat title="Total Page Views" value="89,400" />
    </Stats>
  ),
  desc: (
    <Stats className="shadow">
      <Stats.Stat title="Downloads" value="31K" desc="Jan 1st - Feb 1st" />
    </Stats>
  ),
  multiple: (
    <Stats className="shadow">
      <Stats.Stat title="Total Users" value="4,200" desc="↗︎ 400 (22%)" />
      <Stats.Stat title="New Users" value="1,200" desc="↘︎ 90 (14%)" />
      <Stats.Stat title="New Registers" value="4,200" desc="↗︎ 400 (22%)" />
    </Stats>
  ),
  icons: (
    <Stats className="shadow">
      <Stats.Stat
        figure={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        }
        title="Downloads"
        value="31K"
        desc="Jan 1st - Feb 1st"
      />
      <Stats.Stat
        figure={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        }
        title="New Users"
        value="4,200"
        desc="↗︎ 400 (22%)"
      />
    </Stats>
  ),
  colored: (
    <Stats className="shadow">
      <Stats.Stat
        title="Account balance"
        value={<span className="text-primary">$89,400</span>}
        desc="21% more than last month"
      />
      <Stats.Stat
        title="Current balance"
        value={<span className="text-secondary">$12,721</span>}
        desc="12% less than last month"
      />
    </Stats>
  ),
  vertical: (
    <Stats vertical className="shadow">
      <Stats.Stat title="Downloads" value="31K" desc="Jan 1st - Feb 1st" />
      <Stats.Stat title="New Users" value="4,200" desc="↗︎ 400 (22%)" />
      <Stats.Stat title="New Registers" value="1,200" desc="↘︎ 90 (14%)" />
    </Stats>
  ),
  actions: (
    <Stats className="shadow">
      <Stats.Stat
        title="Account balance"
        value="$89,400"
        actions={
          <Button size="sm" type="primary">
            Add funds
          </Button>
        }
      />
    </Stats>
  ),
};

document.querySelectorAll('.demo-container').forEach((container) => {
  const example = container.getAttribute('data-example');
  if (example && demos[example]) {
    const root = createRoot(container);
    root.render(<>{demos[example]}</>);
  }
});
