function openWebsite() {
    const urlInput = document.getElementById('inurl');
    let url = urlInput.value.trim();
    if (!url) return;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        if (!url.startsWith('www.')) {
            url = 'https://www.' + url;
        } else {
            url = 'https://' + url;
        }
    }

    window.open(url, '_blank');
}
document.getElementById('inurl').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        openWebsite();
    }
});