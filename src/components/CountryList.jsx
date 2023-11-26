import styles from "./CountryList.module.css";
import CountryItem from './CountryItem';
import Message from "./Message";
import Spinner from "./Spinner";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
    const countries=cities.reduce((arr,city)=>{
        if(!arr.includes(city))
            return [...arr,{country:city.country,emoji:city.emoji,id:city.id}];
        return arr;
    },[]);
  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </div>
  );
}

export default CountryList;
