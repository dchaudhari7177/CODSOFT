const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Add this line
const authRoutes = require('./routes/auth');
const jobRoutes = require('./routes/jobs');

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',  
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const mongoURI = 'mongodb://127.0.0.1:27017/Job_Board';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
