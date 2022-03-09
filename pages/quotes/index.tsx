import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import Quote from "components/quotes/Quote";

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
      <Quote quote={quote} />
    </Page>
  );
};

export default QuotesPage;
