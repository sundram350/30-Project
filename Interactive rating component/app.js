

const valprint = document.querySelector('.submit')
let h1 = document.createElement('h5')
    
    let val = null
    let sum = null

    const btn = document.querySelectorAll('.daba')
    
    btn.forEach(button =>{

        button.addEventListener('click',(e)=>{         
            e.preventDefault()
            let value = e.target.innerHTML;
            if((parseInt(value.length)<=1) ){
                val = e.target.innerText;
                
            }      
            let sum = val;
        })
        
    })
    valprint.addEventListener('click',function(e){         
        e.preventDefault()
            if(val !== null) {
                if(h1!==null){
                    if(h1!==sum)
                        h1.innerHTML= `you selected ${val} out of 5`                    
                    let addtxt = document.querySelector('.h1')
                    addtxt.append(h1)
                    document.querySelector('.txt').innerHTML=` <h1>Thank you!</h1> </br> <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch! </p>  `
                
                }                
                else {
                    h1.innerHTML=`Please Select rating number`
                }       
            }   
       e.stopPropagation()
  })    
    