import React from 'react';
import { Field } from 'redux-form';
import classes from './FormsControls.module.css';

export const FormControl = ({ input, meta: { touched, error }, children }: any) => {
  const hasError = touched && error;

  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
      <div>{children}</div>
      {hasError ? <span>{error}</span> : ''}
    </div>
  );
};

export const Textarea = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props: any) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder: string,
  name: string,
  validators: any,
  component: any,
  type: any = {},
  text = ''
) => {
  return (
    <div>
      <Field {...type} placeholder={placeholder} name={name} validate={validators} component={component} />
      {text}
    </div>
  );
};
