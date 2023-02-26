import { useEffect, useState } from "react";
import PropTypes from "prop-types";
export const useWebkitProgressBar = ( min, max, value ) => {
  const [progress, setProgress] = useState((100 / (max - min)) * (value - min));
  useEffect(() => {
    let result = (100 / (max - min)) * (value - min);
    if (result > 100) {
      result = 100;
    }
    if (result < 0) {
      result = 0;
    }
    setProgress(result);
  }, [min, max, value]);
  return progress;
};

useWebkitProgressBar.PropTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}
useWebkitProgressBar.defaultProps = {
    min: 0,
    max: 100,
    value: 0,
}