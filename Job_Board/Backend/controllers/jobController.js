const Job = require('../models/job');

exports.createJob = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newJob = new Job({ title, description });
    const job = await newJob.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
