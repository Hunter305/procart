import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating, text }) => {
  return (
    <div className="rating">
      <span>
        {rating >= 1 ? (
          <FaStar />
        ) : rating >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <FaStar />
        ) : rating >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <FaStar />
        ) : rating >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <FaStar />
        ) : rating >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <FaStar />
        ) : rating >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
};
export default Rating;
