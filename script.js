import axios from "axios";
import {} from 'luxon'

axios.get('https://random-data-api.com/api/v2/users')
.then(response => console.log(response.data))