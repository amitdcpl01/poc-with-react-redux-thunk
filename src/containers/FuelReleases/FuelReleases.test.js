import React from 'react';
import FuelReleases from './FuelReleases';
import FuelReleaseCard from './FuelReleaseCard';
import Home from '../Home';
import LocationSearch from './LocationSearch'
import MyAccount from './MyAccount'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter : new Adapter()});

let wrapper;
    beforeEach(() => {
        console.log('BeforeEach executing before each test case running of this test suite');
        wrapper = shallow(<Home></Home>);
    });

describe('Home Component Test.', () => {
        
    it('Should have one FuelReleases as child component.', () => {
        expect(wrapper.find(FuelReleases)).toHaveLength(1);
    });

    it('Should have one LocationSearch as child component.', () => {
        expect(wrapper.find(LocationSearch)).toHaveLength(1);
    });
});

