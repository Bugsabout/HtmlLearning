// 定义一个方法，获取id为demo的元素，在其元素所处范围内展示时间
function displayDate() {
    document.getElementById("demo").innerText = Date();
    document.getElementById("demo").innerText = "修改内容";

}

//Javascript的输出流
document.write("javasscript的输出流");

function alertToUser() {
    alert("报警");
}

function changeImage() {
    element = document.getElementById("myimg");
    if (element.src.match("摇摆")) {
        // ！！！！！！！这里的路径拿不到，有点问题
        element.src = "/img/抠鼻.gif";
    } else {
        element.src = "/img/摇摆.gif";
    }
}

function changeStyle() {
    let elementById = document.getElementById("demo");
    elementById.style.color = "red";
}


function showNumber() {
    let elementById = document.getElementById("demo");
    elementById.innerText = 123e2;
}

var cars = ["a", "b", "c"];
document.write(cars.length);
document.write("<br>");
var char2=new Array();
char2.push("a");
char2.push("b");
document.write(char2[1]);


function switchTest(name1) {
    switch (name1) {
        case "a":
            document.write("1");
        case "b":
            document.write("2");
        case "c":
            document.write("3");

    }

}


// 申明一个对象
var wuxl={
    name:"吴小龙",
    age:22,
    time:Date()};
document.write("名字："+wuxl.name+"时间："+wuxl.time);



var wuxl2={
    name:"test1",
    age:23,
    method:function () {
        document.write(this.name+this.age);
    }
}