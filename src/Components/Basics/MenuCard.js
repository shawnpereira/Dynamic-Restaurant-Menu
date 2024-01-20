import React from "react";

function MenuCard({ Data }) {
  console.log(Data);
  return (
    <>
      <section className="main-card-container">
        {Data.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author">{name}</span>
                  <h2>{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card tag subtle">Order Now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default MenuCard;
