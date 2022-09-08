
document.addEventListener("keypress", function (e) {
        switch (e.code) {
                case "KeyA":
                        let aKey = new Audio("sounds/A.mp3");
                        aKey.play();
                        break;
                case "KeyS":
                        let sKey = new Audio("sounds/S.mp3");
                        sKey.play();
                        break;
                case "KeyD":
                        let dKey = new Audio("sounds/D.mp3");
                        dKey.play();
                        break;
                case "KeyF":
                        let fKey = new Audio("sounds/F.mp3");
                        fKey.play();
                        break;
                case "KeyG":
                        let gKey = new Audio("sounds/G.mp3");
                        gKey.play();
                        break;
                case "KeyH":
                        let hKey = new Audio("sounds/H.mp3");
                        hKey.play();
                        break;
                case "KeyJ":
                        let jKey = new Audio("sounds/J.mp3");
                        jKey.play();
                        break;
                case "KeyW":
                        let wKey = new Audio("sounds/W.mp3");
                        wKey.play();
                        break;
                case "KeyE":
                        let eKey = new Audio("sounds/E.mp3");
                        eKey.play();
                        break;
                case "KeyT":
                        let tKey = new Audio("sounds/T.mp3");
                        tKey.play();
                        break;
                case "KeyY":
                        let yKey = new Audio("sounds/Y.mp3");
                        yKey.play();
                        break;
                case "KeyU":
                        let uKey = new Audio("sounds/U.mp3");
                        uKey.play();
                        break;
                default:
                        console.log("Wrong key is pressed!");
                        break;
        }
});
