'use strict';

exports.rootGET = function (args, res, next) {
  /**
   *
   * no response value expected for this operation
   **/
  res.end(JSON.stringify(args));
}

exports.rootPOST = function (args, res, next) {
  /**
   *
   * name String name (optional)
   * year String year (optional)
   * no response value expected for this operation
   **/
  res.end(JSON.stringify(args));
}

