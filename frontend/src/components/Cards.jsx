import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl my-5 hover:scale-105 duration-200 border">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
            className="rounded-lg mt-2"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white px-2 cursor-pointer">Buy Now</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
