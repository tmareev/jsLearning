function createTag(tagName, attrs={}, text, children=[]){
    
    let element = document.createElement(tagName);
    for (let attr in attrs){
        element.setAttribute(attr, attrs[attr]);
    } 
    if(text){
        element.textContent = text;
    }
    for(let i = 0; i < children.length; i++){
        element.appendChild(children[i]);
    }
    return element;
}

function insertStatic(element){
    let body = document.body;
    let script = body.querySelector('script');
    return body.insertBefore(element, script);
}

function insert(element, parent){
    return parent.appendChild(element);
}

function showHomePage(){
    let homePage = createTag('div', {id: 'root'}, '', [
        createTag('canvas', {id: 'canv', width: '700', height: '700'}, '', []),
    ]);
    
    return insertStatic(homePage);
}

showHomePage();


// let i = 5;
//  function test(event){
//     console.log('test loaded! count = ' + i);
//     --i;
//     if(i < 1){
//         event.target.removeEventListener('click', test);
//     }
// }
// function reWrap(){
//     i = 5;
//     btnPlay.removeEventListener('click', test);
//     btnPlay.addEventListener('click', test);
// }
// let btnPlay = document.getElementById('btn-play');
// btnPlay.addEventListener('click', test);
// btnPlay.addEventListener('click', (function(){
//     let ff = 100;
//     return function(){
//         --ff;
//         console.log(ff);
//     }
// })());
// let btnStop = document.getElementById('btn-stop');
// btnStop.addEventListener('click', reWrap);




// function test(event){
//     if (event.currentTarget == document.getElementById('btn-play')){
//         event.stopPropagation();
//     }
//     console.log('click!', event.currentTarget);
// }




// document.getElementById('btn-play').addEventListener('click', test);
// document.getElementById('root').addEventListener('click', test);
// document.body.addEventListener('click', test);
// document.addEventListener('click', test);


// document.getElementById('root').addEventListener('mousedown', function(e){
//     e.target.classList.add('chosen');
// });
// document.getElementById('root').addEventListener('mouseup', function(e){
//     e.target.classList.remove('chosen');
// });

// document.getElementById('root').addEventListener('mousemove', function(e){
//     if(document.querySelector('.chosen')){
//         e.target.style.top = e.clientY - 10 + 'px';
//         e.target.style.left = e.clientX - 10 + 'px';
//     }
// });





/**************************************
 *  двигает кнопку стоп по всему полю 
 * *************************************
 * 
document.getElementById('root').addEventListener('mousemove', function(e){
    document.getElementById('btn-stop').style.top = e.clientY - 10 + 'px';
    document.getElementById('btn-stop').style.left = e.clientX - 10 + 'px';
    
});
*/







let ctx = canv.getContext('2d');
let h = canv.height;
let w = canv.width;
let tiles = [];

function drawTiles(){
    ctx.save();
    ctx.fillStyle = 'brown';
    let rows = 7;
    let cols = 10;
    let rectWith = w / cols;
    let rectHeight = h / 2 / rows;
    let padd = rectWith / 3;
    

    for(let i = 0; i < rows; i++){
        for(let k = 0; k < cols; k++){
            let x = rectWith * k + padd / 2;
            let y = rectHeight * i + padd / 2;
            ctx.fillRect(x, y, rectWith - padd, rectHeight - padd);
            
            // let oneTile = {upL: {x, y}, upR: {x, y}, downL: {x, y}, downR: {x, y}}
            
            if(!tiles.length){
                let oneTile = {};

                oneTile.upL = {};
                oneTile.upR = {};
                oneTile.downL = {};
                oneTile.downR = {};

                
                oneTile.upL.tileX = x;
                oneTile.upL.tileY = y;

                oneTile.upR.tileX = x + (rectWith - padd);
                oneTile.upR.tileY = y;

                oneTile.downL.tileX = x;
                oneTile.downL.tileY = y + rectHeight - padd;

                oneTile.downR.tileX = x + (rectWith - padd);
                oneTile.downR.tileY = y + rectHeight - padd;
                
                tiles.push(oneTile);
                console.log(tiles);
            }
            
        }
    }

    ctx.restore();
}


let ball = {
    x: 300, y: 300,
    radius: 8, color: 'green',
    dx: 3, dy: 1,
}

function drawBall(ball){
    ctx.save();
    ctx.clearRect(0, 0, w, h);
    
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.moveTo(ball.x, ball.y);
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    
    for(let i = 0; i < tiles.length; i++){
        if (ball.y > tiles[i].y){
            ball.dy *= -1;
        }
        if(ball.x == tiles[i].x){
            ball.dx *= -1;
        }
    }

    if(ball.y > h || ball.y < 0){
        ball.dy *= -1;
    }
    if(ball.x > w || ball.x < 0){
        ball.dx *= -1;
    }
    ball.x += ball.dx;
    ball.y += ball.dy;

    requestAnimationFrame(function(){
        drawBall(ball);
        drawTiles();
    });
}

drawBall(ball);


