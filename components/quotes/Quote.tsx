import Page from "components/ui/Page";
import { Quote } from "types";

interface QuoteProps {
  quote: Quote;
}

const Quote = ({ quote }: QuoteProps) => {
  return (
    <div className="sm:flex items-center max-w-md mx-auto">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        <div className="rounded-full w-full h-32 aspect-w-1 aspect-h-1 sm:w-32 border border-gray-300 bg-white text-gray-300">
          <img
            className="object-cover w-full h-full object-center rounded-full "
            src={quote.character.image}
          />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">{quote.character.name}</h4>
        <p className="mt-1">{quote.quote}</p>
      </div>
    </div>
  );
};

export default Quote;
