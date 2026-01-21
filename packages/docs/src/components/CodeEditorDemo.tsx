import { useState } from 'react'
import { CodeEditor } from '@aster-ui/prefixed/codeeditor'
import { Card, Space, Select } from '@aster-ui/prefixed'
import { Demo } from './Demo'

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
export function BasicDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <CodeEditor
        language="javascript"
        value="function hello() {\n  return 'Hello, World!';\n}"
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
// @example-imports: { useState } from 'react'
export function ControlledDemo() {
  // @example-include
  const [code, setCode] = useState('const greeting = "Hello";\nconsole.log(greeting);')
  // @example-include-end

  return (
    <Demo>
      {/* @example-return */}
      <Space direction="vertical" size="md" block>
        <CodeEditor
          language="javascript"
          value={code}
          onChange={setCode}
        />
        <Card size="sm" className="bg-base-200">
          <p className="text-sm font-medium mb-2">Current Code:</p>
          <pre className="text-xs whitespace-pre-wrap">{code}</pre>
        </Card>
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
// @example-imports: { useState } from 'react'
export function LanguagesDemo() {
  // @example-include
  const [language, setLanguage] = useState<'javascript' | 'typescript' | 'python' | 'html' | 'css' | 'json'>('javascript')

  const codeExamples = {
    javascript: 'function add(a, b) {\n  return a + b;\n}\n\nconsole.log(add(2, 3));',
    typescript: 'interface User {\n  name: string;\n  age: number;\n}\n\nconst user: User = { name: "Alice", age: 30 };',
    python: 'def fibonacci(n: int) -> int:\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(10))',
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>Hello</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>',
    css: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}',
    json: '{\n  "name": "asterui",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^19.0.0"\n  }\n}',
  }
  // @example-include-end

  return (
    <Demo>
      {/* @example-return */}
      <Space direction="vertical" size="md" block>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value as typeof language)}
          options={[
            { value: 'javascript', label: 'JavaScript' },
            { value: 'typescript', label: 'TypeScript' },
            { value: 'python', label: 'Python' },
            { value: 'html', label: 'HTML' },
            { value: 'css', label: 'CSS' },
            { value: 'json', label: 'JSON' },
          ]}
        />
        <CodeEditor
          language={language}
          value={codeExamples[language]}
          minHeight={200}
        />
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
export function NoLineNumbersDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <CodeEditor
        language="javascript"
        lineNumbers={false}
        value="// Simple code without line numbers\nconst x = 42;"
        minHeight={100}
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
export function ReadOnlyDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <CodeEditor
        language="typescript"
        readOnly
        value="// This code is read-only\nexport interface Config {\n  apiKey: string;\n  endpoint: string;\n  timeout?: number;\n}"
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
export function SizesDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Space direction="vertical" size="md" block>
        <div>
          <p className="text-sm mb-1">Small</p>
          <CodeEditor
            size="sm"
            language="javascript"
            value="const small = 'sm';"
            minHeight={60}
          />
        </div>
        <div>
          <p className="text-sm mb-1">Medium (default)</p>
          <CodeEditor
            size="md"
            language="javascript"
            value="const medium = 'md';"
            minHeight={60}
          />
        </div>
        <div>
          <p className="text-sm mb-1">Large</p>
          <CodeEditor
            size="lg"
            language="javascript"
            value="const large = 'lg';"
            minHeight={60}
          />
        </div>
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
export function MaxHeightDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <CodeEditor
        language="javascript"
        minHeight={100}
        maxHeight={200}
        value={`// Long file with scrolling
function processItems(items) {
  const results = [];

  for (const item of items) {
    if (item.isValid) {
      results.push(transform(item));
    }
  }

  return results;
}

function transform(item) {
  return {
    id: item.id,
    name: item.name.toUpperCase(),
    timestamp: Date.now(),
  };
}

// Export the functions
export { processItems, transform };`}
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
export function BorderlessDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <Card>
        <CodeEditor
          bordered={false}
          language="python"
          value="# Borderless editor inside a card\nprint('Hello from Python!')"
          minHeight={100}
        />
      </Card>
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor } from 'asterui/codeeditor'
export function MinimalDemo() {
  return (
    <Demo>
      {/* @example-return */}
      <CodeEditor
        language="javascript"
        lineNumbers={false}
        foldGutter={false}
        highlightActiveLine={false}
        autocompletion={false}
        value="// Minimal editor\nconst simple = true;"
        minHeight={80}
      />
      {/* @example-return-end */}
    </Demo>
  )
}

// @example-imports: { CodeEditor, type CodeEditorLanguage } from 'asterui/codeeditor'
// @example-imports: { useState } from 'react'
export function EditorInstanceDemo() {
  // @example-include
  const [lineCount, setLineCount] = useState(0)
  // @example-include-end

  return (
    <Demo>
      {/* @example-return */}
      <Space direction="vertical" size="sm" block>
        <CodeEditor
          language="javascript"
          value="// Type here to see line count update\nfunction example() {\n  return 42;\n}"
          onEditorReady={(view) => {
            setLineCount(view.state.doc.lines)
            view.dispatch({}) // trigger initial update
          }}
          onChange={(value) => {
            setLineCount(value.split('\n').length)
          }}
        />
        <p className="text-sm text-base-content/60">Lines: {lineCount}</p>
      </Space>
      {/* @example-return-end */}
    </Demo>
  )
}
