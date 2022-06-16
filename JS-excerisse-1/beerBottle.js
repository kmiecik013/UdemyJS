  function beerGame() {

    let numberOfBottles = 99;

    while(numberOfBottles >0) {

      if (numberOfBottles === 1) {
        console.log(numberOfBottles + "  beer on the wall " + numberOfBottles + "bottle of beer");
        console.log("take one down, pass it around now you're white girl wasted");
        numberOfBottles --;
      }

    else {
      console.log(numberOfBottles + "  beers on the wall " + numberOfBottles + " bottles of beer")
      console.log("take one down, pass it around " + (numberOfBottles-1) + "on the wall");

      numberOfBottles --;
}
  }
}

  console.log(beerGame())