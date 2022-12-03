import jquery from 'jquery';
import React from 'react';
import createReactClass from 'create-react-class';
import ReactDOM from 'react-dom';

(window as any).React = React;
(window as any).createReactClass = createReactClass;
(window as any).ReactDOM = ReactDOM;
(window as any).$ = (window as any).jQuery = jquery;