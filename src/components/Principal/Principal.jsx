import React from "react";
import profile from "../../assets/images/profile.png";
import "./principal.css"
const Principal = () => {
  return (
    <div>
      <section id="principal">
        <h1 style={{ color: "rgb(255, 153, 0)" }}>Principal Message</h1>
        <div className="principal">
          <div class="principal-image">
            <img src={profile} class="principal" alt="principal" />
          </div>
          <div class="principal-message">
            <p>
              "It is easier to build strong children than to repair broken men".
              A wise quote referring to the role that children could play in
              laying the foundation of a strong nation. I believe that the
              foundation of a strong nation depends on the way its children are
              cared for and nurtured. In order to build a strong nation, we must
              instill good values in our children providing them love and care,
              guiding them through thick and thin till they become confident and
              strong enough. This all can be done through “Quality education”.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Principal;
