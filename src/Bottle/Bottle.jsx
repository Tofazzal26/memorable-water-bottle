import "./Bottle.css";

const Bottle = ({ bottle }) => {
  const { name, price, img, seller, ratingsCount } = bottle;
  console.log(bottle);
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
        <button className="btn">Purchase</button>
      </div>
    </div>
  );
};

export default Bottle;
