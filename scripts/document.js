function enlargeImg(id) {
    let img = document.getElementById(id);
    if (img.className.match(/\bdocument-image-active\b/)) {
        img.classList.remove('document-image-active');
    } else {
        img.classList.add('document-image-active');
    }
}