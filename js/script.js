

const viewImg = document.querySelector('.img-box')
const icon = document.querySelector('.icon-box i')
const text = document.querySelector('.text p')

const urlInput = document.querySelector('#url-input')
const downloadBtn = document.querySelector('#url-btn')
const resetBtn = document.querySelector('.reset-btn')
const img = document.createElement('img')

resetBtn.addEventListener('click', () => {
    urlInput.value = ''
    img.style.display = 'none'
    icon.style.display = 'block'
    text.style.display = 'block'

    resetBtn.style.display = 'none'
})

urlInput.addEventListener('input', () => {
    img.src = urlInput.value
        icon.style.display = 'none'
        text.style.display = 'none'
    viewImg.append(img)

    if(urlInput.value.length == 0){
        img.style.display = 'none'
    icon.style.display = 'block'
    text.style.display = 'block'
    resetBtn.style.display = 'none'

    }else if(urlInput.value.length > 0){
        resetBtn.style.display = 'block'
    }
})

function fetchUrl(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file)
        let a = document.createElement('a')
        a.href = tempUrl
        a.download = 'filename'

        img.src = tempUrl
        icon.style.display = 'none'
        text.style.display = 'none'

        viewImg.append(img)
        a.click()
        a.remove()

    }).catch(() => {
        
alert(`Assalomu Aleykum!!!
Saytimizda bazi rasmlarni yuklash imkoniyati cheklangan!
`)
    })
    resetBtn.style.display = 'block'
}

downloadBtn.addEventListener('click', () => {
    fetchUrl(urlInput.value)
})
