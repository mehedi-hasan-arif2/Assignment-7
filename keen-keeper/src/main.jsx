import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import router from "./routes/Routes"
import { FriendProvider } from "./context/FriendContext" // Context Import
import './index.css'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider> {/* wrap with provider */}
      <Toaster />
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
)