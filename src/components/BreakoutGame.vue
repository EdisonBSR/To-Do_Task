<template>
    <div>
        <canvas id="myCanvas" width="480" height="320">
        </canvas>
        <button type="button" v-on:click="start"> Comenzar</button>
    </div>

</template>
<script>
export default {
    name: 'BreakoutGame',
    data() {
        return {
            canvas: "",
            ctx: "",
            coorX: "",
            coorY: "",
            DX: 2,
            DY: -2,
            BALL_RADIUS: 10,
            PADDLE_HEIGHT: 10,
            PADDLE_WIDTH: 75,
            paddleX: 0,
            rightPressed: false,
            leftPressed: false,
            BRICK_ROW_COUNT: 3,
            BRICK_COLUMN_COUNT: 5,
            BRICK_WIDTH: 75,
            BRICK_HEIGHT: 20,
            BRICK_PADDING: 10,
            BRICK_OFF_SET_TOP: 30,
            BRICK_OFF_SET_LEFT: 30,
            bricks: [],
            score: 0,
            lives: 3,
            btnStart: true,
            interval: null,

        }

    },
    mounted() {
        this.pinterCanvas()

    },
    methods: {


        draw() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawBricks()
            this.drawBall()
            this.drawPaddle()
            this.collisionDetection()
            this.drawScore()
            this.drawLives()
            this.coorX += this.DX
            this.coorY += this.DY
            if (this.coorX + this.DX > this.canvas.width - this.BALL_RADIUS || this.coorX + this.DX < this.BALL_RADIUS) {
                this.DX = -this.DX;
            }

            if (this.coorY + this.DY < this.BALL_RADIUS) {
                this.DY = -this.DY;
            } else if ((this.coorY + this.DY) > (this.canvas.height - this.BALL_RADIUS)) {
                if ((this.coorX > this.paddleX) && (this.coorX < this.paddleX + this.PADDLE_WIDTH)) {
                    this.DY = -this.DY;
                } else {
                    this.lives--;
                    if (this.lives == 0) {
                        alert("Has perdido esta vez");
                        document.location.reload();
                    } else {
                        this.coorX = this.canvas.width / 2;
                        this.coorY = this.canvas.height - 30;
                        this.DX = 2;
                        this.DY = -2;
                        this.paddleX = (this.canvas.width - this.PADDLE_WIDTH) / 2;
                    }

                }

            }
            this.interval = requestAnimationFrame(this.draw);
        },
        drawBall() {
            this.ctx.beginPath()
            this.ctx.arc(this.coorX, this.coorY, 10, 0, Math.PI * 2)
            this.ctx.fillStyle = "#0095DD"
            this.ctx.fill()
            this.ctx.closePath()
        },
        pinterCanvas() {
            this.canvas = document.getElementById("myCanvas")
            this.ctx = this.canvas.getContext("2d")
            this.coorX = this.canvas.width / 2
            this.coorY = this.canvas.height - 30
            this.paddleX = (this.canvas.width - this.PADDLE_WIDTH) / 2,
                document.addEventListener("keydown", this.keyDownHandler, false);
            document.addEventListener("keyup", this.keyUpHandler, false);
            document.addEventListener("mousemove", this.mouseMoveHandler, false);

            let c, r
            for (c = 0; c < this.BRICK_COLUMN_COUNT; c++) {
                this.bricks[c] = [];
                for (r = 0; r < this.BRICK_ROW_COUNT; r++) {
                    this.bricks[c][r] = { x: 0, y: 0, status: 1 };
                }
            }
        },
        drawPaddle() {
            if (this.rightPressed && this.paddleX < this.canvas.width - this.PADDLE_WIDTH) {
                this.paddleX += 7;
            } else if (this.leftPressed && this.paddleX > 0) {
                this.paddleX -= 7;
            }
            this.ctx.beginPath();
            this.ctx.rect(this.paddleX, this.canvas.height - this.PADDLE_HEIGHT, this.PADDLE_WIDTH, this.PADDLE_HEIGHT);
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fill();
            this.ctx.closePath();
        },
        keyDownHandler(e) {
            if (e.keyCode == 39) {
                this.rightPressed = true;
            } else if (e.keyCode == 37) {
                this.leftPressed = true;
            }
        },
        keyUpHandler(e) {
            if (e.keyCode == 39) {
                this.rightPressed = false;
            } else if (e.keyCode == 37) {
                this.leftPressed = false;
            }
        },
        mouseMoveHandler(e) {
            var relativeX = e.clientX - this.canvas.offsetLeft;
            if (relativeX > 0 && relativeX < this.canvas.width) {
                this.paddleX = relativeX - this.PADDLE_WIDTH / 2;
            }
        },

        drawBricks() {
            let c
            let r
            for (c = 0; c < this.BRICK_COLUMN_COUNT; c++) {
                for (r = 0; r < this.BRICK_ROW_COUNT; r++) {
                    if (this.bricks[c][r].status == 1) {
                        let brickX = c * (this.BRICK_WIDTH + this.BRICK_PADDING) + this.BRICK_OFF_SET_LEFT;
                        let brickY = r * (this.BRICK_HEIGHT + this.BRICK_PADDING) + this.BRICK_OFF_SET_TOP;
                        this.bricks[c][r].x = brickX;
                        this.bricks[c][r].y = brickY;
                        this.ctx.beginPath();
                        this.ctx.rect(brickX, brickY, this.BRICK_WIDTH, this.BRICK_HEIGHT);
                        this.ctx.fillStyle = "#0095DD";
                        this.ctx.fill();
                        this.ctx.closePath();
                    }

                }
            }
        },
        collisionDetection() {
            let c, r
            for (c = 0; c < this.BRICK_COLUMN_COUNT; c++) {
                for (r = 0; r < this.BRICK_ROW_COUNT; r++) {
                    let brick = this.bricks[c][r]
                    if (brick.status == 1) {
                        if (this.coorX > brick.x && this.coorX < brick.x + this.BRICK_WIDTH && this.coorY > brick.y && this.coorY < brick.y + this.BRICK_HEIGHT) {
                            this.DY = -this.DY;
                            brick.status = 0;
                            this.score++
                            if (this.score == this.BRICK_ROW_COUNT * this.BRICK_COLUMN_COUNT) {
                                alert("FELICIDADES HAS GANADO!");
                                document.location.reload();
                            }
                        }
                    }
                }
            }
        },
        drawScore() {
            this.ctx.font = "16px Arial";
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fillText("Score: " + this.score, 8, 20);
        },
        drawLives() {
            this.ctx.font = "16px Arial";
            this.ctx.fillStyle = "#0095DD";
            this.ctx.fillText("Lives: " + this.lives, this.canvas.width - 65, 20);
        },
        start() {
            if (this.btnStart) {
                const button = document.querySelector("button");
                button.innerText = "Comenzar"
                this.draw()
                this.btnStart = false
            } else if (!this.btnStart) {
                const button = document.querySelector("button");
                button.innerText = "Reanudar"
                this.btnStart = true
                cancelAnimationFrame(this.interval)
            }
        }

    },
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}

canvas {
    background: #eee;
    display: block;
    margin: 0 auto;
}

button {
    margin-top: 10px;
    border-radius: 5px;
    border: 0px;
}
</style>