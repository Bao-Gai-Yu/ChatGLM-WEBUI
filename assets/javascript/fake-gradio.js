// Fake gradio components!

// buttons
function newChatClick() {
    gradioApp().querySelector('#empty-btn').click();
}

function jsonDownloadClick() {
    gradioApp().querySelector('#gr-history-download-btn').click();
}

function mdDownloadClick() {
    gradioApp().querySelector('#gr-markdown-export-btn').click();
    gradioApp().querySelector('#gr-history-mardown-download-btn').click();

    // downloadHistory(username, currentChatName, ".md");
}

// index files
function setUploader() {
    transUpload();
    var uploaderObserver = new MutationObserver(function (mutations) {
        var fileInput = null;
        var fileCount = 0;
        fileInput = gradioApp().querySelector("#upload-index-file table.file-preview");
        var fileCountSpan = gradioApp().querySelector("#uploaded-files-count");
        if (fileInput) {
            chatbotArea.classList.add('with-file');
            fileCount = fileInput.querySelectorAll('tbody > tr.file').length;
            fileCountSpan.innerText = fileCount;
        } else {
            chatbotArea.classList.remove('with-file');
            statusDisplayMessage("");
            fileCount = 0;
            transUpload();
        }
    });
    uploaderObserver.observe(uploaderIndicator, {attributes: true})
}

var grUploader;
var chatbotUploader;
var handleClick = function () {
    grUploader.click();
};

function transUpload() {
    chatbotUploader = gradioApp().querySelector("#upload-files-btn");
    chatbotUploader.removeEventListener('click', handleClick);
    grUploader = gradioApp().querySelector("#upload-index-file > .center.flex");

    // let uploaderEvents = ["click", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop"];
    // transEventListeners(chatbotUploader, grUploader, uploaderEvents);

    chatbotUploader.addEventListener('click', handleClick);
}

//初始化上传图片
var chatbotImgUploader;
var grImgUploader;
var handleUpImgClick = function () {
    grImgUploader.click();
}

function transImgupload() {
    chatbotImgUploader = gradioApp().querySelector("#upload-image-btn");
    console.log(chatbotImgUploader);
    chatbotImgUploader.removeEventListener('click', handleUpImgClick);
    // grImgUploader = gradioApp().querySelector("#upload-img-file > .center.flex");
    grImgUploader = gradioApp().querySelector("#upload-img-file");
    console.log(grImgUploader);
    chatbotImgUploader.addEventListener('click', handleUpImgClick);
}

function setImgUploader() {
    transImgupload();
    // var imgUploaderObserver = new MutationObserver(function (mutations) {
    //     var imgInput = null;
    //     // var fileCount = 0;
    //     imgInput = gradioApp().querySelector("#upload-img-file table.file-preview");
    //     // var fileCountSpan = gradioApp().querySelector("#uploaded-files-count");
    //     if (imgInput) {
    //         console.log("aba");
    //     } else {
    //         transImgupload();
    //     }
    // });
    // imgUploaderObserver.observe(imgUploaderIndicator, {attributes: true})
}


// checkbox
var grSingleSessionCB;
var grOnlineSearchCB;
var chatbotSingleSessionCB;
var chatbotOnlineSearchCB;

function setCheckboxes() {
    chatbotSingleSessionCB = gradioApp().querySelector('input[name="single-session-cb"]');
    chatbotOnlineSearchCB = gradioApp().querySelector('input[name="online-search-cb"]');
    grSingleSessionCB = gradioApp().querySelector("#gr-single-session-cb > label > input");
    grOnlineSearchCB = gradioApp().querySelector("#gr-websearch-cb > label> input");

    chatbotSingleSessionCB.addEventListener('change', (e) => {
        grSingleSessionCB.checked = chatbotSingleSessionCB.checked;
        gradioApp().querySelector('#change-single-session-btn').click();
    });
    chatbotOnlineSearchCB.addEventListener('change', (e) => {
        grOnlineSearchCB.checked = chatbotOnlineSearchCB.checked;
        gradioApp().querySelector('#change-online-search-btn').click();
    });
    grSingleSessionCB.addEventListener('change', (e) => {
        chatbotSingleSessionCB.checked = grSingleSessionCB.checked;
    });
    grOnlineSearchCB.addEventListener('change', (e) => {
        chatbotOnlineSearchCB.checked = grOnlineSearchCB.checked;
    });
}

