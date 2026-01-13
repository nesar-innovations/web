function openWebsite() {
    const urlInput = document.getElementById('inurl');
    let url = urlInput.value.trim();
    if (!url) return;
    try {
        new URL(url);
    } catch(e) {
        let gs = url.replaceAll(' ','+')
        window.open('https://www.google.com/search?q='+gs)
    }
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
