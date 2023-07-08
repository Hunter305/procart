import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";
import Loader from "../components/Loader.jsx";
import Message from "../components/Message.jsx";

const HomeScreen = () => {
  const { data: products, isLoding, error } = useGetProductsQuery();
  return (
    <>
      {isLoding ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error?.data?.message || error?.error}
        </Message>
      ) : (
        <>
          <h1>Lastest Products</h1>
          <Row>
            {products &&
              products.map((value) => {
                return (
                  <Col key={value._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={value} />
                  </Col>
                );
              })}
          </Row>
        </>
      )}
    </>
  );
};
export default HomeScreen;
