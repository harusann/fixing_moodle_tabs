const $select_semester = document.getElementById('semester');

$select_semester.onchange = (event) => {
    let num = Number(event.currentTarget.value);
    let options = {
        num:num
    }
    chrome.storage.sync.set(options);
}

chrome.storage.sync.get(null, (options) => {
    if (options.num === undefined) {
        $select_semester.options[0].selected = true;
        let options = {
            num:1
        }
        chrome.storage.sync.set(options);
        return;
    } else {
        let id = options.num;
        $select_semester.options[(id - 1) % 4].selected = true;
    }
});