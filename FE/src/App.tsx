import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CSS from 'csstype';

function App() {
  const [image, setImage] = useState({ preview: '', data: '' });
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
 

  const onSelectFile = async (e:any) => {
    const file = e.target.files[0];
    // const img = {
    //   preview: URL.createObjectURL(e.target.files[0]),
    //   data: file,
    // };
    // setImage(img);
    const convertToBase64 = (file:Blob) => {
      return new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
              resolve(reader.result);
          }
      });
    }
    const convertedFile = await convertToBase64(file);
    const s3URL = await axios.post(
      'http://localhost:3500/api/image',
      {
          image: convertedFile,
          imageName: file.name,
          name: name,
      });
      console.log(s3URL.data);
  }
  
  return (
    <div className='App'>
      {image.preview && <img src={image.preview} width='100' height='100' />}
      <hr></hr>
      <form>
        <label htmlFor="file" className="btn">Select Image</label>
        <input id='file' type='file' name='file' onChange={onSelectFile} accept="image/*" style={{visibility: 'hidden'}}></input>
      </form>
      {status && <h4>{status}</h4>}
    </div>
  );
}

export default App;
