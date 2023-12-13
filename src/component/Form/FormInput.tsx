/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from 'antd';
import React from 'react'
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
    name: string;
    type?: string;
    size?: "large" | "small";
    value?: string | string[] | undefined;
    id?: string;
    placeholder?: string;
    validation?: object;
    label?: string;
    required?: boolean;
  }
export default function FormInput({ name,
    type,
    size = "large",
    value,
    id,
    placeholder,
    validation,
    label,
    required,}:IInput) {



        const {
            control,
            formState: { errors },
          } = useFormContext();
  return (
    <>
      {required ? (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      ) : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{''}</small>
    </>
  )
}
