"use client";

import { useState, FC, useEffect } from "react";

const Cart: FC = () => {
  const [Count, SetCount] = useState(0);
  useEffect(() => {
    let pizza = "";
    const cookies = document.cookie.split(";");
    cookies.forEach(function (value) {
      if (value.split("=")[0] == "openname") {
        pizza = decodeURIComponent(value.split("=")[1]);
      }
    });

    let numberOfPizzas = pizza.split("]").length - 1;

    SetCount(numberOfPizzas);
  });
  return (
    <>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">{Count}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{Count} Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <a className="btn btn-primary btn-block">View cart</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
