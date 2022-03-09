import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loader from "components/ui/Loader";
import Page from "components/ui/Page";
import Quote from "components/quotes/Quote";

const QuotePage = () => {
  const {
    query: { id },
  } = useRouter();
  const [quote, setQuote] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setError(undefined);
    setLoading(true);
    fetch(`/api/quotes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        return data;
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

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

export default QuotePage;
