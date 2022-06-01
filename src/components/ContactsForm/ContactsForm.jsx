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
            name="name"
            {...register('name', { required: 'This is required' })}
            placeholder="Name"
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            type="text"
            name="number"
            {...register('number', {
              required: 'This is required',
              minLength: { value: 7, message: 'Min length is 7' },
              maxLength: { value: 13, message: 'Max length is 13' },
              pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            })}
            placeholder="Phone number"
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
