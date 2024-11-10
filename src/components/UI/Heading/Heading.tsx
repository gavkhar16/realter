import React from 'react';
import { StyledHeading } from './Heading.style';

type THeadingProps = {
  headingText: string;
  headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  isNightMode?: boolean;
};

export const Heading: React.FC<THeadingProps> = ({
  headingText,
  headingType = 'h1', // Значение по умолчанию
  className,
  isNightMode,
}) => {
  const createHeading = () => {
    switch (headingType) {
      case 'h1':
        return <StyledHeading as="h1" isNightMode={isNightMode} className={className}>{headingText}</StyledHeading>;
      case 'h2':
        return <StyledHeading as="h2" isNightMode={isNightMode} className={className}>{headingText}</StyledHeading>;
      case 'h3':
        return <StyledHeading as="h3" isNightMode={isNightMode} className={className}>{headingText}</StyledHeading>;
      case 'h4':
        return <StyledHeading as="h4" isNightMode={isNightMode} className={className}>{headingText}</StyledHeading>;
      case 'h5':
        return <StyledHeading as="h5" isNightMode={isNightMode} className={className}>{headingText}</StyledHeading>;
      case 'h6':
        return <StyledHeading as="h6" isNightMode={isNightMode} className={className}>{headingText}</StyledHeading>;
      default:
        return <StyledHeading as="h1" isNightMode={isNightMode} className={className}>{headingText}</StyledHeading>;
    }
  };

  return createHeading();
};

export default Heading;
