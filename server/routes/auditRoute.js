var express = require('express');

var routes = function(Audit) {

  var auditRouter = express.Router();
  var auditController = require('../controllers/auditController')(Audit);

  auditRouter.route('/')
    .get(auditController.getList)
    .post(auditController.post);

  auditRouter.use('/:auditId', function(req, res, next) {
    Audit.findById(req.params.auditId, function(err, audit) {
      if (err) {
        res.status(500).send(err);
      } else if (audit) {
        res.status(200);
        res.send(audit);
        //req.audit = audit;
        //next();
      } else {
        res.status(404).send('no audit found');
      }
    });
  });
  auditRouter.route('/:auditId')
    .get(auditController.get);


  /*auditRouter.route('/:auditId')
    .get(function(req, res) {
      res.json(req.audit);
    }); */

  return auditRouter;

};

module.exports = routes;
