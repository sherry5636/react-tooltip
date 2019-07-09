import React from 'react';
import { render} from 'react-dom';
import Tooltip from '../../src';

render(<Tooltip position='top' content={'这是提示框的内容'}>
<button>提示框</button>
</Tooltip>, document.getElementById("tooltip-demo"));