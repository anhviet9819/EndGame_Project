import React, { useState } from "react";
import Header from "../../components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Dangnhap.css";
import { connect } from "react-redux";
import { signinHandler } from "../../redux/auth";

function Dangnhap(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    props.signinHandler(username, password);
  };

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Dangnhap">
      <Header />
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              //type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            onClick={onLogin}
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
            onChange={Dangnhap}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.signin.loading,
});

const mapDispatchToProps = {
  signinHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dangnhap);

//export default Dangnhap;
