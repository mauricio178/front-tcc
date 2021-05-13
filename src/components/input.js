import React, { useEffect, useRef }  from 'react'
import { useField } from '@unform/core'
import { Container, InputText, ErrorMesage } from './styled/inputs'
 
export default function Input({ name, ...rest }) {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [inputRef, registerField]);
    return (
        <Container>
            <InputText ref={inputRef} defaultValue={defaultValue} {...rest} />
            { error && <ErrorMesage style={{color: '#f00'}}>{error}</ErrorMesage>}
        </Container>
    );
}