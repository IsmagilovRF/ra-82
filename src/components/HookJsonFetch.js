import React from "react";
import useJsonFetch from "./useJsonFetch";

function HookJsonFetch({ url }) {
  const [data, error, loading] = useJsonFetch(url);
  console.log('[data, error, loading] = '+ [data, error, loading]);
  return (
    <div className="ui segment">
      {data && <p>'data.status = ' {data.status}</p>}
      {loading && <p>'Loading = ' Loading</p>}
      {error && <p>"Error = " Error</p>}
    </div>
  );
}

export default HookJsonFetch;
