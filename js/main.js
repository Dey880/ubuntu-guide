function copyCode(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const alert = document.querySelector('.copy-alert');
        alert.style.display = 'block';
        setTimeout(() => {
            alert.style.display = 'none';
        }, 2000);
    });
}