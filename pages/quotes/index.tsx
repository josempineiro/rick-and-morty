import { useEffect, useState } from "react";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import Quote from "components/quotes/Quote";
import { RefreshIcon } from "@heroicons/react/outline";
import Button from "components/ui/Button";

const QuotesPage = () => {
  const [state, setState] = useState(0);
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
  }, [state]);

  if (loading) {
    return <Loader variant="linear" />;
  } else if (error) {
    return error.message;
  }
  return (
    <Page title={"¡Random quotes!"}>
      <Quote quote={quote} />
      <div className="flex justify-center mt-8">
        <Button
          variant="clear"
          size="huge"
          icon={<RefreshIcon />}
          onClick={() => setState(Math.random())}
        />
      </div>
    </Page>
  );
};

export default QuotesPage;
