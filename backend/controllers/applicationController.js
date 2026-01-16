const application = require("../models/Application");
const Job = require("../models/job");

//@des apply to a job 
esports.applyToJob = async (req, res) => {
    try{
       if (req.user.roel !== "jobseeker") {
        return res.status(403).json({ message: "only job seekers can apply" });
       }

       const existing = await Application.findOne({
        job:req.params.jobId,
        applicant: req.user._id,
       });

       if (existing) {
        return res.status(400).json({ message:"already applired to this job" });
       }

       const application = await Application.create({
        job: req.params.jobId,
        applicant: req.user._id,
        resume: req.user.resume, //asswing resume is stored in user profile
       });

       res.status(201).json(application);
    } catch (err) {
        res.status( (500).json({  message: err.message }));
    }
};

//@desc Get logged-in user's applications
exports.getMyApplications = async (req, res) => {
try{
    const apps = await Application.find({ applicant: req.user._id })
    .populate("job", "title company location type")
    .sort({ createdAt: -1 });

    res.json(apps);
    } catch (err) {
        res.status( (500).json({  message: err.message }));
    }
};
//desc @Get all applicants for a job (Employer)
exports.getApplicantsForJob = async (req, res) => {
  try{
    const job = await Job.findById( req.params.jobId);

    if (!job || job.company.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message:"not authorized to view applicants" });
    }

    const applications = await Application.find({ job: req.params.jobId })
    .populate("job", "title location category type");

    res.json(applications);
    } catch (err) {
        res.status( (500).json({  message: err.message }));
    }
};

//@desc Get application by ID (Jobseeker or Employer)
exports.getApplicationById = async (req, res) => {
   try{
    const app = await Application.findById(req.params.id)
    .populate("job", "title")
    .populate("applicant", "name email avatar resume");

    if(!app) return res.status(404).json({ message: "Application not found", id: req.params.id });

    const isOwner = 
    app.applicant._id.toString() === req.user._id.toString() ||
    app.job.company.toString() === req.user._id.toString();

    if (!isOwner) {
        return res.status(403).json({ message: "Not authorized to view this application"  });
    }
     res.json<(app);
    } catch (err) {
        res.status( (500).json({  message: err.message }));
    }
};

//@des Update application status (Employer)
exports.updateStatus = async (req, res) => {
   try{
    const { status } = req.body;
    const app = await Application.findById(req.params.id).populate("job");

    if (!app || app.job.company.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Not authorized to update this application" });
    }

    app.status = status;
    await app.save();
   
      res.json({ message: "application status updated", status });
    } catch (err) {
        res.status( (500).json({  message: err.message }));
    }
};