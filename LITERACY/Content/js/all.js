
//點選錄音跟播放顯示聲音動態
$(".function_btn_item_microphone").click(function () {
    $(".sound_bar_area").toggleClass("play_animation");
});

$(".function_btn_item_play").click(function () {
    $(".sound_bar_area").toggleClass("play_animation");
    $(this).toggleClass( "stop_btn" );
    $(this).toggleClass( "play_btn" );
    $(this).siblings('.play_text').textContent="New Text";//變成顯示密碼
    var playText = document.getElementById("playText");
    if (playText.innerHTML === "停止") {
        playText.innerHTML = "播放";
      } else {
        playText.innerHTML = "停止";
      }
});
