import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const SelectInput: React.FC<InputProps> = ({ name, placeholder, children, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  console.log({fieldName, registerField, defaultValue, error})

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return(
    <Container error={error}>
      { error && <span style={{color: '#f00'}}>{error}</span>}
      <select ref={inputRef} defaultValue={defaultValue} {...rest}>
        {children}
      </select>
    </Container>
  );
}

export default SelectInput;