import React from 'react';

const dashboard = () => {
  return (
    <div className='container mt-5'>
      <h1 className="text-center mt-5">Our Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
  <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/free-photo/lovely-girl-white-shoes-dancing-studio-while-listening-music-full-length-portrait-refined-african-lady-with-skateboard-chilling-pink_197531-11155.jpg?size=626&ext=jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">T-Shirts</h5>
        <p className="card-text">Categories:<span className='text-success'><b>Shirts Section</b></span></p>
        <p className="card-text">Brand:<span className='text-dark'><b>Amazon</b></span></p>
              <p className="card-text">Price:<span className='text-primary'><b>$ 500</b></span></p>
              
              <p className="card-text">Limit:<span className='text-danger'><b>3</b></span></p>
              
      </div>
    </div>
        </div>
        <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/free-photo/pleased-young-woman-holding-store-bag-full-length-view-charming-european-girl-denim-attire_197531-13676.jpg?size=626&ext=jpg&ga=GA1.1.89839238.1664401225&semt=sph" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Jeans</h5>
        <p className="card-text">Categories:<span className='text-success'><b>Pants Section</b></span></p>
        <p className="card-text">Brand:<span className='text-dark'><b>Google</b></span></p>
              <p className="card-text">Price:<span className='text-primary'><b>$ 300</b></span></p>
              
              <p className="card-text">Limit:<span className='text-danger'><b>4</b></span></p>
              
      </div>
    </div>
        </div>
        <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/premium-photo/full-length-body-size-view-nice-attractive-pretty-lovely-slim-dreamy-cheery-girl-jumping-sending-air-kiss-isolated-violet-purple-lilac-bright-vivid-shine-vibrant-color-background_274222-29733.jpg?size=626&ext=jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">T-Shirts</h5>
        <p className="card-text">Categories:<span className='text-success'><b>Shirts Section</b></span></p>
        <p className="card-text">Brand:<span className='text-dark'><b>Amazon</b></span></p>
              <p className="card-text">Price:<span className='text-primary'><b>$ 500</b></span></p>
              
              <p className="card-text">Limit:<span className='text-danger'><b>3</b></span></p>
              
      </div>
    </div>
        </div>
        <div className="col">
    <div className="card h-100">
      <img src="https://img.freepik.com/premium-photo/beautiful-asian-woman-carrying-shopping-bags-phone-hand-while-running_296537-292.jpg?size=626&ext=jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">T-Shirts</h5>
        <p className="card-text">Categories:<span className='text-success'><b>Shirts Section</b></span></p>
        <p className="card-text">Brand:<span className='text-dark'><b>Amazon</b></span></p>
              <p className="card-text">Price:<span className='text-primary'><b>$ 500</b></span></p>
              
              <p className="card-text">Limit:<span className='text-danger'><b>3</b></span></p>
              
      </div>
    </div>
  </div>
  

</div>
    </div>
  );
};

export default dashboard;