import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import AppLayout from './ui/AppLayout';

import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Suspense } from 'react';
import Home from './ui/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                element: <Navigate replace to={'/home'} />,
                index: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
                index: <Home />,
            },
        ],
    },
]);

function App() {
    return (
        <DirectionProvider>
            <MantineProvider>
                <Suspense>
                    <RouterProvider router={router} />
                </Suspense>
            </MantineProvider>
        </DirectionProvider>
    );
}

export default App;
