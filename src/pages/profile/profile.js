import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withAuthProtected } from '../../hoc';
import { logOut } from '../../services';

import { setGuestUserAction } from '../../redux/actions';

import css from './profile.module.css';

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogOut = async () => {
    await logOut();
    dispatch(setGuestUserAction());
    history.replace('/');
  };

  const { title } = props;
  return (
    <div className={classNames('row m-4 p-4', css.profile)}>
      <button
        type="button"
        className="btn btn-light mb-3 btn-sm"
        onClick={onLogOut}>
        Log Out
      </button>
      <h2 className={classNames(css.title)}>{title}</h2>
    </div>
  );
}

export default withAuthProtected(Profile);
