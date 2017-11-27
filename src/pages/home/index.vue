<template>
  <div>
    <segment>
      <heading>Welcome to Vue</heading>
    </segment>

    <segment>
      <base-button>Button</base-button>
      <base-button to="http://ueno.co">Ueno.co</base-button>
      <base-button to="/about">About</base-button>
    </segment>
  </div>
</template>

<script>
import Segment from '@/components/Segment';
import Heading from '@/components/Heading';
import BaseButton from '@/components/Button';

export default {
  components: {
    Segment,
    Heading,
    BaseButton,
  },
  metaInfo: {
    title: 'Home',
  },
};
</script>
