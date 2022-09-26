const getFormData = <Type>(formElement: HTMLFormElement): Type => {
  const formData = new FormData(formElement)
  return Object.fromEntries(formData) as Type
}

export default getFormData