import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../../services';
import { setAuthUserAction } from '../../../redux/actions';
import { PROFILE_PATH } from '../../../utils/routePaths';
import { AUTH_TOKEN } from '../../../utils/constants';

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const loggedIn = await login(data);
    localStorage.setItem(AUTH_TOKEN, JSON.stringify(loggedIn.token));
    dispatch(setAuthUserAction(loggedIn.token));
    history.replace(PROFILE_PATH);
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
          defaultValue="cityslicka"
          {...register('password', { required: true })}
        />
        {errors.password && (
          <span className="text-danger form-text">
            {errors.password.type === 'required' && 'Password is required'}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
