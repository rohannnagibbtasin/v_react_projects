import './DragFileInput.css';
import uploadImg from '../assets/cloud-upload-regular-240.png';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import ImageConfig from '../config/ImageConfig';

const DragFileInput = (props) => {
    const [fileList, setFileList] = useState([]);
    const wrapperRef = useRef();
    const onDragEnter = () => wrapperRef.current.classList.add('dragover')
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')
    const onDrag = () => wrapperRef.current.classList.remove('dragover')
    const onFileDrop = e =>{
        const newFile = e.target.files[0];
        if(newFile){
            const updatedList = [...fileList,newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList)
        }

    }
    return (
        <div ref={wrapperRef} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrag} className="drop-file-input">
            <div className="drop-file-input__label">
                <img src={uploadImg} alt="nothing" />
                <p>Drag'n'Drop your files here</p>
            </div>
            <input type="file" onChange={e=>onFileDrop(e)}/>
        </div>
    )
}

DragFileInput.propTypes = {
    onFileChange: PropTypes.func 
}

export default DragFileInput
