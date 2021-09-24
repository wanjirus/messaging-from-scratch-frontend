import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);
    formData.append('chatId', localStorage.getItem('chatId'));

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
 
  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();