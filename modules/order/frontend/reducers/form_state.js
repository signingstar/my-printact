import { TYPE_CATEGORY, RESET, SET_TYPE, SET_PRELOAD, SET_FIELD } from "../actions";

const defaultState = {
  complete: false,
  form: {}
}

const typeState = (state = defaultState, {type, label, value}) => {
  switch (type) {
    case RESET:
      return {complete: false, form: {}};
    case SET_FIELD:
      let newState = Object.assign({}, state);
      newState['form'][type] = {label, value};
      return newState;
  }
}

export default typeState;