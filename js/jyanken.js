function jyanken_click(jyanken_num) {
    var jyanken_te = "";
    switch(jyanken_num){
        case 0:
            jyanken_te = "グー";
            break;
        case 1:
            jyanken_te = "チョキ";
            break;
        case 2:
            jyanken_te = "パー";
            break;
    }

    document.getElementById("jya_player").innerHTML = "あなた：" + jyanken_te;
    document.getElementById("jya_enemy").innerHTML = "あいて：";
    document.getElementById("jya_result").innerHTML = document.getElementById("pic").files[0];
}

const img = ["images/jyanken_gu.png","images/jyanken_choki.png", "images/jyanken_pa.png"];
let count = -1;
const hoge = () => {
    count++;
    if (count == img.length) count = 0;
    pic.src = img[count];
    setTimeout(() => { hoge(); }, 200);
}

window.onload = () => {
    hoge();
}