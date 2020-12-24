import React from 'react';
import ReactDom from 'react-dom';
import {hot} from 'react-hot-loader/root';
import Ctemplate from './Ctemplate';

const Hot = hot(Ctemplate);

//ReactDom.render(<GuGuDan />, document.querySelector('#root'));
ReactDom.render(<Hot />, document.querySelector('#root'));