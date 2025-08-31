// Ce composant est utilisé pour afficher l'en-tête de l'application.
import styles from './header.module.css';
import reactlogo from"../../assets/react.svg";
export const Header = () => {
  return (
     <div className={styles.container}>
        <div className={styles.titleContainer}>
            <img src={reactlogo} alt="logo" width={50} height={50} />
        </div>
        <div>
            <h1>Taskflow</h1>
            <div className="color-gray">
                <code>Eliminer le chaos, suiver le flux</code>
            </div>
        </div>
        <code className="color-primary">
            V.1.0
        </code>
    </div>
  );
};
