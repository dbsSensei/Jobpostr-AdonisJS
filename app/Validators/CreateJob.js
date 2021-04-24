"use strict";

class CreateJob {
  get rules() {
    return {
      title: "required",
      link: "required",
    };
  }
  
  get messages() {
    return {
      required: "Woah now, {{ field }} is required.",
    };
  }
}

module.exports = CreateJob;
