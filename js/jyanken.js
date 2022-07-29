function jyanken_click(jyanken_num) {
    var jyanken_te_player = "";
    switch(jyanken_num){
        case 0:
            jyanken_te_player = "グー";
            break;
        case 1:
            jyanken_te_player = "チョキ";
            break;
        case 2:
            jyanken_te_player = "パー";
            break;
    }

    document.getElementById("jya_player").innerHTML = "あなた：" + jyanken_te_player;
    document.getElementById("jya_enemy").innerHTML = "あいて：" + jyanken_enemy();
    document.getElementById("jya_result").innerHTML = jyanken_judge();
}


function jyanken_enemy(){
    var enemy_te="";
    var rnd = Math.floor(Math.random() * 3);
    switch(rnd){
        case 0:
            enemy_te = "グー";
            break;
        case 1:
            enemy_te = "チョキ";
            break;
        case 2:
            enemy_te = "パー";
            break;
    }
    return enemy_te;
}

function jyanken_judge(player_te,enemy_te){
    var p_num = jyanken_te_check(player_te);
    var e_num = jyanken_te_check(enemy_te);
    
    
    var hantei = "";
    if (p_num === e_num) {
        hantei = "あいこです";
    } else if(p_num === 0 && e_num === 1) {
        hantei = "あなたの【勝ち】";
    }else if(p_num === 1 && e_num === 2) {
        hantei = "あなたの【勝ち】";
    }else if(p_num === 2 && e_num === 0) {
        hantei = "あなたの【勝ち】";
    }else {
        hantei = "あなたの【負け】";
    }
    return hantei;
}

function jyanken_te_check(te){
    var num = 0;
    switch(te){
        case "グー":
            num = 0;
            break;
        case "チョキ":
            num = 1;
            break;
        case "パー":
            num = 2;
            break;
    }


    return num;
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
