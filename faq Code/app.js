

const btn1 = document.querySelector('.inner-box1 .btn')
let click1 = document.querySelector('.inner-box1 .para')

click1.style.display='none'
btn1.addEventListener('click',()=>{3

    if(click1.style.display =='none')
    {
        click1.style.display = 'block'
        btn1.innerHTML='-'
    }
    else
    {
        click1.style.display = 'none'
        btn1.innerHTML='+'
        
    }
})
const btn2 = document.querySelector('.inner-box2 .btn')
let click2 = document.querySelector('.inner-box2 .para')

click2.style.display='none'
btn2.addEventListener('click',()=>{

    if(click2.style.display =='none')
    {
        btn2.innerHTML='-'
        click2.style.display = 'block'
    }
    else
    {
        btn2.innerHTML='+'
        click2.style.display = 'none'
        
    }
})
const btn3 = document.querySelector('.inner-box3 .btn')
let click3 = document.querySelector('.inner-box3 .para')

click3.style.display='none'
btn3.addEventListener('click',()=>{
    
    if(click3.style.display =='none')
        {
            btn3.innerHTML='-'
            click3.style.display = 'block'
        }
        else
        {
            btn3.innerHTML='+'
            click3.style.display = 'none'
            
        }
    })
    const btn4 = document.querySelector('.inner-box4 .btn')
    let click4 = document.querySelector('.inner-box4 .para')
    
    click4.style.display='none'
    btn4.addEventListener('click',()=>{
        
        if(click4.style.display =='none')
            {
                click4.style.display = 'block'
                btn4.innerHTML='-'
            }
    else
    {
            btn4.innerHTML='+'
        click4.style.display = 'none'
        
    }
})