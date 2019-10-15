import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import notes from '../README.md';
import PlayButton from './index';
import withServicesKnob from '../../../utilities/psammead-storybook-helpers/src/withServicesKnob';

storiesOf('Components|PlayButton/Video', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'video without duration',
    ({ service }) => (
      <PlayButton
        service={service}
        title="Dog chases cat."
        onClick={() => {}}
      />
    ),
    { notes },
  )
  .add(
    'video with duration',
    ({ service }) => (
      <PlayButton
        service={service}
        title="Dog chases cat."
        onClick={() => {}}
        duration={text('duration', '2:30')}
        durationSpoken={text('durationSpoken', '2 minutes 30 seconds')}
        datetime={text('datetime', 'PT2M30S')}
      />
    ),
    { notes },
  );

storiesOf('Components|PlayButton/Audio', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'audio without duration',
    ({ service }) => (
      <PlayButton
        service={service}
        title="Dog barks at cat."
        onClick={() => {}}
        type="audio"
      />
    ),
    { notes },
  )
  .add(
    'audio with duration',
    ({ service }) => (
      <PlayButton
        service={service}
        title="Dog barks at cat."
        onClick={() => {}}
        duration={text('duration', '2:30')}
        durationSpoken={text('durationSpoken', '2 minutes 30 seconds')}
        datetime={text('datetime', 'PT2M30S')}
        type="audio"
      />
    ),
    { notes },
  );
