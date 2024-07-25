import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Typeset } from '@storybook/blocks';

import { basicColors } from '../src/colors/index.js';
import {
  variantsDefinition,
  fontFamily,
  fontWeightBold,
  fontWeightRegular,
  headingsFontFamily,
} from '../src/fonts/index.js';

const headingText = 'Case studies';
const bodyText =
  'We have successfully fulfilled the visions and requirements of 23+ completed projects that helped meet their business goals.';

const fontSizeToPx = (fontSize: number) => `${fontSize}px`;

const headings = [variantsDefinition.h1, variantsDefinition.h2, variantsDefinition.h3, variantsDefinition.h4];

const texts = [variantsDefinition.S, variantsDefinition.M, variantsDefinition.L, variantsDefinition.XL];
const textColor = basicColors.black;

export const Headings = () =>
  headings.map((variant) => (
    <Stack key={variant.variant} color={textColor} mb={2}>
      <Typography color="bodyText.contrast" fontWeight="600" variant="S">
        {variant.variant}
      </Typography>
      <Typeset
        fontFamily={headingsFontFamily}
        fontSizes={[fontSizeToPx(variant.fontSize)]}
        fontWeight={fontWeightBold}
        sampleText={headingText}
      />
    </Stack>
  ));

export const BodyText = () =>
  texts.map((variant) => (
    <Stack key={variant.variant} color={textColor} mb={2}>
      <Typography color="bodyText.contrast" fontWeight="fontWeightBold" variant="S">
        {variant.variant}
      </Typography>
      <Typeset
        fontFamily={fontFamily}
        fontSizes={[fontSizeToPx(variant.fontSize)]}
        fontWeight={fontWeightRegular}
        sampleText={bodyText}
      />
    </Stack>
  ));
