$(document).ready(function () {

    var check = 0;
    var btn = document.getElementById("btnonoff");
    $("#btnonoff").click(function () {
        if (check == 0) check = 1;
        else check = 0;  
        if (check == 0) btn.innerHTML = 'Bat chuc nang gui tin nhan';
        else btn.innerHTML = 'Tat chuc nang gui tin nhan';
    });
    flag = 1;
    document.onkeyup = function (e) {
        if (e.which == 9)
        {
            if (flag == 0)
            {
                $("#side1").css("z-index", "9");
                $("#side2").css("z-index", "9");
                $("#side3").css("z-index", "999");
                $("#side4").css("z-index", "9");
                $("#side5").css("z-index", "9");
                $("#side1").css("transform", "translateX(-490px) scale(1)");
                $("#side2").css("transform", "translateX(-285px) scale(1)");
                $("#side3").css("transform", "translateX(-30px) scale(1.5)");
                $("#side4").css("transform", "translateX(225px) scale(1)");
                $("#side5").css("transform", "translateX(430px) scale(1)");
                flag = 1;
            } else if (flag == 1)
            {
                $("#side5").css("z-index", "9");
                $("#side1").css("z-index", "9");
                $("#side2").css("z-index", "999");
                $("#side3").css("z-index", "9");
                $("#side4").css("z-index", "9");
                $("#side5").css("transform", "translateX(-490px) scale(1)");
                $("#side1").css("transform", "translateX(-285px) scale(1)");
                $("#side2").css("transform", "translateX(-30px) scale(1.5)");
                $("#side3").css("transform", "translateX(225px) scale(1)");
                $("#side4").css("transform", "translateX(430px) scale(1)");
                flag = 2;
            } else if (flag == 2)
            {
                $("#side4").css("z-index", "9");
                $("#side5").css("z-index", "9");
                $("#side1").css("z-index", "999");
                $("#side2").css("z-index", "9");
                $("#side3").css("z-index", "9");
                $("#side4").css("transform", "translateX(-490px) scale(1)");
                $("#side5").css("transform", "translateX(-285px) scale(1)");
                $("#side1").css("transform", "translateX(-30px) scale(1.5)");
                $("#side2").css("transform", "translateX(225px) scale(1)");
                $("#side3").css("transform", "translateX(430px) scale(1)");
                flag = 3;
            } else if (flag == 3)
            {
                $("#side3").css("z-index", "9");
                $("#side4").css("z-index", "9");
                $("#side5").css("z-index", "999");
                $("#side1").css("z-index", "9");
                $("#side2").css("z-index", "9");
                $("#side3").css("transform", "translateX(-490px) scale(1)");
                $("#side4").css("transform", "translateX(-285px) scale(1)");
                $("#side5").css("transform", "translateX(-30px) scale(1.5)");
                $("#side1").css("transform", "translateX(225px) scale(1)");
                $("#side2").css("transform", "translateX(430px) scale(1)");
                flag = 4;
            } else if (flag == 4)
            {
                $("#side2").css("z-index", "9");
                $("#side3").css("z-index", "9");
                $("#side4").css("z-index", "999");
                $("#side5").css("z-index", "9");
                $("#side1").css("z-index", "9");
                $("#side2").css("transform", "translateX(-490px) scale(1)");
                $("#side3").css("transform", "translateX(-285px) scale(1)");
                $("#side4").css("transform", "translateX(-30px) scale(1.5)");
                $("#side5").css("transform", "translateX(225px) scale(1)");
                $("#side1").css("transform", "translateX(430px) scale(1)");
                flag = 0;
            }
        }
        if (e.which == 17&&check==0)
        {
            if (flag == 0)
            {
                var audio = new Audio('sounds/di dao.m4a');
                audio.play();
            }
            if (flag == 1)
            {
                var audio = new Audio('sounds/nghe nhac.m4a');
                audio.play();
            }
            if (flag == 2)
            {
                var audio = new Audio('sounds/doi bung.m4a');
                audio.play();
            }
            if (flag == 3)
            {
                var audio = new Audio('sounds/kho chiu.m4a');
                audio.play();
            }
            if (flag == 4)
            {
                var audio = new Audio('sounds/khat nuoc.m4a');
                audio.play();
            }
        }
        if (e.keyCode == 17&&check==1) {
            if (flag == 0)
            {
                smssend('Người thân bạn cần đi dạo');
            }
            if (flag == 1)
            {
                smssend('Người thân bạn cần nghe nhạc');
            }
            if (flag == 2)
            {
                smssend('Người thân bạn đói bụng');
            }
            if (flag == 3)
            {
                smssend('Người thân bạn đang khó chịu');
            }
            if (flag == 4)
            {
                smssend('Người thân bạn khát nước');
            }
        }
    }
    function smssend(ms) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "nhoxhoangchung@gmail.com",
            Password: "6DE35E75DA75C033DAA9E9970536AF89FA0C",
            To: 'minhhan181@gmail.com',
            From: "nhoxhoangchung@gmail.com",
            Subject: ms,
            Body: ms,
        })
        if (message => alert(message) == 'ok')
        {
            var audio = new Audio('sounds/ping.mp3');
            audio.play();
        }
    }
});
