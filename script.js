'use strict'

const button_clickMe = document.getElementById('button')
const pharagraphs = document.querySelectorAll('.cover-letter-part')

let texts = []

function cleanData(){
    for(let p of pharagraphs) {
        if(texts.includes(p.textContent)){
            // console.log('El elemento existe en el arreglo')
        }else{
            texts.push(p.textContent)
        }
        p.textContent = ''
    }
}

cleanData()


let i = 0
let j = 0
function writer(){
    if(i < texts[j].length && j < pharagraphs.length){
        pharagraphs[j].textContent += texts[j][i] 
        i++
        setTimeout(writer, 40)
    }else if(j < pharagraphs.length){
        i = 0
        j++
        writer()
    }else{
        j = 0
        button_clickMe.disabled = false
    }
    
}

button_clickMe.addEventListener('click', () => {
    cleanData()
    button_clickMe.disabled = true
    writer()
})
