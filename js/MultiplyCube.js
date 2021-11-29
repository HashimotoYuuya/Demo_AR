

// タッチイベント
AFRAME.registerComponent('click-change', {
    init: function () {
        console.log("Clicked")
        this.el.addEventListener('click', increaseCube);
    }
  });

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