import { default as MaterialGrid } from '@material-ui/core/Grid';
import Elements from '../../elements';

export const Grid = ({ data }) => (
  <MaterialGrid {...data.props}>
   
      {data.elements && <Elements elements={data.elements} />}

  </MaterialGrid>
);

export default Grid;
