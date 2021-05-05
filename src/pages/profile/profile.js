import classNames from 'classnames';
import { useHistory } from 'react-router';
import { withAuthProtected } from '../../hoc';
import { logOut } from '../../services';

import css from './profile.module.css';

function Profile(props) {
  const history = useHistory();
  const onLogOut = async () => {
    await logOut();
    history.replace('/');
  };

  return (
    <div className={classNames('row m-4 p-4', css.profile)}>
      <button className="btn btn-light mb-3 btn-sm" onClick={onLogOut}>
        Log Out
      </button>
      <h2 className={classNames(css.title)}>{props.title}</h2>
    </div>
  );
}

export default withAuthProtected(Profile);
