"use client";
import { useState,FC } from "react";
import ProgressBar from "./ProgressBar";
import Radio from "./Radio";
import Switcher3 from "./TogleButton";
import { toggleContext } from "./contexts/TogleButtonContext";
import Cookies from "js-cookie";
import Button from "./FormHandleButton";


const TopBody:FC = () => {
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

  return (
    <toggleContext.Provider value={percentage}>
      <form className="flex justify-center" method="post" action="http://localhost:8000/formhandle.php">
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
                        <Radio checked={false} name="size" val="small" />
                      </div>
                      <div className="mx-5">
                        <Radio checked={false} name="size" val="medium" />
                      </div>
                      <div className="mx-5">
                        <Radio checked={false} name="size" val="large" />
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
                        text="pepperoni"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="bacon"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="chicken"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="mushrooms"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="tomatoes"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="jalapeños"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="pineapple"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="spinach"
                        onPercentageChange={handlePercentageChange}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div>
                      <Switcher3
                        text="mozzarella"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="gorgonzola"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="cheddar"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="feta"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="basil"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="parsley"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="alfredoSauce"
                        onPercentageChange={handlePercentageChange}
                      />
                      <Switcher3
                        text="anchovies"
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
