chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == 'switch') {
        var url = new URL(window.location.toString());
        if (url.hostname == "www.baidu.com") {
            window.location.href = "https://www.google.com.hk/search?q=" + url.searchParams.get("wd");
        } else if (url.hostname == "www.google.com.hk") {
            window.location.href = "https://www.baidu.com/s?wd=" + url.searchParams.get("q");
        }
    }
});