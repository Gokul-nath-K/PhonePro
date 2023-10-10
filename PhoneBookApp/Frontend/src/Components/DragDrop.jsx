import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["csv"];

function DragDrop(props) {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    // props.handleCSVInputChange(file)
  };
  return (
    <FileUploader handleChange={handleChange} onDrop={props.handleCSVInputChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;