import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import projects from './projects';

const rootReducer = combineReducers({
  counter,
  todos,
  projects
});

export default rootReducer;