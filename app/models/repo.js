'use strict';
var uuidV4 = require('uuid/v4');

function Repo() {
    this.repoJson = '';
    this.downloadDate = '';
    this.isArchived = '';
    this.archivedDate = '';
    this.isDeleted = ''; //= false;
    this.deletedDate = '';
    this.polyhedron_type = 'Repo';
    this.ownerLogin = function() {
        return this.repoJson['login'];
    }; // owner.login
    this.ownerLoginId = function() {
        return this.repoJson['id'];
    }; // owner.id
    this.repoId = function() {
        return this.repoJson['id'];
    };
    this.name = function() {
        return this.repoJson['name'];
    };
    this.full_name = function() {
        return this.repoJson['full_name'];
    };
    this.description = function() {
        return this.repoJson['description'];
    };
    this.isPrivate = function() {
        return this.repoJson['private'];
    }; //private
    this.isFork = function() {
        return this.repoJson['isFork'];
    };
    this.html_url = function() {
        return this.repoJson['html_url'];
    };
    this.clone_url = function() {
        return this.repoJson['clone_url'];
    };
    this.language = function() {
        return this.repoJson['language'];
    };
    this.forks_count = function() {
        return this.repoJson['forks_count'];
    };

    this.stargazers_count = function() {
        return this.repoJson['stargazers_count'];
    };

    this.watchers_count = function() {
        return this.repoJson['watchers_count'];
    };
    this.size = function() {
        return this.repoJson['size'];
    };
    this.default_branch = function() {
        return this.repoJson['default_branch'];
    };
    this.open_issues_count = function() {
        return this.repoJson['open_issues_count'];
    };
    this.has_issues = function() {
        return this.repoJson['has_issues'];
    };
    this.has_wiki = function() {
        return this.repoJson['has_wiki'];
    };
    this.has_pages = function() {
        return this.repoJson['has_pages'];
    };
    this.has_downloads = function() {
        return this.repoJson['has_downloads'];
    };
    this.pushed_at = function() {
        return this.repoJson['pushed_at'];
    };
    this.created_at = function() {
        return this.repoJson['created_at'];
    };
    this.updated_at = function() {
        return this.repoJson['updated_at'];
    };
}
// write a custom 'from json' that optionally
// tries to get the repo from the local db
// update / decorate the newly loaded object
Repo.prototype.load = function(jsonObj) {
  if (!this.hasOwnProperty('_id')
    || this._id !== undefined || this._id.length === 0) {
    this._id = uuidV4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
  }
  this.repoJson = jsonObj;
  return this;
};

