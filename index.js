const url = new URL(window.location.href);
const pathAndQuery = url.search;
const params = url.searchParams

if (url.searchParams.has('link')) {
    campaignRedirect(url)
}

function campaignRedirect(url) {
    if (url.searchParams.has('link')) {
        window.location.replace(url.searchParams.get('link'))
    }
}
