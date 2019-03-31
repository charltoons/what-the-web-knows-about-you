function Referrer({ referrer }) {
  if (!referrer) return null;

  if (typeof referrer === "object") {
    // prettier-ignore
    return (
      <p>
        Before joining us, you were visiting <em>{referrer.title}</em>.
      </p>
    );
  }

  return null;
}

export default Referrer;
