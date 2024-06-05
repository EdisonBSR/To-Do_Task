<template id="body">
    <div id="app">
        <!--<HelloWorld />-->
        <!--<p id="title"> 🌞El clima ahora 🌞</p>-->
        <b-jumbotron id="jumbotron" header="🌞El clima ahora 🌞" lead="Consume dos Api's de open weather, la primera es One Call API 3.0 que permite conocer datos meteorologicos de gran variedad de ciudades del mundo y  la segunda para determinar por medio de coordenadas latitud y longitud la ciudad a la que se hace referencia mediante  Geocoding API.
      Para asi determinar el clima">
            <p>Conoce mas sobre las apis en <a href="https://openweathermap.org/api/one-call-3" target="_blank">
                    Open Weather</a>
            </p>
        </b-jumbotron>
        <div id="Cards">
            <WeatherCard />
        </div>

    </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue'

export default {
    name: 'WeatherView',
    components: {
        WeatherCard
    }
}
</script>

<style>
#jumbotron {
    text-align: center;
    margin: 10px;
}



#Cards {
    display: flex;
    flex-direction: row;
    background-color: rgb(255, 255, 255);
}
</style>
