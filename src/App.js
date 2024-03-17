import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    {/* <div class="preloader-bg"></div>
        <div id="preloader">
            <div id="preloader-status">
                <div class="preloader-position loader">
                    <span></span>
                </div>
            </div>
        </div> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
