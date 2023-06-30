import { createGlobalStyle } from 'styled-components';

import font1 from './spacemonkey.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'customfont';
        src: local('customfont'), local('customfont'),
        url(${font1}) format(opentype);

        font-weight: 300;
        font-style: normal;
    }
`;