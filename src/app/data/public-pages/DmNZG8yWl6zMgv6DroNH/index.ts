import { aboutUs } from './AboutUs';
import { footer } from './Footer';
import { headline } from './Headline';
import { main} from './Main';
import { ourStudents} from './OurStudents';
import { topBar} from './TopBar';
import { whyIzmir} from './WhyIzmir';

interface Page {
  title: string;
  data: string
}

const data = JSON.stringify(
  {
    elements: [
      // topBar,
      headline,
      main,
      // ourStudents,
      // whyIzmir,
      // aboutUs,
      footer
    ]
  }
)

const page:Page = {
  title: 'Master Degree',
  data: data
}

export default page;