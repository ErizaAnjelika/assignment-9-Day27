/* eslint-disable react/prop-types */

import './product.css';
const Product = ({ productText, imgProduct1, imgProduct2 }) => {
  return (
    <div>
    <section className="container text-center mt-5">
      <div className="title">
        {productText.map((item, index) => (
          <div key={index}>{index === 0 ? <h1 key={item}>{item}</h1> : <p>{item}</p>}</div>
        ))}
      </div>
      <div className="row img-product">
        {imgProduct1.map((item) => (
          <div key={item}className="col-sm-4">
            <div className="card border-0">
              <img src={item.image} alt=""/>
              <h4 className='mt-3'>{item.teks}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="container mt-5">
      <div className="title text-center ">
        <h1>Our Product</h1>
      </div>
      <div className="row">
        {imgProduct2.map((item) => (
          <div key={item}className="col-sm-3">
            <div className="card mt-3">
              <img src={item.img} alt=""/>
              <h4>{item.judul}</h4>
              <p className='text-secondary'><small>{item.deskripsi}</small></p>
              <h5>{item.harga}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4 text-center button'>
        <button>Show More</button>
      </div>
    </section>

    </div>
  );
};

export default Product;
