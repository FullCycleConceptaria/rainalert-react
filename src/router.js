import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Map from './pages/map/map';
import Error from './components/Error/Error';
import Rain from './pages/rain/rain';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        index: true,
        element: <Rain />,
        errorElement: <Error />,
      },
      {
        path: '/pages/map',
        element: <Map />,
        errorElement: <Error />,
      },
    ],
  },
]);
