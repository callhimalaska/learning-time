$(function () {

    $.ajax({
        type: 'GET',
        url: 'http://api.nytimes.com/svc/books/v2/lists/2014-09-01/hardcover-fiction.json?sort-by=rank&sort-order=ASC&api-key=56d58185488bc87b153fc775ca200e81:4:69839740',
        success: function (results) {
            console.log('success', results);
        }
    });

});