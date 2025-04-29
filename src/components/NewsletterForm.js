import React from "react";
import { Button, Form } from "react-bootstrap";

export default function NewsletterForm() {
  return (
    <>
      <Form className="d-flex align-items-center gap-2">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter Your Email" className="border-0 rounded-0" />
        </Form.Group>
        <Button variant="secondary" type="submit" className="border-0 rounded-0">
          Subscribe
        </Button>
      </Form>
    </>
  );
}
