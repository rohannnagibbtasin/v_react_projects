import Container from './styledComponents/Container'
import Button from './styledComponents/Button'
import Modal from './Components/Modal';
import { useState } from 'react';
import Global from './GlobalStyle';
function App() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = ()=>{
    setShowModal(prev=>!prev)
  } 
  return (
    <>
    <Container>
      <Button onClick={handleClick}>I'm modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Global/>
    </Container>
    </>
  );
}

export default App;
