import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { Container, Select } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const SelectInput: React.FC<InputProps> = ({ name, placeholder, children, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return(
    <Container>
      <Select placeholder={placeholder} ref={inputRef} defaultValue={defaultValue} {...rest}>
        {children}
      </Select>
    </Container>
  );
}

export default SelectInput;