import React from "react";
import Travelinsurance from "./Travel_Insurance/travelpage1/Travelinsurance"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FormMultiTrip from "./Travel_Insurance/travelpage1/FormMultiTrip"
// import FormSingleTrip from "./Travel_Insurance/travelpage1/FormSingleTrip"
// import FormExtendPolicy from "./Travel_Insurance/travelpage1/FormExtendPolicy";
import StudentTravel from "./Travel_Insurance/studenttravel/StudentTravel";
function App() {
  return (
    <div>
      {/* prachita */}
      {/* <Router>
      <Travelinsurance />
        <Routes>
          <Route path='/fmultitrip' element={<FormMultiTrip />} ></Route>
          <Route path='/fsingletrip' element={<FormSingleTrip />} ></Route>
          <Route path='/fextendpolicy' element={<FormExtendPolicy />} ></Route>
        </Routes>
      </Router>  */}
      <StudentTravel/>
    </div>
  );
}

export default App;
