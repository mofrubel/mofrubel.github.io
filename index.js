const url = new URL(window.location.href);
const pathAndQuery = url.search;
const params = url.searchParams
var redirectUrl = ""

if (url.searchParams.has('link')) {
    window.location.replace(url.searchParams.get('link'))
}
