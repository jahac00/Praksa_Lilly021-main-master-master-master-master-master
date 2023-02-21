import Button from "@mui/material/Button";
import styles from "../css/footer.module.css";

function ClearLocalStorageButton() {
    function handleClearLocalStorage() {
      localStorage.clear();
      window.location.reload(false);
      // add any additional code you want to run after clearing the localStorage
    }
  
    return (
      <div className={styles.clearLocalStorageButton}>
        <Button
          variant="contained"
          onClick={handleClearLocalStorage}
          className={styles.button}
        >
          Clear
        </Button>
      </div>
    );
  }

export default ClearLocalStorageButton;