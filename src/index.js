import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Errorpage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import EditContact from "./routes/edit";

const router = createBrowserRouter([
    // root '/' route
    {
        path: "/",
        element: <Root />,
        errorElement: <Errorpage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            // '/contact/:contactId' route
            {
                path: 'contacts/:contactId',
                element: <Contact />,
                loader: contactLoader,
            },
            // edit '/contact/:contactId' route
            {
                path: 'contacts/:contactId/edit',
                element: <EditContact />,
                loader: contactLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// We at => Updating Contacts with FormData