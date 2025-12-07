import React from 'react';
import { createRoot } from 'react-dom/client';
import { Stats, Button } from 'asterui';
import { InformationCircleIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';

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
        figure={<InformationCircleIcon className="w-8 h-8" />}
        title="Downloads"
        value="31K"
        desc="Jan 1st - Feb 1st"
      />
      <Stats.Stat
        figure={<AdjustmentsVerticalIcon className="w-8 h-8" />}
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
          <Button size="sm" color="primary">
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
