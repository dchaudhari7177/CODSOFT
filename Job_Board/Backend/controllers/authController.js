const User = require('../models/user');
const bcrypt = require('bcryptjs');

const signup = async (req, res, role) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    user = new User({
      username,
      email,
      password,
      role
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json({ message: `${role} registered successfully` });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', role: user.role });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.signupJobSeeker = (req, res) => signup(req, res, 'jobseeker');
exports.loginJobSeeker = (req, res) => login(req, res);

exports.signupEmployer = (req, res) => signup(req, res, 'employer');
exports.loginEmployer = (req, res) => login(req, res);
