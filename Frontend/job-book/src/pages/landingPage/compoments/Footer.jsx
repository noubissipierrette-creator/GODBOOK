import { Briefcase } from "lucide-react"

const Footer = () => {
  return (
    <footer className=" relative bg-gray-50 text-gray-900 hoverflow-hidden ">
        <div className="relative z-10 px-6 py-16">
            <div className= "max-w-6xl mx-auto">
                 { /* Main Footer content */ }
             <div className="text-center space-y-8">
                { /* Logo/Brand */ }
                <div className="space-y-4">
                    <div className=" flex items-center justify-center space-x-2">
                         <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center ">
                            <Briefcase className="w-6 h-6 text-white"/>
                         </div>
                            <h3 className="text-2xl font-bold text-gray-800" > jobportal </h3>
                    </div>
                    <p className={'text-sn text-gray-600 max-w-md mx-auto'}>
                        Connecting Talented professionnals with innovative companies
                        worlwide.Your carree success is our mission.
                    </p>
                </div>

                { /* copyrigth */ }
                <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                        o {new Date().getFullYear()} Time to program.
                    </p>
                    <p className={'text-xs text-gray-500'} >
                        Made whith &hearts;... Happy coding.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer