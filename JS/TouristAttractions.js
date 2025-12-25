
            //    *********** JS ***********************
let btn = document.getElementById('btn');

window.onscroll = function()
{
    if(scrollY >= 300)
        btn.style.display = 'block';
    
    else 
        btn.style.display = 'none';
}
btn.onclick = function ()
{
    scroll(0,0);
}

    // Add Photos by JS 
let t1 = document.getElementById('t1');
let img = document.createElement('img');
img.src = 'images/11.jpg';
t1.appendChild(img);
img.classList.add('ma1');
img.style.position = 'relative';
img.style.right = '18%';
img.style.border = 'solid';
img.style.borderColor = 'rgb(174, 108, 27)';
img.style.borderRadius = '4px';

let t2 = document.getElementById('t2');
let img2 = document.createElement('img');
img2.src = 'images/22.png';
t2.appendChild(img2);
img2.classList.add('image_1');
img2.style.position = 'relative';
img2.style.left = '22%';
img2.style.border = 'solid';
img2.style.borderColor = 'yellow';
img2.style.borderRadius = '4px';