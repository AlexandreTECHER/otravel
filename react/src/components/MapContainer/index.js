import React, { useEffect, useState } from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';
import './style.css';
import ReactLeafletSearch from "react-leaflet-search";
import L from 'leaflet';
import NavBar from '../../containers/navBarFake';
import AddPlaceButton from '../../containers/AddPlaceButtonContainer';
import { isEmpty } from 'lodash';
import userLocationURL from './pinBlue.svg';
import newLocation from './pin.svg';
import PopupNavBar from '../popupNavBar/popupNavBar';
import IconForShower from './shower.png';
import IconToilet from './wc.svg';
import IconKite from './kite.png';
import IconVan from './van.png';
import IconLaundry from './laundry1.png';
import IconFarm from './farm.png';

const myIcon = L.icon({
  iconUrl: newLocation,
  iconUrl: userLocationURL,
  iconSize: [33, 35],
});

const newPointIcon = L.icon({
  iconSize: [33, 35],
  iconUrl: newLocation,
  marginTop: '90px',
});

const showerIcon = L.icon({
  iconUrl: IconForShower,
  iconSize: [40, 42],
});

const toiletIcon = L.icon({
  iconUrl: IconToilet,
  iconSize: [40, 42],
  
});

const vanIcon = L.icon({
  iconUrl: IconVan,
  iconSize: [40, 42],
});

const kiteIcon = L.icon({
  iconUrl: IconKite,
  iconSize: [40, 42],
});

const laundryIcon = L.icon({
  iconUrl: IconLaundry,
  iconSize: [40, 42],
});

const marketFarmIcon = L.icon({
  iconUrl: IconFarm,
  iconSize: [40, 42],
  
});

