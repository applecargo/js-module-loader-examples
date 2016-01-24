'use strict';

$(document).ready(function() {
    // Show repos on button click or keydown on enter key
    $('#show-repos').click(showRepos);
    $('#orgname').keydown(function(e) {
        if (e.keyCode === 13) {
            showRepos();
        }
    });
});

function showRepos() {
    var orgname = $('#orgname').val();
    if (orgname === '') {
        $('#orgname-error').text('Please enter an organization name');
        return;
    }
    else {
        $('#orgname-error').empty();
    }

    githubService.getRepos(orgname, renderRepos);
}

function renderRepos(repos) {

    $('#repotbody').empty();
    $('#repotfoot').empty();

    for (var i = 0; i < repos.length; i++) {
        renderRepo(repos[i]);
    }
    renderFooter(repos.length);
}

function renderRepo(repo) {
    var row = $('<tr />');
    $('#repotbody').append(row);
    row.append($('<td>' + repo.name + '</td>'));
    row.append($('<td class="pull-right">' + repo.stargazers_count + '</td>'));
    row.append($('<td class="pull-right">' + repo.forks_count + '</td>'));
}

function renderFooter(numRepos) {
    var row = $('<tr />');
    $('#repotfoot').append(row);
    row.append($('<td colspan="3"><em>' + numRepos + ' repositories retrieved</em></td>'));
}
