import { useState } from 'react';
import { createClient } from 'contentful';
import { useEffect } from 'react';

const client = createClient({
  space: '{{SPACE_ID}}',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '{{ACCESS_TOKEN}}',
});

// client
//   .getEntries({
//     content_type: 'projects',
//   })
//   .then((response) => console.log(response));

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        // console.log(item);
        const id = item.sys.id;
        const { title, url, image } = item.fields;
        const img = image?.fields?.file?.url;

        return { id, title, url, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
