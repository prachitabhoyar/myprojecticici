import React from "react";
//import Travelinsurance from "./Travel_Insurance/Travelinsurance";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FormMultiTrip from "./Travel_Insurance/FormMultiTrip";
// import FormSingleTrip from "./Travel_Insurance/FormSingleTrip"
// import FormExtendPolicy from "./Travel_Insurance/FormExtendPolicy";
import StudentTravel from "./Travel_Insurance/studenttravel/StudentTravel";
function App() {
  return (
    <div>
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
