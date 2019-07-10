import React from 'react';
import { render} from 'react-dom';
import Tooltip from '../../src';

render(<>
    <Tooltip content={'left提示框'} position="left" style={{margin: '20px'}}>
        <button >提示框</button>
    </Tooltip>
    <Tooltip content={'top提示框'} style={{margin: '20px'}}>
        <button >提示框</button>
    </Tooltip>
    <Tooltip content={'bottom提示框'} position="bottom" style={{margin: '20px'}}>
        <button >提示框</button>
    </Tooltip>
    <Tooltip content={'right提示框'} position="right" style={{margin: '20px'}}>
        <button >提示框</button>
    </Tooltip>
</>, document.getElementById("tooltip-demo"));