import React, { ChangeEvent, FormEvent } from 'react';

type FormProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormProps) => {
  const { handleChange, handleSubmit, value } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={value}
        placeholder="Search case descriptions"
      />
    </form>
  );
};

export default Form;
