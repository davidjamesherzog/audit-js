var express = require('express');

var routes = function(model) {

  var auditRouter = express.Router();
  var auditController = require('../controllers/auditController')(model.Audit, model.AuditDetail);

  auditRouter.route('/')
    .get(auditController.getList)
    .post(auditController.post);

  auditRouter.route('/:auditId')
    .get(auditController.get);

  return auditRouter;

};

module.exports = routes;
