window.onload = () => {
    chrome.storage.sync.get(null, (options) => {
        let num = options.num;
        if (num === undefined) return;
        let today = new Date();
        // 月情報は0から11まで
        if (today.getMonth() >= 8 || today.getMonth() <= 2) num += 4;
        let id = 'btn-g' + num + '-f';
        document.getElementById(id).click();
    });
};