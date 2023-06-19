import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div className="gpt3__brand__img">
      <img src={google} />
    </div>
    <div className="gpt3__brand__img">
      <img src={slack} />
    </div>
    <div className="gpt3__brand__img">
      <img src={atlassian} />
    </div>
    <div className="gpt3__brand__img">
      <img src={dropbox} />
    </div>
    <div className="gpt3__brand__img">
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
