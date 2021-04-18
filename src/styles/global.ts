import { createGlobalStyle } from 'styled-components';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
        outline: none;
    }

    button {
        cursor: pointer;
    }
`;
