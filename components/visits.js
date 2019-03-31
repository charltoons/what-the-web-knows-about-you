import conv from "number-to-words";

function Visits({ history }) {
  if (!history) return null;

  if (typeof history === "object") {
    if (history.visitCount === 0) {
      return (
        <p>
          You've come here for the <em>first</em> time, welcome.
        </p>
      );
    }
    return (
      <p>
        You've returned to us. Welcome back for your{" "}
        <em>{conv.toWordsOrdinal(history.visitCount + 1)}</em> visit.
      </p>
    );
  }
}

export default Visits;
