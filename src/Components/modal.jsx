import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const FightModal = () => {
  const [show, setShow] = useState(false);
  const [fightHandler, setFightHandler] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFight = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if(randomNumber % 2 === 0) {
      setFightHandler(true)
    }else{
     setFightHandler(false)
    }
  setShow(true)
  }

  return (
    <>
      <Button variant="primary" onClick={handleFight} >
        Fight!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fight Results</Modal.Title>
        </Modal.Header>
    <Modal.Body>{fightHandler ? "You Won!" : "You Lost!"}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default FightModal