(function () {

    var colors = {
        gray: '#808080',
        light_gray: '#9b9b9b',
        pink: '#e8a199',
        black: '#000000',
        white: '#FFFFFF',
        blue1: '#2e68b2',
        blue2: '#6395d3',
        blue3: '#9dbfe8',
        blue4: '#5786bf',
        red1: '#d61111',
        red2: '#b20000'
    };

    var pointer = {
        x: 0,
        y: 0
    };

    var canvas = {
        minWidth: 495,
        minHeight: 540,
        element: null,
        rect: null,
        context: null
    };

    var mouse = {
        x: 0,
        y: 0,
        width: 200,
        speed: 1,
        run: false,
        startTime: null,


        update: function () {
            if (this.run) {
                var time = (new Date()).getTime() - this.startTime;
                // pixels / second
                var newX = this.speed * time / 1000;
                if (this.x > -this.width) {
                    this.x -= newX;
                } else {
                    app.finishGame();
                    this.reset();
                }
            }
        },

        draw: function (context) {

            if (this.run) {
                // mouse

                //shadow
                context.beginPath();
                context.moveTo(mouse.x + 2, mouse.y);
                context.lineTo(mouse.x + 200, mouse.y);
                context.closePath();
                context.lineWidth = 4;
                context.strokeStyle = colors.blue2;
                context.stroke();

                //body
                context.beginPath();
                context.moveTo(mouse.x, mouse.y);
                context.bezierCurveTo(mouse.x - 10, mouse.y - 10, mouse.x + 95, mouse.y - 70, mouse.x + 100, mouse.y);
                context.lineTo(mouse.x, mouse.y);
                context.closePath();
                context.lineWidth = 1;
                context.strokeStyle = colors.black;
                context.fillStyle = colors.gray;
                context.fill();
                context.stroke();
                // eye
                context.beginPath();
                context.arc(mouse.x + 12, mouse.y - 8, 2, 0, Math.PI * 2, false);
                context.closePath();
                context.fillStyle = colors.black;
                context.fill();
                //nose
                context.beginPath();
                context.arc(mouse.x - 4, mouse.y - 2, 3, 0, Math.PI * 2, false);
                context.closePath();
                context.fillStyle = colors.pink;
                context.stroke();
                context.fill();

                //ears
                context.beginPath();
                var ears = {
                    x: mouse.x + 20,
                    y: mouse.y - 20
                };
                //1
                context.beginPath();
                context.moveTo(ears.x, ears.y);
                context.bezierCurveTo(ears.x - 40, ears.y - 10, ears.x, ears.y - 30, ears.x, ears.y);
                context.closePath();
                context.stroke();
                context.fill();
                //2
                context.beginPath();
                context.moveTo(ears.x, ears.y);
                context.bezierCurveTo(ears.x - 10, ears.y - 25, ears.x + 15, ears.y - 30, ears.x, ears.y);
                context.closePath();
                context.stroke();
                context.fill();

                //tail
                var tail = {
                    x: mouse.x + 99,
                    y: mouse.y - 5
                };

                context.beginPath();
                context.moveTo(tail.x, tail.y);
                context.lineTo(tail.x + 100, tail.y + 5);
                context.lineTo(tail.x, tail.y + 4);
                context.closePath();
                context.stroke();
                context.fill();
                //tail lines
                context.beginPath();
                context.fillStyle = colors.gray;
                context.moveTo(tail.x + 5, tail.y + 1);
                context.lineTo(tail.x + 5, tail.y + 3);
                context.moveTo(tail.x + 10, tail.y + 1);
                context.lineTo(tail.x + 10, tail.y + 3);
                context.moveTo(tail.x + 15, tail.y + 1);
                context.lineTo(tail.x + 15, tail.y + 3);
                context.moveTo(tail.x + 20, tail.y + 1);
                context.lineTo(tail.x + 20, tail.y + 3);
                context.moveTo(tail.x + 30, tail.y + 1);
                context.lineTo(tail.x + 30, tail.y + 3);
                context.closePath();
                context.stroke();
            }

            if (this.captured) {
                //body
                context.beginPath();
                context.moveTo(mouse.x + 3, mouse.y);
                context.bezierCurveTo(mouse.x + 43, mouse.y + 100, mouse.x - 43, mouse.y + 100, mouse.x - 2, mouse.y);
                context.lineTo(mouse.x - 2, mouse.y);
                context.closePath();
                context.lineWidth = 1;
                context.strokeStyle = colors.black;
                context.fillStyle = colors.gray;
                context.fill();
                context.stroke();

                // eye
                context.beginPath();
                context.arc(mouse.x + 3, mouse.y + 15, 2, 0, Math.PI * 2, false);
                context.arc(mouse.x - 4, mouse.y + 15, 2, 0, Math.PI * 2, false);
                context.closePath();
                context.fillStyle = colors.black;
                context.fill();

                //nose
                context.beginPath();
                context.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2, false);
                context.closePath();
                context.fillStyle = colors.pink;
                context.stroke();
                context.fill();

                //legs
                context.moveTo(mouse.x + 8, mouse.y + 70);
                context.lineTo(mouse.x + 8, mouse.y + 80);
                context.moveTo(mouse.x - 8, mouse.y + 70);
                context.lineTo(mouse.x - 8, mouse.y + 80);
                context.stroke();

                context.beginPath();
                context.moveTo(mouse.x + 4, mouse.y + 75);
                context.moveTo(mouse.x + 1, mouse.y + 75);
                context.lineTo(mouse.x - 2, mouse.y + 150);
                context.lineTo(mouse.x - 2, mouse.y + 75);
                context.closePath();
                context.fill();
                context.stroke();

                //ears

                var ears = {
                    x: mouse.x,
                    y: mouse.y + 20
                };

                //1
                context.beginPath();
                context.moveTo(ears.x + 10, ears.y);
                context.bezierCurveTo(ears.x + 25, ears.y + 15, ears.x - 5, ears.y + 10, ears.x + 10, ears.y);
                context.closePath();
                context.stroke();
                context.fillStyle = colors.gray;
                context.fill();
                //2
                context.beginPath();
                context.moveTo(ears.x - 10, ears.y);
                context.bezierCurveTo(ears.x - 25, ears.y + 15, ears.x + 5, ears.y + 10, ears.x - 10, ears.y);
                context.closePath();
                context.stroke();
                context.fillStyle = colors.gray;
                context.fill();
            }

        },

        isCaptured: function (pointer) {
            //dummy detection
            return pointer.x >= mouse.x && pointer.x < mouse.x + 100 && pointer.y > mouse.y - 35 && pointer.y < mouse.y + 25;
        },

        reset: function () {
            mouse.run = false;
            mouse.x = canvas.element.width + 25;
            mouse.y = 460;
        }
    };

    var cat = {
        x: 0,
        y: 0,

        mouth: {
            jaws: false,
            open: 0
        },

        eyes: {
            left: {
                centerX: 0,
                centerY: 0,
                radius: 8
            },
            right: {
                centerX: 315,
                centerY: 100,
                radius: 8
            }
        },

        update: function () {


            if (mouse.captured) {
                var distanceX = Math.abs(cat.x + 50 - mouse.x);
                var distanceY = Math.abs(cat.y + 50 - mouse.y);

                if (distanceX > 4 && distanceX < 200 && distanceY > 5 && distanceY < 100) {
                    this.mouth.open = 100 / distanceX * 2;
                }

                this.mouth.jaws = !!(distanceX < 4 && distanceY < 20);

                if (distanceX > 100) {
                    this.mouth.open = 0;
                }
            }

            this.updateEye(cat.eyes.left);
            this.updateEye(cat.eyes.right);
        },

        updateEye: function (eye) {

            var dx = pointer.x - eye.centerX;
            var dy = pointer.y - eye.centerY;

            //watch mouse if runs
            if (mouse.run) {
                dx = mouse.x - eye.centerX;
                dy = mouse.y - eye.centerY;
            }

            var c = Math.sqrt((dx * dx) + (dy * dy));
            var r = eye.radius * 0.8;
            if (Math.abs(dx) < r && Math.abs(dy) < r && c < r) {
                r = c;
            }
            var alfa = Math.asin(dy / c);
            eye.pupilX = Math.cos(alfa) * r;
            eye.pupilX = (dx < 0 ? eye.pupilX * -1 : eye.pupilX);
            eye.pupilY = Math.sin(alfa) * r;
        },

        draw: function (context) {

            //cat shadow
            context.save();
            context.beginPath();
            // scale context horizontally
            var shadowScaleX = 4;
            context.scale(shadowScaleX, 1);
            // draw circle which will be stretched into an oval
            context.beginPath();
            var shadowX = cat.x + 50;
            context.arc(shadowX - (shadowX * shadowScaleX - shadowX) / shadowScaleX, cat.y + 264, 40, 0, 2 * Math.PI, false);
            // restore to original state
            context.restore();
            context.strokeStyle = colors.blue2;
            context.fillStyle = colors.blue2;
            context.fill();
            context.stroke();
            context.closePath();

            context.save();
            context.beginPath();
            // scale context horizontally
            context.scale(shadowScaleX, 1);
            // draw circle which will be stretched into an oval
            context.beginPath();

            context.arc(shadowX - (shadowX * shadowScaleX - shadowX) / shadowScaleX, cat.y + 255, 30, 0, 2 * Math.PI, false);
            // restore to original state
            context.restore();
            context.strokeStyle = colors.blue4;
            context.fillStyle = colors.blue4;
            context.fill();
            context.stroke();
            context.closePath();


            //ears
            //left
            context.lineWidth = 1;
            context.strokeStyle = colors.black;
            context.beginPath();
            context.moveTo(cat.x - 30, cat.y - 15);
            context.quadraticCurveTo(cat.x - 40, cat.y - 50, cat.x - 30, cat.y - 70);
            context.quadraticCurveTo(cat.x + 10, cat.y - 60, cat.x + 20, cat.y - 40);
            context.lineTo(cat.x, cat.y);
            context.closePath();
            context.fillStyle = colors.gray;
            context.fill();
            context.stroke();
            //inside left
            context.beginPath();
            context.moveTo(cat.x - 25, cat.y - 25);
            context.quadraticCurveTo(cat.x - 35, cat.y - 50, cat.x - 27, cat.y - 65);
            context.quadraticCurveTo(cat.x + 10, cat.y - 55, cat.x + 15, cat.y - 30);
            context.lineTo(cat.x, cat.y);
            context.closePath();
            context.fillStyle = colors.pink;
            context.fill();
            context.stroke();
            //right
            context.beginPath();
            context.moveTo(cat.x + 130, cat.y - 15);
            context.quadraticCurveTo(cat.x + 140, cat.y - 40, cat.x + 125, cat.y - 70);
            context.quadraticCurveTo(cat.x + 100, cat.y - 65, cat.x + 85, cat.y - 40);
            context.lineTo(cat.x + 100, cat.y - 15);
            context.closePath();
            context.fillStyle = colors.gray;
            context.fill();
            context.stroke();
            //inside right
            context.beginPath();
            context.moveTo(cat.x + 125, cat.y - 15);
            context.quadraticCurveTo(cat.x + 133, cat.y - 40, cat.x + 123, cat.y - 65);
            context.quadraticCurveTo(cat.x + 110, cat.y - 60, cat.x + 90, cat.y - 40);
            context.lineTo(cat.x + 100, cat.y - 15);
            context.closePath();
            context.fillStyle = colors.pink;
            context.fill();
            context.stroke();

            //left leg
            context.beginPath();
            context.moveTo(cat.x - 33, cat.y + 173);
            context.quadraticCurveTo(cat.x - 57, cat.y + 220, cat.x - 40, cat.y + 240);
            context.quadraticCurveTo(cat.x - 75, cat.y + 254, cat.x - 20, cat.y + 255);
            context.fillStyle = colors.gray;
            context.fill();
            context.stroke();
            context.closePath();

            //right leg
            context.beginPath();
            context.moveTo(cat.x + 134, cat.y + 175);
            context.quadraticCurveTo(cat.x + 170, cat.y + 205, cat.x + 141, cat.y + 240);
            context.quadraticCurveTo(cat.x + 175, cat.y + 253, cat.x + 120, cat.y + 255);
            context.fillStyle = colors.gray;
            context.fill();
            context.stroke();
            context.closePath();

            context.beginPath();

            //tail
            context.moveTo(cat.x + 105, cat.y + 175);
            context.lineTo(cat.x + 210, cat.y + 60);
            context.bezierCurveTo(cat.x + 240, cat.y + 40, cat.x + 250, cat.y + 70, cat.x + 230, cat.y + 90);
            context.lineTo(cat.x + 135, cat.y + 175);

            context.fill();
            context.stroke();
            context.closePath();

            //body
            context.beginPath();
            context.moveTo(cat.x + 80, cat.y + 65);
            context.quadraticCurveTo(cat.x + 190, cat.y + 230, cat.x + 110, cat.y + 260);
            context.quadraticCurveTo(cat.x + 50, cat.y + 270, cat.x - 10, cat.y + 260);
            context.moveTo(cat.x - 10, cat.y + 260);
            context.quadraticCurveTo(cat.x - 80, cat.y + 240, cat.x + 15, cat.y + 65);
            context.lineTo(cat.x + 80, cat.y + 65);
            context.fillStyle = colors.gray;

            context.fill();
            context.stroke();
            context.closePath();

            context.beginPath();
            context.moveTo(cat.x + 30, cat.y + 250);
            context.lineTo(cat.x + 30, cat.y + 150);
            context.quadraticCurveTo(cat.x + 50, cat.y + 120, cat.x + 70, cat.y + 150);
            context.lineTo(cat.x + 70, cat.y + 250);
            context.quadraticCurveTo(cat.x + 50, cat.y + 260, cat.x + 30, cat.y + 250);
            context.closePath();
            context.fillStyle = colors.light_gray;
            context.fill();


            //head
            // save state
            context.save();
            context.beginPath();

            // translate context
            //context.translate(300 250);

            // scale context horizontally
            var headScaleX = 1.2;
            context.scale(headScaleX, 1);

            // draw circle which will be stretched into an oval
            context.beginPath();
            var headX = cat.x + 50;
            context.arc(headX - (headX * headScaleX - headX) / headScaleX, cat.y + 30, 80, 0, 2 * Math.PI, false);

            // restore to original state
            context.restore();
            context.fillStyle = colors.gray;
            context.fill();
            context.stroke();
            context.closePath();

            //eyes
            context.beginPath();
            // draw circle which will be stretched into an oval
            context.beginPath();
            context.arc(cat.x + 35, cat.y, 8, 0, 2 * Math.PI, false);
            context.moveTo(cat.x + 65, cat.y);
            context.arc(cat.x + 65, cat.y, 8, 0, 2 * Math.PI, false);
            context.fillStyle = colors.white;
            context.stroke();
            context.fill();
            context.closePath();
            context.beginPath();
            context.moveTo(cat.x + 35, cat.y - 10);
            context.arc(cat.x + 35, cat.y, 4, 0, 2 * Math.PI, false);
            context.moveTo(cat.x + 60, cat.y - 10);
            context.arc(cat.x + 65, cat.y, 4, 0, 2 * Math.PI, false);
            context.fillStyle = colors.black;
            context.fill();
            context.closePath();

            //eye balls
            this.drawEye(cat.eyes.left, context);

            this.drawEye(cat.eyes.right, context);

            //barbs
            context.beginPath();
            context.moveTo(cat.x + 65, cat.y + 25);
            context.quadraticCurveTo(cat.x + 125, cat.y + 10, cat.x + 160, cat.y + 20);
            context.moveTo(cat.x + 62, cat.y + 32);
            context.quadraticCurveTo(cat.x + 125, cat.y + 20, cat.x + 155, cat.y + 30);
            context.moveTo(cat.x + 33, cat.y + 25);
            context.quadraticCurveTo(cat.x - 30, cat.y + 10, cat.x - 55, cat.y + 20);
            context.moveTo(cat.x + 36, cat.y + 32);
            context.quadraticCurveTo(cat.x - 25, cat.y + 20, cat.x - 50, cat.y + 30);
            context.stroke();
            context.closePath();

            //nose
            context.beginPath();
            context.moveTo(cat.x + 45, cat.y + 40);
            context.quadraticCurveTo(cat.x + 20, cat.y + 20, cat.x + 45, cat.y + 20);
            context.quadraticCurveTo(cat.x + 85, cat.y + 18, cat.x + 55, cat.y + 40);
            context.quadraticCurveTo(cat.x + 50, cat.y + 45, cat.x + 45, cat.y + 40);
            context.closePath();
            context.fillStyle = colors.pink;
            context.fill();
            context.stroke();

            //mouth

            if (this.mouth.jaws) {
                context.beginPath();
                context.arc(cat.x + 50, cat.y + 65, 36, Math.PI, 2 * Math.PI, true);
                context.closePath();
                context.lineWidth = 1;
                context.fillStyle = colors.red1;
                context.fill();
                context.stroke();
                context.beginPath();
                context.arc(cat.x + 50, cat.y + 95, 20, Math.PI, 0, false);
                context.fillStyle = colors.red2;
                context.fill();
                context.closePath();

                context.beginPath();
                context.moveTo(cat.x + 30, cat.y + 65);
                context.lineTo(cat.x + 35, cat.y + 75);
                context.lineTo(cat.x + 40, cat.y + 65);
                context.closePath();
                context.fillStyle = colors.white;
                context.fill();
                context.stroke();

                context.beginPath();
                context.moveTo(cat.x + 60, cat.y + 65);
                context.lineTo(cat.x + 65, cat.y + 75);
                context.lineTo(cat.x + 70, cat.y + 65);
                context.closePath();
                context.fill();
                context.stroke();


            } else {
                context.beginPath();
                context.moveTo(cat.x + 50, cat.y + 43);
                context.quadraticCurveTo(
                        cat.x + 50, cat.y + 80 - this.mouth.open / 2,
                        cat.x + 30 - this.mouth.open / 2, cat.y + 80 - this.mouth.open / 2
                );
                context.moveTo(cat.x + 50, cat.y + 43);
                context.quadraticCurveTo(
                        cat.x + 50, cat.y + 80 - this.mouth.open / 2,
                        cat.x + 70 + this.mouth.open / 2, cat.y + 80 - this.mouth.open / 2
                );
                context.stroke();
                context.closePath();
            }


            //left paw
            context.beginPath();
            context.moveTo(cat.x - 10, cat.y + 160);
            context.lineTo(cat.x + -10, cat.y + 270);
            context.quadraticCurveTo(cat.x - 30, cat.y + 275, cat.x - 24, cat.y + 290);
            context.quadraticCurveTo(cat.x - 20, cat.y + 300, cat.x - 3, cat.y + 285);
            context.moveTo(cat.x - 3, cat.y + 280);
            context.quadraticCurveTo(cat.x + 5, cat.y + 325, cat.x + 20, cat.y + 280);
            context.moveTo(cat.x + 18, cat.y + 285);
            context.quadraticCurveTo(cat.x + 35, cat.y + 300, cat.x + 40, cat.y + 285);
            context.quadraticCurveTo(cat.x + 40, cat.y + 260, cat.x + 20, cat.y + 270);
            context.lineTo(cat.x + 20, cat.y + 160);
            context.stroke();
            context.fillStyle = colors.gray;
            context.fill();
            context.closePath();
            context.beginPath();
            context.moveTo(cat.x - 8, cat.y + 245);
            context.lineTo(cat.x - 10, cat.y + 280);
            context.lineTo(cat.x + 20, cat.y + 280);
            context.lineTo(cat.x + 20, cat.y + 240);
            context.fillStyle = colors.gray;
            context.fill();
            context.closePath();

            //right paw
            context.beginPath();
            context.moveTo(cat.x + 80, cat.y + 160);
            context.lineTo(cat.x + 80, cat.y + 270);
            context.quadraticCurveTo(cat.x + 60, cat.y + 275, cat.x + 66, cat.y + 290);
            context.quadraticCurveTo(cat.x + 70, cat.y + 300, cat.x + 87, cat.y + 285);
            context.moveTo(cat.x + 87, cat.y + 280);
            context.quadraticCurveTo(cat.x + 95, cat.y + 325, cat.x + 110, cat.y + 280);
            context.moveTo(cat.x + 108, cat.y + 285);
            context.quadraticCurveTo(cat.x + 125, cat.y + 300, cat.x + 130, cat.y + 285);
            context.quadraticCurveTo(cat.x + 140, cat.y + 260, cat.x + 110, cat.y + 270);
            context.lineTo(cat.x + 110, cat.y + 160);
            context.stroke();
            context.fillStyle = colors.gray;
            context.fill();
            context.closePath();
            context.beginPath();
            context.moveTo(cat.x + 82, cat.y + 245);
            context.lineTo(cat.x + 80, cat.y + 280);
            context.lineTo(cat.x + 110, cat.y + 280);
            context.lineTo(cat.x + 110, cat.y + 240);
            context.fillStyle = colors.gray;
            context.fill();
            context.closePath();
        },

        drawEye: function (eye, context) {

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
        },

        reset: function () {
            cat.x = canvas.element.width / 2 - 50;
            cat.y = 140;
            cat.eyes.left.centerX = cat.x + 35;
            cat.eyes.left.centerY = cat.y;
            cat.eyes.right.centerX = cat.x + 65;
            cat.eyes.right.centerY = cat.y;
        }

    };

    var room = {
        draw: function (context) {
            //floor
            context.beginPath();
            context.moveTo(0, 370);
            context.rect(0, 370, canvas.element.width, 370);
            context.closePath();
            context.fillStyle = colors.blue3;
            context.fill();
            context.beginPath();
            context.moveTo(0, 370);
            context.lineTo(canvas.element.width, 370);
            context.lineWidth = 3;
            context.strokeStyle = colors.blue1;
            context.closePath();
            context.stroke();
        }
    };

    var score = {
        result: 0,
        history: [],
        scoresElement: null,
        modalElement: null,
        init: function () {
            this.scoresElement = document.querySelector('.scores');
            this.scoresElement.style.zIndex = 0;
            this.modalElement = document.getElementById('scores-modal');
            document.getElementById('try_again').addEventListener('click', app.restart, false)
        },
        reset: function () {
            score.result = 0;
            score.hide();
        },

        draw: function (context) {
            context
        },

        show: function () {
            this.scoresElement.style.zIndex = 1000;
            this.modalElement.style.display = 'inline-block';
            this.modalElement.classList.add('zoom');

        },
        hide: function () {
            this.scoresElement.style.zIndex = 0;
            this.modalElement.style.display = 'none';
            this.modalElement.classList.remove('zoom');
        }

    };

    var app = {

        init: function () {
            this.initCanvas();
            score.init();
            cat.reset();
            mouse.reset();

            //first mouse run after sec
            setTimeout(function () {
                if (!mouse.captured) {
                    mouse.startTime = (new Date()).getTime();
                    mouse.run = true;
                }
            }, 1000);

            this.mouseRunInterval();
            this.drawFrame();

            canvas.element.addEventListener('mousemove', this.onMouseMove.bind(this), false);
            canvas.element.addEventListener('mousedown', this.captureMouse.bind(this), false);
            canvas.element.addEventListener('mouseup', this.dropMouse.bind(this), false);
            window.addEventListener('resize', this.onResize.bind(this), false);
        },

        finishGame: function () {
            score.show();
        },

        restart: function () {
            score.reset();
            cat.reset();
            mouse.reset();
        },

        onMouseMove: function (e) {
            pointer.x = e.pageX - canvas.rect.left;
            pointer.y = e.pageY - canvas.rect.top;
            if (mouse.captured) {
                mouse.x = pointer.x;
                mouse.y = pointer.y;
            }
        },

        captureMouse: function () {

            if (mouse.isCaptured(pointer)) {
                mouse.run = false;
                mouse.captured = true;
                mouse.x = pointer.x;
                mouse.y = pointer.y;
                canvas.element.style.cursor = "none";
                clearTimeout(app.mouseRunTimeout);
            }

        },

        dropMouse: function () {
            if (mouse.captured) {
                mouse.captured = false;
                canvas.element.style.cursor = "auto";
                this.mouseRunInterval();
                if (cat.mouth.jaws) {
                    cat.mouth.open = 0;
                    cat.mouth.jaws = false;
                    score.result++;
                    mouse.speed++;
                }
            }
        },

        onResize: function () {
            this.initCanvas();
            cat.reset();
            mouse.reset();
        },

        initCanvas: function () {
            canvas.element = document.querySelector('canvas');

            document.body.style.width = window.innerWidth + "px";
            document.body.style.height = window.innerHeight + "px";

            if (window.innerWidth > canvas.minWidth) {
                canvas.element.width = window.innerWidth;
            } else {
                canvas.element.width = canvas.minWidth;
            }

            if (window.innerHeight > canvas.minHeight) {
                canvas.element.height = window.innerHeight;
            } else {
                canvas.element.height = canvas.minHeight;
            }

            canvas.context = canvas.element.getContext('2d');
            canvas.rect = canvas.element.getBoundingClientRect();
        },

        mouseRunInterval: function () {
            // random interval runs form 8 to 15 secs
            var secs = Math.floor(Math.random() * 15) + 8;
            app.mouseRunTimeout = setTimeout(function () {
                mouse.reset();
                mouse.startTime = (new Date()).getTime();
                mouse.run = true;
                app.mouseRunInterval(); //loop
            }, secs * 1000);
        },

        drawFrame: function () {
            var ctx = canvas.context;
            ctx.clearRect(0, 0, canvas.element.width, canvas.element.height);
            room.draw(ctx);
            cat.update();
            cat.draw(ctx);
            mouse.update();
            mouse.draw(ctx);
            score.draw(ctx);
            // loop
            requestAnimationFrame(app.drawFrame);
        }
    };

    window.addEventListener('load', app.init.bind(app), false);
})();