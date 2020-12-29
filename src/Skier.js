class Skier {
  constructor(nameValue, boolean){
  this.name = nameValue;
  this.hasLiftTicket = boolean;
  this.skillLevel = 1;
  this.nextSlope = 'green circle';
}
takeLesson(){
this.skillLevel++
}
pickSlope() {
  if(this.skillLevel <= 4){
  this.nextSlope = 'blue square';
} else {
  this.nextSlope = 'black diamond';
}
}
}

module.exports = Skier;
