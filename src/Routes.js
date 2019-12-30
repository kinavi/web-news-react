import App from './App'
//import 

const routes = [
    {
      ...App,
      routes: [
        {
          path: "/",
          exact: true,
          component: Home
        },
        {
          path: "/child/:id",
          component: Child,
          routes: [
            {
              path: "/child/:id/grand-child",
              component: GrandChild
            }
          ]
        }
      ]
    }
];