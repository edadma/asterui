import React, { forwardRef, useEffect, useRef } from 'react'
import { EditorState, type Extension } from '@codemirror/state'
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightSpecialChars } from '@codemirror/view'
import { defaultHighlightStyle, syntaxHighlighting, indentOnInput, bracketMatching, foldGutter, foldKeymap } from '@codemirror/language'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search'
import { autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'
import { lintKeymap } from '@codemirror/lint'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { json } from '@codemirror/lang-json'
import { markdown } from '@codemirror/lang-markdown'
import { sql } from '@codemirror/lang-sql'
import { xml } from '@codemirror/lang-xml'
import { useConfig } from '../providers/ConfigProvider'

export type CodeEditorLanguage =
  | 'javascript'
  | 'typescript'
  | 'jsx'
  | 'tsx'
  | 'python'
  | 'html'
  | 'css'
  | 'json'
  | 'markdown'
  | 'sql'
  | 'xml'
  | 'plaintext'

export interface CodeEditorProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Code content */
  value?: string
  /** Callback when content changes */
  onChange?: (value: string) => void
  /** Programming language for syntax highlighting */
  language?: CodeEditorLanguage
  /** Placeholder text when empty */
  placeholder?: string
  /** Make editor read-only */
  readOnly?: boolean
  /** Auto focus on mount */
  autoFocus?: boolean
  /** Show line numbers */
  lineNumbers?: boolean
  /** Enable code folding */
  foldGutter?: boolean
  /** Highlight active line */
  highlightActiveLine?: boolean
  /** Enable bracket matching */
  bracketMatching?: boolean
  /** Enable auto-closing brackets */
  closeBrackets?: boolean
  /** Enable autocompletion */
  autocompletion?: boolean
  /** Allow tab key for indentation */
  indentWithTab?: boolean
  /** Minimum height of the editor */
  minHeight?: string | number
  /** Maximum height of the editor (enables scrolling) */
  maxHeight?: string | number
  /** Editor size variant */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Show border around editor */
  bordered?: boolean
  /** Additional CodeMirror extensions */
  extensions?: Extension[]
  /** Callback with editor view instance */
  onEditorReady?: (view: EditorView) => void
  'data-testid'?: string
}

const sizeClasses = {
  xs: { fontSize: '11px', lineHeight: '1.4' },
  sm: { fontSize: '12px', lineHeight: '1.5' },
  md: { fontSize: '14px', lineHeight: '1.6' },
  lg: { fontSize: '16px', lineHeight: '1.6' },
  xl: { fontSize: '18px', lineHeight: '1.7' },
}

function getLanguageExtension(language: CodeEditorLanguage): Extension | null {
  switch (language) {
    case 'javascript':
      return javascript()
    case 'typescript':
      return javascript({ typescript: true })
    case 'jsx':
      return javascript({ jsx: true })
    case 'tsx':
      return javascript({ jsx: true, typescript: true })
    case 'python':
      return python()
    case 'html':
      return html()
    case 'css':
      return css()
    case 'json':
      return json()
    case 'markdown':
      return markdown()
    case 'sql':
      return sql()
    case 'xml':
      return xml()
    case 'plaintext':
    default:
      return null
  }
}

const baseTheme = EditorView.theme({
  '&': {
    backgroundColor: 'oklch(var(--b1))',
    color: 'oklch(var(--bc))',
  },
  '.cm-content': {
    caretColor: 'oklch(var(--bc))',
    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: 'oklch(var(--bc))',
  },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: 'oklch(var(--p) / 0.2)',
  },
  '.cm-activeLine': {
    backgroundColor: 'oklch(var(--bc) / 0.05)',
  },
  '.cm-activeLineGutter': {
    backgroundColor: 'oklch(var(--bc) / 0.05)',
  },
  '.cm-gutters': {
    backgroundColor: 'oklch(var(--b2))',
    color: 'oklch(var(--bc) / 0.5)',
    borderRight: '1px solid oklch(var(--b3))',
  },
  '.cm-lineNumbers .cm-gutterElement': {
    padding: '0 8px 0 16px',
  },
  '.cm-foldGutter .cm-gutterElement': {
    padding: '0 4px',
  },
  '.cm-scroller': {
    overflow: 'auto',
  },
  '.cm-placeholder': {
    color: 'oklch(var(--bc) / 0.4)',
    fontStyle: 'italic',
  },
})

