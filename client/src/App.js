import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import RegisterMother from "./pages/RegisterMother";
import Home from "./pages/Home";
import RegisterType from "./pages/RegisterType";
import RegisterInstructor from "./pages/RegisterInstructor";
import userReducer from "./redux/user";
import appointmentReducer from "./redux/appointment";
import PregnancyTips from "./pages/PregnancyTips";
import YogaTips from "./pages/YogaTips";
import MealPlans from "./pages/MealPlans";
import Instructors from "./pages/Instructors";
import ChannelADoctor from "./pages/ChannelADoctor";
import DoctorPage from "./pages/DoctorPage";
import Channel from "./pages/Channel";
import Payment from "./pages/Payment";
import InstructorProfile from "./pages/InstructorProfile";
import ReadingMaterials from "./pages/ReadingMaterials";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/Dashboard";

const store = configureStore({
  reducer: {
    user: userReducer,
    appointment: appointmentReducer,
  },
});

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/registerMother" exact element={<RegisterMother />} />
            <Route
              path="/registerInstructor"
              exact
              element={<RegisterInstructor />}
            />
            <Route path="/registerType" exact element={<RegisterType />} />
            <Route path="/pregnancyTips" exact element={<PregnancyTips />} />
            <Route path="/yogaTips" exact element={<YogaTips />} />
            <Route path="/mealPlans" exact element={<MealPlans />} />
            <Route path="/instructors" exact element={<Instructors />} />
            <Route path="/channelDoc" exact element={<ChannelADoctor />} />
            <Route path="/doctor" exact element={<DoctorPage />} />
            <Route path="/channel" exact element={<Channel />} />
            <Route path="/payment" exact element={<Payment />} />
            <Route path="/insProfile" exact element={<InstructorProfile />} />
            <Route path="/reading" exact element={<ReadingMaterials />} />
            <Route path="/profile" exact element={<UserProfile />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
