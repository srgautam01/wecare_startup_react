import React, { Component } from "react";
import TeamMember from "../../components/team-member";

import narutoThumb from "../../assets/char101.jpg";
import sasukeThumb from "../../assets/char102.jpg";
import sakuraThumb from "../../assets/char103.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>WE ARE WECARE</h2>
        <p>
          At WeCare we believe we are taking one of the biggest challenges to
          make cancer manageable by combining the power of nanotechnology with
          the clinical oncology.
        </p>
        <ol>
          <li>Team Members</li>
        </ol>

        {/*<div className="row border">*/}
        {/*  <div className="col-sm-8 border">col-sm-8</div>*/}
        {/*  <div className="col-sm-4 border">col-sm-4</div>*/}
        {/*</div>*/}
        <div className="row border">
          <div className="col-md border">
            <TeamMember
              title="Shreedhar Gautam(PhD Student)"
              thumb={narutoThumb}
              text="PhD student
              Australian center for NanoMedicine,
              School of Chemistry UNSW"
            />
          </div>
          <div className="col-md border">
            <TeamMember
              title="Munkhshur Myekhlai(PhD Scholar)"
              thumb={sasukeThumb}
              text="PhD student
              Australian center for NanoMedicine,
              School of Chemistry UNSW"
            />
          </div>
          <div className="col-md border">
            <TeamMember
              title="Milad Mehdipour(PhD Student)"
              thumb={sakuraThumb}
              text="PhD student
              Australian center for NanoMedicine,
              School of Chemistry UNSW"
            />
          </div>
        </div>
      </div>
    );
  }
}
