const Job = require('../models/job');

exports.createJob = async (req, res) => {
  const { title, description, company, location, salary } = req.body;
  try {
    const job = new Job({
      title,
      description,
      company,
      location,
      salary
    });

    await job.save();

    res.status(201).json({ message: 'Job created successfully', job });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 });
    res.json(jobs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.getJobById = async (req, res) => {
  const jobId = req.params.id;
  try {
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.updateJobById = async (req, res) => {
  const jobId = req.params.id;
  const { title, description, company, location, salary } = req.body;
  try {
    let job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    job.title = title;
    job.description = description;
    job.company = company;
    job.location = location;
    job.salary = salary;

    await job.save();

    res.json({ message: 'Job updated successfully', job });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteJobById = async (req, res) => {
  const jobId = req.params.id;
  try {
    await Job.findByIdAndDelete(jobId);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
