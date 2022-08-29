const lightModeMedia = document.getElementById("media")
const lightFooterMedia = document.getElementById("footerMedia")

lightModeMedia.addEventListener('change', (e) => {
    lightModeMedia.classList.toggle('media__body--light');
    lightFooterMedia.classList.toggle('footer__media--light')
})