function escapeHTML(string) {
    var pre = document.createElement('pre');
    var text = document.createTextNode(string);
    pre.appendChild(text);
    return pre.innerHTML;
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '197210964033736',
        xfbml: true,
        version: 'v2.7'
    });

    FB.api('/731255060334426', {
        fields: 'posts',
        access_token: 'EAACzXMF1AMgBAHBKRVUf1CTMZA1z2V8K8uPpjZAoQaSwCjGhyvtlupR1PbcrKrXBPZCQbr30KJINDLoH7y9T8jfOwdZCOEol4BSEnMg4LkBry4ZC8IdsLybj0B8cw0ZBn7jEEPvKD1MNVJKfS45H1MRHEehQzS9tfZBCZCSgI7nZCZAkXHrIcfpla2'
    }, function (response) {

        //console.log(response["posts"]["data"]);
        var postsArray = response["posts"]["data"]
        var threshold = Math.min(postsArray.length, 5)
        var count = 0;

        while (count < threshold) {
            var msg = response["posts"]["data"][count]["message"];
            //console.log(msg);
            if (msg != undefined) {
                document.getElementById("news").innerHTML += `
                            <br><br><br><br>
                            <div class='inner'>
                            <div class='data'>
                        ` + escapeHTML(msg) + "</div></div>";
                count++;
            }
        }

    });

};

(function (d, s, id) {
    var js;
    var fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/all.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));