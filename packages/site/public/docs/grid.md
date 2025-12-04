# Grid

**Import:** `import { Grid } from 'asterui'`

## Examples

### Basic Grid

Basic 24-column grid system.

```tsx
import React from 'react'
import { Row, Col } from 'asterui'

const App: React.FC = () => (
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
)

export default App
```

### Grid Gutter

Add spacing between columns with the gutter prop.

```tsx
import React from 'react'
import { Row, Col } from 'asterui'

const App: React.FC = () => (
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
)

export default App
```

### Column Offset

Offset columns using the offset prop.

```tsx
import React from 'react'
import { Row, Col, Space } from 'asterui'

const App: React.FC = () => (
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
)

export default App
```

### Responsive Columns

Different column spans at different breakpoints.

```tsx
import React from 'react'
import { Row, Col } from 'asterui'

const App: React.FC = () => (
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
)

export default App
```

## API

### Row

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `children` | Column components | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |

### Col

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `span` | Number of columns to span (out of 24) | `number` | `24` |
| `offset` | Number of columns to offset | `number` | `0` |
| `xs` | Responsive span for extra small screens (<640px) | `number` | `-` |
| `sm` | Responsive span for small screens (≥640px) | `number` | `-` |
| `md` | Responsive span for medium screens (≥768px) | `number` | `-` |
| `lg` | Responsive span for large screens (≥1024px) | `number` | `-` |
| `xl` | Responsive span for extra large screens (≥1280px) | `number` | `-` |
| `xxl` | Responsive span for 2x extra large screens (≥1536px) | `number` | `-` |
| `children` | Column content | `React.ReactNode` | `-` |
| `className` | Additional CSS classes | `string` | `-` |
