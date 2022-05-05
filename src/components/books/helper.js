export const constructUrlParams = ({
  title = '',
  author = '',
  accessCode = '',
  publisher = '',
  category = '',
}) => {
  const titleParam = title ? `title=${title}&` : '';
  const authorParam = author ? `author=${author}&` : '';
  const accessCodeParam = accessCode ? `accessCode=${accessCode}&` : '';
  const categoryParam = category ? `category=${category}&` : '';
  const publisherParam = publisher ? `publisher=${publisher}` : '';
  return `${titleParam}${authorParam}${accessCodeParam}${categoryParam}${publisherParam}`;
};

export const constructFromQuery = (params) => {
  const paramObject = {};

  for (const [key, value] of params.entries()) {
    paramObject[key] = value;
  }

  return constructUrlParams(paramObject);
};
