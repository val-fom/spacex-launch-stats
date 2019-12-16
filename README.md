_Following the course [GraphQL With React & Apollo](https://www.youtube.com/playlist?list=PLillGF-RfqbZrjw48EXLdM4dsOhURCLZx)_

# spacex-launch-stats
App for learning GraphQL with React and Apollo

### To run locally

```yarn```

```yarn dev```

GraphQL - `localhost:5000/graphql`

Client - `localhost:3000`

### Live playground

* https://vals-spacex-launch-stats.herokuapp.com/graphql

### Query examples:
* [launches](https://vals-spacex-launch-stats.herokuapp.com/graphql?query=%7B%0A%20%20launches%20%7B%0A%20%20%20%20flight_number%0A%20%20%20%20mission_name%0A%20%20%20%20launch_year%0A%20%20%20%20launch_date_local%0A%20%20%20%20launch_success%0A%20%20%20%20rocket%20%7B%0A%20%20%20%20%20%20rocket_id%0A%20%20%20%20%20%20rocket_name%0A%20%20%20%20%20%20rocket_type%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
* [launch(flight_number: 1)](https://vals-spacex-launch-stats.herokuapp.com/graphql?query=%7B%0A%20%20launch(flight_number%3A%201)%20%7B%0A%20%20%20%20flight_number%0A%20%20%20%20mission_name%0A%20%20%20%20launch_year%0A%20%20%20%20launch_date_local%0A%20%20%20%20launch_success%0A%20%20%7D%0A%7D%0A)
