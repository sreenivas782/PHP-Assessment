import "./App.css";
import FormData from "./FormData.jsx"
import {Route, Routes} from 'react-router-dom';
import EditPage from "./EditPage.jsx";
import DeletePage from "./DeletePage.jsx";
export default function App() {
  return (
    <main>
      <h1>Community Management</h1>
      <FormData/>
      <Routes>
        <Route  path="/editpage"   element={<EditPage/>}/>
        <Route  path="/deletepage"   element={<DeletePage/>}/>
      </Routes>
    </main>
  );
}
