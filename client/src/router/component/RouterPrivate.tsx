import { Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

type PrivateRouteProps = {
  element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = useAppSelector((state) => state.user.token);

  if (token) {
    return <Navigate to="/đăng-nhập" replace />;
  }

  return <>{element}</>;
};

export default PrivateRoute;