import type { ChangeEventHandler } from 'react'
import { useState } from "react"

const useInput = (intialState: string) => {
  const [value, setValue] = useState(intialState)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange: handleChange
  }
}

export default useInput