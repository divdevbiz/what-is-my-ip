const API = "https://ipapi.co"

document.addEventListener("DOMContentLoaded", event => {
    init_page()
})

function $(id) {
    return document.getElementById(id)
}

function setText(obj, text) {
    obj.innerText = text
}

async function init_page() {
    const localIP = await fetchHandler("/json/")
    fillin(localIP, false)
    console.log(localIP)
}

async function fetchHandler(url) {
    return await fetch(API + url).then(res => {
        if (res.status == 200) {
            return res.json();
        }
        throw new Error("API Request Error")
    }).catch(error => {
        console.log(error)
        return -1;
    })
}


async function enter_submit(event) {
    if (event.keyCode == 13) {
        await searchHandler();
    }
}

function checkIPForm(ip) {
    let ipv46_regex = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/gm;      
    return ipv46_regex.test(ip)
}

async function searchHandler() {
    const ipaddr = $('queryInput').value
    if (!checkIPForm(ipaddr)) {
        raiseSnack("Invalid Input")
        return;
    }
    const res = await fetchHandler('/' + ipaddr + /json/');
    fillin(res)
}

function raiseSnack(text) {
    mdui.snackbar({
        "message": text,
        "position": "top",
        "timeout": 1000
    })
}

function fillin(obj, display = true) {
    if (obj == -1 || obj == {} || obj == '' || obj == null) {
        setText($('ip'), "")
		setText($('mobiles'), "")
		setText($('proxi'), "")
        setText($('city'), "")
        setText($('region'), "")
        setText($('country'), "")
        setText($('position'), "")
        setText($('asn'), "")
        setText($('timezone'), "")
        return;
    }
    if (display) raiseSnack("Search Successfully")
    setText($('ip'), obj['ip'])
setText($('mobiles'), obj['mobile'])
setText($('proxi'), obj['proxy'])
    setText($('position'), obj['lat'] + ', ' + obj['lon'])
    setText($('region'), obj['regionName'])
    setText($('country'), obj['country'])
    setText($('position'), obj['lat'] + ',' + obj['lon'])
    setText($('asn'), obj['org'])
setText($('timezone'), obj['timezone'])
setText($('city'), obj['city'])
}


function switchSearchBox() {
    const sc = $('search-container')
    if (sc.style.getPropertyValue('display') == '') sc.style.setProperty('display', 'none')
    else sc.style.setProperty('display', '')
}
