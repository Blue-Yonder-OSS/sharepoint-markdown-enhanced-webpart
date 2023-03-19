import * as React from "react";
import styles from "./SpMarkdownPreview.module.scss";
import { ISpMarkdownPreviewProps } from "./ISpMarkdownPreviewProps";

import Editor from './editor/editor'
import {MarkdownComponent} from './MarkdownPreview/markdownPreview'
import {useMutationObserver} from './MarkdownPreview/mutationObserver'

import 'office-ui-fabric-react/dist/css/fabric.css'


const SpMarkdownPreview:React.FC<ISpMarkdownPreviewProps> = (props:ISpMarkdownPreviewProps):JSX.Element => {

  const refDiv = useMutationObserver();
  const { hasTeamsContext,isEditMode ,markdownContent,updateData} = props;
  const [markdownStateData,setMarkdownStateData] = React.useState('')
  
  const handleDocChange = (newDoc: string):void => {
    setMarkdownStateData(newDoc);
    updateData(newDoc)
  }
  React.useEffect(()=>{
    setMarkdownStateData(markdownContent)
  },[])
    
    return (
      <section className={`${styles.spMarkdownPreview} ${hasTeamsContext ? styles.teams : ""}`}>
        <div className={`${isEditMode ? styles.gridcontainer: ""}`}>
        {isEditMode&&<div className="grid-item"><Editor onChange={handleDocChange} initialDoc={markdownContent} /></div>}
        <div className="grid-item" ref={refDiv}><MarkdownComponent markdown={markdownStateData}/></div> 
        </div>
        
      </section>
    );
  
}

export default SpMarkdownPreview;