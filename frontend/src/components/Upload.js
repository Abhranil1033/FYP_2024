import React, { useState } from 'react';
import './Upload.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const Upload = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [district, setDistrict] = useState("");
  const [statE, setStatE] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // const auth = useAuth();

  const handleCloudClick = () => {
    document.getElementById("fileInput").click()
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // console.log(file);
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

  const handleUpload = async (e) => {
    console.log("upload clicked");
    e.preventDefault();

    const [hours, minutes] = time.split(':');
    const timeValue = new Date();
    timeValue.setHours(parseInt(hours, 10));
    timeValue.setMinutes(parseInt(minutes, 10));

    // Retrieve the authentication token from local storage
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    const token = storedAuth.token;

    // Decode the token to extract the user ID
    const decodedToken = jwtDecode(token);
    const userId = decodedToken._id;

    try {
      const res = await axios.post("/api/v1/event/new", {
        district,
        state: statE,
        latitude: lat,
        longitude: long,
        date,
        time: timeValue,
        image: image
      },{headers : {'Content-Type' : 'multipart/form-data'}});

      console.log("Event created:", res.data);
      toast.success("Uploaded successfully");

      //reset after uploading
      setDistrict("");
      setStatE("");
      setLat("");
      setLong("");
      setDate("");
      setTime("");
      setFileName("No selected file");
      setImage(null);



      // creating chat
      const admin = JSON.stringify([userId]);
      console.log("District:", district); // Add this line before sending the request

      const chatRes = await axios.post("/api/v1/chat/new",{
        chatName : district,
        users : admin
      });

      console.log("Chat created", chatRes.data);

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  

  return (
    <div className='uploadContainer'>
      <form className='uploadForm'>
        <input type="text"
          placeholder=' Enter district'
          value={district}
          onChange={(e) => { setDistrict(e.target.value) }}
          className='inputText' />
        <input type="text"
          placeholder=' Enter state'
          value={statE}
          onChange={(e) => { setStatE(e.target.value) }}
          className='inputText' />
        <input type="text"
          placeholder=' Enter latitude'
          value={lat}
          onChange={(e) => { setLat(e.target.value) }}
          className='inputText' />
        <input type="text"
          placeholder=' Enter longitude'
          value={long}
          onChange={(e) => { setLong(e.target.value) }}
          className='inputText' />
        <input type="date" placeholder='Select date'
          value={date}
          onChange={(e) => { setDate(e.target.value) }}
          className='inputText' />
        <input type="time" placeholder='Select time'
          value={time}
          onChange={(e) => { setTime(e.target.value) }}
          className='inputText' />


        <input
          type="file"
          accept='image/*'
          hidden
          id="fileInput"
          onChange={handleFileChange}
        />
        {image ?
          <img src={image} width={60} height={60} alt={fileName} /> :
          <CloudUploadIcon fontSize='large' onClick={handleCloudClick} />}
        {!image ?
          <h6>Click here to upload image</h6> : ""}
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
          <span onClick={handleUpload}>
            Upload <UploadIcon />
          </span>
        </section> : <section></section>}
    </div>
  );
};

export default Upload;
