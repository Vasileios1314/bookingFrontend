import styled from "styled-components";
import { ButtonLink2 } from "../styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../store/user/thunks";
import { selectToken } from "../store/user/selectors";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

export const SignUp = ({ onRouteChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  useEffect(() => {
    onRouteChange(false);
  }, []);

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password));
  };

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            style={{ borderRadius: 5 }}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            style={{ borderRadius: 5 }}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            value={imageUrl}
            style={{ borderRadius: 5 }}
            onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            placeholder="Image URL"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            style={{ borderRadius: 5 }}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mt-5">
          <ButtonLink2
            variant="secondary"
            type="submit"
            style={{
              borderRadius: 5,
              width: 150,
              height: 50,
              marginLeft: 0,
              marginTop: 0,
            }}
            onClick={submitForm}
          >
            Sign up
          </ButtonLink2>
        </Form.Group>
        <Links>
          <Link to="/login" style={{ textAlign: "center" }}>
            Click here to log in
          </Link>
        </Links>
      </Form>
    </Container>
  );
};

const Links = styled.div`
  font-size: 1.2rem;
  & > a {
    text-decoration: none;
    color: #bd2323;
    margin-left: 0;
    transition: all 0.3s ease-in-out;
  }

  & > a:hover {
    color: #000;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;
