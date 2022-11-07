import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});
const buttonList = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

const Suneditor = () => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor = useRef();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };
  const handleChange = (content) => {
    console.log(content); //Get Content Inside Editor
  };

  return (
    <div>
      Suneditor
      <SunEditor lang="ko" height="10rem" width="50%" onChange={handleChange} />
    </div>
  );
};

export default Suneditor;
