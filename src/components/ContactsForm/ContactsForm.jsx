import { useForm } from 'react-hook-form';

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log('errors', errors);

  return (
    <>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            placeholder="Name"
          />
        </label>
        {errors.name?.message === 'Name is required' && (
          <p>{errors.name?.message}</p>
        )}
        <label htmlFor="number">
          Number
          <input
            type="text"
            {...register('number', {
              required: 'Number is required',
              minLength: { value: 7, message: 'Min length is 7' },
              maxLength: { value: 13, message: 'Max length is 13' },
              pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            })}
            placeholder="Phone number"
          />
        </label>
        {errors.name?.message === 'Number is required' && (
          <p>{errors.name?.message}</p>
        )}
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
