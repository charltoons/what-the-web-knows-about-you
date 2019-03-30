import Link from "next/link";
import React from "react";
import Salutation from "../components/salutation";
import Location from "../components/location";
import Weather from "../components/weather";
import Head from "../components/head";
import state from "../state";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const inittedState = state();
    inittedState.on("change", newState => {
      this.setState(newState);
    });
    this.setState(inittedState);
  }
  render() {
    return (
      <main>
        <Head />
        <Salutation {...this.state} />
        <Location {...this.state} />
        <Weather {...this.state} />
        {/* referrer */}
        {/* language */}
        {/* navigator.hardware concurrency */}
        {/* How many times you have visited using cookie */}
        {/* the last time you were here (timeago), where you were */}
        {/* the first time you were here (timeago), where you were */}
        {/* how fast your internet connection is */}
        {/* your internet connection is slower, faster than most */}
        {/* time zone and if that matches your IP adress timezones */}
        {/* Captcha API to determine Bot / human */}
        {/* whats on your clipboard */}
        {/* device orientation, screen orientation */}
        {/* navigator.deviceMemory */}
        {/* navigator.maxTouchPoints */}
        {/* if you are charging or not, how long it will take to charge, how much battery you have left */}
        {/* get screen size + device pixel ratio to approximate device */}
        {/* How long you've been on the site */}
        {/* ambient light (FF) */}
        {/* macaddress, mac address lookup */}
        {/* the following companies are targeting you specifically with their advertisements */}
        {/* where your mouse is */}
        {/* if you dont have a mouse */}
        {/* whether your phone is in your hand or on the table */}
        {/* volume info? */}
        {/* look into modnzr */}
        {/* broadcast to other devices on you network, how many are there */}
        {/* keylogger */}
        {/* if the site is focused or not */}
        {/* autofill */}
        {/* popular chrome extensions, lastpass, onepassword, ad blocker, ghostery, etc */}
        {/* whether or not you're using an incognito window */}

        {/* Email: gravatar */}
        {/* Email: clear contact or whatever */}
        {/* Email: domains you own */}
        {/* fb, tw */}
      </main>
    );
  }
}

export default Index;
