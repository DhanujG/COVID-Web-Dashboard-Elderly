function show_results() {

    switch(this.state.value) {
        case "CALIFORNIA":
            document.getElementById("results-links").innerHTML +=
            "<a href='https://covid19.ca.gov/'>State of California COVID-19 Portal</a><br><br>" +
            "<a href='https://www.mayoclinic.org/coronavirus-covid-19/map/california'>California COVID-19 Heat Map</a><br><br>" +
            "<a href='https://myturn.ca.gov/'>State of California COVID-19 Vaccine Scheduling</a><br><br>" +
            "<a href='http://www.publichealth.lacounty.gov/media/Coronavirus/'>Los Angeles COVID-19 Updates</a>";
            break;

        case "MICHIGAN":
            document.getElementById("results-links").innerHTML +=
            "<a href='https://www.michigan.gov/Coronavirus'>Coronavirus in Michigan</a><br><br>" +
            "<a href='https://www.michigan.gov/coronavirus/0,9753,7-406-98163_98173---,00.html'>COVID-19 Cases by Michigan County</a><br><br>" +
            "<a href='https://www.michigan.gov/coronavirus/0,9753,7-406-98178_103214_104822---,00.html'>Michigan Vaccination Locations</a><br><br>" +
            "<a href='https://detroitmi.gov/departments/detroit-health-department/programs-and-services/communicable-disease/coronavirus-covid-19'>" +
            "COVID-19 in Detroit</a><br><br>";
            break;

        case "NEW YORK":
            document.getElementById("results-links").innerHTML +=
            "<a href='https://coronavirus.health.ny.gov/home'>Novel Coronavirus – New York Department of Health</a><br><br>" +
            "<a href='https://www.mayoclinic.org/coronavirus-covid-19/map/new-york'>State of New York Coronavirus Heat Map</a><br><br>" +
            "<a href='https://www1.nyc.gov/site/doh/covid/covid-19-data.page'>NYC COVID-19 Data</a><br><br>" +
            "<a href='https://vaccinefinder.nyc.gov/'>New York City COVID-19 Vaccine Finder</a>";
            break;

        case "OHIO":
            document.getElementById("results-links").innerHTML +=
            "<a href='https://coronavirus.ohio.gov/wps/portal/gov/covid-19/home'>State of Ohio COVID-19 Portal</a><br><br>" +
            "<a href='https://safeandhealthy.osu.edu/dashboard'>The Ohio State University COVID-19 Daily Case Tracker</a><br><br>" +
            "<a href='https://coronavirus.ohio.gov/wps/portal/gov/covid-19/dashboards/key-metrics/cases-by-zipcode'>Ohio COVID-19 Cases by Zip Code</a><br><br>" +
            "<a href='https://coronavirus.ohio.gov/wps/portal/gov/covid-19/dashboards/covid-19-vaccine/covid-19-vaccine-provider-dashboard'>Ohio Vaccine Provider Locations</a><br><br>" +
            "<a href='https://my.clevelandclinic.org/landing/preparing-for-coronavirus'>City of Cleveland COVID-19 Clinic</a>";
            break;

        case "PENNSYLVANIA":
            document.getElementById("results-links").innerHTML +=
            "<a href='https://www.health.pa.gov/topics/disease/coronavirus/Pages/Coronavirus.aspx'>PA Department of Health COVID-19 Page</a><br><br>" +
            "<a href='https://www.upmc.com/coronavirus'>University of Pittsburgh Medical Center COVID-19 Information & Resources</a><br><br>" +
            "<a href='https://www.phillymag.com/news/covid-19-vaccines-philadelphia-guide/'>Philadelphia Vaccination Sites</a><br><br>" +
            "<a href='https://www.mayoclinic.org/coronavirus-covid-19/map/pennsylvania'>COVID-19 Tracking by PA County</a><br><br>";
            break;
    }
}

let app = new Vue({
    el: '#app',
    data: {
        state: "",
        age: "",
        covidData: {},
        haveState: false
    },
    methods: {
        handleChange(e) {
            this.state = e.target.value;
        },
        handleImmuneChange(e) {
            this.immune_status = e.target.value;
        },
        getData() {
            var callstring = 'https://disease.sh/v3/covid-19/states/' + this.state + '?yesterday=true';
            this.haveState = false;
            axios.get(callstring).then(response => {
                this.covidData = response.data;
                this.haveState = true;
                this.$nextTick(function(){
                    show_results();
                    console.log(this.covidData)
                })
               
                
            }).catch(error => {
                console.log(error);
            });
        }
    }
})