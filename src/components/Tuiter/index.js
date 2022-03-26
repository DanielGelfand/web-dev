import { Outlet } from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/index";
// import "./tuiter.css";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import WhoToFollowList from "./WhoToFollowList";

const reducer = combineReducers({ tuits: tuitsReducer, who: whoReducer });
const store = createStore(reducer);

const Tuiter = () => {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-lg-2 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-lg-6 col-xl-6">
          <Outlet />
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
};
export default Tuiter;
