import classNames from 'classnames';
import { withAuthProtected } from '../../hoc';

import css from './profile.module.css';

function Profile(props) {
  return (
    <div className={classNames('row m-4 p-4', css.profile)}>
      <h2 className={classNames(css.title)}>{props.title}</h2>
    </div>
  );
}

export default withAuthProtected(Profile);
