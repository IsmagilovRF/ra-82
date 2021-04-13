import React from "react";
import useJsonFetch from "./useJsonFetch";

function HookJsonFetch({ url }) {
  const [data, error, loading] = useJsonFetch(url);
  return (
    <div className="ui segment">
      {data && <p> {data.status}</p>}
      {loading && <p> Loading</p>}
      {error && <p> Error</p>}
    </div>
  );
}

export default HookJsonFetch;
