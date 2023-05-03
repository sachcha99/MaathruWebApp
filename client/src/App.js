import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Login from "./pages/Login";
import RegisterMother from "./pages/RegisterMother";
import Home from "./pages/Home";
import RegisterType from "./pages/RegisterType";
import RegisterInstructor from "./pages/RegisterInstructor";
import userReducer from "./redux/user";
import PregnancyTips from "./pages/PregnancyTips";
import YogaTips from "./pages/YogaTips";
import MealPlans from "./pages/MealPlans";
import Instructors from "./pages/Instructors";

const store = configureStore({
  reducer: {
    user: userReducer
  },
});

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/registerMother' exact element={<RegisterMother />} />
            <Route path='/registerInstructor' exact element={<RegisterInstructor />} />
            <Route path='/registerType' exact element={<RegisterType />} />
            <Route path='/pregnancyTips' exact element={<PregnancyTips />} />
            <Route path='/yogaTips' exact element={<YogaTips />} />
            <Route path='/mealPlans' exact element={<MealPlans />} />
            <Route path='/instructors' exact element={<Instructors />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
