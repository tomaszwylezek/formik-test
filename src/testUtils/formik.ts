import {FormikProps} from "formik";

export function formikConfig<T> (options: Partial<FormikProps<T>>): FormikProps<T> {
  return {
    enableReinitialize: false,
    handleBlur: jest.fn(),
    handleChange: jest.fn(),
    setStatus: jest.fn(),
    setError: jest.fn(),
    setErrors: jest.fn(),
    setSubmitting: jest.fn(),
    setTouched: jest.fn(),
    setValues: jest.fn(),
    setFieldValue: jest.fn(),
    setFieldError: jest.fn(),
    setFieldTouched: jest.fn(),
    validateForm: jest.fn(),
    validateField: jest.fn(),
    resetForm: jest.fn(),
    submitForm: jest.fn(),
    setFormikState: jest.fn(),
    isValidating: false,
    isSubmitting: false,
    submitCount: 0,
    handleSubmit: jest.fn(),
    handleReset: jest.fn(),
    dirty: false,
    isValid: false,
    registerField: jest.fn(),
    unregisterField: jest.fn(),
    values: {} as T,
    errors: {} as T,
    initialValues: {} as T,
    touched: {} as T,
    ...options
  }
}
