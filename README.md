# spacex-launch-stats
App for learning GraphQL with React and Apollo

```yarn```

```yarn server```

then go to `localhost:5000` and play with GraphQL playground

query examples: 
* [launches](http://localhost:5000/graphql?query=%7B%0A%20%20launches%20%7B%0A%20%20%20%20flight_number%0A%20%20%20%20mission_name%0A%20%20%20%20launch_year%0A%20%20%20%20launch_date_local%0A%20%20%20%20launch_success%0A%20%20%20%20rocket%20%7B%0A%20%20%20%20%20%20rocket_id%0A%20%20%20%20%20%20rocket_name%0A%20%20%20%20%20%20rocket_type%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)
* [launch(flight_number: 1)](http://localhost:5000/graphql?query=%7B%0A%20%20launch(flight_number%3A%201)%20%7B%0A%20%20%20%20flight_number%0A%20%20%20%20mission_name%0A%20%20%20%20launch_year%0A%20%20%20%20launch_date_local%0A%20%20%20%20launch_success%0A%20%20%7D%0A%7D%0A)
