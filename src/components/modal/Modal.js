import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const ModalComponents = (props) => {
  // 닫기, 열기, 모달 헤더 텍스트를 부모로부터 받아옴
//  const { show, handleShow, handleClose } = props;
  const { show, handleClose } = props;

  return (
    //   <Button className="nextButton" onClick={handleShow}>
    //   Open Modal
    // </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
      {/* <Button id="weekend" variant="primary" onClick={handleClose}>
          일주일 간 보지 않기
        </Button> */}
        <Button variant="secondary" onClick={handleClose}>
        일주일 간 보지 않기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponents;