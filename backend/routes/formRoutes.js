const express = require("express");
const { getAllForms, getForm, createForm, updateForm, deleteForm} = require("../controllers/formController");
const router = express.Router();



router.route('/forms').get(getAllForms)
router.route('/forms/new').post(createForm);
router.route('/forms/:id').get(getForm).put(updateForm).delete(deleteForm);

 
module.exports = router