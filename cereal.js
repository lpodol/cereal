var suggestion = process.argv[2];

var flavor = ["Apple", "Cap'n","Cinnamon","Cocoa","Frosted","Fruit","Honey Bunches of","Raisin","Shredded","Toasted"]
var texture = ["Bran", "Crunch", "Crisp", "Flakes","Jacks","Krispies","Loops","Pebbles","Pops","Puffs"]


for (i=0;i<=suggestion;i++){
  var random_flavor = Math.floor(flavor.length*Math.random());
  var random_texture = Math.floor(texture.length*Math.random());
  console.log(flavor[random_flavor] + " " + texture[random_texture]);
}