export const CodeEditor = forwardRef<HTMLDivElement, CodeEditorProps>(
  (
    {
      value = '',
      onChange,
      language = 'plaintext',
      placeholder,
      readOnly = false,
      autoFocus = false,
      lineNumbers: showLineNumbers = true,
      foldGutter: showFoldGutter = true,
      highlightActiveLine: showHighlightActiveLine = true,
      bracketMatching: enableBracketMatching = true,
      closeBrackets: enableCloseBrackets = true,
      autocompletion: enableAutocompletion = true,
      indentWithTab: enableIndentWithTab = true,
      minHeight = 200,
      maxHeight,
      size,
      bordered = true,
      extensions: additionalExtensions = [],
      onEditorReady,
      className = '',
      'data-testid': testId = 'code-editor',
      ...rest
    },
    ref
  ) => {
    const { componentSize } = useConfig()
    const effectiveSize = size ?? componentSize ?? 'md'

    const containerRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<EditorView | null>(null)
    const onChangeRef = useRef(onChange)

    // Keep onChange ref updated
    useEffect(() => {
      onChangeRef.current = onChange
    }, [onChange])

    // Create and manage editor
    useEffect(() => {
      if (!containerRef.current) return

      const extensions: Extension[] = [
        baseTheme,
        highlightSpecialChars(),
        history(),
        drawSelection(),
        dropCursor(),
        EditorState.allowMultipleSelections.of(true),
        indentOnInput(),
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        rectangularSelection(),
        crosshairCursor(),
        highlightSelectionMatches(),
        keymap.of([
          ...closeBracketsKeymap,
          ...defaultKeymap,
          ...searchKeymap,
          ...historyKeymap,
          ...foldKeymap,
          ...completionKeymap,
          ...lintKeymap,
        ]),
      ]

      if (showLineNumbers) {
        extensions.push(lineNumbers())
      }

      if (showFoldGutter) {
        extensions.push(foldGutter())
      }

      if (showHighlightActiveLine) {
        extensions.push(highlightActiveLine())
        extensions.push(highlightActiveLineGutter())
      }

      if (enableBracketMatching) {
        extensions.push(bracketMatching())
      }

      if (enableCloseBrackets) {
        extensions.push(closeBrackets())
      }

      if (enableAutocompletion) {
        extensions.push(autocompletion())
      }

      if (enableIndentWithTab) {
        extensions.push(keymap.of([indentWithTab]))
      }

      const langExtension = getLanguageExtension(language)
      if (langExtension) {
        extensions.push(langExtension)
      }

      if (placeholder) {
        extensions.push(EditorView.contentAttributes.of({ 'aria-placeholder': placeholder }))
        extensions.push(
          EditorView.theme({
            '.cm-content:has(.cm-line:only-child:empty)::before': {
              content: `"${placeholder}"`,
              position: 'absolute',
              color: 'oklch(var(--bc) / 0.4)',
              fontStyle: 'italic',
              pointerEvents: 'none',
            },
          })
        )
      }

      if (readOnly) {
        extensions.push(EditorState.readOnly.of(true))
        extensions.push(EditorView.editable.of(false))
      }

      // Update listener
      extensions.push(
        EditorView.updateListener.of((update) => {
          if (update.docChanged && onChangeRef.current) {
            onChangeRef.current(update.state.doc.toString())
          }
        })
      )

      // Size styling
      const sizeStyle = sizeClasses[effectiveSize]
      extensions.push(
        EditorView.theme({
          '.cm-content': {
            fontSize: sizeStyle.fontSize,
            lineHeight: sizeStyle.lineHeight,
          },
          '.cm-gutters': {
            fontSize: sizeStyle.fontSize,
          },
        })
      )

      // Add user extensions
      extensions.push(...additionalExtensions)

      const state = EditorState.create({
        doc: value,
        extensions,
      })

      const view = new EditorView({
        state,
        parent: containerRef.current,
      })

      viewRef.current = view

      if (autoFocus) {
        view.focus()
      }

      if (onEditorReady) {
        onEditorReady(view)
      }

      return () => {
        view.destroy()
        viewRef.current = null
      }
    }, [
      language,
      placeholder,
      readOnly,
      showLineNumbers,
      showFoldGutter,
      showHighlightActiveLine,
      enableBracketMatching,
      enableCloseBrackets,
      enableAutocompletion,
      enableIndentWithTab,
      effectiveSize,
      autoFocus,
      additionalExtensions,
      onEditorReady,
    ])

    // Sync value prop changes
    useEffect(() => {
      const view = viewRef.current
      if (!view) return

      const currentValue = view.state.doc.toString()
      if (value !== currentValue) {
        view.dispatch({
          changes: {
            from: 0,
            to: currentValue.length,
            insert: value,
          },
        })
      }
    }, [value])

    const minHeightStyle = typeof minHeight === 'number' ? `${minHeight}px` : minHeight
    const maxHeightStyle = maxHeight
      ? typeof maxHeight === 'number'
        ? `${maxHeight}px`
        : maxHeight
      : undefined

    return (
      <div
        ref={ref}
        className={`
          bg-base-100 rounded-lg overflow-hidden
          ${bordered ? 'border border-base-300' : ''}
          ${className}
        `}
        data-testid={testId}
        {...rest}
      >
        <div
          ref={containerRef}
          className="[&_.cm-editor]:outline-none"
          style={{
            minHeight: minHeightStyle,
            maxHeight: maxHeightStyle,
            overflow: maxHeightStyle ? 'auto' : undefined,
          }}
        />
      </div>
    )
  }
)

CodeEditor.displayName = 'CodeEditor'

export default CodeEditor
