import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { signUp } from '../../../services';

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const loggedIn = await signUp(data);
    localStorage.setItem('auth.token', JSON.stringify(loggedIn.token));
    history.replace('/profile');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          defaultValue="eve.holt@reqres.in"
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className="text-danger form-text">
            {errors.email.type === 'required' && 'Email is required'}
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          defaultValue="pistol"
          {...register('password', { required: true })}
        />
        {errors.password && (
          <span className="text-danger form-text">
            {errors.password.type === 'required' && 'Password is required'}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
