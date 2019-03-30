import Head from "next/head";

const head = () => {
  const style = `@font-face {
    font-family: "GT Walsheim";
    src: url("/static/font/GT-Walsheim-Pro-Condensed-Black.woff2") format("woff2");
    font-weight: 700;
    font-weight: normal;
  }

  @font-face {
    font-family: "GT Walsheim";
    src: url("/static/font/GT-Walsheim-Pro-Condensed-Regular-Oblique.woff2") format("woff2");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "GT Walsheim";
    src: url("/static/font/GT-Walsheim-Pro-Condensed-Bold.woff2") format("woff2");
    font-weight: 500;
    font-weight: normal;
  }

  body {
    font-family: "GT Walsheim", "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
    background: #373fff;
    color: #fff;
    margin: 2em;
  }

  h1 {
    font-size: 24px;
    color: #fff;
    font-weight: normal;
    letter-spacing: 0.05em;
    font-weight: 700;
  }

  p {
    font-size: 24px;
    letter-spacing: 0.05em;
    margin: 1em 0;
    line-height: 1.15em;
    font-weight: 400;
    font-style: italic;
  }

  em {
    font-weight: 500;
    font-style: normal;
  }`;

  return (
    <Head>
      <title>What We Know About You</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>{style}</style>
    </Head>
  );
};

export default head;
