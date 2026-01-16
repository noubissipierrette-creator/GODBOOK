const express = require("express");
const {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  toggleCloseJob,
  getJobsEmployer,
} = require("../controllers/jobController");
const { protect } = require("../middleware.js/authMiddleware");

const router = express.Router();

// Create job (protected) & get all jobs
router.route("/")
  .post(protect, createJob)
  .get(getJobs);

// Get jobs for employer (protected)
router.route("/get-jobs-employer")
  .get(protect, getJobsEmployer);

// Get, update, delete job by ID
router.route("/:id")
  .get(getJobById)
  .put(protect, updateJob)
  .delete(protect, deleteJob);

// Toggle job close/open (protected)
router.route("/:id/toggle-close")
  .put(protect, toggleCloseJob);

module.exports = router;