module.exports = Repo;
// function Repo() {
//
//     function Owner() {
//         var login = "octocat";
//         var id = 1;
//         var avatar_url = "https=//github.com/images/error/octocat_happy.gif";
//         var gravatar_id = "";
//         var url = "https=//api.github.com/users/octocat";
//         var html_url = "https=//github.com/octocat";
//         var followers_url = "https=//api.github.com/users/octocat/followers";
//         var following_url = "https=//api.github.com/users/octocat/following{/other_user}";
//         var gists_url = "https=//api.github.com/users/octocat/gists{/gist_id}";
//         var starred_url = "https=//api.github.com/users/octocat/starred{/owner}{/repo}";
//         var subscriptions_url = "https=//api.github.com/users/octocat/subscriptions";
//         var organizations_url = "https=//api.github.com/users/octocat/orgs";
//         var repos_url = "https=//api.github.com/users/octocat/repos";
//         var events_url = "https=//api.github.com/users/octocat/events{/privacy}";
//         var received_events_url = "https=//api.github.com/users/octocat/received_events";
//         var type = "User";
//         var site_admin = false;
//     };
//     function Permissions() {
//         var admin = false;
//         var push = false;
//         var pull = true;
//     };
//     function Repo() {
//         var id = 1296269;
//         var name = "Hello-World";
//         var full_name = "octocat/Hello-World";
//         var description = "This your first repo!";
//         var isPrivate = false;
//         var fork = true;
//         var url = "https=//api.github.com/repos/octocat/Hello-World";
//         var html_url = "https=//github.com/octocat/Hello-World";
//         var archive_url = "http=//api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}";
//         var assignees_url = "http=//api.github.com/repos/octocat/Hello-World/assignees{/user}";
//         var blobs_url = "http=//api.github.com/repos/octocat/Hello-World/git/blobs{/sha}";
//         var branches_url = "http=//api.github.com/repos/octocat/Hello-World/branches{/branch}";
//         var clone_url = "https=//github.com/octocat/Hello-World.git";
//         var collaborators_url = "http=//api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}";
//         var comments_url = "http=//api.github.com/repos/octocat/Hello-World/comments{/number}";
//         var commits_url = "http=//api.github.com/repos/octocat/Hello-World/commits{/sha}";
//         var compare_url = "http=//api.github.com/repos/octocat/Hello-World/compare/{base}...{head}";
//         var contents_url = "http=//api.github.com/repos/octocat/Hello-World/contents/{+path}";
//         var contributors_url = "http=//api.github.com/repos/octocat/Hello-World/contributors";
//         var deployments_url = "http=//api.github.com/repos/octocat/Hello-World/deployments";
//         var downloads_url = "http=//api.github.com/repos/octocat/Hello-World/downloads";
//         var events_url = "http=//api.github.com/repos/octocat/Hello-World/events";
//         var forks_url = "http=//api.github.com/repos/octocat/Hello-World/forks";
//         var git_commits_url = "http=//api.github.com/repos/octocat/Hello-World/git/commits{/sha}";
//         var git_refs_url = "http=//api.github.com/repos/octocat/Hello-World/git/refs{/sha}";
//         var git_tags_url = "http=//api.github.com/repos/octocat/Hello-World/git/tags{/sha}";
//         var git_url = "git=github.com/octocat/Hello-World.git";
//         var hooks_url = "http=//api.github.com/repos/octocat/Hello-World/hooks";
//         var issue_comment_url = "http=//api.github.com/repos/octocat/Hello-World/issues/comments{/number}";
//         var issue_events_url = "http=//api.github.com/repos/octocat/Hello-World/issues/events{/number}";
//         var issues_url = "http=//api.github.com/repos/octocat/Hello-World/issues{/number}";
//         var keys_url = "http=//api.github.com/repos/octocat/Hello-World/keys{/key_id}";
//         var labels_url = "http=//api.github.com/repos/octocat/Hello-World/labels{/name}";
//         var languages_url = "http=//api.github.com/repos/octocat/Hello-World/languages";
//         var merges_url = "http=//api.github.com/repos/octocat/Hello-World/merges";
//         var milestones_url = "http=//api.github.com/repos/octocat/Hello-World/milestones{/number}";
//         var mirror_url = "git=git.example.com/octocat/Hello-World";
//         var notifications_url = "http=//api.github.com/repos/octocat/Hello-World/notifications{?since; all; participating}";
//         var pulls_url = "http=//api.github.com/repos/octocat/Hello-World/pulls{/number}";
//         var releases_url = "http=//api.github.com/repos/octocat/Hello-World/releases{/id}";
//         var ssh_url = "git@github.com=octocat/Hello-World.git";
//         var stargazers_url = "http=//api.github.com/repos/octocat/Hello-World/stargazers";
//         var statuses_url = "http=//api.github.com/repos/octocat/Hello-World/statuses/{sha}";
//         var subscribers_url = "http=//api.github.com/repos/octocat/Hello-World/subscribers";
//         var subscription_url = "http=//api.github.com/repos/octocat/Hello-World/subscription";
//         var svn_url = "https=//svn.github.com/octocat/Hello-World";
//         var tags_url = "http=//api.github.com/repos/octocat/Hello-World/tags";
//         var teams_url = "http=//api.github.com/repos/octocat/Hello-World/teams";
//         var trees_url = "http=//api.github.com/repos/octocat/Hello-World/git/trees{/sha}";
//         var homepage = "https=//github.com";
//         var language = null;
//         var forks_count = 9;
//         var stargazers_count = 80;
//         var watchers_count = 80;
//         var size = 108;
//         var default_branch = "master";
//         var open_issues_count = 0;
//         var has_issues = true;
//         var has_wiki = true;
//         var has_pages = false;
//         var has_downloads = true;
//         var pushed_at = "2011-01-26T19=06=43Z";
//         var created_at = "2011-01-26T19=01=12Z";
//         var updated_at = "2011-01-26T19=14=43Z";
//     };
// };
