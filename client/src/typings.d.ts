/* eslint-disable camelcase */
interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_date_local: string;
  launch_success: boolean;
  rocket: Rocket;
}

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
