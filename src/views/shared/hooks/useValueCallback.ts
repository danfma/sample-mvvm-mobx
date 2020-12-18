import { ChangeEvent, useCallback } from "react";

export function useValueCallback(handler: (value: string) => void) {
  return useCallback(
    (e: ChangeEvent<HTMLInputElement>) => handler(e.target.value),
    [handler]
  );
}
