import { ClientProps } from '../pages/Checkout'
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react'

/*
  Aqui eu aprendi 
  useState com localStorage
  useEffect com localStorage
  Context.Provider para o Success (página sem o componente inserido aqui, 
  utilizando as rotas)
*/

interface FormProviderProps {
  children: ReactNode
}

interface DataToCheckout {
  formData: ClientProps
  selectedPayment: string | null
  setFormData: Dispatch<SetStateAction<ClientProps>>
  setSelectedPayment: Dispatch<SetStateAction<string | null>>
}

export const FormWrapperData = createContext({} as DataToCheckout)

const FormProviderWrapper = ({ children }: FormProviderProps) => {

  const [formData, setFormData] = useState<ClientProps>(() => {
    const storedFormData = localStorage.getItem('@coffee-delivery: form-data')
    return storedFormData ? JSON.parse(storedFormData) : {
      codigopostal: 0,
      ruaresidencial: '',
      numeroresidencial: 0,
      bairroresidencial: '',
      cidadecliente: '',
      siglacidade: '',
      extrainfoap: undefined,
    }
  })

  const [selectedPayment, setSelectedPayment] = useState<string | null>(() => {
    return localStorage.getItem('@coffee-delivery:selected-payment') || null
  })

  useEffect(() => {
    localStorage.setItem('@coffee-delivery: form-data', JSON.stringify(formData))
    localStorage.setItem('@coffee-delivery:selected-payment', selectedPayment || '')
  }, [formData, selectedPayment])

  const dataToCheckout: DataToCheckout = {
    formData,
    selectedPayment,
    setFormData,
    setSelectedPayment,
  }

  return (
    <FormWrapperData.Provider value={dataToCheckout}>
      {children}
    </FormWrapperData.Provider>
  );
};

export { FormProviderWrapper }