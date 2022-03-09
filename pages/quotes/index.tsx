import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";

const QuotesPage = () => {
  const [quote, setQuote] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("/api/quotes")
      .then((response) => response.json())
      .then(setQuote)
      .catch(setError)
      .finally(() => setLoading(false));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  if (loading) {
    return <Loader variant="linear" />;
  } else if (error) {
    return error.message;
  }
  return (
    <Page title={"¡Random quotes!"}>
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <img
            className="h-32 w-full sm:w-32 border border-gray-300 bg-white text-gray-300"
            src={quote.character.image}
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{quote.character.name}</h4>
          <p className="mt-1">{quote.quote}</p>
        </div>
      </div>
    </Page>
  );
};

export default QuotesPage;
