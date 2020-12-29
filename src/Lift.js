var Skier = require('./Skier');

class Lift {
  constructor(number){
  this.inService = true;
  this.limit = number;
  this.skiers = [];
  this.safetyBar = 'up';
}
admitSkier(name, boolean) {
//this.skiers.push(1);
this.skiers.push({name: name});
}
}

module.exports = Lift;
