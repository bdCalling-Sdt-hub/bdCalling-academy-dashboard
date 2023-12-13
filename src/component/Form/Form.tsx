/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ReactElement, ReactNode, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
type FormConfig = {
    defaultValues?: Record<string, any>;
    resolver?: any;
  };
  
  type FormProps = {
    children?: ReactElement | ReactNode;
    submitHandler: SubmitHandler<any>;
  } & FormConfig;


export default function Form({children,submitHandler,defaultValues,  resolver}:FormProps) {
    const onSubmit = (data: any) => {
        submitHandler(data);
        reset();
      };
      const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;
  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

      useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);
  return (
    <div>
         <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
      </form>
    </FormProvider>
    </div>
  )
}
