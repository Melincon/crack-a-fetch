import React from 'react';
import propTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer'

const title = 'Crack a Fetch';

const sections = [
  {title: 'Constructed', url: '#'},
  {title: 'Limited', url: '#'},
  {title: 'Fetch Exchange', url: '#'},
  {title: 'About Us', url: '#'},
]

export default function Layout(props) {
    const { children } = props;
    
    return (
        <React.Fragment>
            <Header title={title} sections={sections} />
            {children}
            <Footer title={title} />
        </React.Fragment>
    )
}