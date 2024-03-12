import "./Bottle.css";

const Bottle = ({ bottle, handleSelected }) => {
  const { name, price, img, seller, ratingsCount } = bottle;
  return (
    <div>
      <div>
        <img
          style={{ height: "300px", borderRadius: "15px" }}
          src={img}
          alt=""
        />
        <h2 className="bottleName">{name}</h2>
        <h4 className="seller">{seller}</h4>
        <div className="price-review">
          <p className="price">${price}</p>
          <p className="review">({ratingsCount} review)</p>
        </div>
        <button onClick={() => handleSelected(bottle)} className="btn">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Bottle;
