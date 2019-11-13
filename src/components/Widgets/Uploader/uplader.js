import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import { firebase } from "../../../firebase";


class Uploader extends Component {
    state = {
        username: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });

        //store filename




        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {

                let fileData = {
                    filename,
                    fileUrl: url
                }

                this.props.storeFilename(fileData)
                this.setState({ avatarURL: url });

            }
            );
    };

    renderAvatar = () => {
        const avatarURL = this.state.avatarURL;
        return avatarURL ? <div>

            <div className="avatar" style={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${avatarURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}></div>

        </div> : null;
    }
    render() {

        return <div>
            {this.renderAvatar()}
            <FileUploader
                accept="image/*"
                name="avatar"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
            />
        </div>
    }
}

export default Uploader;