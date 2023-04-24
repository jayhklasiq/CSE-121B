// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function isHit(){
    let rando =  Math.floor(Math.random() * 0.6);

    if (rando > 0.5){
        return true
    }
    else{
        return false
    }
}

function shipCanFire(){
    if (shipHealth > 0 && shipAmmo > 0){
        return true
    }
    else{
        return false
    }
}

function isDestroyed(shipHealth) {
    if (shipHealth <= 0){
        return true
    }
    else{
        return false
    }
}

function reloadShip(){
    shipHealth -= 1
    shipAmmo += 3
}

//See  JS Operators - Ponder activities. in week 2 docs for Solution comparison.

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}

encounter();
fireShip();