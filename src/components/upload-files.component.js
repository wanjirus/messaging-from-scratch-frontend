import React, { useEffect, useState } from "react";
import UploadService from "../Services/upload-file.service";
const UploadFiles = () => {
      const [fileInfos, setFileInfos] = useState([]);

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);
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
export default UploadFiles