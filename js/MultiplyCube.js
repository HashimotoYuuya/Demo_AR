
var isIncrease = true;
var timer = null;

increaseCube();
AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;

        // マーカー検出イベントの登録
        marker.addEventListener('markerFound', function () {
            var markerId = marker.id;
            console.log('markerFound', markerId);
            //増加/減少タイマーの開始
            timer = setInterval(isIncrease ? increaseCube : decreaseCube, 1000);
        });

        // マーカーロストイベントの登録
        marker.addEventListener('markerLost', function () {
            var markerId = marker.id;
            console.log('markerLost', markerId);
            //増減フラグの反転
            isIncrease = !isIncrease;
            this.clearInterval(timer);
        });
    }
});

//キューブ減少
function decreaseCube() {
    var marker = document.getElementById("marker");
    //要素が2つ以上あれば削除
    if (marker.childElementCount > 1) {
        marker.removeChild(marker.lastChild);
    }
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