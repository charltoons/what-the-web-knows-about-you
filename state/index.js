import knot from "knot.js";
import { DateTime } from "luxon";
import ip from "./ip-info";
import weather from "./weather";
import refer from "./refer";
import history from "./history";

const state = knot({
  clientTime: DateTime.local()
});

state.on("change", () => refreshState());

const refreshState = () => {
  ip(state);
  weather(state);
  refer(state);
  history(state);

  return state;
};

export default refreshState;
