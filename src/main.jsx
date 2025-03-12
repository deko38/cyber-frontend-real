
import { createRoot } from 'react-dom/client'
import './reset.css'
import Home from './pages/Home.jsx'
import {BrowserRouter, Routes} from "react-router";

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>

)
