import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useState } from "react";

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => ({
  changeName: (name) => {
    dispatch({
      type: "CHANGE_NAME",
      payload: name
    });
  }
});

const Input = ({ changeName }) => {
  const [inputName, setInputName] = useState("");

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          changeName(inputName);
        }}
      >
        <Form.Group>
          <Form.Label>Write your name here</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
