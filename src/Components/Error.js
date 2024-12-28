import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>{err.data}</h1>
      <h1>
        {err.status}:{err.statusText}
      </h1>
      {/* 404 Page Not Found */}
    </div>
  );
};
export default Error;
