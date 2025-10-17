import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">

        <div className="fpItem">
            <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/46/20/0b/aparthotel-stare-miasto.jpg?w=800&h=500&s=1"
            alt=""
            className="fpImg"
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
            <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/716755084.jpg?k=a65aae9de784f91ddbdbd4e90afbfe9e8c3da2b06a34514b5d0f0784717fc246&o=&hp=1"
            alt=""
            className="fpImg"
            />
            <span className="fpName">Comfort Suites Airport</span>
            <span className="fpCity">Austin</span>
            <span className="fpPrice">Starting from $140</span>
            <div className="fpRating">
                <button>9.3</button>
                <span>Exceptional</span>
            </div>
      </div>

      <div className="fpItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/2e/91/e2/grand-one-bedroom-suite.jpg?w=900&h=500&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from $99</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
    
      <div className="fpItem">
        <img
          src="https://www.hilton.com/im/en/BERHITW/19948325/hilton00194-hdr.jpg?impolicy=crop&cw=5000&ch=2812&gravity=NorthWest&xposition=0&yposition=0&rw=1200&rh=675"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from $105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    
        
    </div>
  );
};

export default FeaturedProperties;