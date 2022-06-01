import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
// import { ContactsView } from 'views/ContactsView';
// import { HomeView } from 'views/HomeView';
// import { LoginView } from 'views/LoginView';
// import { RegisterView } from 'views/RegisterView';
import { AppBar } from './AppBar/AppBar';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PrivateRoute';

const HomeView = lazy(() => import('views/HomeView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const ContactsView = lazy(() => import('views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />
          </Routes>
        </Suspense>
      </>
    )
  );
};
