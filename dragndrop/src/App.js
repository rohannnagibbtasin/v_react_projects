import './App.css';
import DragFileInput from './component/DragFileInput';

function App() {
  const onFileChange = files =>{
    console.log(files);
  }
  return (
    <div className="box">
      <h2 className="header">
        React Drop File Input
      </h2>
      <DragFileInput onFileChange={(files)=> onFileChange(files)} />
    </div>
  );
}

export default App;
