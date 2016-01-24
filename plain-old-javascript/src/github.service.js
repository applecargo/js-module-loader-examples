'use strict';

window.GithubService = (function() {

    var api = 'https://api.github.com';

    function getRepos(orgname, callback) {

        var url = api + '/orgs/' + orgname + '/repos?per_page=100';
        $.getJSON(url, function(repos) {

            // Sort in descending order of stars
            repos.sort(function(repo1, repo2) {
                return repo2.stargazers_count - repo1.stargazers_count;
            });

            callback(repos);

        })
        .error(function() {
            callback([]);
        });
    }

    return {
        getRepos: getRepos
    };

})();
