

const ProgressBar = ({percentage}:{percentage:number}) => {

  if(percentage > 100){
    return (
      <div
        className="radial-progress text-xl text-red-900 transition-all"
        style={{ "--value": percentage, "--size": "20rem" }}
        role="progressbar"
      >
        {percentage}%
      </div>
    );
  } else {
    return(
      <div
        className="radial-progress text-xl transition-all"
        style={{ "--value": percentage, "--size": "20rem" }}
        role="progressbar"
      >
        {percentage}%
      </div>
    );
  }
};
export default ProgressBar;
