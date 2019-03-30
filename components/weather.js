function Weather({ weather }) {
  if (!weather) return null;

  if (typeof weather === "object") {
    try {
      const weatherDescription = weather.weather[0];

      switch (weatherDescription.main) {
        case "Clear":
          return (
            <p>
              Look at that <em>clear sky</em> outside.
            </p>
          );
          break;
        case "Snow":
          return (
            <p>
              Bundle up, we can see it's <em>snowing</em>.
            </p>
          );
          break;
        case "Thunderstorm":
          return (
            <p>
              Stay clear of those <em>thunderstorms</em> in your area.
            </p>
          );
          break;
        case "Drizzle":
          return (
            <p>
              Keep an umbrella handy, we see some <em>drizzle</em> nearby.
            </p>
          );
          break;
        case "Rain":
          return (
            <p>
              Stay dry, it's <em>raining</em> in your area.
            </p>
          );
          break;
        case "Clouds":
          return (
            <p>
              We see a few <em>clouds</em> around. But hopefully they'll clear
              up.
            </p>
          );
          break;
        default:
          return null;
      }
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

export default Weather;
