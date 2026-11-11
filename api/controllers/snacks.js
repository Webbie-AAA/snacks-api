const Snack = require("../models/Snack");

async function index(req, res) {
  try {
    const snacks = Snack.getAll;
    res.status(200).json(snacks);
  } catch (err) {
    res.status(500).json({ "error": err.message })
  }
}

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const snack = Snack.getOneById(id);
    res.status(200).json(snack);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

async function getTop(req, res) {
  try {
    const snack = Snack.getTopSnack();
    res.status(200).json(snack);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

async function create(req, res) {
  try {
    const snack = await Snack.create();
    res.status(200).json(snack);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

async function update(req, res) {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const result = await snack.update(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

async function destroy(req, res) {
  try {
    const id = parseInt(req.params.id);
    const snack = await Snack.getOneById(id);
    const result = await snack.destroy();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}

module.exports = {
  index, show, getTop, create, destroy
}
