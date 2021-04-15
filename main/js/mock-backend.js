function show_results() {
    document.getElementById("results").innerHTML +=
        "<a href='https://www.michigan.gov/Coronavirus'>Coronavirus in Michigan</a><br><br>" +
        "<a href='https://www.michigan.gov/coronavirus/0,9753,7-406-98163_98173---,00.html'>COVID-19 Cases by Michigan County</a><br><br>" +
        "<a href='https://www.michigan.gov/coronavirus/0,9753,7-406-98178_103214_104822---,00.html'>Michigan Vaccination Locations</a><br><br>" +
        "<a href='https://detroitmi.gov/departments/detroit-health-department/programs-and-services/communicable-disease/coronavirus-covid-19'>" +
        "COVID-19 in Detroit</a><br><br>" +
        "<a href='https://www.cdc.gov/aging/covid19-guidance.html'>COVID-19 Guidance for Older Adults</a>";
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