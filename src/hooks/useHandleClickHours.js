import { useState } from 'react';

export function useHandleClickHours() {
  const [buttonStyled, setButtonStyled] = useState('1');
  function HandleClickHours(e) {
    setButtonStyled(e.target.id);
  }
  return [HandleClickHours, buttonStyled];
}
