import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
// material
import { Box } from '@mui/material';
//
import { varWrapEnter } from './variants';

// ----------------------------------------------------------------------

/*
MotionContainer.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node
};
*/

interface Props {
  open: boolean
  children: JSX.Element,
}

export default function MotionContainer({ open, children, ...other }: Props) {
  return (
    <Box
      component={motion.div}
      initial={true}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
