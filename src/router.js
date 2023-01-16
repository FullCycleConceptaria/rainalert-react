import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Map from './pages/map/map';
import Error from './components/Error/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/pages/map',
    element: <Map />,
    errorElement: <Error />,
  },
]);
