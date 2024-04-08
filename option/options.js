const $select_semester = document.getElementById('semester');

$select_semester.onchange = (event) => {
    let num = Number(event.currentTarget.value);
    let today = new Date();
    if (today.getMonth() >= 8 || today.getMonth() <= 2) num += 4;
    let options = {
        num:num
    }
    chrome.storage.sync.set(options);
}

chrome.storage.sync.get(null, (options) => {
    if (options.num === undefined) {
        console.log('undifined ! ')
        $select_semester.options[0].selected = true;
        let num = 1;
        let today = new Date();
        // 月情報は0から11まで
        if (today.getMonth() >= 8 || today.getMonth() <= 2) num += 4;
        let options = {
            num:num
        }
        chrome.storage.sync.set(options);
        return;
    } else {
        let id = options.num;
        $select_semester.options[(id - 1) % 4].selected = true;
    }
});