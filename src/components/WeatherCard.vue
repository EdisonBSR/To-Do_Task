<template>
    <div id="Container">
        <b-form-select v-model="selectedCity" :options="options" v-on:change="send">
        </b-form-select>
        <div v-show="flag">
            <div v-if="!isLoader" id="Container-Card">
                <b-card class="mb-2">
                    <p id="city">Clima {{ this.city }}</p>
                    <b-card-text>
                        <div id="Container-Card-Weather">
                            <p>Pronostico: {{
                                this.weatherDescription }} </p> <img
                                :src="`https://openweathermap.org/img/wn/${this.icon}@2x.png`" alt="iamegnejjeje">

                        </div>
                        <p class="infoP">Temperatura: <span>{{ this.temp }} °C </span></p>
                        <p class="infoP">Humedad: <span>{{ this.humidity }}%</span></p>
                        <p class="infoP">Presion: <span>{{ this.pressure }} hPa</span></p>
                        <p class="infoP">Velocidad del viento: <span>{{ this.windSpeed }} m/s</span></p>
                        <p class="infoP">Latitud: <span>{{ this.cordenadasCiudad[0] }}</span>
                        </p>
                        <p class="infoP">Longitud: <span>{{
                            this.cordenadasCiudad[1] }}</span></p>
                    </b-card-text>
                </b-card>
                <div id="Container-imgCity" v-if="this.selectedCity != null">
                    <img :src="require(`@/assets/${this.selectedCity}.png`)" alt="iamegnejjeje" id="imgCity">
                </div>
            </div>
            <div v-else>
                <b-card>
                    <b-skeleton width="100%"></b-skeleton>
                </b-card>
            </div>

        </div>
        <!--<img :src="`../assets/${this.selectedCity}.jpg`" alt="iamegnejjeje">-->
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "WeatherCard",
    data() {
        return {
            cordenadasCiudad: [],
            temp: "",
            humidity: "",
            windSpeed: "",
            pressure: "",
            icon: "",
            weatherDescription: "",
            isLoader: false,
            flag: false,
            city: "",
            selectedCity: null,
            options: [
                { value: null, text: 'Seleccione la ciudad a consultar' },
                { value: 'Bogota', text: 'Bogota' },
                { value: 'Cali', text: 'Cali' },
                { value: 'Villavicencio', text: 'Villavicencio' },
                { value: 'Popayan', text: 'Popayan' },
                { value: 'Medellin', text: 'Medellin' },
                { value: 'Cartagena', text: 'Cartagena' },
                { value: 'Barranquilla', text: 'Barranquilla' },
            ],
        }
    },

    methods: {

        send() {
            this.flag = true
            //console.log(`${this.selectedCity}`)
            //console.log(`${this.icon}`)
            this.city = this.selectedCity
            this.cordenadasCiudad = []
            //console.log(`../assets/${this.selectedCity}.jpg`)
            if (this.city != null) {
                const urlApi = `http://api.openweathermap.org/geo/1.0/direct?q=${this.selectedCity}&limit=5&appid=9c061d3cb3b0a1b99cb93d6614ee93af`;
                ``
                //console.log(urlApi)
                axios.get(urlApi).then((res1) => {
                    this.isLoader = false;
                    this.cordenadasCiudad.push(res1["data"][0]["lat"])
                    this.cordenadasCiudad.push(res1["data"][0]["lon"])
                    //console.log(!res1.ok)
                    if (!res1.ok) {
                        const urlApi2 = `https://api.openweathermap.org/data/2.5/weather?lat=${this.cordenadasCiudad[0]}&lon=${this.cordenadasCiudad[1]}&appid=9c061d3cb3b0a1b99cb93d6614ee93af&units=metric&lang=es`
                        // console.log(urlApi2)
                        axios.get(urlApi2).then((response) => {
                            // console.log("api 2")
                            //console.log(response["data"]["main"])
                            const dataMain = response["data"]["main"]
                            const dataWeather = response["data"]["weather"][0]
                            //console.log(dataMain["temp"])
                            this.temp = parseFloat(dataMain["temp"])
                            this.humidity = dataMain["humidity"]
                            this.windSpeed = response["data"]["wind"]["speed"]
                            //console.log(response["data"]["wind"]["speed"])
                            this.pressure = dataMain["pressure"]
                            this.icon = dataWeather["icon"]
                            this.weatherDescription = dataWeather["description"]
                        }).catch((error) => { console.error(error) })
                    }
                }).catch((error) => { console.error(error) });
                this.isLoader = true//Revisar queda cargando 
            } else { this.flag = false }
        },
    },
}
</script>
<style scoped>
#Container {
    max-width: 700px;
    min-width: 300px;
    margin: 10px;
    margin: 0 auto;
}

.mb-2 {
    border: 5px solid #bfd4dc;
    border-radius: 10px
}

#Container-imgCity {
    margin: 0 auto;
    align-content: center;
}

#imgCity {
    width: 250px;
    height: 250px;
    margin-left: 15px;
}

#Container-Card {
    min-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 30px;
}

#Container-Card-Weather {
    display: flex;
    flex-direction: column;
}

#Container-Card-Weather img {
    max-width: 150px;
    margin: 0 auto;
}

#Container-Card-Weather p {
    color: rgb(142, 139, 139);
    font-size: 1.2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: oblique;
    text-align: center;
}

#city {
    font-size: 2rem;
    text-align: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: black;
    font-style: oblique;

}

.infoP {
    color: rgb(61, 60, 60);
    font-size: 1.5rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

.infoP span {
    color: rgb(66, 188, 240);
}

#formulario {
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 0 auto;
    max-width: 250px;
    margin-bottom: 10px;
}

#btnSend {
    margin: 0;
    margin-left: 10px;
    text-align: center;
}
</style>