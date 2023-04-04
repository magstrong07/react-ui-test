import React from 'react';

import { useForm } from 'react-hook-form';

function Example2() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log('errors', errors);
  console.log(isDirty);
  return (
    <>
      <form
        style={{
          background: '#fff',
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input {...register('example', { required: true, maxLength: 5 })} />
        <h1></h1>
        <input {...register('test', { deps: ['example'] })} />
        {/* <h1>{errors.example}</h1> */}
        {errors.example && <i>больше 5 символов</i>}
        <select {...register('category')}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
        <button type="submit">проверить</button>
      </form>
    </>
  );
}

export default Example2;
