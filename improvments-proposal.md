Questions:

1. Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

* Answer: If the data came from an API, we need to add an `useEffect` hook to populate the response data in our app state and as it could be time consuming process, we had to hookup a loader which will be displayed while the request is being processed for getting the response data. Also the data size we are fetching from api is very large, we can integrate a global storage something like redux-store to hold the data and avoid prop-drilling.


Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

* Answer: If you don't provide stable keys (by using nanoid for our case), all the sub-trees are going to be re-rendered every single time and will drastically affect the optimization of the react application.