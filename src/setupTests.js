import { createSerializer } from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@testing-library/jest-dom';

Enzyme.configure({ adapter: new Adapter() });
 
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));