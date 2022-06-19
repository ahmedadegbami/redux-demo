import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    countFromStore: state.counter.count,
    nameFromStore: state.user.name
  };
};

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => {
    dispatch({
      type: "INCREASE_COUNTER"
    });
  },
  decreaseCounter: () => {
    dispatch({
      type: "DECREASE_COUNTER"
    });
  },
  inputName: (name) => {
    dispatch({
      type: "INPUT_NAME",
      payload: name
    });
  }
});

const Counter = ({
  countFromStore,
  nameFromStore,
  increaseCounter,
  decreaseCounter,
  inputName
}) => {
  return (
    <div>
      <Form.Group>
        <Form.Label>Write your name here</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={nameFromStore}
          onChange={(e) => {
            inputName(e.target.value);
          }}
        />
      </Form.Group>
      <h2>Current name is: {nameFromStore}</h2>
      <Button onClick={() => increaseCounter()}>+</Button>
      <p>{countFromStore}</p>
      <Button onClick={decreaseCounter}>-</Button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
