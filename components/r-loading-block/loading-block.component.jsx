// Styles
import "./loading-block.styles.scss";

const LoadingBlock = ({width, height}) => {
  return (
    <div className="loader-block" style={{width: width, height: height}}>
      <div className="roller">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default LoadingBlock;
