import { API, Storage } from 'aws-amplify';
import DropAnImage from './DropAnImage';
import React from 'react';


export default class FileUpload extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        // file = []
      }
    }

    render () {
        return (<div>
            
            <DropAnImage/>

            
        </div>)
    }
    
}
