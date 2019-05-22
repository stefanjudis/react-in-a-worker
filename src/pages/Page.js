import React, { useState, useEffect } from 'react';

function Page(props) {
  function getData(props) {
    if (props.staticContext) {
      return props.staticContext;
    } else if (typeof window !== 'undefined') {
      const data = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
      return data;
    }

    return null;
  }
  const serverData = getData(props);
  const [isLoading, setIsLoading] = useState(!serverData);
  const [data, setData] = useState(serverData);

  useEffect(() => {
    async function fetchData() {
      const data = await props.component.getInitialProps(props);
      setData(data);
      setIsLoading(false);
    }

    if (isLoading && props.component.getInitialProps) {
      fetchData();
    } else {
      setIsLoading(false);
    }
  }, []);

  const C = props.component;

  return (
    <div className="h-full">
      {isLoading ? (
        <div className="p-8 text-center">Loading...</div>
      ) : (
        <C data={data} {...props} />
      )}
    </div>
  );
}

export default Page;
