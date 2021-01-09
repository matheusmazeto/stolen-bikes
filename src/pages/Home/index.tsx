import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';

import useDebouncedValue from '../../hooks/useDebounceValue';

import Form from '../../components/Form';

type StolenBikesInfo = {
  title: string;
  description: string;
  occurred_at: Date;
  address: Date;
  media: {
    image_url_thumb: string;
  };
};

const Home = () => {
  const [query, setQuery] = useState('');
  const [dataFetched, setDataFetched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const debouncedQuery = useDebouncedValue(query, 400);
  const API_URL = `https://bikewise.org:443/api/v2/incidents?&proximity=Berlin&query=${debouncedQuery}`;

  const fetchData = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setIsLoading(false);
      setDataFetched(data?.incidents);
    } catch (error) {
      setIsError(true);
    }
  }, [API_URL]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
    setQuery('');
  };

  useEffect(() => {
    if (!debouncedQuery) return;
    fetchData();
  }, [debouncedQuery, fetchData]);

  console.log(dataFetched);

  return (
    <div>
      Home
      <Form
        value={query}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {isLoading && <>loading ...</>}
      {dataFetched.map((item: StolenBikesInfo) => {
        const { address, description, media, occurred_at, title } = item;
        console.log(media.image_url_thumb);
        return (
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={media?.image_url_thumb} alt={title} />
            <p>{occurred_at}</p>
            <p>{address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
