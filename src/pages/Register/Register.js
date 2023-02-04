import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const Register = () => {
  const { createUser, UpdatedNamePhoto, EmailVerification } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        UpdatedNamePhoto(name, photo);
        setError("");
        form.reset();
        verification();
        toast.success(
          "please verify your email address check your inbox or spam "
        );
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(name, photo, email, password);
  };
  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };
  const verification = () => {
    EmailVerification()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className="w-50 border border-primary rounded-4 p-5 mx-auto shadow-lg "
    >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          name="photoURL"
          type="text"
          placeholder="Enter PhotoURL"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          onClick={handleChecked}
          name="checked"
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms & Conditions</Link>
            </>
          }
        />
      </Form.Group>
      <Form.Text className="text-danger">
        <p>{error}</p>
      </Form.Text>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
