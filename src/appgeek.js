import React from "react";
import axios from "axios";

class Appgeek extends React.Component{
    state = { newfiles: null, }

handleFile(e) {
    // getting fthe files  from the input
    let newfiles = e.target.newfiles;
    this.setState({ newfiles })
}
handleUpload(e) {
    let newfiles = this.state.newfiles;
    let formData=new FormData();
    formData.append("image",newfiles);
    formData/append("name", "Name");
    axios({
        //endpoint to send files
        url: "http://localhost:8080/files",
        method: "POST",
        headers: {
            // add any auth token here
            authorization: "your token comes here",
        },
        //attaching the form data
        data: formData,
    })// and of axios
    //handle the response from backend here
    .then((res)=> { })
    // catch error
    .catch((err) => { });
}
render() {
    return (
        <div>
            <h1>Select your files</h1>
            <input type="file"
              multiple="multiple"
              onChange={(e)=>this.handleFile(e)}
            />
            <button onClick={(e) => this.handleUpload(e)}>
                Send Files
            </button>
        </div>
    );
  }
}
export default Appgeek;