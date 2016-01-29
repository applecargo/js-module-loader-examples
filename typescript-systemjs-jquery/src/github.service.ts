export default {
    getRepos: getRepos
};

import * as $ from 'jquery';
import {Repo} from './repo';

let api = 'https://api.github.com';

function getRepos(orgname: string, callback: (repos: Repo[]) => any) {

    var url = api + '/orgs/' + orgname + '/repos?per_page=100';
    $.getJSON(url, (data: any, textStatus: string, jqXHR: JQueryXHR) => {

        // Sort repos in descending order of stars
        var repos: Repo[] = data;
        repos.sort(function(repo1, repo2) {
            return repo2.stargazers_count - repo1.stargazers_count;
        });

        callback(repos);
    })
    .fail(function() {
        callback([]);
    });
}
