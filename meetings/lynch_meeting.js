"use strict";

const Meeting = require("./meeting.js").Meeting;
const _ = require("underscore");

class LynchMeeting extends Meeting {
  constructor(){
    super();
    this.id = "lynch";
    this.name = "Village Meeting";
    this.description = "Choose someone to lynch";
    this.notify = false;
  }

  can_vote_for(player){
    return true;
  }

  show(game){
    return game.day;
  }

  end(){
    super.end();

    let victims = require("./meeting.js").majority(this.votes);

    if(victims.length === 1){
      let victim = victims[0];

      victim.kill("lynch");
    }
  }
}

module.exports = LynchMeeting;
