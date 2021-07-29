import pollForEl from '../../helpers/pollForEl';
import colours from './colour-swatches/colours';

export default ()=>{
    pollForEl(".p-item").then(colours) //fetchs colours data and adds it to each product card as a data attr
}