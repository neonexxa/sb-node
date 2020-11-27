const express = require('express');

const router = express.Router();
const c = require('../controllers');
const m = require('../middleware');

router.get('/role', c.role.index);
router.get('/activitylog', m.requireAdminOrUser, c.activitylog.index);

router.get('/users', m.requireAdmin, c.user.index);
router.post('/user/:UserId', c.userUpdate.update);

router.get('/hall', m.requireAdminOrUser, c.hall.index);
router.post('/hall/:id', m.requireAdmin, c.hall.update);
router.delete('/hall/:id', m.requireAdmin, c.hall.destroy);
router.post('/hall', m.requireAdmin, c.hall.create);

router.get('/room', m.requireAdminOrUser, c.room.index);
router.post('/room/:id', m.requireAdminOrUser, c.room.update);
router.delete('/room/:id', m.requireAdminOrUser, c.room.destroy);
router.post('/room', m.requireAdminOrUser, c.room.create);

router.get('/player', m.requireAdminOrUser, c.player.index);
router.post('/player/:id', c.player.update);
router.delete('/player/:id', c.player.destroy);
router.post('/player', c.player.create);

router.get('/match', m.requireAdminOrUser, c.match.index);
router.delete('/match/:id', m.requireAdmin, c.match.destroy);
router.post('/match', m.requireAdmin, c.match.create);

router.get('/experience', m.requireAdminOrUser, c.experience.index);
router.delete('/experience/:id', m.requireAdmin, c.experience.destroy);
router.post('/experience', m.requireAdmin, c.experience.create);

module.exports = router;
