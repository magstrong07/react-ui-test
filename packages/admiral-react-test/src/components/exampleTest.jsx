import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Example() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [count, setCount] = useState(123);
  const [count1, setCount1] = useState(555);
  useEffect(() => {
    document.title = `вы нажали ${count} раз`;
  });
  console.log(watch('example1'));
  return (
    <>
      <div
        style={{
          background: '#fff',
        }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </div>
      <div
        style={{
          background: '#fff',
        }}
        onClick={() => setCount1(count1 + 1)}
      >
        {count1}
      </div>
      <form
        style={{
          background: '#fff',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            {...register('exampleRequired', { required: true, maxLength: 10, validate: (value) => value === 'Андрей' })}
            id="name"
            type="text"
          >
            {errors.ExampleRequired && <h1>This field is required</h1>}
          </input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input defaultValue="test" {...register('example', { required: true })} id="email" type="email" />
          <h1 />
          <input
            {...register('example1', {
              required: true,
              disabled: false,
              onChange: (e) => console.log(e),
              value: 'tests',
            })}
            id="email"
            type="email"
          />
          <h1 />
          <input
            defaultValue="test2"
            {...register('example2', {
              required: true,
              disabled: false,
              onChange: (e) => console.log(e),
              deps: ['example1'],
            })}
            id="email"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Example;
