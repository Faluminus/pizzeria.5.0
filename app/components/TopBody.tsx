"use client";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Radio from "./Radio";
import Switcher3 from "./TogleButton";
import { toggleContext } from "./contexts/TogleButtonContext";
import Cookies from "js-cookie";
import Button from "./FormHandleButton";


const TopBody = () => {
  const [percentage, setPercentage] = useState(0);
  const handlePercentageChange = (newPercentage: number) => {
    setPercentage(newPercentage + percentage);
  };
  const [formData, setFormData] = useState({
    Peperoni: false,
    Bacon: false,
    Chicken: false,
    Mushrooms: false,
    Tomatoes: false,
    Jalapeños: false,
    Pineapple: false,
    Spinach: false,
    Mozzarella: false,
    Gorgonzola: false,
    Cheddar: false,
    Feta: false,
    Basil: false,
    Parsley: false,
    AlfredoSauce: false,
    Anchovies: false,
  });
  const WhatToSave = (event: React.FormEvent) => {
    event.preventDefault();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (formData[key as keyof typeof formData] === true) {
          Cookies.set(key, formData[key as keyof typeof formData].toString(), {
            expires: 7,
          });
        }
      }
    }
  };

  return (
    <toggleContext.Provider value={percentage}>
      <form className="flex justify-center" method="post" onSubmit={WhatToSave}>
        <div className="grid grid-cols-2 form-control h-full w-5/6">
          <div className="flex flex-col text-center mx-10">
            <div className="">
              <h1 className="my-5 w-full text-xl">Select your pizza</h1>
            </div>
            <div className=" bg-gray-100 shadow h-full w-full rounded-box ">
              <div className="grid grid-rows-2">
                <div className="my-4">
                  <div className="flex flex-row justify-center ">
                    <div className="bg-black w-1/5 h-1 rounded-box mx-3 my-3"></div>
                    <h1>Size</h1>
                    <div className="bg-black w-1/5 h-1 rounded-box mx-3 my-3"></div>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className="grid grid-cols-3 align-middle">
                      <div className="mx-5">
                        <Radio checked={false} val="small" />
                      </div>
                      <div className="mx-5">
                        <Radio checked={false} val="medium" />
                      </div>
                      <div className="mx-5">
                        <Radio checked={false} val="large" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row justify-center ">
                  <div className="bg-black w-1/3 h-1 rounded-box mx-3 my-3"></div>
                  <h1>Ingredients</h1>
                  <div className="bg-black w-1/3 h-1 rounded-box mx-3 my-3"></div>
                </div>
                <div className="grid grid-cols-2 my-5">
                  <div className="flex justify-center">
                    <div>
                      <Switcher3
                        text="Pepperoni"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Bacon"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Chicken"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Mushrooms"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Tomatoes"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Jalapeños"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Pineapple"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Spinach"
                        onPercentageChange={handlePercentageChange}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div>
                      <Switcher3
                        text="Mozzarella"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Gorgonzola"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Cheddar"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Feta"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Basil"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Parsley"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="AlfredoSauce"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="Anchovies"
                        onPercentageChange={handlePercentageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button/>
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="mx-1/2">
              <ProgressBar percentage={percentage} />
            </div>
          </div>
        </div>
      </form>
    </toggleContext.Provider>
  );
};
export default TopBody;
