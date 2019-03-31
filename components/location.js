function Location({ ip }) {
  if (!ip) return null;

  if (typeof ip === "object") {
    // normalize to make the countries sound idiomatically correct
    let renderedCountry;
    switch (ip.country) {
      case "United States":
        renderedCountry = (
          <>
            the <em>{ip.country}</em>
          </>
        );
        break;
      default:
        renderedCountry = <em>{ip.country}</em>;
        break;
    }

    // prettier-ignore
    return (
      <p>
        From your <em>IP address</em>, we can tell that you're in {renderedCountry}. 
        Specifically <em>{ip.city}</em> in{" "}
        <em>{ip.regionName}</em>.
      </p>
    );
  }
}

export default Location;
