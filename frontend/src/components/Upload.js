import React, { useState } from 'react';
import './Upload.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  const handleCloudClick = () =>{
    document.getElementById("fileInput").click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setFileName("No selected file");
    setImage(null);
  }

  return (
    <div className='uploadContainer'>
      <form>
        <input
          type="file"
          accept='image/*'
          className='inputField'
          hidden
          id="fileInput"
          onChange={handleFileChange}
        />
        {image ?
          <img src={image} width={60} height={60} alt={fileName} /> :
          <CloudUploadIcon fontSize='large' onClick={handleCloudClick} />}
      </form>
      <section className='uploadRow'>
        <InsertDriveFileIcon color='#1475cf' />
        <span>
          {fileName}
          <DeleteIcon onClick={handleDelete} />
        </span>
      </section>
      {image ?
        <section className='uploadRow uploadButton'>
          <span>
            Upload <UploadIcon />
          </span>
        </section> : <section></section>}
    </div>
  );
};

export default Upload;
