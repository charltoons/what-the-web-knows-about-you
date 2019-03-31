import conv from "number-to-words";

function Social({ social }) {
  if (!social) return null;

  if (typeof social === "object") {
    if (social.facebook === true) {
      return (
        <p>
          We see that you use <em>Facebook</em>.
        </p>
      );
    }
    return null;
  }
}

export default Social;
