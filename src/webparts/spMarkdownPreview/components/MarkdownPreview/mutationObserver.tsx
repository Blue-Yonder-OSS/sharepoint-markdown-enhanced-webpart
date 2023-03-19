import * as React from "react";
import { useRefDOM } from "./useRefDOM";

export const useMutationObserver = ():any => {
  const [isMountedDom, mountedCallback, ref] = useRefDOM();
  React.useEffect(() => {
    if (!isMountedDom) return;
    const config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    };
    const observer = new MutationObserver(function (mutations) {
      console.log(mutations);
    });

    observer.observe(ref.current, config);
  }, [isMountedDom, ref]);
  return mountedCallback;
};
