$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(100, 0, canvas.width + 100, 10); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(200, 600, 50, 10, "green");
createPlatform(300, 500, 50, 10, "green");
createPlatform(400, 400, 50, 10, "green");
createPlatform(500, 300, 100, 10, "green");
 createPlatform(100, 400, 50, 10, "green");
createPlatform(600, 300, 500, 10, "green")
createPlatform(1100, 200, 50, 10, "green")


    // TODO 3 - Create Collectables
createCollectable("steve", 100, 100, 0.5, 0);
createCollectable("steve", 680, 100, 0.5, 0);
createCollectable("diamond", 1100, 100, 0.5, 0);




    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2500);
createCannon("right", 200, 1600);
    createCannon("top", 400, 2000);
    createCannon("top", 700, 1300);
    createCannon("top", 800, 800);
    createCannon("top", 900, 700);
    createCannon("top", 1000, 690);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
