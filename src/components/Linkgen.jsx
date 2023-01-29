import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Linkgen({ inputValue }) {
  const [url, setUrl] = useState("");
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const successToast = () => toast.success("Copied!");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copy]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setUrl(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copy]);

  if (loading) {
    return <div className="spinner w-[50%] mx-auto mt-5"></div>;
  }
  if (error) {
    return (
      <p className="text-center text-xl text-red-500 mt-3">
        Something went wrong :(
      </p>
    );
  }

  if (loading) {
    return <div class="spinner"></div>;
  }
  if (error) {
    return (
      <p className="text-center text-xl text-red-500 mt-3">
        Something went wrong :(
      </p>
    );
  }

  return (
    <>
      {url && (
        <div className="flex items-center justify-center space-x-6 mt-[20px]">
          <p className="border border-[black] py-2 px-6 text-white underline">
            {url}
          </p>
          <CopyToClipboard text={url} onCopy={() => setCopy(true)}>
            <button
              onClick={successToast}
              className={
                copy
                  ? "bg-[#2bb740] py-2 px-3 text-white rounded-lg"
                  : "bg-[#4545EC] py-2 px-3 text-white rounded-lg"
              }
            >
              Copy
            </button>
          </CopyToClipboard>
          <Toaster />
        </div>
      )}
    </>
  );
}

export default Linkgen;
