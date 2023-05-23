const dynamic = require("next/dynamic");
const React = require("react");

const NoSSR = (props) => <React.Fragment>{props.children}</React.Fragment>;

module.exports = dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