const MapContainer = ({
  viewport,
  userLocation,
  lat,
  long,
  isLocated,
  fetchPlaces,
  list,
  listShower,
  listToilet,
  newList,
  isFilterShower,
  isFilterToilet,
  listSpotKite,
  isFilterSpotKite,
  listSpotVan,
  isFilterSpotVan,
  listLaundry,
  isFilterLaundry,
  listMarketFarm,
  isFilterMarketFarm,
  setViewport,
  isLogged,
  addLocationPlace, 
  idClickPlace } ) => {



  const [activePlace, setActivePlace] = useState(null);
  const [latMarker, setlatMarker] = useState(0);
  const [lngMarker, setlngMarker] = useState(0);
  const [markerClick, setMarkerClick] = useState(false);
  const [activePopupMarkerClick, setActivePopupMarkerClick] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  const showPosition = (position) => {
    setViewport({center:[position.coords.latitude, position.coords.longitude], zoom: 12})
    userLocation(position.coords)
  }

  const onClickMap = (event) => {
    setMarkerClick(true);
    setlatMarker(event.latlng.lat),
    setlngMarker(event.latlng.lng)
  }

  const activeMarkerPopup = (event) => {
    setActivePopupMarkerClick(event.latlng)
    addLocationPlace(event.latlng)
  }
  
  const clickMarkerID = (event) => {
    idClickPlace(event)

  }

//const urlImg = `https://apiotravel.ovh/${activePlace.places_picture.name}`;
  useEffect(() => {
     getLocation()

  },[]);

  useEffect(fetchPlaces,[]);

  return (
    <div>
      <NavBar />
      <div className="map" id="mapid">
        <Map viewport={viewport} minZoom="3" onClick={onClickMap} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <ReactLeafletSearch
            position="topright"
            inputPlaceholder="The default text in the search bar"
            search={[]} // Setting this to [lat, lng] gives initial search input to the component and map flies to that coordinates, its like search from props not from user
            zoom={12} // Default value is 10
            showMarker={true}
            showPopup={false}
            openSearchOnLoad={true} // By default there's a search icon which opens the input when clicked. Setting this to true opens the search by default.
            closeResultsOnClick={false} // By default, the search results remain when you click on one, and the map flies to the location of the result. But you might want to save space on your map by closing the results when one is clicked. The results are shown again (without another search) when focus is returned to the search input.
            providerOptions={{searchBounds: []}} // The BingMap and OpenStreetMap providers both accept bounding coordinates in [se,nw] format. Note that in the case of OpenStreetMap, this only weights the results and doesn't exclude things out of bounds.
            customProvider={undefined | {search: (searchString)=> {}}} // see examples to usage details until docs are ready
            providerOptions={{ region: "fr" }}
          />
           
          {
            markerClick &&(
            <Marker
              position={[latMarker, lngMarker]}
              icon={myIcon}
              onClick={activeMarkerPopup}
            >
            </Marker>)
          }
          {isLocated &&(
            <Marker
              position={[lat, long]}
              icon={newPointIcon}
            >
            </Marker>)
          }
          {
            isFilterShower && listShower.map((shower) => (
              <Marker
                icon={showerIcon}
                key={shower.id}
                position={[
                  shower.lat,
                  shower.lng,
                ]}
                onClick={() => {
                  setActivePlace(shower),
                  setViewport({center:[shower.lat, shower.lng]}),
                  clickMarkerID(shower.id)
                }}
              />
            ))
          }
          {
            isFilterToilet && listToilet.map((toilet) => (
              <Marker
                icon={toiletIcon}
                key={toilet.id}
                position={[
                  toilet.lat,
                  toilet.lng,
                ]}
                onClick={() => {
                  setActivePlace(toilet),
                  setViewport({center:[toilet.lat, toilet.lng]}),
                  clickMarkerID(toilet.id)
                }}
              />
            ))
          }
          {
            isFilterSpotKite && listSpotKite.map((spotKite) => (
              <Marker
                icon={kiteIcon}
                key={spotKite.id}
                position={[
                  spotKite.lat,
                  spotKite.lng,
                ]}
                onClick={() => {
                  setActivePlace(spotKite),
                  setViewport({center:[spotKite.lat, spotKite.lng]}),
                  clickMarkerID(spotKite.id)
                }}
              />
            ))
          }
          {
            isFilterSpotVan && listSpotVan.map((spotVan) => (
              <Marker
                icon={vanIcon}
                key={spotVan.id}
                position={[
                  spotVan.lat,
                  spotVan.lng,
                ]}
                onClick={() => {
                  setActivePlace(spotVan),
                  setViewport({center:[spotVan.lat, spotVan.lng]}),
                  clickMarkerID(spotVan.id)
                }}
              />
            ))
          }
          {
            isFilterLaundry && listLaundry.map((Laundry) => (
              <Marker
                icon={laundryIcon}
                key={Laundry.id}
                position={[
                  Laundry.lat,
                  Laundry.lng,
                ]}
                onClick={() => {
                  setActivePlace(Laundry),
                  setViewport({center:[Laundry.lat, Laundry.lng]}),
                  clickMarkerID(Laundry.id)
                }}
              />
            ))
          }
          {
            isFilterMarketFarm && listMarketFarm.map((MarketFarm) => (
              <Marker
                icon={marketFarmIcon}
                key={MarketFarm.id}
                position={[
                  MarketFarm.lat,
                  MarketFarm.lng,
                ]}
                onClick={() => {
                  setActivePlace(MarketFarm),
                  setViewport({center:[MarketFarm.lat, MarketFarm.lng]}),
                  clickMarkerID(MarketFarm.id)
                }}
              />
            ))
          }
           {/*!isFilterShower && !isFilterToilet && list.map((place) => (
          //   <Marker
          //     key={place.id}
          //     position={[
          //       place.lat,
          //       place.lng,
          //     ]}
          //     onClick={() => {
          //       setActivePlace(place);
          //       setViewport({center:[place.lat, place.lng]}),
          //       clickMarkerID(place.id)
          //     }}
          //   />
          // ))
          */}
          {activePlace && (
          <Popup
            className="popup"
            style={{width:'50%'}}
            position={[
              activePlace.lat,
              activePlace.lng,
            ]}
            onClose={() => {
              setActivePlace(null);
            }}
          >
            <div>
              <h2>Nom : {activePlace.name}</h2>
              <div style={{ textAlign:'center'}}>
                {isEmpty(activePlace.places_picture) ? "" : <img style={{ maxWidth:'100%', maxHeight: '10.625rem' }} src={`https://apiotravel.ovh/${activePlace.places_picture.name}`} />}
              </div>
              <div>
                <p>Adresse : {activePlace.street}</p>
                <p>{activePlace.city} {activePlace.zipcode}</p>
                <p>Description: {activePlace.description}</p>
                <p>Ajouté par : {activePlace.user.username}</p>
              </div>
              <div>
                <PopupNavBar placeInfos={list.find((test) => activePlace.id == test.id )} isLogged={isLogged} />
              </div>
            </div>
          </Popup>
          )}
          {activePopupMarkerClick && (
            <Popup
              position={[
                activePopupMarkerClick.lat,
                activePopupMarkerClick.lng,
              ]}
              onClose={() => {
                setActivePopupMarkerClick(null);
              }}
            >
              <div>
              <AddPlaceButton isLogged={isLogged}/>
              </div>
            </Popup>
            )}

        </Map>
      </div>
    </div>
  );
  
};

export default MapContainer;