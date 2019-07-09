import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

const Tooltip = ({ children, className, position, content, style }) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const tooltipEl = React.useRef(null)

    let timeout = null;

    React.useEffect(() => {
            document.addEventListener('mouseover', handleDocTrigger, false)
            return function cleanup() {
                clearTimeout(timeout);
                document.removeEventListener('mouseover', handleDocTrigger, false)
            }    
    }, isOpen);

    const handleDocTrigger = (e) => {
        if (!(tooltipEl.current && tooltipEl.current.children.length > 0)) return

        let top = tooltipEl.current && tooltipEl.current.children.length > 0 && tooltipEl.current.children[0],
            box = tooltipEl.current && tooltipEl.current.children.length > 0 && tooltipEl.current.children[1]

        if (top.contains(e.target) || box.contains(e.target)) {
            setIsOpen(!isOpen)
        } else {
            setIsOpen(false)
        }
        
    }

    return (
        <div ref={tooltipEl} className={classnames('tooltip', className, 'tooltip-light')} style={style}>
            <div className="top">{children}</div>
            <div className={classnames('box', `box-${position}`, isOpen && 'box-open')}>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Tooltip;

Tooltip.propTypes = {
    position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    className: PropTypes.string,
    style: PropTypes.object
};

Tooltip.defaultProps = {
    position: 'top',
    className: '',
    style: null
};