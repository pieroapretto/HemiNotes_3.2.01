var NotesModel = require('../models/NotesModel.js');

/**
 * NotesController.js
 *
 * @description :: Server-side logic for managing Notess.
 */
module.exports = {

    /**
     * NotesController.list()
     */
    list: function (req, res) {
        NotesModel.find(function (err, Notess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Notes.',
                    error: err
                });
            }
            return res.json(Notess);
        });
    },

    /**
     * NotesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        NotesModel.findOne({_id: id}, function (err, Notes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Notes.',
                    error: err
                });
            }
            if (!Notes) {
                return res.status(404).json({
                    message: 'No such Notes'
                });
            }
            return res.json(Notes);
        });
    },

    /**
     * NotesController.create()
     */
    create: function (req, res) {
        var Notes = new NotesModel({
        });

        Notes.save(function (err, Notes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Notes',
                    error: err
                });
            }
            return res.status(201).json(Notes);
        });
    },

    /**
     * NotesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        NotesModel.findOne({_id: id}, function (err, Notes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Notes',
                    error: err
                });
            }
            if (!Notes) {
                return res.status(404).json({
                    message: 'No such Notes'
                });
            }

            Notes.classNum = req.body.classNum ? req.body.classNum : Notes.classNum;
            Notes.save(function (err, Notes) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Notes.',
                        error: err
                    });
                }

                return res.json(Notes);
            });
        });
    },

    /**
     * NotesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        NotesModel.findByIdAndRemove(id, function (err, Notes) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Notes.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};