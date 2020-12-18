import { useCallback } from "react";

export function useMapper<TIn, TOut>(
  callback: (value: TOut) => void,
  transform: (input: TIn) => TOut
) {
  return useCallback(
    (value: TIn): void => {
      callback(transform(value));
    },
    [callback, transform]
  );
}
