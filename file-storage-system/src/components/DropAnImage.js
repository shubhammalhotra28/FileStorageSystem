import { API, Storage } from 'aws-amplify';
import {React, useState } from 'react'
import { useMemo } from 'react';
import {useDropzone} from 'react-dropzone';
import { Modal, Button } from 'react-bootstrap';
import HeaderButton from '../components/HeaderButton';
import Form from 'react-bootstrap/Form';


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  
function DropAnImage({getUpdatedImagesFromBackend, userEmail}) { 
    const [title, setTitle] = useState("default")
    const [showModal, setShowModal] = useState(false)
    
    const [value2, setValue2] = useState("Hindi");
    
    
    const uploadImage = async () => {

      try {
        

        Storage.configure({
            customPrefix: {
                private: "Hindi/"
            }
        })




        // Storage.configure({ level: 'private' });
        await Storage.put(acceptedFiles[0].name, acceptedFiles[0])  
      } 
      catch(error){
          console.log(error);
      }
  }

    const {
      getRootProps,
      getInputProps,
      isFocused,
      isDragAccept,
      isDragReject,
      acceptedFiles,
      open
    } = useDropzone({accept: 'image/*' // we can change this if we want pdf or something else
    , noClick: true // disabling the click on the grey area, we can enable it by removing it.
    ,noKeyboard: true}); 
  
    const style = useMemo(() => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isFocused,
      isDragAccept,
      isDragReject
    ]);
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
        
    return (
        <div className="container">
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here</p>
                <button type="button" onClick={open}>Open File Dialog</button>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
            <HeaderButton text="Add Title" color="green" onClick={()=>{
                setShowModal(true)
            }}/>
            <br/>
            <div>

          <Form onChange={ (e) => {
            setValue2(e.target.value);
            
            // console.log('value = ',{value2});
        
        }}
            >
            {['radio'].map((type) => (
            <div key={`reverse-${type}`} className="mb-3">
            <Form.Check
                label="Hindi"
                name="group1"
                type={type}
                id={`reverse-${type}-1`}
                value="Hindi"
                defaultChecked
            />
            <Form.Check
                
                label="English"
                name="group1"
                type={type}
                id={`reverse-${type}-2`}
                value="Englsh"
            />
            </div>
            ))}
        </Form>
        </div>


            <HeaderButton text="Upload" color="green" onClick={async () => {

                await uploadImage();
          
          }}/> 
          
            <Modal show={showModal} fullscreen={'sm-down'} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input value={title} onInput={(e) => {
                        setTitle(e.target.value)
                      }}/>
                    <br/>
                    <Button onClick={()=>setShowModal(false)}>Save</Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DropAnImage