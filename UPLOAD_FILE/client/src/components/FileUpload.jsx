import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";

const FileUpload = () => {
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData);
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.log('Error');
    }
  };

  console.log('fileName', uploadedFile.fileName);
  console.log('filePath', uploadedFile.filePath);

  return (
      <div>
        <Form.Control type="file" onChange={onChange} />
        <Button type='submit' onClick={onSubmit}>Submit</Button>
      </div>
  );
};

export default FileUpload;
