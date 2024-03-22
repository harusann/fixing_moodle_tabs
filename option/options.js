const $select_semester = document.getElementById('semester');

$select_semester.onchange = (event) => {
    let num = Number(event.currentTarget.value);
    let today = new Date();
    if (today.getMonth() >= 9 || today.getMonth() <= 3) num += 4;
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
        if (today.getMonth() >= 9 || today.getMonth() <= 3) num += 4;
        let options = {
            num:num
        }
        chrome.storage.sync.set(options);
        return;
    } else {
        let id = options.num;
        console.log(id)
        console.log((id - 1) % 4);
        $select_semester.options[(id - 1) % 4].selected = true;
    }
});