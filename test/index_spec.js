'use strict';
var chai = require('chai'),
   Promise = global.Promise || require('bluebird'),
   expect = chai.expect,
   should = chai.should(),
   chaiAsPromised = require('chai-as-promised'),
   index = require('../index.js'),
   exec = require('child_process').exec;

   chai.use(chaiAsPromised);

   if (Promise) {
     Promise.longStackSupport = true;
   }
describe('github-tool', function(){
  this.timeout(55000);

  it.only('should get public repo list for person', function(){
    var options = {
      type:"owner", sort:"updated",direction:"asc"
    };
    var list = index.getRepoList(options)
    .then(function(repos){
      return list.should.eventually.have.length.above(0);
    });
  });
  it('should get user data with password authentication');
  it('should get a list of users repos');
  it('should store each repo record in pouchDB');
  it('repo record retrieved from pouchdb should match');
  it('should get list of issues for a repo');

//
// listForks(cb) → {Promise}
// List a repository's forks
//
// Parameters:
// Name	Type	Description
// cb	Requestable.callback
// will receive the list of repositories forked from this one
// Source:
// Repository.js, line 503
// See:
// https://developer.github.com/v3/repos/forks/#list-forks
// Returns:
// the promise for the http request
// Type  Promise
it('should get list of forks for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getForks(options).should.eventually.have.length.above(0);
});

// listHooks(cb) → {Promise}
// List the hooks for the repository
//
// Parameters:
// Name	Type	Description
// cb	Requestable.callback
// will receive the list of hooks
// Source:
// Repository.js, line 560
// See:
// https://developer.github.com/v3/repos/hooks/#list-hooks
// Returns:
// the promise for the http request
// Type  Promise
it('should get list of hooks for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getHooks(options).should.eventually.have.length.above(0);
});



// listKeys(cb) → {Promise}
// List the deploy keys for the repository
//
// Parameters:
// Name	Type	Description
// cb	Requestable.callback
// will receive the list of deploy keys
// Source:
// Repository.js, line 615
// See:
// https://developer.github.com/v3/repos/keys/#list-deploy-keys
// Returns:
// the promise for the http request
// Type  Promise
it('should get list of deploy keys for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getKeys(options).should.eventually.have.length.above(0);
});


// listProjects(cbopt) → {Promise}
// Get information about all projects
//
// Parameters:
// Name	Type	Attributes	Description
// cb	Requestable.callback	<optional>
// will receive the list of projects
// Source:
// Repository.js, line 843
// See:
// https://developer.github.com/v3/projects/#list-repository-projects
// Returns:
// the promise for the http request
// Type  Promise
it('should get list of projects for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getProjects(options).should.eventually.have.length.above(0);
});


// listPullRequestFiles(number, cbopt) → {Promise}
// List the files of a specific pull request
//
// Parameters:
// Name	Type	Attributes	Description
// number	number | string
// the PR you wish to fetch
// cb	Requestable.callback	<optional>
// will receive the list of files from the API
// Source:
// Repository.js, line 118
// See:
// https://developer.github.com/v3/pulls/#list-pull-requests-files
// Returns:
// the promise for the http request
// Type  Promise
it('should get list of files of a specific pull request for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getPullRequestFiles(options).should.eventually.have.length.above(0);
});


// listPullRequests(options, cbopt) → {Promise}
// List the open pull requests on the repository
//
// Parameters:
// Name	Type	Attributes	Description
// options	Object
// options to filter the search
// cb	Requestable.callback	<optional>
// will receive the list of PRs
// Source:
// Repository.js, line 95
// See:
// https://developer.github.com/v3/pulls/#list-pull-requests
// Returns:
// the promise for the http request
// Type  Promise
it('should get list of open pull requests for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getPullRequests(options).should.eventually.have.length.above(0);
});

// listReleases(cb) → {Promise}
// Get information about all releases
//
// Parameters:
// Name	Type	Description
// cb	Requestable.callback
// will receive the release information
// Source:
// Repository.js, line 799
// See:
// https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository
// Returns:
// the promise for the http request
// Type  Promise
it('should get list of releases for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getReleases(options).should.eventually.have.length.above(0);
});

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
it('should get list of statuses for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getStatuses(options).should.eventually.have.length.above(0);
});


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
it('should get list of tags for a repo', function(){
  var options = {
    type:"owner", sort:"updated",direction:"asc"
  };
  return index.getTags(options).should.eventually.have.length.above(0);
});



});

describe("database maintenance", function(){
  it('initializeds the database given proper credentials');
  it('refreshes the database when commanded');
  it('drops the database when requested');
  it('it replicates the database when requested');
  it('it works against a remote database directly from the desktop');
});
describe("desktop filesystem useage", function(){
  it('archives the entire database to local disk in a zip or tarball');
  it('it moves or copies the tarball to remote drive when requested');
  it('it keeps track of the archive location of archived data');
  it('archives selected repos to disk');
  it('restores archived repos from disk');
  it('clones repo to disk and compressed it and saves it as an attachment');
  it('restore git cloned repo to github under given name (repo only)');
  it('restore issues list to github repo on request');
  it('restore other restorable metadata to github on request');
});
describe("remote filesystem useage", function(){
  it('request appropriate write permissioned credentials');
  it('archive individual repo tarballs');
  it('maintain a header record of archived repos and last known location');
  it('pull back remote files to local filesystem on request');
  it('restore archived repos to git-tools database on request');
  it('writes git repository to disk uncompressed when requested');
});
describe("user authentication token management:", function () {
  it('should request username-password authentication by default');
  it('will optionally accept a personal use api access token');
  it('ensure that user credentials are safeguarded');
  it('ensure user credentials are discarded promptly');
});
describe("data modeling considerations:", function () {
  it('should the projects internal metadata be the cross reference key?');
  it('use cursor row placement to kick off eager loading of potentially remote data');
  it('compression data format of associated assets');
  it('using project internal keys helps track the same repo if it is reuploaded');
  it('database nameing and anti-collision preventive measures');
});
describe("ui considerations:", function () {
  it('Angularjs or React Native?');
  it('availability of useful grid componant' );
  it('sit with balsamiq and design something');
});
describe("build chain considerations:", function () {
  it('start using webkit or stay with browserify');
  it('investigate distribution possibilities');
});
