import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Details} from "./pages/Details";
import {NotFound} from "./pages/NotFound";
import {HomePage} from "./pages/HomePage";

function App() {
  const [countries, setCountries] = useState([])

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={
            <HomePage countries={countries} setCountries={setCountries} />
          } />
          <Route path="/country/:name" element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
