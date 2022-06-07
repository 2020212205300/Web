window.onload = function(){
    var p0=document.getElementById("p0");
    var p1=document.getElementById("p1");
    var p2=document.getElementById("p2");
    var p3=document.getElementById("p3");
    var h=0;
    var list1=["披萨","香锅","不吃饭","烤鱼","盖浇饭","砂锅","大排档","米线","满汉全席",
        "西餐","麻辣烫","自助餐","炒面","快餐","水果","西北风","馄饨","火锅","烧烤","泡面",
        "速冻水饺","日本料理","涮羊肉","味千拉面","肯德基","面包","扬州炒饭","自助餐","茶餐厅",
        "海底捞","咖啡","比萨","麦当劳","兰州拉面","沙县小吃","烤鱼","海鲜","铁板烧","韩国料理",
        "粥","快餐","萨莉亚","桂林米粉","东南亚菜","甜点","农家菜","川菜","粤菜",
        "湘菜","本帮菜","竹笋烤肉"];

    p2.onclick=function(){
        this.style.display="none";
        p3.style.display="block";
        var food = list1[Math.floor(Math.random() * 47)];
        p0.style.display="none";
        alert(food);


    }



    p3.onclick=function(){
        p0.style.display="block";
        this.style.display="none";
        p2.style.display="block";
        h++;
        if(h==4){
            p2.style.display="none";
            alert("这么作？那别吃饭了");
            p1.style.display="block";
        }
    }

}