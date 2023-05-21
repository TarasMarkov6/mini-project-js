import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'libs/hooks/hooks';
import { AppRoute } from 'libs/enums/enums';
import { locationType } from 'libs/prop-types/prop-types';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => ({
    user: state.profile.user
  }));

  const hasUser = Boolean(user);

  return hasUser ? (
    <Navigate
      to={{ pathname: AppRoute.ROOT, state: { from: rest.location } }}
    />
  ) : (
    <Component {...rest} />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: locationType
};

PublicRoute.defaultProps = {
  location: undefined
};

export { PublicRoute };