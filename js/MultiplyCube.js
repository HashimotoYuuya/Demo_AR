
var isDouble = true;
var timer = null;

// タッチイベント
window.addEventListener("touchstart", function (event) {
    console.log("touchstart");
    timer = setInterval(isDouble ? increaseCube : decreaseCube, 1000);
});
   
// タッチが離れた際のイベント
window.addEventListener("touchend", funcStop);
window.addEventListener("touchcancel", funcStop);

function funcStop() {
    isDouble = !isDouble;
    console.log("funcStop");
    this.clearInterval(timer);
}

//キューブ減少
function decreaseCube() {
}

//キューブ増加
var isVertical = true;
function increaseCube() {
    let cube_count = document.getElementById("marker").childElementCount;
    
    for (let i = 0; i < cube_count * 2; i++){
        var cube;
        //既存キューブならインスタンス握る
        if (i < cube_count) {
            cube = document.getElementById("cube_" + i);
        }//まだないキューブならインスタンスコピー
        else {
            cube = document.getElementById("cube_0").cloneNode(true);
            cube.id = "cube_" + i;
        }
        //増加の方向によって代える変化
        cube.position = "0 0 " + i;

        
        //追加
        document.getElementById("marker").appendChild(cube);
    }

    isVertical = !isVertical;
}