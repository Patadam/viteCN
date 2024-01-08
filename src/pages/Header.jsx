import { useState } from "react";
import { Link } from "react-router-dom";
import Sponsor from "../components/Sponsor";

function Header() {
  return (
    <div id="header">
      <div id="header-content">
        <div class="contentwrapper">
          <div className="edges">
            <img src="./logo.png" alt="Code Network logo" />
            <h1>Join the community</h1>
            <a href="https://qutcode.getqpay.com/" id="action">
              Sign up <i class="fa fa-external-link" aria-hidden="true"></i>
            </a>
            <p> </p>
            <table style={{ margin: "0 auto" }}>
              <tr>
                <th style={{ textAlign: "right" }}>
                  <a href="https://discordapp.com/invite/f6VRUW9">
                    <img src="/discord.svg" className="tab" />
                  </a>
                </th>
                <th style={{ textAlign: "left" }}>
                  <a href="https://facebook.com/groups/WeCodeALot">
                    <img src="/facebook.svg" className="tab" />
                  </a>
                </th>
              </tr>
            </table>
          </div>
        </div>
        <Sponsor />
      </div>
    </div>
  );
}

export default Header;
