function init() {
    window.requestAnimationFrame(draw)
}

let timing = 0
let timing2 = 800

function draw() {
    const canvas = document.getElementById('tutorial')
    if (canvas.getContext) {
        // 배경을 그린다
        if (timing < -360) {
            timing = 0
        }
        if (timing2 < -360) {
            timing2 = 0
        }
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 400, 400); // 캔버스를 비운다
        timing2 = timing2 - 1.3
        sinCurv(ctx, timing--, 'rgba(130,3,40, 0.3)')
        sinCurv(ctx, timing2, 'rgba(13,34,240, 0.3)')
        window.requestAnimationFrame(draw)

    }
}



function sinCurv(ctx, rad, color) {
    let curv = new Path2D()
    curv.fillStyle = color
    curv.moveTo(0, 200)
    let prevX = 0
    let prevY = 200
    for (let i = 1; i < 100; i++) {
        let curX = 10 * i
        let curY = Math.sin(Math.PI / 4 * i + (Math.PI / 18 * rad)) * 30 + 200
            // ctx.lineTo((curX + prevX) / 2, (prevY + curY) / 2)
        curv.quadraticCurveTo(prevX, prevY, (curX + prevX) / 2, (prevY + curY) / 2)

        prevX = curX
        prevY = curY
    }
    curv.lineTo(400, 400)
    curv.lineTo(0, 400)
    ctx.fill(curv)
}

document.body.addEventListener('onload', draw())