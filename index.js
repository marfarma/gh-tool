'use strict';


var app = module.exports;

var GitHub = require('github-api');
var Polyhedron = require("polyhedron");
var Repo = require('./app/models/repo.js');

var db = new Polyhedron.Datastore('githubTool');
var RepoMapper = db.register('Repo', Repo);
// basic auth
const gh = new GitHub({
   username: 'marfarma',
   password: 'will99ow'
});

const me = gh.getUser();

app.handleItem = function(json, mapper){
  var ret = {};
  // console.log(json);
  return mapper.new()
    .then(function(item){
      return Promise.resolve(item);
    })
    .then(function(item){
      console.log(item);
      return item.load(json);
    })
    .then(function(item){
      ret = item;
      return mapper.save(item);
    })
    .then(function(result){
      ret._rev = result.rev;
      return Promise.resolve(mapper.save(item));
    })
    .catch(function(err){
      return Promise.reject(new Error(err));
    });
};


// Parameters
// Name	Type	Description
// type	string	Can be one of all, owner, member. Default: owner
// sort	string	Can be one of created, updated, pushed, full_name. Default: full_name
// direction	string	Can be one of asc or desc. Default: when using full_name: asc, otherwise desc
app.getRepoList = function (options){
  return me.listRepos(options)
     .then(function({data: reposJson}) {
       return Promise.resolve(reposJson);
     })
     .then(function(reposJson) {
       var repos = [];

       for (var item in reposJson) {
        /*jshint loopfunc: true */
        this.handleItem(reposJson[item], RepoMapper)
        .then(function(repo){
          repos.push(repo);
        }.bind(this))
        .catch(function(err){
          return Promise.reject(new Error(err));
        });
        /*jshint loopfunc: false */
       }
      //  Promise.all(repos)
      //  .then(function(repos){
      //    console.log('length repos list: ', repos.length);
         return Promise.resolve(repos);
      //  });
     }.bind(this))
     .catch(function(err){
       return Promise.reject(new Error(err));
     });
};

// Kick off lazy load of related metadata as additional attachments
// Save as new revisions


function getReleasesList(options){
  return me.listReleases(options)
     .then(function({data: reposJson}) {
       return Promise.resolve(reposJson);
     })
     .then(function(reposJson) {
       return Promise.resolve(reposJson);
     });
}

// listStatuses(sha, cb) → {Promise}
// List the commit statuses for a particular sha, branch, or tag
//
// Parameters:
// Name	Type	Description
// sha	string
// the sha, branch, or tag to get statuses for
// cb	Requestable.callback
// will receive the list of statuses
// Source:
// Repository.js, line 230
// See:
// https://developer.github.com/v3/repos/statuses/#list-statuses-for-a-specific-ref
// Returns:
// the promise for the http request
// Type  Promise
function getStatusesList(options){
  return me.listStatuses(options)
     .then(function({data: reposJson}) {
       return Promise.resolve(reposJson);
     })
     .then(function(reposJson) {
       return Promise.resolve(reposJson);
     });
}


// listTags(cbopt) → {Promise}
// List the tags on a repository
//
// Parameters:
// Name	Type	Attributes	Description
// cb	Requestable.callback	<optional>
// will receive the tag data
// Source:
// Repository.js, line 84
// See:
// https://developer.github.com/v3/repos/#list-tags
// Returns:
// the promise for the http request
// Type  Promise
function getTagsList(options){
  return me.listTags(options)
     .then(function({data: reposJson}) {
       return Promise.resolve(reposJson);
     })
     .then(function(reposJson) {
       return Promise.resolve(reposJson);
     });
}
