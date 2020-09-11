import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2019/09/Amazon-GIS-Electronics-1-1024x335.jpg"
        alt="banner"
      />
      <div className="home__product">
        <div className="home__productRow">
          <Product
            id="8960745986"
            title="Hp Spectre 13"
            price={1630.21}
            rating={5}
            image="https://moorinsightsstrategy.com/wp-content/uploads/2016/08/Screenshot-25-1200x665-1024x567.png"
          />

          <Product
            id="7830014"
            title="Vivo V17"
            price={300.89}
            rating={4}
            image="https://static.toiimg.com/photo/73078527.cms"
          />
        </div>
        <div className="home__productRow">
          <Product
            id="84365"
            title="Apple Airpod"
            price={129.99}
            rating={4}
            image="https://img2.owcnow.com/imgs/ndesc/Apple/APLMV7N2BEA/APLMV7N2BEA_hero.jpg"
          />

          <Product
            id="41032"
            title="MacBook Air"
            price={1290.11}
            rating={4}
            image="https://itti.com.np/pub/media/catalog/category/Apple_MacBook_Laptop_price_Nepal.jpg"
          />
          <Product
            id="7865"
            title="2020 FHD TV T5300 40inch"
            price={994.63}
            rating={5}
            image="https://images.samsung.com/is/image/samsung/levant-fhd-t5300-ua40t5300auxtw-frontblack-229857819?$PD_GALLERY_L_JPG$"
          />
        </div>
        <div className="home__productRow">
          <Product
            id="2318"
            title="PS5 Ray tracing Up to 120fps with 120Hz 8k output HDR technology"
            price={599.99}
            rating={4}
            image="https://cdn.mos.cms.futurecdn.net/QKuDTr3YDAJvVBGBkXP4QH-1200-80.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
