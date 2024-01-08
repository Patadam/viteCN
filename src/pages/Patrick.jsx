import Sponsor from "../components/Sponsor";
import "../styles/focused/landing.css";

export default function Patrick() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="edges">
          <img src="./logo.png" alt="Code Network logo" />
          <h1>Join the community</h1>
          <a className="btn btn-primary" href="https://qutcode.getqpay.com/" id="action">
            Sign up <i class="fa fa-external-link " aria-hidden="true"></i>
          </a>
          {/* <div className="container horizontal">
            <a href="https://discordapp.com/invite/f6VRUW9">
              <img src="/discord.svg" className="tab" />
            </a>
            <a href="https://facebook.com/groups/WeCodeALot">
              <img src="/facebook.svg" className="tab" />
            </a>
          </div> */}
        </div>
      </div>

      <Sponsor />
    </div>
  );
}
