import "isomorphic-unfetch";
import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../store";
import Device from "../components/Device";
import Location from "../components/Location";
import Salutation from "../components/Salutation";
import Browsing from "../components/Browsing";
import platform from "platform";
import MobileDetect from "mobile-detect";
import { DateTime } from "luxon";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      clientTime: null
    };
  }
  static async getInitialProps({ reduxStore, req }) {
    const userAgent = req.headers["user-agent"];
    const parsedPlatform = platform.parse(userAgent);
    const md = new MobileDetect(userAgent);
    let ipAddress = req.headers["x-forwarded-for"];
    if (!ipAddress) {
      ipAddress = req.connection.remoteAddress;
    }
    if (req.url.indexOf("debug") !== -1) {
      // ipAddress = '167.160.203.69'
      ipAddress = "74.73.146.44";
    }
    const locationResponse = await fetch(`http://ip-api.com/json/${ipAddress}`);
    const location = await locationResponse.json();
    const { URL } = eval("require('url')");
    console.log(URL);
    const referrer = new URL(req.headers["referer"]);

    const isServer = !!req;
    return {
      ipAddress,
      location,
      referrer,
      platform: parsedPlatform,
      mobileDetect: {
        tablet: md.tablet(),
        phone: md.phone()
      }
    };
  }

  componentDidMount() {
    if (this.state.clientTime === null) {
      this.setState({
        clientTime: DateTime.local()
      });
    }
  }

  componentWillUnmount() {}

  render() {
    if (this.state.clientTime === null) {
      return null;
    }
    return (
      <>
        <p>
          Good <Salutation {...this.props} {...this.state} />, here's what we
          know:
        </p>
        <Device {...this.props} {...this.state} />
        <Location {...this.props} {...this.state} />
        <Browsing {...this.props} {...this.state} />
        <a href="http://localhost:3000/?debug">Click</a>
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
      </>
    );
  }
}

export default connect()(Index);
