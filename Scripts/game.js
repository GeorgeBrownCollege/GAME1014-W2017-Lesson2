// IIFE - Immediately Invoked Function Expression
(function () {
    // GLOBAL Variables
    var canvas;
    var stage;
    var helloLabel;
    var clickMeButton;
    function Start() {
        // reference to the canvas element on the index.html
        canvas = document.getElementById("canvas");
        // setup the createjs stage container
        stage = new createjs.Stage(canvas);
        // set the framerate to 60fps
        createjs.Ticker.framerate = 60;
        // call the Update function every frame
        createjs.Ticker.on("tick", Update);
        // Start the game
        Game();
    }
    // called every frame
    function Update(event) {
        stage.update();
    }
    function Game() {
        console.log("Game Started....");
        helloLabel = new createjs.Text("Goodbye cruel world", "60px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = 320;
        helloLabel.y = 240;
        stage.addChild(helloLabel);
        clickMeButton = new createjs.Bitmap("../Assets/images/clickMeButton.png");
        clickMeButton.on("click", clickMeButton_Click);
        stage.addChild(clickMeButton);
    }
    function clickMeButton_Click() {
        helloLabel.text = "Clicked!";
    }
    window.onload = Start;
})();
//# sourceMappingURL=game.js.map