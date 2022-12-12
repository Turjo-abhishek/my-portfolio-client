
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';

function App() {
  // const [project, setProject] = useState([]);
  //   useEffect(() => {
  //       fetch("projects.json")
  //       .then(res => res.json())
  //       .then(data => setProjects(data))
  //   },[])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/projects/:id",
          element: <ProjectDetails></ProjectDetails>,
          loader: ({params}) => fetch(`https://my-portfolio-server-azure.vercel.app/projects/${params.id}`)
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        }
      ]
    },
  ]);


  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
