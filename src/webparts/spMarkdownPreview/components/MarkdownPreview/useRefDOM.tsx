import * as React from "react";

export const useRefDOM = (): any[] => {
  const [state, setState] = React.useState(false);
  const ref = React.useRef(null);
  const stateCallback = React.useCallback((node) => {
    if (node !== null) {
      setState(true);
      ref.current = node;
    } else {
      setState(false);
      ref.current = null;
    }
  }, []);
  return [state, stateCallback, ref];
};
