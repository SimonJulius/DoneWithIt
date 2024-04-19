import { useState } from "react";

export default (apiFunc: (...args: any[]) => any | Promise<any> | void) => {
  const [data, setdata] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const request = async () => {
    setLoading(true);

    const response = await apiFunc();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setdata(response.data);
  };

  return {
    request,
    data,
    error,
    loading,
  };
};
