import "./Cart.css";
import PropTypes from "prop-types";
const Cart = ({ selects, handleRemove }) => {
  return (
    <div className="selected-cart">
      <h4 className="selected">Selected Cart: {selects.length}</h4>
      {selects.map((bottle) => (
        <div key={bottle.id}>
          <div className="bottle-column">
            <img src={bottle.img} alt="" />
            <button onClick={() => handleRemove(bottle.id)} className="remove">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  selects: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};
