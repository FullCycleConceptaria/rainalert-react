import { useState } from 'react';

export function useHandleClickInput() {
  const [style, setStyle] = useState(false);
  function HandleClickInput(openClose) {
    if (openClose === 'open') {
      setStyle(true);
    } else {
      setStyle(false);
    }
  }
  return [HandleClickInput, style];
}
