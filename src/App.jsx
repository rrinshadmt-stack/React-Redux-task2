import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSlice";

function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.user);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Details</h1>

      <button 
        onClick={() => dispatch(fetchUser())}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Fetch User"}
      </button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

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