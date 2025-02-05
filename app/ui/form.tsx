import { Form as RemixForm, FormProps } from 'remix-forms'
import { SomeZodObject } from 'zod'
import Error from './error'
import Errors from './errors'
import Field from './field'
import Input from './input'
import Label from './label'
import Select from './select'
import SubmitButton from './submit-button'

export default function Form<Schema extends SomeZodObject>(
  props: FormProps<Schema>,
) {
  return (
    <RemixForm<Schema>
      className="flex flex-col space-y-6"
      fieldComponent={Field}
      labelComponent={Label}
      inputComponent={Input}
      selectComponent={Select}
      buttonComponent={SubmitButton}
      globalErrorsComponent={Errors}
      errorComponent={Error}
      {...props}
    />
  )
}
