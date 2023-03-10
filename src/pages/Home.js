import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material'; 
import styles from "../css/home.module.css" 

function Home() {
  const { items } = useSelector((state) => state.FavoritesSlices);

  return (
    <div>
      <Typography variant="h4" className={styles.heading}>My Favorites</Typography>
      {items.length > 0 ? (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={item.idDrink} className={styles.item}>
              <Typography variant="h5" className={styles.cocktailName}>{item.strDrink}</Typography>
              <NavLink to={`/cocktail/${item.idDrink}`}>
                <img
                  src={item.strDrinkThumb}
                  alt={item.strDrink}
                  className={styles.image}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        fontSize: "3rem",
        color: "white",
      }}
    >
      No Favorites Added Yet!
    </div>
      )}
    </div>
  );
}

export default Home;