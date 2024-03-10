import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  console.log("redux data in header", result);

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img
            src="https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg"
            alt=""
          />
        </div>
      </Link>

      <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          placeholder="Search Product"
        />
      </div>
      <Link to="/cart">
        <div className="cart-div">
        <span>{result.length}</span>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
