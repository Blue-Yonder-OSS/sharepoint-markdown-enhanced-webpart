import  { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'
// import './editor.css'
import { EditorState } from '@codemirror/state'
import * as React from 'react'

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    (state: EditorState) => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    } else {
      // loading editor
    }
  }, [editorView])

  return <div className='editor-wrapper' ref={refContainer} />
}

export default Editor
