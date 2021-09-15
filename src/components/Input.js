import React, { Component } from 'react'
import UploadService from "../Services/upload-file.service";
class Input extends Component {
constructor(props) {
    super(props);
    this.state = {
      fileInfos: [],
    };
  }
  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
      console.log(this.state.fileInfos)
    });
  }
render() {
    const {
        fileInfos,
      } = this.state;
      console.log(fileInfos)
    return (
        <div>
            {console.log(fileInfos)}
             <div className="card"style={{backgroundColor:'blue'}}>
      <div className="card-header" style={{backgroundColor:'blue'}}>List of Files</div>
      <ul style={{backgroundColor:'blue'}} className="list-group list-group-flush">
        {fileInfos &&
          fileInfos.map((file, index) => (
            <li className="list-group-item" key={index}>
              <a href={file.url}>{file.name}</a>
            </li>
          ))}
      </ul>
    </div>
        </div>
    )
}
}
export default Input;