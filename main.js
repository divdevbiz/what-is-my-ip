const script = document.createElement('script');
script.src = 'http://ip-api.com/json';
script.access-control-allow-origin = '*';
document.head.appendChild(script);


function $(id) {
    return document.getElementById(id)
}

function setText(obj, text) {
    obj.innerText = text
}

async function init_page() {
    const localIP = await fetchHandler("/json/?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp,mobile,proxy,query")
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
    const res = await fetchHandler('/json/' + ipaddr + '?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp,mobile,proxy,query');
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
		setText($('ua'), "")
		setText($('footer'), "")
        return;
    }
    if (display) raiseSnack("Search Successfully")
    setText($('ip'), obj['query'])
setText($('mobiles'), obj['mobile'])
setText($('proxi'), obj['proxy'])
    setText($('position'), obj['lat'] + ', ' + obj['lon'])
    setText($('region'), obj['regionName'])
    setText($('country'), obj['country'])
    setText($('position'), obj['lat'] + ',' + obj['lon'])
    setText($('asn'), obj['isp'])
setText($('timezone'), obj['timezone'])
setText($('city'), obj['city'])
}


function switchSearchBox() {
    const sc = $('search-container')
    if (sc.style.getPropertyValue('display') == '') sc.style.setProperty('display', 'none')
    else sc.style.setProperty('display', '')
}const _0xbb87a6=_0x208c;(function(_0x1ab879,_0x9901e){const _0x5d1c7f=_0x208c,_0xb97b3f=_0x1ab879();while(!![]){try{const _0x145797=parseInt(_0x5d1c7f(0x119))/0x1+parseInt(_0x5d1c7f(0x10a))/0x2*(-parseInt(_0x5d1c7f(0x116))/0x3)+-parseInt(_0x5d1c7f(0x10b))/0x4*(-parseInt(_0x5d1c7f(0x10d))/0x5)+parseInt(_0x5d1c7f(0xf6))/0x6+-parseInt(_0x5d1c7f(0x101))/0x7*(parseInt(_0x5d1c7f(0xfd))/0x8)+-parseInt(_0x5d1c7f(0x103))/0x9+parseInt(_0x5d1c7f(0x110))/0xa*(parseInt(_0x5d1c7f(0x113))/0xb);if(_0x145797===_0x9901e)break;else _0xb97b3f['push'](_0xb97b3f['shift']());}catch(_0x1c079e){_0xb97b3f['push'](_0xb97b3f['shift']());}}}(_0x4024,0xab7cd));const API=_0xbb87a6(0xfe);document[_0xbb87a6(0x114)]('DOMContentLoaded',_0x34d740=>{init_page();});function $(_0x10d2e5){return document['getElementById'](_0x10d2e5);}function _0x208c(_0x5e30da,_0x1232fa){const _0x4024de=_0x4024();return _0x208c=function(_0x208c50,_0x1e708b){_0x208c50=_0x208c50-0xf4;let _0x45d57f=_0x4024de[_0x208c50];return _0x45d57f;},_0x208c(_0x5e30da,_0x1232fa);}function _0x4024(){const _0x23744e=['5vUmUGk','json','city','9231470zyDkyz','catch','log','22uGTjeD','addEventListener','API\x20Request\x20Error','9705COdZtv','none','latitude','171986OmXyme','Search\x20Successfully','queryInput','5247612xZINwo','timezone','setProperty','longitude','country','display','region','488vPwogh','https://ip.hlz.ink','search-container','top','134743EQxFDd','value','5731767bryCOG','/json','getPropertyValue','position','status','asn','style','712yLhOXs','3088972ZVCTGZ','test'];_0x4024=function(){return _0x23744e;};return _0x4024();}function setText(_0xa256c1,_0x3fa483){_0xa256c1['innerText']=_0x3fa483;}async function init_page(){const _0x6dc523=_0xbb87a6,_0x1a899a=await fetchHandler(_0x6dc523(0x104));fillin(_0x1a899a,![]),console[_0x6dc523(0x112)](_0x1a899a);}async function fetchHandler(_0x3966c9){const _0x148512=_0xbb87a6;return await fetch(API+_0x3966c9)['then'](_0x4319d8=>{const _0xbcd8e8=_0x208c;if(_0x4319d8[_0xbcd8e8(0x107)]==0xc8)return _0x4319d8[_0xbcd8e8(0x10e)]();throw new Error(_0xbcd8e8(0x115));})[_0x148512(0x111)](_0x3fc20e=>{const _0x467706=_0x148512;return console[_0x467706(0x112)](_0x3fc20e),-0x1;});}async function enter_submit(_0x1efa71){_0x1efa71['keyCode']==0xd&&await searchHandler();}function checkIPForm(_0x51f306){const _0x3f9895=_0xbb87a6;let _0x305b19=/(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(?::[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(?::[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(?::[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(?::[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,6}|:)|(?::(?:(?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(?:%[0-9a-zA-Z]{1,})?$)/gm;return _0x305b19[_0x3f9895(0x10c)](_0x51f306);}async function searchHandler(){const _0xad4aea=_0xbb87a6,_0x5bdc90=$(_0xad4aea(0xf5))[_0xad4aea(0x102)];if(!checkIPForm(_0x5bdc90)){raiseSnack('Invalid\x20Input');return;}const _0x594ff1=await fetchHandler('/query/'+_0x5bdc90);fillin(_0x594ff1);}function raiseSnack(_0x1a591e){const _0x109c3b=_0xbb87a6;mdui['snackbar']({'message':_0x1a591e,'position':_0x109c3b(0x100),'timeout':0x3e8});}function fillin(_0x168bb7,_0x4782b0=!![]){const _0x23d240=_0xbb87a6;if(_0x168bb7==-0x1||_0x168bb7=={}||_0x168bb7==''||_0x168bb7==null){setText($('ip'),'Query\x20Error'),setText($(_0x23d240(0x10f)),''),setText($(_0x23d240(0xfc)),''),setText($('country'),''),setText($(_0x23d240(0x106)),''),setText($(_0x23d240(0x108)),''),setText($(_0x23d240(0xf7)),'');return;}if(_0x4782b0)raiseSnack(_0x23d240(0xf4));setText($('ip'),_0x168bb7['ip']),setText($(_0x23d240(0x10f)),_0x168bb7[_0x23d240(0x10f)]),setText($('region'),_0x168bb7[_0x23d240(0xfc)]),setText($(_0x23d240(0xfa)),_0x168bb7[_0x23d240(0xfa)]),setText($(_0x23d240(0x106)),_0x168bb7[_0x23d240(0x118)]+',\x20'+_0x168bb7[_0x23d240(0xf9)]),setText($(_0x23d240(0x108)),_0x168bb7[_0x23d240(0x108)]),setText($(_0x23d240(0xf7)),_0x168bb7[_0x23d240(0xf7)]);}function switchSearchBox(){const _0x13524c=_0xbb87a6,_0x24f25a=$(_0x13524c(0xff));if(_0x24f25a[_0x13524c(0x109)][_0x13524c(0x105)](_0x13524c(0xfb))=='')_0x24f25a['style']['setProperty'](_0x13524c(0xfb),_0x13524c(0x117));else _0x24f25a[_0x13524c(0x109)][_0x13524c(0xf8)](_0x13524c(0xfb),'');}
