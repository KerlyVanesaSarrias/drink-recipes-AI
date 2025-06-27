import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Favorites from "./pages/Favorites";
import Layout from "./Layouts/Layout";


export default function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<IndexPage />} index />
                        <Route path="/favorites" element={<Favorites />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
