import React, { useState } from "react";
import { motion } from "framer-motion";
import{
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader,
  AlertCircle,
  CheckCircle
} from "lucide-react";

  const Login = () => {

    const [formData, setFormData] = useState({
      email:"",
      password:"",
      rememberMe:false,
    });

    const [formState, setFormState] = useState({
      Loading: false,
      errors: {},
      showPassword: false,
      success: false,
    });

    //Validation function
    const validateEmail = (email) => {};

    const validatePassword = (password) => {};

//Handle input change
const handleInputChange = (e) => {
  const { name , value } =e.target;
   setFormData(prev => ({
    ...prev,
    [name]: value
  }));
   //clear error when user starts typing
   if(formState.errors[name]) {
     setFormState(prev => ({
      ...prev,
      errors: {...prev.errors,[name]:''}
     }))
    }
  };

const validateForm = () => {
  const errors ={
    email:
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if(!validateForm()) return;

  setFormState(prev => ({...prev,loading:true}));

  try{
    //Login API intergration

  } catch(error){
    setFormState(prev => ({
      ...prev,
      loading:false,
      errors:{
        submit:error.response?.data?.message || 'Login failed.Please check your credentials'
      }
    }))
  }
};

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity:0,y:20}}
        animate={{ opacity:1,y:0 }}
        transition={{ duration:0.6 }}
        className=" bg-white p-8 rounded-xl shadow-lg max-w-md w-full "
      >
        <div className=" text-center mb-8 ">
          <h2 className=" text-2xl font-bold" >Welcome Back </h2>
          <p className=" text-gray-600 " >Sign in to your jobportal account</p>
        </div>

        <form  onSubmit={handleSubmit} className=" space-y-6" >
          {/* Email */}
          <div  >
            <label className=" block text-sm font-medium text-gray-700 mb-2 " >
              Email Address
            </label>
            <div className=" relative " >
              <Mail className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 " />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={ ` w-full pl-10  pr-4 py-3 rounded-lg border${
                  setFormState.errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ` }
                placeholder="Enter your email"
                />
            </div>
            { formState.errors.email && (
              <p className="  text-red-500 text-sm mt-1 flex items-center" >
                <AlertCircle className=" w-4 h-4 mr-1 " />
                { formState.errors.email }
              </p>
            ) }
          </div>

          {/* Password */}
          <div>
            <label className=" block text-sm font-medium text-gray-700 mb-2 ">
              Password
            </label>
            <div className=" relative">
             <Lock className=" absolute left-3 top-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
             <input
              type={ formState.showPassword ? 'text' : 'password' }
              name="password"
              value={ formData.password }
              onChange={ handleInputChange }
              className={ ` w-full pl-10 pr-10 py-3 rounded-lg border${
                formState.errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ` }
              placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setFormState(prev => ({ ...prev, showPassword: !prev.State.showPassword }))}
                className=" absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                { formState.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className=" w-5 h-5" /> }
                </button>
              </div>  
              {formState.errors.password &&(
                <p className="  text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className=" w-4 h-4 mr-1 "/>
                    { formState.errors.password }
                </p>
              )}
              </div>

              </form>
              </motion.div>
              </div>
  )   
}

export default Login

