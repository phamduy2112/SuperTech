import { Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

type PrivateRouteProps = {
  element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const login = useAppSelector((state) => state.user.login);

  if (login) {
    return <>{element}</>;
  }

  return <Navigate to="/đăng-nhập" replace />;
};

const AuthRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const login = useAppSelector((state) => state.user.login);

  if (login) {
    return <Navigate to="/" replace />; // Nếu đã đăng nhập, điều hướng về trang chủ
  }

  return <>{element}</>; // Nếu chưa đăng nhập, hiển thị trang đăng nhập
};

export { PrivateRoute, AuthRoute };