import "./featured.css"


export const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img
            src="https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/6ea637cb-00c7-40e6-8cc9-6b4146b9fd90/Ha%20penny%20Bridge_Header_OG.jpg?w=1180&h=787&fm=jpg&fit=crop"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 Properties</h2>

            </div>
        </div>

        <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  )
}
