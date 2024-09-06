import { createClient } from 'contentful';

const client = createClient({
  space: '{{SPACE_ID}}',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '{{ACCESS_TOKEN}}',
});

client
  .getEntries({
    content_type: 'projects',
  })
  .then((response) => console.log(response));
