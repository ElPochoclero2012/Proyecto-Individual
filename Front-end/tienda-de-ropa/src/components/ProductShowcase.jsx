import React from "react";
import Tshirt from "./assets/Tshirt.webp";

function ProductShowcase() {
  return (
    <>
    <div className="caja">
      <div className="cards">
        <div className="card">
          <img src={Tshirt} />
          <div class="text">
            <h3>Seamlessly visualize quality</h3>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks.
            </p>
            <button>Here's why</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductShowcase;