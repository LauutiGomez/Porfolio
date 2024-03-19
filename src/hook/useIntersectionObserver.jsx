import { useRef, useState, useEffect } from "react";

export const useIntersectionObserver = (
  targetElement,
  callback,
  config = {root: null, threshold: 0.7}
) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, config);
    targetElement?.forEach(element => {
        observer.current.observe(element.current)
    });
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [config]);

  return observer.current;
};
