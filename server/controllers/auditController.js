var auditController = function(Audit, AuditDetail) {

  var api = {
    getList: getList,
    get: get,
    post: post
  };
  return api;

  function getList(req, res) {

    var query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }

    Audit.find(query, function(err, audits) {
      if (err)
        res.status(500).send(err);
      else
        res.json(audits);
    });
  }

  function get(req, res, next) {
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
  }

  function post(req, res) {
    var audit = new Audit(req.body);

    //if (!req.body.title) {
    //  res.status(400);
    //  res.send('Title is required');
    //} else {
      audit.save();
      res.status(201);
      res.send(audit);
    //}

  }

};

module.exports = auditController;
