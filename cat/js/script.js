(function () {

    var canvas,
        canvasRect,
        context;

    var mouse = {
        x: 0,
        y: 0
    };


    var colors = {
        gray: '#808080',
        pink: '#e8a199',
        black: '#000000',
        white: '#FFFFFF',
        blue1: '#2e68b2',
        blue2: '#6395d3',
        blue3: '#9dbfe8'
    };

    var eyes = [
        //285, 100, 4
        //315, 100, 4

        {
            'centerX': 285,
            'centerY': 100,
            'radius': 8
        },
        {
            'centerX': 315,
            'centerY': 100,
            'radius': 8
        }
    ];

    var init = function () {
        canvas = document.querySelector('canvas');
        context = canvas.getContext('2d');
        canvasRect = canvas.getBoundingClientRect();

        canvas.addEventListener('mousemove', function (e) {
            mouse.x = e.pageX - canvasRect.left;
            mouse.y = e.pageY - canvasRect.top;
        }, false);

        tekenFrame();
    };


    var drawCat = function () {

        //ears
        //left
        context.lineWidth = 1;
        context.strokeStyle = colors.black;
        context.beginPath();
        context.moveTo(220, 85);
        context.quadraticCurveTo(210, 50, 220, 30);
        context.quadraticCurveTo(260, 40, 270, 60);
        context.lineTo(250, 100);
        context.closePath();
        context.fillStyle = colors.gray;
        context.fill();
        context.stroke();
        //inside left
        context.beginPath();
        context.moveTo(225, 75);
        context.quadraticCurveTo(215, 50, 223, 35);
        context.quadraticCurveTo(260, 45, 265, 70);
        context.lineTo(250, 100);
        context.closePath();
        context.fillStyle = colors.pink;
        context.fill();
        context.stroke();
        //right
        context.beginPath();
        context.moveTo(380, 85);
        context.quadraticCurveTo(390, 60, 375, 30);
        context.quadraticCurveTo(350, 35, 335, 60);
        context.lineTo(350, 85);
        context.closePath();
        context.fillStyle = colors.gray;
        context.fill();
        context.stroke();
        //inside right
        context.beginPath();
        context.moveTo(375, 85);
        context.quadraticCurveTo(383, 60, 373, 35);
        context.quadraticCurveTo(360, 40, 340, 60);
        context.lineTo(350, 85);
        context.closePath();
        context.fillStyle = colors.pink;
        context.fill();
        context.stroke();

        //left leg
        context.beginPath();
        context.moveTo(217, 273);
        context.quadraticCurveTo(193, 320, 210, 340);
        context.quadraticCurveTo(175, 354, 230, 355);
        context.fillStyle = colors.gray;
        context.fill();
        context.stroke();
        context.closePath();

        //right leg
        context.beginPath();
        context.moveTo(384, 275);
        context.quadraticCurveTo(420, 305, 391, 340);
        context.quadraticCurveTo(425, 353, 370, 355);
        context.fillStyle = colors.gray;
        context.fill();
        context.stroke();
        context.closePath();

        context.beginPath();

        //tail
        context.moveTo(355, 275);
        context.lineTo(460, 160);
        context.bezierCurveTo(490, 140, 500, 170, 480, 190);
        context.lineTo(385, 275);

        context.fill();
        context.stroke();
        context.closePath();

        //body
        context.beginPath();
        context.moveTo(330, 165);
        context.quadraticCurveTo(440, 330, 360, 360);
        context.quadraticCurveTo(300, 370, 240, 360);
        context.moveTo(240, 360);
        context.quadraticCurveTo(170, 340, 265, 165);
        context.lineTo(330, 165);
        context.fillStyle = colors.gray;

        context.fill();
        context.stroke();
        context.closePath();


        //head
        // save state
        context.save();
        context.beginPath();

        // translate context
        context.translate(canvas.width / 2, canvas.height / 2);

        // scale context horizontally
        context.scale(1.2, 1);

        // draw circle which will be stretched into an oval
        context.beginPath();
        context.arc(0, -120, 80, 0, 2 * Math.PI, false);

        // restore to original state
        context.restore();
        context.fillStyle = colors.gray;
        context.fill();
        context.stroke();
        context.closePath();

        //eyes
        // save state
        context.save();
        context.beginPath();
        // scale context horizontally

        // draw circle which will be stretched into an oval
        context.beginPath();

        context.arc(285, 100, 8, 0, 2 * Math.PI, false);
        context.moveTo(315, 100);
        context.arc(315, 100, 8, 0, 2 * Math.PI, false);
        // restore to original state
        context.restore();
        context.fillStyle = colors.white;
        context.stroke();
        context.fill();
        context.closePath();
        context.beginPath();
        context.moveTo(285, 90);
        context.arc(285, 100, 4, 0, 2 * Math.PI, false);
        context.moveTo(310, 90);
        context.arc(315, 100, 4, 0, 2 * Math.PI, false);
        context.fillStyle = colors.black;
        context.fill();
        context.closePath();

        for (var i = 0; i < eyes.length; i++) {
            drawEye(eyes[i]);
        }

        //nose
        context.beginPath();
        context.moveTo(295, 140);
        context.quadraticCurveTo(270, 120, 295, 120);
        context.quadraticCurveTo(330, 118, 305, 140);
        context.quadraticCurveTo(300, 145, 295, 140);
        context.closePath();
        context.fillStyle = colors.pink;
        context.fill();
        context.stroke();

        //barbs
        context.beginPath()
        context.moveTo(315, 125);
        context.quadraticCurveTo(375, 110, 410, 120);
        context.moveTo(312, 132);
        context.quadraticCurveTo(375, 120, 405, 130);
        context.moveTo(283, 125);
        context.quadraticCurveTo(220, 110, 195, 120);
        context.moveTo(286, 132);
        context.quadraticCurveTo(225, 120, 200, 130);
        context.stroke();
        context.closePath();

        //mouth
        context.beginPath();
        context.moveTo(300, 143);
        context.quadraticCurveTo(300, 180, 280, 180);
        context.moveTo(300, 143);
        context.quadraticCurveTo(300, 180, 320, 180);
        context.stroke();
        context.closePath();

        //left paw
        context.beginPath();
        context.moveTo(240, 260);
        context.lineTo(240, 370);
        context.quadraticCurveTo(220, 375, 226, 390);
        context.quadraticCurveTo(230, 400, 247, 385);
        context.moveTo(247, 380);
        context.quadraticCurveTo(255, 425, 270, 380);
        context.moveTo(268, 385);
        context.quadraticCurveTo(285, 400, 290, 385);
        context.quadraticCurveTo(290, 360, 270, 370);
        context.lineTo(270, 260);
        context.stroke();
        context.fillStyle = colors.gray;
        context.fill();
        context.closePath();
        context.beginPath();
        context.moveTo(242, 345);
        context.lineTo(240, 380);
        context.lineTo(270, 380);
        context.lineTo(270, 340);
        context.fillStyle = colors.gray;
        context.fill();
        context.closePath();

        //right paw
        context.beginPath();
        context.moveTo(330, 260);
        context.lineTo(330, 370);
        context.quadraticCurveTo(310, 375, 316, 390);
        context.quadraticCurveTo(320, 400, 337, 385);
        context.moveTo(337, 380);
        context.quadraticCurveTo(345, 425, 360, 380);
        context.moveTo(358, 385);
        context.quadraticCurveTo(375, 400, 380, 385);
        context.quadraticCurveTo(380, 360, 360, 370);
        context.lineTo(360, 260);
        context.stroke();
        context.fillStyle = colors.gray;
        context.fill();
        context.closePath();
        context.beginPath();
        context.moveTo(332, 345);
        context.lineTo(330, 380);
        context.lineTo(360, 380);
        context.lineTo(360, 340);
        context.fillStyle = colors.gray;
        context.fill();
        context.closePath();
    };

    window.addEventListener('load', init, false);

    function tekenFrame() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawCat();
        // loop
        requestAnimationFrame(tekenFrame);
    }

    function drawEye(eye) {
        updateEye(eye);

        // clip the eye
        context.save();
        context.beginPath();
        context.arc(eye.centerX, eye.centerY, eye.radius, 0, Math.PI * 2);
        context.clip();

        // eye
        context.beginPath();
        context.arc(eye.centerX, eye.centerY, eye.radius, 0, Math.PI * 2);
        context.fillStyle = colors.white;
        context.fill();
        context.closePath();

        // iris

        context.beginPath();
        context.arc(eye.centerX + eye.pupilX, eye.centerY + eye.pupilY, eye.radius / 2, 0, Math.PI * 2);
        context.fillStyle = colors.black;
        context.fill();
        context.closePath();

        // pupil
        context.beginPath();
        context.arc(eye.centerX + eye.pupilX, eye.centerY + eye.pupilY, eye.radius / 5, 0, Math.PI * 2);
        context.fillStyle = colors.black;
        context.fill();
        context.closePath();

        context.restore();
    }

    function updateEye(eye) {
        var dx = mouse.x - eye.centerX;
        var dy = mouse.y - eye.centerY;
        var c = Math.sqrt((dx * dx) + (dy * dy));
        var r = eye.radius * 0.8;
        if (Math.abs(dx) < r && Math.abs(dy) < r && c < r) {
            r = c;
        }
        var alfa = Math.asin(dy / c);
        eye.pupilX = Math.cos(alfa) * r;
        eye.pupilX = (dx < 0 ? eye.pupilX * -1 : eye.pupilX);
        eye.pupilY = Math.sin(alfa) * r;
    }


})();