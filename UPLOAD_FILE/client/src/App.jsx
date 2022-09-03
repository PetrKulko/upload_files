import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';
import FileSaver from "file-saver";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const App = () => {
    const downloadFile = () => {
        const themeData = new File(["Hello"], "theme_data.txt",
            {type: "text/plain; charset=utf-8"});
        FileSaver.saveAs(themeData);
    }

    return (
        <div className='container mt-4'>
            <FileUpload />
            <Button variant="success" onClick={downloadFile}>Download JSON</Button>
        </div>
    );
}

export default App;
