import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

render(
    <App />,
    document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}
