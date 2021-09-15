import React, { Component } from "react";
import UploadService from "../Services/upload-file.service";
export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    // this.selectFile = this.selectFile.bind(this);
    // this.upload = this.upload.bind(this);

    this.state = {
      // selectedFiles: undefined,
      // currentFile: undefined,
      // progress: 0,
      // message: "",

      fileInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  render() {
    const {
    fileInfos,
    } = this.state;

    return (
      <div>
        
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
    );
  }
}