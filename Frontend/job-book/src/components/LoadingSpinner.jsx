import { Briefcase } from "lucide-react";

const LoadingSpinner = () => {
      return (
         <div className="min-h-screen bg-gradient-to-br  from-blue-50 via-white to-purple-50 flex items-center justify-content">
          <div className="relative">
           <div className="animate-spin rounded-ull h-16 w-16 border-blue-200 border-t-blue-600 mx-auto mb-4 "></div>
               <div className="absolute inset-0 flex items-center jsutify-center"> 
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              </div>

              <p className="text-gray-600 font-medium">
                Finding amazing apportunities ...
              </p>
           </div>
        </div>
  )
}

export default LoadingSpinner