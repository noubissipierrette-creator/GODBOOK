import { color, motion } from 'framer-motion';
import { TrendingUp, Users, Briefcase, Target, ZoomInIcon } from 'lucide-react';

const Analytics = () => {

    const stats = (
      {
        icon:Users,
        title:'Active Users',
        value:'2.4M+',
        growth:'+15%',
        color:'blue'
      },
      {
        icon:Briefcase,
        title:'jobs posted',
        value:'150K+',
        growth:'+22%',
        color:'purple'
      },
      {
        icon:Target,
        title:'Successful Hires',
        value:'89K+',
        growth:'+18%',
        color:'green'
      },
      {
        icon:TrendingUp,
        title:'Match Rate',
        value:'94%',
        growth:'+8%',
        color:'orange'
      }
    );
    
  return (
   <section className="">
    <div className="">
        <motion.div
        initial={{opacity:0,y:30}}
        whileInview={{opacity:1,y:0}}
        transition={{ duration:0.8 }}
        viewport={{ once:true }}
        className=""
        >
        <h2 className="" >
             platform
             <span className="" >Analytics</span>
        </h2>    
        <p className="" >
             Real-time insights and datagghdshjddddddddjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </p>
        </motion.div>

        {/*stats cards */}
        <div className="">
            {stats.map ((stat, index) => (
                <motion.div 
                key={index}
                initial={{ opacity:0,y:30 }}
                whileInview={{ opacity:1,y:0 }}
                transition={{ delay:index + 0.1, duration:0.6}}
                viewport={{ once: true}}
                className=""
                 >
                <div className="" >
                    <div className={'w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center'}>
                     <stat.icon className={'w-6 h-6 text-$stat.color}-600'}/>    
                    </div>
                     <span className="" >
                        {stat.growth}
                     </span>
                    </div>    
                   <h3 className="" >{stat.value}</h3> 
                   <p className="" >{stat.title} </p>
                </motion.div>
            ))}
        </div>

    </div>




   </section>
  )
}

export default Analytics