const NUM_VISITS_LOCAL_STORAGE_KEY = "wwkay_n";

const getNumVisits = () => {
  const visits = localStorage.getItem(NUM_VISITS_LOCAL_STORAGE_KEY);
  if (visits === null) {
    return 0;
  }
  return parseInt(visits);
};

const incrementVisits = () => {
  localStorage.setItem(NUM_VISITS_LOCAL_STORAGE_KEY, getNumVisits() + 1);
};

let visitCount;

const history = state => {
  if (state.history !== undefined) return state.history;
  else {
    state.history = {
      visitCount: getNumVisits()
    };
    incrementVisits();
  }
};

export default history;
