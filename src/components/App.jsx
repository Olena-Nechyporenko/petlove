import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './LayoutComponents/Layout/Layout';
import { LoaderImage } from './Loaders/LoaderImage/LoaderImage';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const FriendsPage = lazy(() => import('pages/FriendsPage/FriendsPage'));
const ProfilePage = lazy(() => import('pages/ProfilePage/ProfilePage'));
const AddPetPage = lazy(() => import('pages/AddPetPage/AddPetPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    let timer;

    if (isRefreshing) {
      setShowLoader(true);
      timer = setTimeout(() => setShowLoader(false), 1000);
    } else {
      timer = setTimeout(() => setShowLoader(false), 1000);
    }

    return () => clearTimeout(timer);
  }, [isRefreshing]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return showLoader ? (
    <LoaderImage />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="register" element={<RestrictedRoute redirectTo="/profile" component={<RegisterPage />} />} />

        <Route path="login" element={<RestrictedRoute redirectTo="/profile" component={<LoginPage />} />} />

        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<FriendsPage />} />

        <Route path="profile" element={<PrivateRoute redirectTo="/login" component={<ProfilePage />} />} />

        <Route path="add-pet" element={<PrivateRoute redirectTo="/login" component={<AddPetPage />} />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
