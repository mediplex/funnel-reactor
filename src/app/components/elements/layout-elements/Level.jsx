import { default as MaterialGrid } from '@material-ui/core/Grid';
import Elements from '..';

export const Level = ({ data }) => (
  <MaterialGrid container direction="row" justify="space-around" alignItems="center" {...data.props}>
   
    {data.left && (
      <MaterialGrid item {...data.left.props}>
        {data.left.elements && <Elements elements={data.left.elements} />}
      </MaterialGrid>
    )}

    {data.elements && <Elements elements={data.elements} />}

    {data.right && (
      <MaterialGrid item {...data.right.props}>
        {data.right.elements && <Elements elements={data.right.elements} />}
      </MaterialGrid>
    )}
  
  </MaterialGrid>
);

export default Level;
