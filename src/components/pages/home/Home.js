import React from "react";
import Tabs from "./Tabs.js";
import Heading from "../../layout/Heading.js";

function Home() {
  return (
    <>
      <div className="mt-5">
        <Heading />
      </div>
      <p className="mt-5 mb-5 general-text">
        Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
        rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
        finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
        consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
        euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a,
        varius eget massa.
      </p>
      <div className="mb-5">
        <Tabs />
      </div>
    </>
  );
}

export default Home;
