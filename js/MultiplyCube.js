window.addEventListener('load', function(){

    // タッチ開始
    document.getElementById("cube_1").addEventListener('touchstart', logTouchStart);

    // タッチ終了
    document.getElementById("cube_1").addEventListener('touchend', logTouchEnd);
});

function logTouchStart() {
    console.log("タッチ開始");
}

function logTouchEnd() {
    console.log("タッチ終了");
}