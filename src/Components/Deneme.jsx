import AuthButtons from "../AuthButtons";
import AuthenticatedRequestToBackend from "../AuthenticatedRequestToBackend";
import AuthInfoOnFrontend from "../AuthInfoOnFrontend";

function Deneme() {
  return (
    <div className="App">
      <AuthButtons />
      <AuthInfoOnFrontend />
      <AuthenticatedRequestToBackend />
    </div>
  );
}

export default Deneme;
