import {
  configureStore
} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import navbarReducer from "./reducers/navbarSlice";
import actionReducer from "./reducers/actionSlice";
import achievementsReducer from "./reducers/achievementsSlice";
import programsReducer from "./reducers/programsSlice";
import servicesReducer from './reducers/servicesSlice';
import eventsReducer from './reducers/eventsSlice';
import universtyReducer from './reducers/universtySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navbarReducer,
    action: actionReducer,
    achievements: achievementsReducer,
    programs: programsReducer,
    services: servicesReducer,
    events: eventsReducer,
    universty:universtyReducer
  },
});