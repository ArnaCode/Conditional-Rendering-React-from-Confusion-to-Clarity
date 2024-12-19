// import Case1 from "./rendering-cases/Case1";
// import Case2 from "./rendering-cases/Case2";
// import Case3 from "./rendering-cases/Case3";
// import Case4 from "./rendering-cases/Case4";
// import Case5 from "./rendering-cases/Case5";
// import Case6 from "./rendering-cases/Case6";
// import Case7 from "./rendering-cases/Case7";
// import Case8 from "./rendering-cases/Case8";
// import Case9 from "./rendering-cases/Case9";
import Case10 from "./rendering-cases/Case10";

function App() {
  return (
    <>
      {/* Case 1: Basic Toggle Visibility 
      Scenario: 
      Show or hide a message when a button is clicked. */}
      {/* <Case1 /> */}

      {/* Case 2: Conditional Rendering Based on Authentication State 
      Scenario:
      Display a welcome message and logout button if the user is logged in, or
      show a login prompt if not. */}
      {/* <Case2 /> */}

      {/* Case 3: Rendering Lists Conditionally 
      Scenario: 
      Display a list of items if available, otherwise show a ‘No items’ message. */}
      {/* <Case3 /> */}

      {/* Case 4: Form Validation Feedback 
      Scenario: 
      Provide immediate feedback as the user types in an input field, indicating whether their input is
      valid. */}
      {/* <Case4 /> */}

      {/* Case 5: Conditional Rendering Based on Component Props 
      Scenario: 
      Create a reusable StatusBadge component that changes its look and text depending
      on a status prop. */}
      {/* <Case5 /> */}

      {/* Case 6: Conditional Rendering with Suspense and Fallbacks 
      Scenario:
      Suppose we are using React’s Suspense to lazy load a component. We’ll
      conditionally show a loading spinner while the component is being fetched.
      */}
      {/* <Case6 /> */}

      {/* Case 7: Conditional Rendering Based on Window Size (Custom Hook)
      Scenario: 
      Create a custom hook that determines the viewport size (mobile,
      tablet, or desktop) and conditionally renders different layouts.
      Additionally, display the current screen width and size category as a
      dynamic pill in the top-right corner of the UI. */}
      {/* <Case7 /> */}

      {/* Case 8: Conditional Rendering with Async Data Fetching (Loading,
      Error, Data States) 
      Scenario: 
      Fetch data from an API and conditionally render different UI states: loading, error, or data display. */}
      {/* <Case8 /> */}

      {/* Case 9: Conditional Rendering with CSS Transitions 
      Scenario: 
      Use conditional rendering along with CSS transitions or animations to smoothly
      show and hide UI elements. */}
      {/* <Case9 /> */}

      {/* Case 10: Compound Components and Conditional Rendering 
      Scenario: 
      In this Case, we implement a modal component where users can dynamically
      decide which sections (header, body, or footer) to display. By interacting
      with checkboxes on the main interface, users can control the content
      structure of the modal. This feature is particularly useful for
      applications requiring flexible UI customization, such as dashboards,
      settings dialogs, or user-guided wizards. */}
      <Case10 />
    </>
  );
}

export default App;
