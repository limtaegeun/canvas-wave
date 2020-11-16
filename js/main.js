function init() {
    window.requestAnimationFrame(draw)
}

let timing = 0

function draw() {
    const canvas = document.getElementById('tutorial')
    if (canvas.getContext) {
        // 배경을 그린다
        if (timing < -360) {
            timing = 0
        }
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 800, 400); // 캔버스를 비운다
        timing = timing - 0.5

        sinCurv(ctx, timing, 'rgba(255,0,0,0.4', 60, 30)
        sinCurv(ctx, timing, 'rgba(0,255,0,0.4', 30, 40)
        sinCurv(ctx, timing, 'rgba(0,0,255,0.4', 45, 50)
        window.requestAnimationFrame(draw)

    }
}



function sinCurv(ctx, rad, color, length, amp) {
    let curv = new Path2D()
    curv.moveTo(0, 200)
    let prevX = 0
    let prevY = 200
    for (let i = -3; i < 100; i++) {
        let curX = 10 * i
        let curY = Math.sin(Math.PI / length * i + (Math.PI / 18 * rad)) * amp + 200
            // ctx.lineTo((curX + prevX) / 2, (prevY + curY) / 2)
        curv.quadraticCurveTo(prevX, prevY, (curX + prevX) / 2, (prevY + curY) / 2)

        prevX = curX
        prevY = curY
    }

    curv.lineTo(800, 400)
    curv.lineTo(0, 400)
    ctx.fillStyle = color
    ctx.fill(curv)
}

document.body.addEventListener('onload', draw())