import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import BrowseBooks from './Components/BrowseBooks.jsx';
import BookDetails from './Components/BookDetails.jsx';
import AddBook from "./Components/AddBook.jsx";
import Error from './Components/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/books",
        element: <BrowseBooks />
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />
      },
      {
        path: "/addbook",
        element: <AddBook />
      }
    ],
    errorElement: <Error /> 
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
