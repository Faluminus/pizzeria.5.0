import React, {FC} from "react";
interface Props {
  checked: boolean;
  val: string;
  name:string;
}

const Radio:FC<Props> = ({ checked, name,val }: Props) => {
  if (checked) {
    return (
      <>
        <input type="radio" value={val} name={name} className="radio" checked />
        <h2>{val}</h2>
      </>
    );
  } else {
    return (
      <>
        <input type="radio" value={val} name={name} className="radio"/>
        <h2>{val}</h2>
      </>
    );
  }
};

export default Radio;
