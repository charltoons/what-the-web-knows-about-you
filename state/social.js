const checkFacebook = async state => {
  const id = "facebook-jssdk",
    fjs = document.getElementsByTagName("script")[0];
  if (document.getElementById(id)) {
    return;
  }
  const js = document.createElement("script");
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
  window.fbAsyncInit = function() {
    FB.init({
      appId: process.env.fbAppId,
      autoLogAppEvents: false,
      xfbml: true,
      version: "v3.2"
    });

    FB.getLoginStatus(function(response) {
      if (response.status === "connected") {
        // const uid = response.authResponse.userID;
        // const accessToken = response.authResponse.accessToken;
      } else if (response.status === "not_authorized") {
        state.social.facebook = true;
        state.emit("change", state);
      } else {
        state.social.facebook = false;
        state.emit("change", state);
      }
    });
  };
};

const social = state => {
  if (state.social !== undefined) return state.social;
  else {
    state.social = {
      facebook: null
    };

    checkFacebook(state);
  }
};

export default social;
