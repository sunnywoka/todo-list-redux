import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './pages/App'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<App />} />
    <Route path="/:param" element={<App />} />
  </Route>
)
