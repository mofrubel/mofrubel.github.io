const url = new URL(window.location.href);
const pathAndQuery = url.search;
const params = url.searchParams;
var redirectUrl = "";

if (url.searchParams.has('link')) {
    redirectUrl = url.searchParams.get('link');
    url.searchParams.delete('link');
    if (url.searchParams.toString()) {
        if (redirectUrl.indexOf("?") !== -1) {
            redirectUrl += "&"; 
        } else {
            redirectUrl += "?";
        }
        redirectUrl += url.searchParams.toString();
    }
    window.location.replace(redirectUrl);
}
