const lightBody = document.getElementById("musicBody")
const lightFooter = document.getElementById("footer")

lightBody.addEventListener('change', (e) => {
    lightBody.classList.toggle('music__body--light');
    lightFooter.classList.toggle('footerLight')
})

