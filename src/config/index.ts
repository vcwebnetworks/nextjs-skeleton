const configCommon = {
  seoImage: '/images/seo.png',

  url: (path?: string): string => {
    return `http://localhost:3000${path ?? ''}`;
  },
};

export default configCommon;
