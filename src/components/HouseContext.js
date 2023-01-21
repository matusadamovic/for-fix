import React, { createContext, useState, useEffect } from 'react';
import { db } from '../pages/firebaseConfig';
import 'firebase/compat/firestore';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [country, setCountry] = useState('Lokalita (všetky)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Typ nehnutelnosti (všetky)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Cena od - do (všetky)');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const housesRef = db.collection('products');

    housesRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setHouses((prevHouses) => [...prevHouses, doc.data()]);
        });
    });
  }, []);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueCountries = ['Lokalita (všetky)', ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {

    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['Typ nehnutelnosti (všetky)', ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);
    const isDefault = (str) => {
      return str.split(' ').includes('(všetky)');
    };

    const minPrice = parseInt(price.split(' ')[0]);

    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = houses.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });
    
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
