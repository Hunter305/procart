import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      let { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Row>
        {products.map((value) => {
          return (
            <Col key={value._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={value} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default HomeScreen;
