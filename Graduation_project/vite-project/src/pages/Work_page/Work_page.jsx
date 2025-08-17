import WorkProjcets from '../../components/MmWorkProjects/WorkProjects';
import './Work_page.css';
import SASquerup from "../../components/SASquerup/SASquerup"
import SaWorkone from "../../components/SaWorkone/SaWorkone" 
export default function Work_page() {
    return (
        <>
      <SaWorkone
      bgImage= "/assets/images/head-bg-3.png"
       title="At SquareUp"
        subtitle= "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
        subtitleContainer="Here are ten examples of our notable works:"
       />
       <SASquerup
        title="At SquareUp"
        subtitle= "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
        subtitleContainer="Here are ten examples of our notable works:"
        />
        
      </>
    )
}