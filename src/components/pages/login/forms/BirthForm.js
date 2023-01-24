import { Box } from "@mui/system";
import languages from "../../../data/languages.json"


function BirthForm() {
    require('bootstrap/dist/css/bootstrap.min.css');

    const formStyle = {
        display: "flex",
        flexDirection: "column",
    };
    const dateStyle = {
        display: "flex",
        gap: "10px"
    }

    function days() {
        let days = [];
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }
        return days;
    }
    function years() {
        let years = [];
        for (let i = 2023; i > 1897; i--) {
            years.push(i);
        }
        return years;
    }
    const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ];



    return (

        <Box>
            <Box style={formStyle}>
                <label> PAESE/REGIONE
                    <select className="form-select form-select-lg mb-3">
                        <option selected>Italia</option>
                        {languages.map(item => <option value={item.value}>{item.country}</option>)}
                    </select>
                </label>
                <label>DATA DI NASCITA
                    <form style={dateStyle}>
                        <select className="form-select form-select-lg mb-3" >
                            <option selected>Giorno</option>
                            {days().map(item => <option value={item}>{item}</option>)}
                        </select>
                        <select className="form-select form-select-lg mb-3" >
                            <option selected>Mese</option>
                            {monthNames.map(item => <option value={item}>{item}</option>)}
                        </select>
                        <select className="form-select form-select-lg mb-3" >
                            <option selected>Anno</option>
                            {years().map(item => <option value={item}>{item}</option>)}
                        </select>
                    </form>
                </label>
            </Box>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" disabled>AVANTI</button>
            </div>
        </Box>

    );
}

export default BirthForm;
