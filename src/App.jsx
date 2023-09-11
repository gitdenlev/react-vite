import Select from "react-select";
import "./App.css";
import styles from "./App.module.css";

function App() {
  const select = [
    {
      value: "ukraine",
      label: "Ukraine",
    },
    {
      value: "usa",
      label: "USA",
    },
    {
      value: "uk",
      label: "United Kingdom",
    },
  ];

  return (
    <>
      <Select
      className={styles.select}
        options={select}
        placeholder="Choose country"
      />
      
    </>
  );
}

export default App;
