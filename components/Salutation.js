function Salutation(props) {
  let salutationWord;

  if (props.clientTime) {
    const hour = props.clientTime.hour;
    if (hour < 12) {
      salutationWord = "morning";
    } else if (hour < 18) {
      salutationWord = "afternoon";
    } else {
      salutationWord = "evening";
    }
    return (
      <p>
        Good <em>{salutationWord}</em>, here's what we know:
      </p>
    );
  }
  return null;
}

export default Salutation;
