1.	How long did you spend on the coding assignment? 
    a.	What would you add to your solution if you had more time?

        i.	Improve accessibility. 
            1.	Implement type ahead feature for title option to enhance the user’s search.
            2.	Maintain two dropdowns one for the types of books and another for titles. 
            3.	Add filter for search like age, author, published date, price factor, popularity, rating etc. 
            4.	Register the users and save their search for future use. 
            5.	Implement a pagination component as the data is displayed in a table format.
            6.	Add a loader while fetching data from a service.
            7.  Add information texts for each element just to give the user some extra information about what that field is for.

        ii.	Improve code quality.
            1.	There can be components to isolate the functionality and maintain the readability of the code.
            2.	Instead of a single CSS file I would have created a dedicated CSS file for each component and used bootstrap classes for the look and feel.
            3.	Would have used redux library implementation if there was more data flow. 

            Redux:

            A store — an object that holds the app state data
            A reducer — a function that returns some state data, triggered by an action type
            An action — an object that tells the reducer how to change the state. It must contain a type property, and it can contain an optional payload property
            A Dispatcher -: Dispatch is a method provided by the Redux store to send actions to the reducers. It triggers the state update process by passing the action object to the reducers, which then produce a new state.

    b.	If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

React provides a built-in React.lazy() function and the Suspense component that enable lazy loading of components. Here's how you can implement lazy loading in React:

const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

MyLazyComponent is the component you want to lazily load. It uses the React.lazy() function, which takes a function that returns a dynamic import statement. The dynamic import loads the component asynchronously when it is needed.

    import { Suspense } from 'react';
    import MyLoadingComponent from './MyLoadingComponent';
    import MyAsyncComponent from './MyAsyncComponent';

    function MyComponent() {
    return (
        <div>
        <Suspense fallback={<MyLoadingComponent />}> // will be loaded after MyAsyncComponent is loaded
            <MyAsyncComponent />
        </Suspense>
        </div>
    );
    }

3.	How would you track down a performance issue in production? Have you ever had to do this?

    When the page takes more than a couple of seconds time to load then it is said to have performance issue. In my experience, I have seen this issue on pages, debbugged the issue from the UI and checked the logs to analyse any details pertaining to loading issue and most probably the fix was done from the back end like query tuning, making the service calls faster. The fix implemented from the UI standpoint is to reduce the amount of the data that is being displayed (eg: instead of displaying 50 rows of data display only 20 rows), use asynchronous calls, writing clean code in chucks called components for reducing redundancy and length of code on a single file, minify the JS files and maintaining the code in local server. 

    There are also other ways of improving the performance, resizing and
    compressing images, using Content Delivery networks, lazy loading and browser caching the frequently used files.

4.	How would you improve the API that you just used?

    Create another API for the list of books so that we can add a dropdown or typeahead feature to make UI more intuitive.  We can implement a dropdown if there are a countable number of titles or else, we can add type ahead. 

    In our scenario, to display the title, author, published date and covers, we have to fetch data from different APIs but in a real-world scenario, dataset is most probably stored at single place for easier access. 

    API’s must only have the information that is needed to be integrated or displayed on the UI, and the API response can be made preprocessed, for it to be integrated and rendered quickly (by avoiding more processing of the response on UI). 
	
5.	Please describe yourself using correctly formatted JSON.

JSON is JavaScript Object Notation, the most useful feature in the development.
We use JSON for defining objects in local, communicate with the services and API calls by sending the JSON object as input request and for receiving the response from the API calls in JSON made the processing easier. 
 

    {
        "name": "Keerthana Ayelligadala",
        "professional-title": "Front End Developer",
        "phone": "+1 529 562 4621",
        "email": "keerthana5.y@gmail.com",
        "address": {
            "street": "285 Cameron Avenue",
            "unit": "7",
            "city": "Windsor",
            "province": "Ontario",
            "country": "Canada"
        },
        "skills": [
            "ReactJS",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Jquery",
            "Bootstrap"
        ],
        "YearsOfExperience": "6+",
        "experience": [
    {
                "Role": "UI Developer",
                "Company": "Deloitte USI",
                "City": "Hyderabad",
                "Responsibility": "Created responsive web pages for a    semiconductor enterprise project"
            },
            {
                "Role": "Analyst",
                "Company": "Deloitte USI",
                "City": "Hyderabad",
                "Responsibility": "Development of the new screens and enhancements on the existing screens of an Enterprise Portals using Angular."
            }
        ],
        "education": {
            "Degree": "Bachelor's of Technology",
            "College": "Sri Sai Jyothi Engineering College"
        }
    }
        
