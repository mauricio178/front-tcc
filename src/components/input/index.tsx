import React, { useEffect, useRef }  from 'react'
import { useField } from '@unform/core'
import { Container, ErrorMesage } from './styled';

 
export default function Input({ name, ...rest }:any) {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, inputRef, registerField]);
    return (
        <Container error={error}>
            { error && <span style={{color: '#f00'}}>{error}</span>}
            <input ref={inputRef}  defaultValue={defaultValue} {...rest} />
        </Container>
    );
}