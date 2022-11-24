import image from "./450x300.jpg";

export function Column({ plus, minus, value, product }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
      <div className="card my-3" style={{ maxWidth: "18rem" }}>
        <img src={image} alt="" srcset="" />
        <div className="card-body text-center">
          <h5 className="card-title font-weight-bold mt-3">{product}</h5>
          <p className="card-text">$25.00</p>
          <div className="mt-5 pt-2 d-flex justify-content-between">
            <button className="btn btn-outline-dark" onClick={() => plus()}>
              Add to Cart
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={value > 0 && (() => minus())}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
