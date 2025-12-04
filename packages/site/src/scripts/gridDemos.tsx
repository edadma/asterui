import { createRoot } from 'react-dom/client';
import React from 'react';
import { Row, Col, Space } from 'asterui';

// Demo components for each example
const demos: Record<string, React.ReactNode> = {
  'basic': (
    <Row>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
    </Row>
  ),
  'gutter': (
    <Row gutter={16}>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
      <Col span={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          col-6
        </div>
      </Col>
    </Row>
  ),
  'offset': (
    <Space direction="vertical" size="md" className="w-full">
      <Row>
        <Col span={8}>
          <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
            col-8
          </div>
        </Col>
        <Col span={8} offset={8}>
          <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
            col-8 offset-8
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6} offset={6}>
          <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
            col-6 offset-6
          </div>
        </Col>
        <Col span={6} offset={6}>
          <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
            col-6 offset-6
          </div>
        </Col>
      </Row>
    </Space>
  ),
  'responsive': (
    <Row gutter={16}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          Responsive
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          Responsive
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          Responsive
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: '#0092ff', padding: '16px', color: 'white' }}>
          Responsive
        </div>
      </Col>
    </Row>
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
      btn.innerHTML = '<svg class="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>';
      setTimeout(() => {
        btn.innerHTML = originalHTML;
      }, 2000);
    }
  });
});
