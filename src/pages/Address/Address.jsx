import { YMaps, Map, Placemark, SearchControl } from '@pbe/react-yandex-maps';
import React, { useState } from 'react';
import './Address.scss';
import { ReactComponent as Location } from './img/location.svg';
import { Link } from 'react-router-dom';

export const Address = () => {
  const [maps, setMaps] = useState(null);
  const [address, setAddress] = useState('');

  const getGeoLocation = (e) => {
    let coord = e.get('target').getCenter();

    let resp = maps.geocode(coord);
    resp.then((res) => {
      setAddress(res.geoObjects.get(0).getAddressLine());
    });
  };

  const onLoad = (map) => {
    setMaps(map);
  };
  return (
    <section className="address">
      <div className="container">
        <h1 className="title cart__title">Address Details</h1>
        <div className="address__card_wrapper">
          <div className="address__card_pointer">
            <Location />
          </div>
          <YMaps
            enterprise
            query={{
              apikey: 'a4f6e76c-9fe9-4c24-8614-c315a712463e',
            }}
          >
            <Map
              defaultState={{
                center: [55.72506467778052, 37.596457118908944],
                zoom: 16,
              }}
              width="100%"
              height="500px"
              onBoundsChange={(ymaps) => getGeoLocation(ymaps)}
              modules={['geolocation', 'geocode']}
              onLoad={(ymaps) => onLoad(ymaps)}
            >
              <SearchControl options={{ float: 'right' }} />
              <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
            <div className="address__info_wrapper">
              <div className="address__info">Your address: {address}</div>
              <Link
                className="product_card__button cart__checkout_button"
                to={'/'}
              >
                Finish
              </Link>
            </div>
          </YMaps>
        </div>
      </div>
    </section>
  );
};
