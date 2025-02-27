import React from 'react';
import styled from 'styled-components';
import { BuildingFilled } from '@gympass/yoga-icons';
import { string, func, checkPropTypes } from 'prop-types';

import Box from '../../Box';
import Icon from '../../Icon';

const Image = styled.img`
  max-width: 100%;
`;

/**
 * The Avatar component is used to display the image.
 * It has two shapes: default and circle
 */
const Avatar = ({
  src,
  alt,
  fill,
  stroke,
  icon = BuildingFilled,
  ...otherProps
}) => (
  <Box
    bgColor="elements.selectionAndIcons"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width={48}
    height={48}
    borderRadius="small"
    elevation="small"
    overflow="hidden"
    {...otherProps}
  >
    {src ? (
      <Image src={src} alt={alt} />
    ) : (
      <Icon as={icon} width="50%" height="50%" fill={fill} stroke={stroke} />
    )}
  </Box>
);

Avatar.propTypes = {
  src: string,
  /**  Required if src is true */
  alt: (props, propName, componentName) => {
    const { src } = props;

    if (src) {
      checkPropTypes(
        { [propName]: string.isRequired },
        props,
        'prop',
        componentName,
      );
    }

    return null;
  },
  /** Used when src is missing */
  icon: (props, propName, componentName) => {
    const { src, [propName]: iconProp } = props;

    if (src && iconProp) {
      return new Error(
        `You should provide a src or ${propName} prop, not both, in '${componentName}'.`,
      );
    }

    checkPropTypes({ [propName]: func }, props, 'prop', componentName);

    return null;
  },
  fill: string,
  stroke: string,
  ...Box.propTypes,
};

Avatar.defaultProps = {
  src: undefined,
  alt: undefined,
  icon: undefined,
  fill: 'white',
  stroke: undefined,
  ...Box.defaultProps,
};
Avatar.displayName = 'Avatar';

export default Avatar;
