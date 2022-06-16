console.log("hello")

function loveGen() {
  lovePer = Math.floor((Math.random()*100)+ 1) ;

    if (lovePer <= 50) {
      return lovePer + "% fucking shitty luck";
    }

    else {
      return lovePer + "% maybe theres a chance"
    }
    }





console.log(loveGen());
