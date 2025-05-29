const Example = require('../models/ExampleModel');

exports.getExamples = async (req, res) => {
    const examples = await Example.find();
    res.json(examples);
};

exports.addExample = async (req, res) => {
    const newExample = new Example(req.body);
    const saved = await newExample.save();
    res.json(saved);
};
