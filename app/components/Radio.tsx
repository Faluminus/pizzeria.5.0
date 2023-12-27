interface Props {
  checked: boolean;
  val: string;
}

const Radio = ({ checked, val }: Props) => {
  if (checked) {
    return (
      <>
        <input type="radio" name={val} className="radio" checked />
        <h2>{val}</h2>
      </>
    );
  } else {
    return (
      <>
        <input type="radio" name={val} className="radio"/>
        <h2>{val}</h2>
      </>
    );
  }
};

export default Radio;
