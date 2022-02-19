import { useState, useRef } from 'react'
import './App.css';
import {Container, Card, Grid, Button, TextField} from '@mui/material';
import {  makeStyles } from '@mui/styles';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';

const useStyles = makeStyles(()=>({
  container: {
    marginTop: 10
  },
  title:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#3f51b5',
    color: '#fff',
    padding: 20
  },
  btn:{
    marginBottom: 20,
    marginTop: 10
  }
}))

function App() {
  const [data, setData] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWeb, setScanResultWeb] = useState('');
  const qrRef = useRef(null);
  const classes = useStyles();
  const generateQrCode = async ()=>{
    try{
      const response = await QRCode.toDataURL(data);
      setImageUrl(response);
    }catch(err){
      console.log(err)
    }
  }
  const handleErrorFile = (err)=>{
    console.log(err)
  }
  const handleScanFile = (result)=>{
    if(result){
      setScanResultFile(result);
    }
  }
  const onScanFile = ()=>{
    qrRef.current.openImageDialog();
  }
  const webError = (err)=>{
    console.log(err);
  }
  const webScan = (result)=>{
    if(result){
      setScanResultWeb(result)
    }
  } 
  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>Generate Download & Scan QR code with React</h2>
        <Grid>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label="Enter Text Here" onChange={(e)=> setData(e.target.value)} />
              <Button className={classes.btn} color="primary" variant="contained" onClick={()=> generateQrCode()}>Generate</Button>
              { imageUrl && <a href={imageUrl} download><img src={imageUrl} alt="an qr code" /></a> }
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Button variant="contained" color="primary" className={classes.btn} onClick={()=>onScanFile()}>Scan Qr Code</Button>
              <QrReader 
                ref={qrRef}
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
              />
              <h3>Scanned Code: {scanResultFile} </h3>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <h3>Scan by Webcam</h3>
              <QrReader
                delay={300}
                style={{width: '100%'}}
                onError={webError}
                onScan={webScan}
              />
              <h3>Scanned by webcam : {scanResultWeb} </h3>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
