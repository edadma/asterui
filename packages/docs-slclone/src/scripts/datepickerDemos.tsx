import { createRoot } from 'react-dom/client';
import { DatePicker, Space } from 'asterui';
import { CheckIconSvg } from './icons'

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <DatePicker placeholder="Select date" />
  ),
  'with-time': (
    <DatePicker showTime placeholder="Select date and time" />
  ),
  'range': (
    <DatePicker range placeholder={['Start date', 'End date']} />
  ),
  'pickers': (
    <Space direction="vertical" size="sm">
      <DatePicker picker="date" placeholder="Select date" />
      <DatePicker picker="week" placeholder="Select week" />
      <DatePicker picker="month" placeholder="Select month" />
      <DatePicker picker="year" placeholder="Select year" />
    </Space>
  ),
  'disabled-dates': (
    <DatePicker
      placeholder="Select future date"
      disabledDate={(date) => date < new Date()}
    />
  ),
  'sizes': (
    <Space direction="vertical" size="sm">
      <DatePicker size="xs" placeholder="Extra small" />
      <DatePicker size="sm" placeholder="Small" />
      <DatePicker size="md" placeholder="Medium" />
      <DatePicker size="lg" placeholder="Large" />
    </Space>
  ),
};

// Mount React demos
document.querySelectorAll('.demo-container').forEach(container => {
  const exampleId = container.getAttribute('data-example');
  if (exampleId && demos[exampleId]) {
    const root = createRoot(container as HTMLElement);
    root.render(demos[exampleId]);
  }
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', async () => {
    const code = btn.getAttribute('data-code');
    if (code) {
      await navigator.clipboard.writeText(code);
      const originalHTML = btn.innerHTML;
      btn.innerHTML = CheckIconSvg;
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
