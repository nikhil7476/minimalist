import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <>
      <div className="ftr">
        <section className="ftrSec1">
          <Container>
            <Row>
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className="ftrMnu">
                <h2 className="mb-3">About Us</h2>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Our Values
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Disclaimer
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Corporate Information
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Media Outreach
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Distributor Queries
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} xs={12} className="ftrMnu">
                <h2 className="mb-3">Quick Links</h2>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Knowledge
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      FAQs
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Return & Refund Policy
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Track Order
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Help Center
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" title="Link">
                      Download App
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                <h2 className="mb-3">Contact Us</h2>
                <p className="mb-4">
                  Need help fast? Fill out{" "}
                  <Link
                    href="/"
                    title="Get in Touch"
                    className="text-decoration-underline"
                  >
                    our form
                  </Link>{" "}
                  or email{" "}
                  <Link
                    href="mailto:help@beminimalist.co"
                    title="help@beminimalist.co"
                    className="text-decoration-underline"
                  >
                    help@beminimalist.co
                  </Link>
                </p>
                <ul className="list-unstyled d-flex gap-4 mb-4">
                  <li>
                    <Link href="mailto:help@beminimalist.co" title="Mail Us">
                      <FaEnvelope />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://facebook.com/" title="Facebook">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://instagram.com/" title="Instagram">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtube.com/" title="Youtube">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
                <p>Subscribe to our newsletter !!</p>
                <NewsletterForm />
              </Col>
            </Row>
          </Container>
        </section>
        <section className="ftrSec2">
          <Container>
            <Row>
              <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                <p className="mb-0">
                  Copyright &copy; {new Date().getFullYear()}{" "}
                  <Link
                    href="/"
                    title="Minimalist"
                    className="text-decoration-underline"
                  >
                    Minimalist
                  </Link>
                  .
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
