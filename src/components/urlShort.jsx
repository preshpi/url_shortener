import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

function urlShort() {
  const [inputValue, setInputvalue] = useState("");
  const [url, setUrl] = useState("");
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const successToast = () => toast.success("Copied!");

  const fetchData = async (e) => {
    e.preventDefault();
    const url = "https://url-shortener-service.p.rapidapi.com/shorten";
    const data = new FormData();
    data.append("url", inputValue);

    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_URL_SHORTENR_API,
        "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
      },
      body: data,
    };

    try {
      if (inputValue.length === 0) {
        return;
      } else {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        setUrl(result?.result_url);
        setInputvalue("");
        toast.success("URL Shortened");
      }
    } catch (error) {
      setError(error);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid items-center place-center gap-5 w-full">
      <div className="grid items-center w-full justify-center">
        <p className="text-center text-x text-white italic mb-3">
          Shorten your URL in seconds...
        </p>
        <form
          onSubmit={(e) => fetchData(e)}
          className="flex items-center lg:flex-row flex-col w-full gap-4"
        >
          <input
            className="min-w-[300px] px-5 py-3 text-base outline-none"
            placeholder="Paste URL"
            value={inputValue}
            type="url"
            onChange={(e) => setInputvalue(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#5250bb] font-medium hover:opacity-85 w-full text-white lg:text-xl md:text-x text-sm px-5 py-3 button-color rounded-sm"
          >
            SHORTEN ME!
          </button>
        </form>
      </div>

      {loading ? (
        <div className="spinner w-[50%] mx-auto"></div>
      ) : (
        <>
          {url && (
            <div className="flex items-center justify-center space-x-6 mt-[20px]">
              <a
                href={url}
                target="_blank"
                className="py-2 px-6 text-white underline"
              >
                {url}
              </a>
              <CopyToClipboard text={url} onCopy={() => setCopy(true)}>
                <button
                  onClick={successToast}
                  disabled={loading}
                  className={
                    copy
                      ? "bg-[#2bb740] py-2 px-3 text-white rounded-lg"
                      : "bg-[#4545EC] py-2 px-3 text-white rounded-lg"
                  }
                >
                  Copy
                </button>
              </CopyToClipboard>
            </div>
          )}
        </>
      )}
      {error && <p className="text-red-500">{error.error}</p>}
    </div>
  );
}

export default urlShort;
