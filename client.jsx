import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';
import Ftemplate from './Ftemplate';

const Hot = hot(Ftemplate);

//ReactDom.render(<GuGuDan />, document.querySelector('#root'));
ReactDom.render(<Hot />, document.querySelector('#root'));