function bgChangeSingleSession() {
    // const grSingleSessionCB = gradioApp().querySelector("#gr-single-session-cb > label > input");
    let a = chatbotSingleSessionCB.checked;
    return [a];
}

function bgChangeOnlineSearch() {
    // const grOnlineSearchCB = gradioApp().querySelector("#gr-websearch-cb > label> input");
    let a = chatbotOnlineSearchCB.checked;
    return [a];
}

function updateCheckboxes() {
    chatbotSingleSessionCB.checked = grSingleSessionCB.checked;
    chatbotOnlineSearchCB.checked = grOnlineSearchCB.checked;
}

// UTILS
function transEventListeners(target, source, events) {
    events.forEach((sourceEvent) => {
        target.addEventListener(sourceEvent, function (targetEvent) {
            if (targetEvent.preventDefault) targetEvent.preventDefault();
            if (targetEvent.stopPropagation) targetEvent.stopPropagation();

            source.dispatchEvent(new Event(sourceEvent, {detail: targetEvent.detail}));
            // console.log(targetEvent.detail);
        });
    });
}

function bgSelectHistory(a, b) {
    const historySelectorInput = gradioApp().querySelector('#history-select-dropdown input');
    let file = historySelectorInput.value;
    return [a, file]
}

// def recognize_image(file):
// # 在这里调用你的识别函数
// api_key = "gR4jEsT4idy2LyWrMyNaNdSk"
// secret_key = "VtIsp7oKdE64nrA5qWXt24etJxOHi7W3"
// client = BaiduAPIClient(api_key, secret_key)
// result = client.recognize_landmark(file)
// # print(result)
// return result

// var api_key = "AWL4tbdqQE1JT0GL44qWWSdh";
// var secret_key = "fSdNCkiu4junpMRUNikwclIOzzEMwdcI";
//
// function getAccessToken() {
//     let options = {
//         'method': 'POST',
//         'url': 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=' + api_key + '&client_secret=' + secret_key,
//     }
//     return new Promise((resolve, reject) => {
//         request(options, (error, response) => {
//             if (error) {
//                 reject(error)
//             } else {
//                 resolve(JSON.parse(response.body).access_token)
//             }
//         })
//     })
// }
//
// const url = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/landmark?access_token=' + getAccessToken();
// console.log(url);
//
// async function recognize_image(url = '', data = {}) {
//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//
//         return await response.json(); // 返回 JSON 格式的响应数据
//     } catch (error) {
//         console.error('Error:', error);
//         return false;
//     }
// }

// function setImgUploader() {
// var imgUploader = gradioApp().querySelector("#upload-image-btn");
// console.log(imgUploader);
// imgUploader.addEventListener("click", () => {
//     const input = document.createElement('input');
//     input.type = 'file'; // 设置 input 元素的类型为文件
//     input.accept = 'image/*'; // 设置文件类型为图片
//     input.onchange = function (event) {
//         const file = event.target.files[0];
//         if (file) {
//             // 在这里处理文件的读取和操作
//             const reader = new FileReader();
//             reader.onload = async function () {
//                 // 读取完成后的操作
//
//                 const imgData = reader.result; // 获取图片文件的base64编码
//
//                 const res = await recognize_image(url, {image: imgData});
//                 console.log(res);
//
//                 // 这里可以显示图片、上传图片等
//                 console.log('文件名:', file.name); // 输出文件名到控制台
//             };
//             reader.readAsDataURL(file); // 读取文件内容
//         }
//     };
//     input.click(); // 触发点击事件，弹出文件选择对话框
// });
// console.log("111");
// }
