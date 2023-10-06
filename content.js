window.onload = () => {
    chrome.storage.sync.get(null, (options) => {
        let num = options.num;
        if (num === undefined) return;
        let id = 'btn-g' + num + '-f';
        console.log(id);
        document.getElementById(id).click();
    });
};