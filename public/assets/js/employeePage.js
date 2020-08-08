$(document).ready(function () {
    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/login/user_data").then(function (data) {
        let user = data.email;
        $(".employee-name").text(user);

        // this prefilter was used to correct CORS that prevented the ajax from calling 
        $.ajaxPrefilter(function (options) {
            if (options.crossDomain && jQuery.support.cors) {
                var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
                options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            }
        });

        let avatar = 'https://api.adorable.io/avatars/100/';
        let customeIcon = avatar + user;

        $(".icon").attr('src', customeIcon);
    });
});
