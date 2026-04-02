import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Thunk API Example</h1>

      <button 
        onClick={() => dispatch(fetchUser())}
      >
        Fetch User
      </button>


      {data && (
        <div style={{ marginTop: "20px" }}>
          <h3>User Data:</h3>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>City:</strong> {data?.address?.city}</p>
        </div>
      )}
    </div>
  );
}

export default App;