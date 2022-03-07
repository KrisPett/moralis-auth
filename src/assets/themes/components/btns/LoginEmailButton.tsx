import * as React from 'react';
import PropTypes from 'prop-types';
import ButtonUnstyled, {buttonUnstyledClasses} from '@mui/base/ButtonUnstyled';
import {styled} from '@mui/system';

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
    const {children, ...other} = props;

    return (// @ts-ignore
        <svg width="150" height="50" {...other} ref={ref} style={{boxShadow: "5px 5px 10px blue"}}>
            <polygon points="0,50 0,0 150,0 150,50" className="bg"/>
            <polygon points="0,50 0,0 150,0 150,50" className="borderEffect"/>
            <foreignObject x="0" y="0" width="150" height="50">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

// @ts-ignore
ButtonRoot.propTypes = {children: PropTypes.node};

const blue = {
    50: 'rgba(83,213,21,0.58)',
    100: 'rgba(132,255,0,0.47)', //100: '#C2E0FF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5', //600: '#0072E5',
    800: '#004C99',
    900: '#003A75', //900: '#003A75',
};

const CustomButtonRoot = styled(ButtonRoot)(
    ({theme}) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? blue[600] : blue[100]};
  --hover-color: ${theme.palette.mode === 'light' ? blue[50] : blue[900]};
  --active-color: ${theme.palette.mode === 'light' ? blue[100] : blue[800]};
  & polygon {
    fill: transparent;
    transition: all 2000ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }
  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 5;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }
  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }
    .bg {
      fill: var(--hover-color);
    }
  }
  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    outline-offset: 2px;
  }
  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }
  & foreignObject {
    pointer-events: none;
    & .content {
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }
    & svg {
      margin: 0 5px;
    }
  }`,
);

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref}/>;
});

interface Props {
    title: string;
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export default function LoginEmailButton(props: Props) {
    // @ts-ignore
    return <div onClick={props.onClick}><SvgButton>{props.title}</SvgButton></div>;
}