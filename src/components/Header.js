import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegStar, FaSearch, FaRegUser, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="hdr">
        <section className="hdrSec1">
          <Container>
            <Row>
              <Col className="text-center text-light">
                <p className="m-0">
                  Trust Circle: Earn rewards on your skincare journey!
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="hdrSec2">
          <Container>
            <Row>
              <Col
                xl={2}
                lg={2}
                md={2}
                sm={12}
                xs={12}
                className="align-content-center"
              >
                <h2 className="m-0">
                  <Link href="/" title="Minimalist">
                    Minimalist
                  </Link>
                </h2>
              </Col>
              <Col
                xl={8}
                lg={8}
                md={8}
                sm={12}
                xs={12}
                className="mnu align-content-center"
              >
                <ul className="list-unstyled d-flex justify-content-center gap-4 m-0">
                  <li>
                    <Link href="/" title="Link">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      Best Sellers
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      Skin & Body Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      Baby Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      Hair Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      Skin Insights
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      Track Order
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col
                xl={2}
                lg={2}
                md={2}
                sm={12}
                xs={12}
                className="align-content-center"
              >
                <ul className="list-unstyled d-flex justify-content-end gap-4 m-0">
                  <li>
                    <Link href="/" title="Link">
                      <FaRegStar />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      <FaSearch />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      <FaRegUser />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Link">
                      <FaShoppingCart />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
