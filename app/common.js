'use strict';

var Promise = global.Promise || require(bluebird);

function handleItem(json, mapper){
  console.log(json);
  return mapper.new()
  .then(function(item){
    console.log(item);
    return Promise.resolve(item.load(json));
  })
  .then(function(item){
    return mapper.save(item);
  })
  .then(function(item){
    return Promise.resolve(item);
  })
  .catch(function(err){
    return Promise.reject(new Error(err));
  });
}

module.exports.handleItem = handleItem;
