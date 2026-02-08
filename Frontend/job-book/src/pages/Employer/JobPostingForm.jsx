import DashboardLayout from "../../components/layout/DashboardLayout";
import { useState, useEffect } from "react";
import {
  AlertCircle,
  MapPin,
  DollarSign,
  Briefcase,
  Users,
  Eye,
  Send,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES, JOB_TYPES } from "../../../Utils/Data";
import toast from "react-hot-toast";

import InputField from "../../components/input/InputField";
import SelectField from "../../components/input/SelectField";
import TextAreaField from "../../components/input/TextAreaField";
import JobPostingPreview from "../../components/Cards/JobPostingPreview";

const JobPostingForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const jobId = location?.state?.jobId || null;

  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    category: "",
    jobType: "",
    description: "",
    requirement: "",
    salaryMin: "",
    salaryMax: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    

    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };


  const validateForm = ( formData) => {
    const newErrors = {};

    if (!formData.jobTitle.trim()){
      errors.jobTitle = "Job title is required";
    }

    if (!formData.category) {
      errors.category = "Please select a category"
    }

    if(!formData.description.trim()) {
      errors.description = "Job description is required";
    }

    if(!formData.requirement.trim()) {
      errors.requirements = "Job description required"
    }

    if (!formData.salaryMin || !formData.salary) {
      errors.salary = "Both minimum and maximum salary are required";
    } else if (parseInt(formData.salaryMin) >= parseInt(formData.salaryMax)) {
      errors.salary = "Maximum salary must be greater than minimum salary";
    }

       return errors;
    };

    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.jobType) newErrors.jobType = "Job type is required";
    if (!formData.description)
      newErrors.description = "Description is required";
    if (!formData.requirement)
      newErrors.requirement = "Requirements are required";

    if (!formData.salaryMin || !formData.salaryMax) {
      newErrors.salary = "Salary range is required";
    } else if (Number(formData.salaryMin) > Number(formData.salaryMax)) {
      newErrors.salary = "Minimum salary cannot exceed maximum salary";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = (fromData) => {

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const validationErrors = validateFrom(fromData);
     if (Object.keys(validationErrors).length > 0) { 
      setErrors(validationErrors);
      return;
     }

     setIsSubmitting(true);

     const jobPayload = {
      title: formData.jobTitle,
      description: fromData.description,
      requirements: fromData.requirement,
      location: fromData.location,
      category: fromData.category,
      type: fromData.jobtype,
      salaryMin: fromData.salaryMin,
      salaryMax: fromData.salaryMax,
     };

     try{
      const response = jobId
        ?await axiosIntance.put(API_PATHS.JOBS.UPDATE_JOB(jobId),jobPayload)
        : await  axiosIntance.post(API_PATHS_JOBS_POST_JOB, jobPayload);

        if(response.status === 200 || response.stauts === 201) {
          toast.success(
            jobId ? "job updated Successfully" : "job Posted Successfully"
          );
          setFromData({
            jobTitle:"",
            location:"",
            category:"",
            jobType:"",
            description:"",
            requirement:"",
            salaryMin:"",
            salaryMax:"",
          });
          navigate("/employer-dashboard");
          return;
        }

        console.error("unexpected reponse:", response);
        toast.error("Something went wrong. Please try again.");
     } catch (error) {
      if (error.response?.data?.message) {
        console.error("API Error:", error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          console.error("Unespected error:",error);
          toast.error("Failed to post/update job. Please try again");
        }
      } finally {
        setIsSubmitting(false);
     }
     };

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      // await api call here
      toast.success("Job published successfully");
      navigate("/dashboard/jobs");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    const validationErrors = validateForm(formData);
    return Object.keys(validationErrors).length === 0;
  };

  if (isPreview) {
    <DashboardLayout activeMenu="post-job">
      <JobPostingPreview fromData={formData} setIsPreview={setIsPreview} />
    </DashboardLayout>
  };


  return (
    <DashboardLayout activeMenu="post-job">
      <div className="min-h-screen bg-gradient-to-r from-slate-50 via-blue-50/30 to-purple-50/20 px-4 sm:px-6 lg:px-60">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Post a new job
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Fill out the form below to create your job posting
                </p>
              </div>

              <button
                onClick={() => setIsPreview(true)}
                disabled={!validateForm()}
                className="flex items-center space-x-2 px-5 py-2 text-sm text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-600 rounded-xl transition"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </button>
            </div>

            {/* Job Title */}
            <InputField
              label="Job Title"
              id="jobTitle"
              placeholder="e.g. Senior Frontend Developer"
              value={formData.jobTitle}
              onChange={(e) =>
                handleInputChange("jobTitle", e.target.value)
              }
              error={errors.jobTitle}
              required
              Icon={Briefcase}
            />

            {/* Location */}
            <InputField
              label="Location"
              id="location"
              placeholder="e.g. New York, NY"
              value={formData.location}
              onChange={(e) =>
                handleInputChange("location", e.target.value)
              }
              error={errors.location}
              Icon={MapPin}
            />

            {/* Category & Job Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectField
                label="Category"
                value={formData.category}
                onChange={(e) =>
                  handleInputChange("category", e.target.value)
                }
                options={CATEGORIES}
                error={errors.category}
                required
                Icon={Users}
              />

              <SelectField
                label="Job Type"
                value={formData.jobType}
                onChange={(e) =>
                  handleInputChange("jobType", e.target.value)
                }
                options={JOB_TYPES}
                error={errors.jobType}
                required
                Icon={Briefcase}
              />
            </div>

            {/* Description */}
            <TextAreaField
              label="Job Description"
              value={formData.description}
              onChange={(e) =>
                handleInputChange("description", e.target.value)
              }
              error={errors.description}
              required
            />

            {/* Requirements */}
            <TextAreaField
              label="Requirements"
              value={formData.requirement}
              onChange={(e) =>
                handleInputChange("requirement", e.target.value)
              }
              error={errors.requirement}
              required
            />

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Salary Range *
              </label>

              <div className="grid grid-cols-2 gap-3 mt-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={formData.salaryMin}
                  onChange={(e) =>
                    handleInputChange("salaryMin", e.target.value)
                  }
                  className="input"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={formData.salaryMax}
                  onChange={(e) =>
                    handleInputChange("salaryMax", e.target.value)
                  }
                  className="input"
                />
              </div>

              {errors.salary && (
                <div className="flex items-center mt-1 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.salary}
                </div>
              )}
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full mt-6 flex items-center justify-center px-4 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:bg-gray-400"
            >
              {isSubmitting ? (
                "Publishing..."
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Publish Job
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobPostingForm;
