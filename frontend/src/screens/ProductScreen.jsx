import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating.jsx";
import { useGetProductByIdQuery } from "../slices/productsApiSlice.js";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice.js";

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useGetProductByIdQuery(productId);

  const [qty, setQty] = useState(1);
  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate("/cart");
  };

  return (
    <>
      <Link className="btn btn-light my-3" to={"/"}>
        Go back
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <Row>
          <Col md={5}>
            <Image
              src={product && product.image}
              alt={product && product.name}
              fluid
            />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>{product && product.name}</ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product && product.rating}
                  text={`${product && product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                price: &#8377;{`${product && product.price}`}
              </ListGroup.Item>
              <ListGroup.Item>{`description: ${
                product && product.description
              }`}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price :</Col>
                    <Col>
                      <strong>{product && product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status :</Col>
                    <Col>
                      <strong>
                        {product && product.countInStock > 0
                          ? "In stock"
                          : "Out of Stock "}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product && product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};
export default ProductScreen;
